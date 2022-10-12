console.log("init");
function myFunction(){
  var x=document.getElementById("myHeroMenu");
  if (x.className === "HeroMenu") {
  x.className += " responsive";
} else {
  x.className = "HeroMenu";
  }
}
