console.log("Olá");
function changeLanguage(){
  
  let linguagem = navigator.language;
  console.log(linguagem);
  console.log("funcao chamada");
  aux = localStorage.getItem("aux");
  console.log(aux);


  if(aux != 'visitante'){
    if(linguagem == 'en'){
      console.log("changed site language to english");
      window.location.replace('/en/index.html');
      var aux = 'visitante';
      console.log("var aux agora é visitante")
      console.log(aux);
      localStorage.setItem("aux","visitante");
    }
  }
}
