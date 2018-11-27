console.log('scripts loaded');

var burger = document.getElementById('burger');
var navMobileContainer = document.getElementById('navMobileContainer');
var closeBtn = document.getElementById('close-button');
var container = document.getElementById('container');

//Open mobile nav when user clicks on burger
burger.addEventListener('click', function() {
  console.log('burger clicked');
  navMobileContainer.style.width = '75%';
  navMobileContainer.style.height = '45em';
  navMobileContainer.style.transition = '0.5s ease';
  container.style.opacity = '0.3';
});
//Close mobile nav when user clicks on 'x' button
closeBtn.addEventListener('click', function() {
  console.log('closeBtn clicked');
  navMobileContainer.style.width = '0%';
  navMobileContainer.style.transition = '0.5s ease';
  container.style.opacity = '1';
});

function closeNavMobileContainer() {
  container.style.opacity = '1';
  navMobileContainer.style.width = '0%';
  navMobileContainer.style.transition = '0.5s ease';
}

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

//remove activeNavMobile class from element (this nav menu is no longer the active one on mobile)
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

//remove activeNavDesktop class from element (this nav menu is no longer the active one on desktop)
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

//if Essentials menu option is clicked, remove activeNavMobile from all other menu options and add it to Essentials
essenNavM.addEventListener('click', function() {
  console.log('essenNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

//if Population Growth menu option is clicked, remove activeNavMobile from all other menu options and add it to Population Growth
popGrowthNavM.addEventListener('click', function() {
  console.log('popGrowthNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

//if Urbanization menu option is clicked, remove activeNavMobile from all other menu options and add it to Urbanization
urbanNavM.addEventListener('click', function() {
  console.log('urbanNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

//if Consumption menu option is clicked, remove activeNavMobile from all other menu options and add it to consumption
consumNavM.addEventListener('click', function() {
  console.log('consumNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

//if Solutions menu option is clicked, remove activeNavMobile from all other menu options and add it to Soltions
solnsNavM.addEventListener('click', function() {
  console.log('solnsNavM clicked');
  remActiveNavMobile();
  this.classList.add('activeNavMobile');
  closeNavMobileContainer();
});

//same as lines 80-117, but for desktop instead of mobile
essenNavD.addEventListener('click', function() {
  console.log('essenNavD clicked');
  remActiveNavDesktop();
  essenNavD.classList.add('activeNavDesktop');
});

popGrowthNavD.addEventListener('click', function() {
  console.log('popGrowthNavD clicked');
  remActiveNavDesktop();
  popGrowthNavD.classList.add('activeNavDesktop');
});

urbanNavD.addEventListener('click', function() {
  console.log('urbanNavD clicked');
  remActiveNavDesktop();
  urbanNavD.classList.add('activeNavDesktop');
});

consumNavD.addEventListener('click', function() {
  console.log('consumNavD clicked');
  remActiveNavDesktop();
  consumNavD.classList.add('activeNavDesktop');
});

solnsNavD.addEventListener('click', function() {
  console.log('solnsNavD clicked');
  remActiveNavDesktop();
  solnsNavD.classList.add('activeNavDesktop');
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