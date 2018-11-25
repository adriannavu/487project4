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
  navMobileContainer.style.height = '70%';
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
var essentialsNavM = document.getElementsByClassName('essentialsNav')[0];
var popGrowthNavM = document.getElementsByClassName('popGrowthNav')[0];
var urbanizationNavM = document.getElementsByClassName('urbanizationNav')[0];
var consumptionNavM = document.getElementsByClassName('consumptionNav')[0];
var solutionsNavM = document.getElementsByClassName('solutionsNav')[0];
//desktop
var essentialsNavD = document.getElementsByClassName('essentialsNav')[1];
var popGrowthNavD = document.getElementsByClassName('popGrowthNav')[1];
var urbanizationNavD = document.getElementsByClassName('urbanizationNav')[1];
var consumptionNavD = document.getElementsByClassName('consumptionNav')[1];
var solutionsNavD = document.getElementsByClassName('solutionsNav')[1];

function remActiveNavMobile() {
  if (essentialsNavM.classList.contains('activeNavMobile')) {
    essentialsNavM.classList.remove('activeNavMobile');
  } else if (popGrowthNavM.classList.contains('activeNavMobile')) {
    popGrowthNavM.classList.remove('activeNavMobile');
  } else if (urbanizationNavM.classList.contains('activeNavMobile')) {
    urbanizationNavM.classList.remove('activeNavMobile');
  } else if (consumptionNavM.classList.contains('activeNavMobile')) {
    consumptionNavM.classList.remove('activeNavMobile');
  } else if (solutionsNavM.classList.contains('activeNavMobile')) {
    solutionsNavM.classList.remove('activeNavMobile');
  }
} //close remActiveNavMobile

function remActiveNavDesktop() {
  if (essentialsNavD.classList.contains('activeNavDesktop')) {
    essentialsNavD.classList.remove('activeNavDesktop');
  } else if (popGrowthNavD.classList.contains('activeNavDesktop')) {
    popGrowthNavD.classList.remove('activeNavDesktop');
  } else if (urbanizationNavD.classList.contains('activeNavDesktop')) {
    urbanizationNavD.classList.remove('activeNavDesktop');
  } else if (consumptionNavD.classList.contains('activeNavDesktop')) {
    consumptionNavD.classList.remove('activeNavDesktop');
  } else if (solutionsNavD.classList.contains('activeNavDesktop')) {
    solutionsNavD.classList.remove('activeNavDesktop');
  }
} //close remActiveNavDesktop

essentialsNavM.addEventListener('click', function() {
  console.log('essentialsNavM clicked');
  remActiveNavMobile();
  essentialsNavM.classList.add('activeNavMobile');
  container.style.opacity = '1';
});

popGrowthNavM.addEventListener('click', function() {
  console.log('popGrowthNavM clicked');
  remActiveNavMobile();
  popGrowthNavM.classList.add('activeNavMobile');
  container.style.opacity = '1';
});

urbanizationNavM.addEventListener('click', function() {
  console.log('urbanizationNavM clicked');
  remActiveNavMobile();
  urbanizationNavM.classList.add('activeNavMobile');
  container.style.opacity = '1';
});

consumptionNavM.addEventListener('click', function() {
  console.log('consumptionNavM clicked');
  remActiveNavMobile();
  consumptionNavM.classList.add('activeNavMobile');
  container.style.opacity = '1';
});

solutionsNavM.addEventListener('click', function() {
  console.log('solutionsNavM clicked');
  remActiveNavMobile();
  solutionsNavM.classList.add('activeNavMobile');
  container.style.opacity = '1';
});

essentialsNavD.addEventListener('click', function() {
  console.log('essentialsNavD clicked');
  remActiveNavDesktop();
  essentialsNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

popGrowthNavD.addEventListener('click', function() {
  console.log('popGrowthNavD clicked');
  remActiveNavDesktop();
  popGrowthNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

urbanizationNavD.addEventListener('click', function() {
  console.log('urbanizationNavD clicked');
  remActiveNavDesktop();
  urbanizationNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

consumptionNavD.addEventListener('click', function() {
  console.log('consumptionNavD clicked');
  remActiveNavDesktop();
  consumptionNavD.classList.add('activeNavDesktop');
  container.style.opacity = '1';
});

solutionsNavD.addEventListener('click', function() {
  console.log('solutionsNavD clicked');
  remActiveNavDesktop();
  solutionsNavD.classList.add('activeNavDesktop');
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