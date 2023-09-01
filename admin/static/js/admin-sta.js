
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

window.addEventListener('resize', drawCharts);

function drawCharts() {
  drawAreaChart();
  drawBarChart();
  drawDonutChart();
  drawSecondDonutChart();
}

function drawAreaChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', '1일차 콘서트', '2일차 콘서트', '3일차 콘서트'],
    ['09.01', 1000, 400, 800],
    ['09.02', 1170, 460, 760],
    ['09.03', 660, 1120, 1324],
    ['09.04', 1030, 540, 1524]
  ]);

  var options = {
    title: '매출 추이',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('areaChart'));

  chart.draw(data, options);
}

function drawBarChart() {
  var data = google.visualization.arrayToDataTable([
    ['일자별 콘서트', '예매율'],
    ['1일차', 10],
    ['2일차', 11],
    ['3일차', 66]
  ]);

  var options = {
    title: '',
    bars: 'vertical',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.BarChart(document.getElementById('barChart'));

  chart.draw(data, options);
}

function drawDonutChart() {
  var data = google.visualization.arrayToDataTable([
    ['성별', '티켓 예매 수'],
    ['남성', 10],
    ['여성', 8]
]);

  var options = {
    title: '성비별',
    pieHole: 1,
    legend: 'none',
    chartArea: { 
      width: '80%',  // 차트 영역의 너비 조정
      height: '80%'  // 차트 영역의 높이 조정
    }
  };

  
  var chart = new google.visualization.PieChart(document.getElementById('donutChart'));

  chart.draw(data, options);

  
}


function drawSecondDonutChart() {
    var data = google.visualization.arrayToDataTable([
      ['연령대별', 'Count'],
      ['10대', 110],
      ['20대', 250],
      ['30대', 80],
      ['40대 이상', 60]
    ]);
  
    var options = {
      title: '연령대별',
      pieHole: 0.4,
      legend: 'none',
      chartArea: { width: '80%', height: '80%'}
      
    };

    
  
    var chart = new google.visualization.PieChart(document.getElementById('secondDonutChart'));
  
    chart.draw(data, options);
    
  }

