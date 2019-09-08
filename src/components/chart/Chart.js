import React, { Component } from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";
import {getData} from "../../actions/ChartDataActions";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import componentStyle from "./Chart.style";
import { Box, Paper } from '@material-ui/core';

class Chart extends Component {
    chart;

    initChart() {
        this.chart = createChart('ChartTarget', {
            width: document.getElementById('ChartTarget').offsetWidth - 200,
            height: 500,
            localization: {
                locale: 'en-US',
            },
            crosshair: {
                mode: CrosshairMode.Normal
            }
        });

        this.chart.subscribeClick((event) => {
            const priceLine = this.chart.addLineSeries()
            priceLine.setData([
                { time: this.props.data[0].time, value: this.props.data[0].open },
                { time: this.props.data[this.props.data.length - 1].time, value: this.props.data[0].open}
            ]);
        });

        window.addEventListener("resize", this.updateChartDimensions.bind(this));
    }

    addChartData(data) {
        const candlestickSeries = this.chart.addCandlestickSeries();
        candlestickSeries.setData(data);
        this.updateChartDimensions();
    }

    updateChartDimensions() {
        let width = document.getElementById('ChartTarget').offsetWidth;
        this.chart.resize(500, width);
        
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

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateChartDimensions);
    }

    render() {

        return (
            <Box flex={this.props.flex} >
                <Paper id="ChartTarget" className={this.props.classes.chartContainer} >

                </Paper>
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    data: state.chartData.data
});
const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData())
});

export default withStyles(componentStyle)(connect(mapStateToProps, mapDispatchToProps)(Chart));
