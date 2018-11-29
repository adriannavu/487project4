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

//Select all elements that contain activeNavMobile or activeNavDesktop classes and remove these classes from selected elements
function remAllActiveNav() {
  $('.activeNavMobile').removeClass('activeNavMobile');
  $('.activeNavDesktop').removeClass('activeNavDesktop');
}

function addActiveNavMobile(elem) {
  elem.classList.add('activeNavMobile');
}

function addActiveNavDesktop(elem) {
  elem.classList.add('activeNavDesktop');
}

function activeNav() {
  //if Essentials menu option is clicked, remove activeNavMobile from all other menu options and add it to Essentials
  essenNavM.addEventListener('click', function() {
    console.log('essenNavM clicked');
    remAllActiveNav();
    addActiveNavMobile(this);
    closeNavMobileContainer();
  });

  //if Population Growth menu option is clicked, remove activeNavMobile from all other menu options and add it to Population Growth
  popGrowthNavM.addEventListener('click', function() {
    console.log('popGrowthNavM clicked');
    remAllActiveNav();
    addActiveNavMobile(this);
    closeNavMobileContainer();
  });

  //if Urbanization menu option is clicked, remove activeNavMobile from all other menu options and add it to Urbanization
  urbanNavM.addEventListener('click', function() {
    console.log('urbanNavM clicked');
    remAllActiveNav();
    addActiveNavMobile(this);
    closeNavMobileContainer();
  });

  //if Consumption menu option is clicked, remove activeNavMobile from all other menu options and add it to consumption
  consumNavM.addEventListener('click', function() {
    console.log('consumNavM clicked');
    $('.activeNavMobile').removeClass('activeNavMobile');
    addActiveNavMobile(this);
    closeNavMobileContainer();
  });

  //if Solutions menu option is clicked, remove activeNavMobile from all other menu options and add it to Soltions
  solnsNavM.addEventListener('click', function() {
    console.log('solnsNavM clicked');
    remAllActiveNav();
    addActiveNavMobile(this);
    closeNavMobileContainer();
  });

  //same as lines 80-117, but for desktop instead of mobile
  essenNavD.addEventListener('click', function() {
    console.log('essenNavD clicked');
    remAllActiveNav();
    addActiveNavDesktop(this);
  });

  popGrowthNavD.addEventListener('click', function() {
    console.log('popGrowthNavD clicked');
    remAllActiveNav();
    addActiveNavDesktop(this);
  });

  urbanNavD.addEventListener('click', function() {
    console.log('urbanNavD clicked');
    remAllActiveNav();
    addActiveNavDesktop(this);
  });

  consumNavD.addEventListener('click', function() {
    console.log('consumNavD clicked');
    remAllActiveNav();
    addActiveNavDesktop(this);
  });

  solnsNavD.addEventListener('click', function() {
    console.log('solnsNavD clicked');
    remAllActiveNav();
    addActiveNavDesktop(this);
  });
}
activeNav();

//if element becomes visible in browser as user scrolls up or down, change activeNavMobile/activeNavDesktop to that element
var scroll = function() {
  if ($('#essen').visible(true)) {
    console.log("#essen is visible");
    remAllActiveNav();
    addActiveNavMobile(essenNavM);
    addActiveNavDesktop(essenNavD);

  } else if ($('#popGrowth').visible(true)) {
    console.log("#popGrowth is visible");
    remAllActiveNav();
    addActiveNavMobile(popGrowthNavM);
    addActiveNavDesktop(popGrowthNavD);

  } else if ($('#urban').visible(true)) {
    console.log("#urban is visible");
    remAllActiveNav();
    addActiveNavMobile(urbanNavM);
    addActiveNavDesktop(urbanNavD);

  } else if ($('#consum').visible(true)) {
    console.log("#consum is visible");
    remAllActiveNav();
    addActiveNavMobile(consumNavM);
    addActiveNavDesktop(consumNavD);

  } else if ($('#solns').visible(true)) {
    console.log("#solns is visible");
    remAllActiveNav();
    addActiveNavMobile(solnsNavM);
    addActiveNavDesktop(solnsNavD);

  }
};
setInterval(scroll, 500);

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
  url: './js/worldPop.json',
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

//AQI map
var aqiKey = config.aqiKey;
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';
var osmLayer = L.tileLayer(osmURL, {
  attribution: osmAttrib
});

var waqiURL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=" + aqiKey;
var waqiAttr = 'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';
var waqiLayer = L.tileLayer(waqiURL, {
  attribution: waqiAttr
});

var map = L.map('map').setView([39.9042, 116.4074], 7);
map.addLayer(osmLayer).addLayer(waqiLayer);