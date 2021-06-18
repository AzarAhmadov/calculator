let btn  = document.getElementsByTagName("button");
let hesab = document.getElementsByClassName("hesabla")[0];
let hesabla = document.getElementById("hesabla");
let del = document.getElementById("delete");

for(var i = 0; i < 23; i++){
 if(i !=21 && i !=22){
  btn[i].addEventListener("click" , toogle);
  }
}

function toogle(){
  hesab.value = hesab.value + this.value;
}

hesabla.addEventListener("click" , hesap);

function hesap() {
  hesab.value = eval(hesab.value);
}

del.addEventListener("click" , sil);

function sil (){
  hesab.value="";
}