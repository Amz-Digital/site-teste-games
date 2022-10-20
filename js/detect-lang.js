function changeLang()
{
  console.log(navigator.language)
  // console.log(alreadyChangeLang)
  var alreadyChangeLang2 = sessionStorage.getItem("alreadyChangeLang");

  if(alreadyChangeLang2)
  {
    console.log("ja teve a pagina trocada");
  }
  else
  {
    console.log("primeira vez");
    var lang = navigator.language;
    if(lang == 'pt-BR')
    {
      window.location.replace('/pt-BR/index.html');
      sessionStorage.setItem("alreadyChangeLang","true");
    }
    // || 'es-AR' || 'es-GT' || 'es-CR' || 'es-PA' || 'es-DO' || 'es-MX' || 'es-VE' || 'es-CO' || 'es-PE' || 'es-EC' || 'es-CL' || 'es-UY' || 'es-PY' || 'es-BO' || 'es-SV' || 'es-HN' || 'es-NI' || 'es-PR'
    else if(lang == 'es' )
    {
      window.location.replace('/es/index.html');
      sessionStorage.setItem("alreadyChangeLang","true");
      console.log("aba trocada para es");
    }
    // || 'en-US' || 'en-EG' || 'en-AU' || 'en-GB' || 'en-CA' || 'en-NZ' || 'en-IE' || 'en-ZA' || 'en-JM' || 'en-BZ' || 'en-TT'
    else if(lang == 'en-US')
    {
      window.location.replace('/index.html');
      sessionStorage.setItem("alreadyChangeLang","true");
      console.log("aba trocada para en");
    }
    else
    {
      // window.location.replace('/index.html');
      sessionStorage.setItem("alreadyChangeLang","true");
      console.log("linguagem desconhecida, encaminhando para en");
    }
  }
}
//se for en-CA , usar o comando const str2 = str.substring(0, str.length - 3); para tirar os ultimos 3 caracteres, criar um if para verificar o tamanho do navigator.language para realizar essa ação
//se ele ja ta na certa nao fazer nada;

//mudar linguagem e ele voltar pra principal