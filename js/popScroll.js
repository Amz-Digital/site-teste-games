function mostrarPopUp()
{
  mostrarPop = true;
  mostrarPop = localStorage.getItem("mostrarPop");
  mostrarCookie = localStorage.getItem("mostrarCookie");
  // console.log("cookie está: " + mostrarCookie);
  // console.log("mostrarPop está: " + mostrarPop);
  // mostrarPop = true = nao aparecer
  if (mostrarPop && mostrarCookie)
  {
  }else
  {
    
    ligarPressionarBotao();
    
   }
}
function ligarPressionarBotao(){
  let timeout;
  timeout = setTimeout(pressionarBotao,2000);
  
}
function pressionarBotao(){
  mostrarPop = true;
  var botao = document.getElementById('botaoPop');
  botao.click();
}

function aceitarPopup(respostaPopUp)
{
  console.log("mostrarPop agora é " + mostrarPop)
  mostrarPop = respostaPopUp;
  // console.log("dando hide no modal");
  $('#age-box').modal('hide');
  localStorage.setItem("mostrarPop",true);
  mostrarCookie = localStorage.getItem("mostrarCookie");
  if (mostrarCookie)
  {
    localStorage.setItem("mostrarPop",true);

    // mostrarAgebox();
  }
  return mostrarPop;
}

// function mostrarAgebox(){
//   document.getElementById('age-box').style.visibility='visible';
// }

function disableScroll()
{
  mostrarPop = true;
  mostrarPop = localStorage.getItem("mostrarPop");
  if (mostrarPop)
  {
    
  }else
  {
    mostrarPop = true;
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
    });
  } 
}

function enableScroll()
{
  window.onscroll = function () {};
}

function encaminharSite()
{
   window.location.replace('/pt-BR/decline_popup.html');
}

function encaminharSiteEn()
{
  window.location.replace('/en/decline_popup.html');
}
function encaminharSiteEs()
{
  window.location.replace('/es/decline_popup.html');
}


