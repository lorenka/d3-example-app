import React from 'react'
import * as d3 from 'd3'

class ChartComponent extends React.Component {
  componentDidMount () {
    const { data } = this.props
    this.svg = d3.select(this._component)
    this.update(data)
  }

  shouldComponentUpdate (nextProps) {
    const { data } = nextProps
    this.update(data)
    // this is the key piece, stops react from controlling the chart
    return false
  }

  update (data) {
    // using https://bl.ocks.org/mbostock/3808218 as reference
    // DATA JOIN
    // Join new data with old elements, if any.
    var bars = this.svg.selectAll('rect')
      .data(data);

    // ENTER
    // Create new elements as needed.
    //
    // ENTER + UPDATE
    // After merging the entered elements with the update selection,
    // apply operations to both.
    bars.enter().append("rect")
        .attr('x', function (d, index) { return (index * 32)} )
        .attr('y', 50)
        .attr('width', 30)
        .attr('height', 50)
      .merge(bars)
        .text(function(d) { return d; });
  
    // EXIT
    // Remove old elements as needed.
    bars.exit().remove();
  }

  render () {
    const { data } = this.props

    console.log('visibleData', data)
    return (
      <div style={{ flex: 1, backgroundColor: '#ffc' }}>
        chart component
        <svg style={{ width: 200, height: 200, border: '1px solid #000' }} ref={c => this._component = c} />
        <div>
          should show data slice with length {data.length}
        </div>
      </div>
    )
  }
}

export default ChartComponent
