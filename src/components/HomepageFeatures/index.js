import React, { Component } from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import { ApiPromise, HttpProvider } from '@polkadot/api';

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <p>{title}</p>
        <h2>{description}</h2>
      </div>
    </div>
  );
}


class Features extends Component {
  constructor() {
    super();
    this.state = { blockHeight: "NaN", timer: 0 };
  }

  async componentDidMount() {
    const rpcProvider = new HttpProvider('https://rpc.kyattsu.network');
    const api = await ApiPromise.create({ provider: rpcProvider });
    let blockHeight = await (await api.rpc.system.syncState()).currentBlock.toNumber()
    this.setState({ timer: window.setInterval(() => {
      this.setState({ blockHeight: this.state.blockHeight + 1 })
    }, 1000 * 12) })
    this.setState({ blockHeight: blockHeight })
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer)
  }

  render() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <Feature title={"Total Blocks"} description={this.state.blockHeight} />
            <Feature title={"Token"} description={"NYA"} />
            <Feature title={"Block Time"} description={"12 Sec"} />
          </div>
        </div>
      </section>
    );
  }
}

export default Features
