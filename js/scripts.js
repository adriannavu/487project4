console.log('scripts loaded');

//nav burger
var burger = document.getElementById('burger');
var navMobileContainer = document.getElementById('navMobileContainer');
var closeBtn = document.getElementById('close-button');
var container = document.getElementById('container');

//Mobile nav
burger.addEventListener('click', function() {
  console.log('burger clicked');
  navMobileContainer.style.width = '100%';
  navMobileContainer.style.height = '55%';
  navMobileContainer.style.transition = '0.5s ease';
  container.style.opacity = '0.3';
});

closeBtn.addEventListener('click', function() {
  console.log('closeBtn clicked');
  navMobileContainer.style.width = '0%';
  navMobileContainer.style.transition = '0.5s ease';
  container.style.opacity = '1';
});

//document.getElementsByClassName returns an array of elements, so you must target a specific index of them
//mobile
var essenNavM = document.getElementsByClassName('essenNav')[0];
var popGrowthNavM = document.getElementsByClassName('popGrowthNav')[0];
var urbanNavM = document.getElementsByClassName('urbanNav')[0];
var consumNavM = document.getElementsByClassName('consumNav')[0];
var solnsNavM = document.getElementsByClassName('solnsNav')[0];
//desktop
var essenNavD = document.getElementsByClassName('essenNav')[1];
var popGrowthNavD = document.getElementsByClassName('popGrowthNav')[1];
var urbanNavD = document.getElementsByClassName('urbanNav')[1];
var consumNavD = document.getElementsByClassName('consumNav')[1];
var solnsNavD = document.getElementsByClassName('solnsNav')[1];

function remActiveNavMobile() {
  if (essenNavM.classList.contains('activeNavMobile')) {
    essenNavM.classList.remove('activeNavMobile');
  } else if (popGrowthNavM.classList.contains('activeNavMobile')) {
    popGrowthNavM.classList.remove('activeNavMobile');
  } else if (urbanNavM.classList.contains('activeNavMobile')) {
    urbanNavM.classList.remove('activeNavMobile');
  } else if (consumNavM.classList.contains('activeNavMobile')) {
    consumNavM.classList.remove('activeNavMobile');
  } else if (solnsNavM.classList.contains('activeNavMobile')) {
    solnsNavM.classList.remove('activeNavMobile');
  }
} //close remActiveNavMobile

function remActiveNavDesktop() {
  if (essenNavD.classList.contains('activeNavDesktop')) {
    essenNavD.classList.remove('activeNavDesktop');
  } else if (popGrowthNavD.classList.contains('activeNavDesktop')) {
    popGrowthNavD.classList.remove('activeNavDesktop');
  } else if (urbanNavD.classList.contains('activeNavDesktop')) {
    urbanNavD.classList.remove('activeNavDesktop');
  } else if (consumNavD.classList.contains('activeNavDesktop')) {
    consumNavD.classList.remove('activeNavDesktop');
  } else if (solnsNavD.classList.contains('activeNavDesktop')) {
    solnsNavD.classList.remove('activeNavDesktop');
  }
} //close remActiveNavDesktop

function closeNavMobileContainer() {
  container.style.opacity = '1';
  navMobileContainer.style.width = '0%';
  navMobileContainer.style.transition = '0.5s ease';
} //close closeNavMobileContainer

essenNavM.addEventListener('click', function() {
  console.log('essenNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

popGrowthNavM.addEventListener('click', function() {
  console.log('popGrowthNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

urbanNavM.addEventListener('click', function() {
  console.log('urbanNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

consumNavM.addEventListener('click', function() {
  console.log('consumNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

solnsNavM.addEventListener('click', function() {
  console.log('solnsNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

essenNavD.addEventListener('click', function() {
  console.log('essenNavD clicked');
  remActiveNavDesktop();
  essenNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

popGrowthNavD.addEventListener('click', function() {
  console.log('popGrowthNavD clicked');
  remActiveNavDesktop();
  popGrowthNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

urbanNavD.addEventListener('click', function() {
  console.log('urbanNavD clicked');
  remActiveNavDesktop();
  urbanNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

consumNavD.addEventListener('click', function() {
  console.log('consumNavD clicked');
  remActiveNavDesktop();
  consumNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

solnsNavD.addEventListener('click', function() {
  console.log('solnsNavD clicked');
  remActiveNavDesktop();
  solnsNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

//line graph
var data = [];
var xAxis = [];
var worldpop = [];

function buildLineGraph() {
  var myChart = Highcharts.chart('lineGraph', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'World Population History'
    },
    subtitle: {
      text: "Sources: The data for the period before 1900 are taken from the <a href='https://themasites.pbl.nl/tridion/en/themasites/hyde/basicdrivingfactors/population/index-2.html'>History Database of the Global Environment (HYDE)</a>. The annual data for the World Population between 1950 and 2015 is taken from the <a href='https://population.un.org/wpp/Download/Standard/Population/'>UN's World Population Prospects: The 2017 Revision</a>."
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      title: {
        text: 'Human Population'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Population (in millions)',
      data: worldpop
    }]
  });
} //close buildLineGraph

$.ajax({
  type: 'GET',
  dataType: 'json',
  data: data,
  url: '../js/worldPop.json',
  async: true,
  success: function(data) {
    console.log('data');
    for (i = 0; i < data.length; i++) {
      xAxis.push(data[i].Year);
      worldpop.push(data[i].Population);
    }
    buildLineGraph();
  } //end of success
}); //end of ajax call