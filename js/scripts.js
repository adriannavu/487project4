console.log('scripts loaded');

var burger = document.getElementById('burger');
var navMobileContainer = document.getElementById('navMobileContainer');
var closeBtn = document.getElementById('close-button');
var essentialsContainer = document.getElementById('essentialsContainer');

//Mobile nav
burger.addEventListener('click', function() {
  console.log('burger clicked');
  navMobileContainer.style.width = '100%';
  navMobileContainer.style.height = '100%';
  navMobileContainer.style.transition = '0.5s ease';
  essentialsContainer.style.opacity = '0.3';
});

closeBtn.addEventListener('click', function() {
  console.log('closeBtn clicked');
  navMobileContainer.style.width = '0%';
  navMobileContainer.style.transition = '0.5s ease';
  essentialsContainer.style.opacity = '1';
});