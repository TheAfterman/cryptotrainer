import React, { Component } from 'react';
import {createChart} from "lightweight-charts";
import {getData} from "../actions/ChartDataActions";
import { connect } from 'react-redux';

class TestComponent extends Component {
    chart;

    initChart() {
        this.chart = createChart('ChartTarget', {
            width: 500,
            height: 500,
            localization: {
                locale: 'en-US',
            }
        });

        this.chart.subscribeClick((event) => {
            const priceLine = this.chart.addLineSeries()
            priceLine.setData([
                { time: this.props.data[0].time, value: this.props.data[0].open },
                { time: this.props.data[this.props.data.length - 1].time, value: this.props.data[0].open}
            ]);
        });
    }

    addChartData(data) {
        const candlestickSeries = this.chart.addCandlestickSeries();
        candlestickSeries.setData(data);


    }

    componentDidMount() {
        this.initChart();
        this.props.getData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.addChartData(this.props.data);
        }
    }

    render() {
        return (
            <div id="ChartTarget">

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.chartData.data
});
const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
