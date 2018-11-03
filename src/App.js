import React, { Component } from 'react';

import ChartComponent from './chart-component'

class ControlsComponent extends React.Component {
  render () {
    const { toggleDataSlice } = this.props;

    return (
      <div style={{ flex: 1, backgroundColor: '#fcc' }}>
        controls component
        <div>
          <button onClick={() => toggleDataSlice('a')}>data slice A</button>
        </div>
        <div>
          <button onClick={() => toggleDataSlice('b')}>data slice B</button>
        </div>
      </div>
    )
  }
}

class App extends Component {
  state = { visibleDataKey: 'b' }

  toggleDataSlice = (name) => {
    this.setState({ visibleDataKey: name })
  }

  data = (key) => {
    console.log('key', key)
    return {
      a: [{ name: 'Andrew', year: 2018 }],
      b: [{ name: 'Andrew', year: 2018 }, { name: 'Lorraine', year: 2019 }, { name: 'Bob', year: 2020 }]
    }[key]
  }

  render() {
    const { visibleDataKey } = this.state

    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ChartComponent data={this.data(visibleDataKey)} />
        <ControlsComponent toggleDataSlice={this.toggleDataSlice} />
      </div>
    );
  }
}

export default App;
