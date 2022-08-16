const grapCircular = {
    container: document.getElementById('graficoCircular'),
    autoSize: true,
    title: {
      text: 'Grafico Circular',
      fontSize: 18,
    },
    subtitle: {
      text: 'Grafico Circular',
    },
    series: [
      {
        data: getDataCircular(),
        type: 'pie',
        labelKey: 'religion',
        angleKey: 'population',
        label: {
          minAngle: 0,
        },
        callout: {
          strokeWidth: 2,
        },
        fills: [
          '#febe76',
          '#ff7979',
          '#badc58',
          '#f9ca23',
          '#f0932b',
          '#eb4c4b',
          '#6ab04c',
          '#7ed6df',
        ],
        strokes: [
          '#b28553',
          '#b35555',
          '#829a3e',
          '#ae8d19',
          '#a8671e',
          '#a43535',
          '#4a7b35',
          '#58969c',
        ],
      },
    ],
    legend: {
      enabled: false,
    },
  };
  
  var chart = agCharts.AgChart.create(grapCircular);