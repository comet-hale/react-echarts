import React, { Component } from 'react';
import range from 'lodash/range';
import ReactEcharts from 'echarts-for-react';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLegends: [(props.data[0] || {}).name],
    }
  }
  updateDataByAddtionalPrice() {
    const { data, priceGivenOnSlider, countOfYears } = this.props;
    const updatedData = data.map(item => {
      const additionalPrice = (priceGivenOnSlider - item.carbonPriceToday) / countOfYears;
      const { CO2perTon, currentPrice } = item;
      item['prices'] = range(0, countOfYears).map(idx => additionalPrice * idx * CO2perTon + currentPrice);
      return item;
    });
    return updatedData;
  }

  getEchartDefaultOption() {
    return {
      animation: true,
      tooltip: {
        trigger: 'item',
        position: 'top',
        axisPointer: {
          type: 'shadow',
        },
        opacity: 0.9,
        backgroundColor: '#ddd',
        textStyle: {
          color: '#000',
        },
        confine: true,
      },
      grid: {
        left: 200,
        right: 60,
        bottom: 50,
        top: 10,
        containLabel: false,
        show: true,
        borderWidth: 0,
      },
      xAxis: [],
      yAxis: [],
      series: [],
    };
  }

  getChartOption = () => {
    const { startYear, backgroundColor } = this.props;
    const { selectedLegends } = this.state;
    const defaultOptions = this.getEchartDefaultOption();
    const updatedData = this.updateDataByAddtionalPrice();
    const legendState = {};
    updatedData.forEach(({ name }) => legendState[name] = selectedLegends.includes(name));
    const xAxisData = range(startYear, startYear + this.props.countOfYears - 1);
    xAxisData.unshift('Today');
    const options = {
      grid: {
        ...defaultOptions.grid,
        borderWidth: 2,
        backgroundColor,
      },
      legend: {
        show: true,
        orient: 'vertical',
        left: 0,
        data: updatedData.map(({ name }) => ({
          name,
          icon: 'circle',
        })),
        selected: legendState
      },
      tooltip: {
        ...defaultOptions.tooltip,
        trigger: 'item',
        formatter: (data) => {
          const { name, value, seriesName } = data;
          const firstLine = `${seriesName} would cost<br/>`;
          const secondLine = `<b>${value.toFixed(2)} kr</b> in ${name}`;
          return firstLine + secondLine;
        },
      },
      xAxis: [{
        type: 'category',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: xAxisData,
      }],
      yAxis: [{
        name: 'Price',
        nameLocation: 'middle',
        nameGap: 35,
        type: 'value',
        axisLabel: {
          formatter: value => (
            value < 1000 ? value : `${value / 1000}k`
          ),
        }
      }],
      series: updatedData.map(({ name, prices }) => ({
        name,
        type: 'line',
        data: prices,
      })),
    };

    return options;
  }

  render() {
    const { height, width } = this.props;
    return (
      <ReactEcharts
        style={{ height, width }}
        option={this.getChartOption()}
        notMerge
        lazyUpdate
      />
    );
  }
}

export default Chart;