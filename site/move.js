let opt = document.getElementsByClassName("site-option")
for (let i = 0; i < opt.length; i++) {
  opt[i].style.display = "none"
}
document.getElementById("first").style.display = "block"
let counter = 0
function next() {
if ((counter+1) == opt.length){
	opt[counter].style.display = "none"
		counter = 0
		opt[0].style.display = "block"
		return
	}
  opt[counter].style.display = "none"
	counter++
	opt[counter].style.display = "block"
}
function prev(){
if ((counter-1) < 0){
	opt[counter].style.display = "none"
		counter = (opt.length-1)
		opt[(opt.length-1)].style.display = "block"
		return
	}
  opt[counter].style.display = "none"
	counter--
	opt[counter].style.display = "block"
}