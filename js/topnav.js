console.log("init");
function myFunction(){
  var x=document.getElementById("mySideNav");
  if (x.className === "sidenav") {
  x.className += " responsive";
} else {
  x.className = "sidenav";
  }
}
/* taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav*/
