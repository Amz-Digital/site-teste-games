

function aceitarCookies(respostaCookie)
{
  mostrarCookie = respostaCookie;
  localStorage.setItem("mostrarCookie",true);
  // console.log("cookie agora é " + mostrarCookie);
  // console.log("mostrarPop agora é " + mostrarPop);
  //false aparece
  //true não aparece
  //visible
  document.getElementById('btn-aceitar-cookie').style.visibility = "hidden";
  document.getElementById('btn-aceitar-cookie2').style.visibility = "hidden";
  document.getElementById('btn-aceitar-cookie3').style.visibility = "hidden";
  document.getElementById('btn-aceitar-cookie4').style.visibility = "hidden";
}

function aceitarCookies2(){
  localStorage.setItem("mostrarPop",true);
}


function mostrarCookies()
{
  mostrarCookie = localStorage.getItem("mostrarCookie");
  // console.log("get item = " + mostrarCookie);

  if (mostrarCookie)
  {

  }else
  {
    //false aparece
    //true não aparece
    // console.log(mostrarCookie);
    ligarMudarHiddenCookies();
  }
  function ligarMudarHiddenCookies(){
    let timeout2;
    timeout2 = setTimeout(mudarHiddenCookies,2000);
  }
  function mudarHiddenCookies(){
    document.getElementById('cookies').hidden=false;
  }
}
