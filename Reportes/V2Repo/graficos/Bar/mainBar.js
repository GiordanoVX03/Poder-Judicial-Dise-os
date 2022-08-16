const grapBar = {
    container: document.getElementById('myChart'),
    autoSize: true,
    data: getDataBar(),
    theme: {
      overrides: {
        bar: {
          series: {
            strokeWidth: 0,
          },
        },
      },
    },
    title: {
      text: 'Gross Weekly Earnings by Occupation (Q4 2019)',
      fontSize: 18,
    },
    subtitle: {
      text: 'Source: Office for National Statistics',
    },
    series: [
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'earnings',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'left',
      },
      {
        type: 'number',
        position: 'bottom',
        title: {
          enabled: true,
          text: '£/week',
        },
      },
    ],
    legend: {
      enabled: false,
    },
  };
  
  var chart = agCharts.AgChart.create(grapBar);