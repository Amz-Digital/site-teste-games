function mostrarPopUp()
{
  mostrarPop = true;
  mostrarPop = localStorage.getItem("mostrarPop");
  mostrarCookie = localStorage.getItem("mostrarCookie");
  console.log("cookie está: " + mostrarCookie);
  console.log("mostrarPop está: " + mostrarPop);
  // mostrarPop = true = nao aparecer
  if (mostrarPop && mostrarCookie)
  {
    
  }else
  {
    mostrarPop = true;
    var botao = document.getElementById('botaoPop');
    botao.click();
  }
}

function aceitarPopup(respostaPopUp)
{
  console.log("mostrarPop agora é " + mostrarPop)
  mostrarPop = respostaPopUp;
  localStorage.setItem("mostrarPop",true);
  mostrarCookie = localStorage.getItem("mostrarCookie");
  if (mostrarCookie)
  {
    localStorage.setItem("mostrarPop",true);
  }
  return mostrarPop;
}

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
  window.location.replace('/decline_popup.html');
}


