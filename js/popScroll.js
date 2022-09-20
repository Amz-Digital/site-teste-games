function mostrarPopUp(){
  var botao = document.getElementById('botaoPop');
  botao.click();
}
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
function encaminharSite()
{
  // window.close();
   window.location.replace('/decline_popup.html');
  
}
function encaminharSiteEn()
{
  // window.close();
   window.location.replace('/en/decline_popup.html');
  
}
