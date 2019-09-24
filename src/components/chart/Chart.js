import React, { Component } from 'react';
import {createChart, CrosshairMode, LineStyle} from "lightweight-charts";
import {getData, lastPrice} from "../../actions/ChartDataActions";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import componentStyle from "./Chart.style";
import { Box, Paper } from '@material-ui/core';
import { pauseTrade, closeTrade, startTrade } from '../../actions/FormActions';

class Chart extends Component {
    chart;
    candlestickSeries;
    entryLine;
    stopLine;
    targetLine;
    lastIndex = 0;

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
        // if we are starting a new chart, clear down the old data
        if (this.candlestickSeries) {
            this.chart.removeSeries(this.candlestickSeries);
            this.lastIndex = 0;
        }

        this.candlestickSeries = this.chart.addCandlestickSeries();
        this.candlestickSeries.setData(data);
        this.updateChartDimensions();
    }

    playChart(data) {
        let i = this.lastIndex || 0;
        const id = setInterval(() => {
            if (this.props.isRunning && data[i]) {
                this.candlestickSeries.update(data[i]);
                this.props.lastPrice(data[i].close);
                this.checkTradeConditions(data[i]);
                i++;
            } else if (this.props.isRunning && !data[i]) {
                // get more data
                this.lastIndex = 0;
                this.props.pauseTrade();
                this.props.startTrade();
                clearInterval(id);
            } else {
                clearInterval(id);
                this.lastIndex = i;
            }
        },500);
    }

    checkTradeConditions(candleData) {
        if (!this.tradeEntered && candleData.low <= this.props.entry) {
            this.enterTrade(this.props.entry);
        } else if (this.tradeEntered && candleData.low <= this.props.stop) {
            this.closeTrade(this.props.entry, this.props.stop);
        } else if (this.tradeEntered && candleData.high >= this.props.target) {
            this.closeTrade(this.props.entry, this.props.target);
        }
    }

    enterTrade(price) {
        this.tradeEntered = true;
    }

    closeTrade(entry, price) {
        this.props.closeTrade(entry, price);
        this.tradeEntered = false;
        
    }

    updateChartDimensions() {
        let width = document.getElementById('ChartTarget').offsetWidth;
        this.chart.resize(500, width);
        
    }

    addEntryLine(price) {
        if (!this.entryLine) {
            this.entryLine = this.chart.addLineSeries({
                priceLineWidth: 1,
                priceLineStyle: LineStyle.Solid,
                title: 'Entry'
            });
        }

        this.entryLine.setData([
            { time: this.props.data[0].time, value: price },
            { time: this.props.data[this.props.data.length - 1].time, value: price }
        ]);
    }

    addStopLine(price) {
        if (!this.stopLine) {
            this.stopLine = this.chart.addLineSeries({
                priceLineColor: '#FF0000',
                priceLineWidth: 1,
                priceLineStyle: LineStyle.Solid,
                title: 'Stop'
            })
        }

        this.stopLine.setData([
            { time: this.props.data[0].time, value: price },
            { time: this.props.data[this.props.data.length - 1].time, value: price }
        ]);
    }

    addTargetLine(price) {
        if (!this.targetLine) {
            this.targetLine = this.chart.addLineSeries({
                priceLineColor: '#00FF00',
                priceLineWidth: 1,
                priceLineStyle: LineStyle.Solid,
                title: 'Target'
            })
        }

        this.targetLine.setData([
            { time: this.props.data[0].time, value: price },
            { time: this.props.data[this.props.data.length - 1].time, value: price }
        ]);
    }

    componentDidMount() {
        this.initChart();
        this.props.getData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.addChartData(this.props.data);
        }
        if (prevProps.playData !== this.props.playData) {
            this.playChart(this.props.playData);
        }
        if (prevProps.entry !== this.props.entry) {
            this.addEntryLine(this.props.entry);
        }
        if (prevProps.stop !== this.props.stop) {
            this.addStopLine(this.props.stop);
        }
        if (prevProps.target !== this.props.target) {
            this.addTargetLine(this.props.target);
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
    data: state.chartData.data,
    playData: state.tradeData.data,
    isRunning: state.tradeData.isRunning,
    entry: state.tradeData.entry,
    stop: state.tradeData.stop,
    target: state.tradeData.target
});
const mapDispatchToProps = dispatch => ({
    getData: (symbol, ins, endDate, aggregate) => dispatch(getData(symbol, ins, endDate, aggregate)),
    pauseTrade: () => dispatch(pauseTrade()),
    startTrade: () => dispatch(startTrade()),
    closeTrade: (entry, price) => dispatch(closeTrade(entry, price)),
    lastPrice: (price) => dispatch(lastPrice(price))
});

export default withStyles(componentStyle)(connect(mapStateToProps, mapDispatchToProps)(Chart));
