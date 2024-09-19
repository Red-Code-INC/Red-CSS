function tab2(evt, tabName, tabcontents, tablink,) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(tabcontents);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(tablink);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


let dfault = document.getElementsByName('defaultOpen')
for (let i = 0 ; i < dfault.length ; i++){
dfault[i].click();
}
let body = document.getElementsByTagName("body")[0]
let mainsite = document.getElementById("mainsite")
if (mainsite.style.height != body.style.height){
    mainsite.style.height = body.style.height
}
function copy(id){
var copyText = document.getElementById(id);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
   var tooltip = document.getElementById("myTooeltip")
   tooltip.innerHTML = "Copied Text";
   document.getElementById("copyicon").innerHTML = "check"
   setTimeout(resete,3000);
}
function resete(){
    document.getElementById("copyicon").innerHTML = "duplicate"
}
function outFunc() {
  var tooltip = document.getElementById("myTooeltip")
  tooltip.innerHTML = "Copy to Clipboard"
}