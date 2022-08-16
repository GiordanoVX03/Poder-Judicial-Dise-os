const grapHisto = {
    container: document.getElementById('graficoHistograma'),
    autoSize: true,
    data: getDataHisto(),
    title: {
      text: 'Vehicle fuel efficiency by engine size (USA 1987)',
      fontSize: 18,
    },
    subtitle: {
      text: 'Source: UCI',
    },
    series: [
      {
        type: 'histogram',
        xKey: 'engine-size',
        xName: 'Engine Size',
        yKey: 'highway-mpg',
        yName: 'Highway MPG',
        fill: '#41874b',
        stroke: '#41874b',
        fillOpacity: 0.5,
        aggregation: 'mean',
      },
      {
        type: 'scatter',
        xKey: 'engine-size',
        xName: 'Engine Size',
        yKey: 'highway-mpg',
        yName: 'Highway MPG',
      },
    ],
    axes: [
      {
        position: 'bottom',
        type: 'number',
        title: {
          enabled: true,
          text: 'Engine Size (Cubic inches)',
        },
      },
      {
        position: 'left',
        type: 'number',
        title: {
          text: 'Highway MPG',
        },
      },
    ],
    legend: {
      enabled: false,
    },
  };
  
  var chart = agCharts.AgChart.create(grapHisto);