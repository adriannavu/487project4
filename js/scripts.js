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
  if ($('#essenContainer').visible(true)) {
    console.log("#essenContainer is visible");
    remAllActiveNav();
    addActiveNavMobile(essenNavM);
    addActiveNavDesktop(essenNavD);

  } else if ($('#popGrowthContainer').visible(true)) {
    console.log("#popGrowthContainer is visible");
    remAllActiveNav();
    addActiveNavMobile(popGrowthNavM);
    addActiveNavDesktop(popGrowthNavD);

  } else if ($('#urbanContainer').visible(true)) {
    console.log("#urbanContainer is visible");
    remAllActiveNav();
    addActiveNavMobile(urbanNavM);
    addActiveNavDesktop(urbanNavD);

  } else if ($('#consumContainer').visible(true)) {
    console.log("#consumContainer is visible");
    remAllActiveNav();
    addActiveNavMobile(consumNavM);
    addActiveNavDesktop(consumNavD);

  } else if ($('#solnsContainer').visible(true)) {
    console.log("#solnsContainer is visible");
    remAllActiveNav();
    addActiveNavMobile(solnsNavM);
    addActiveNavDesktop(solnsNavD);

  }
};
setInterval(scroll, 500);

//YouTube
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'rmfzwwrCrrU',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.pauseVideo();
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(showModal, 6000);
    // done = true;
  }
}

function showModal() {
  $('#modal').fadeToggle();
  $('body').css('background', 'black');
}

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

//initialize Slick slider$
$(".single-item").slick({
  dots: true,
  draggable: true
});

//NASA Earth Polychromatic Imaging Camera (EPIC)
var nasaKey = configNasa.nasaKey;
var req = new XMLHttpRequest();
var nasaURL = "https://api.nasa.gov/EPIC/api/natural/date/2018-11-24?api_key=";
var img_url = "https://epic.gsfc.nasa.gov/archive/natural/2018/11/24/png/";
var img_type = ".png";

//get photos
req.open("GET", nasaURL + nasaKey);
req.send();

//prase request into JSON
req.addEventListener("load", function() {
  if (req.status == 200 && req.readyState == 4) {
    var response = JSON.parse(req.responseText);
    console.log(response[0].image);
    //insert array of objects into html
    document.getElementById("slide1").src = img_url + response[4].image + img_type;
    document.getElementById("slide2").src = img_url + response[7].image + img_type;
    document.getElementById("slide3").src = img_url + response[10].image + img_type;
  }
})

/* slideshow module */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  //check slideIndex to see if it needs to reset back to first photo
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1000); // Change photo every second
}

//AQI map
var aqiKey = configAqi.aqiKey;
var osmURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy;  <a  href="https://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';
var osmLayer = L.tileLayer(osmURL, {
  attribution: osmAttrib
});

var waqiURL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=" + aqiKey;
var waqiAttr = 'Air  Quality  Tiles  &copy;  <a  href="https://waqi.info">waqi.info</a>';
var waqiLayer = L.tileLayer(waqiURL, {
  attribution: waqiAttr
});

var map = L.map('map').setView([39.9042, 116.4074], 7);
map.addLayer(osmLayer).addLayer(waqiLayer);