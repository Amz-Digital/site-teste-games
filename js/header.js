function alterarImagem(objeto, caminhoNovaImagem)
{
  document.getElementById(objeto).src = caminhoNovaImagem;
}		
function alterarCor(cor)
{
  // document.getElementById('accordion').style.backgroundColor = 'red';
  document.getElementById('letra1').style.color = cor;
  document.getElementById('letra2').style.color = cor;
  document.getElementById('letra25').style.color = cor;
  document.getElementById('letra3').style.color = cor;
  document.getElementById('letra4').style.color = cor;
  document.getElementById('letra5').style.color = cor;
  document.getElementById('letra6').style.color = cor;
  document.getElementById('letra7').style.color = cor;
  document.getElementById('sanduiche').style.color = cor;
}
function teste2()
{
  var cabecalho = document.getElementById("coisa");
  // console.log(cabecalho.classList.contains("sticky"));
  aux = cabecalho.classList.contains("sticky");
  // console.log(aux);
  // true = preto
  // false = nada

  //se negativo
  if (aux)
  {
    //fala q é preto
    // console.log("preto");
    alterarImagem('logoo', 'images/logos/logo_amazonia_green.png');
    alterarCor("rgb(121, 192, 0)");
  }
  else
  {
    //fala que é nada
    console.log("nada");
    alterarImagem('logoo', 'images/logos/logo_amazonia_white.png');
    alterarCor("rgb(221, 221, 221)");
  }
}
