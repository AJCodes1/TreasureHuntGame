var trophy = Math.floor(Math.random() * 9)
	
var bomb = Math.floor(Math.random() * 9)

var counter = 0

if (trophy === bomb) {
trophy = Math.floor(Math.random() * 9) 
}


const treasure = (location) => {
	//return alert(location)
	
	document.getElementById(location).innerHTML = "🌊"
	
	// counter = counter + 1
	// console.log(counter)


	if(location === trophy) {
		document.getElementById(9).innerHTML = "<img src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/14874/treasure-box-clipart-md.png' width='250px' height='250px' />"	
		return alert("You win")
	} else if(location === bomb) {
		document.getElementById(9).innerHTML = "<img src='https://freesvg.org/img/skull.png' width='200px' height='250px'/>"	
		return alert("You lose")
	} 
	
}


// const toggle = document.getElementById('toggle');
// const body = document.body;

// toggle.addEventListener('input', e => {
//     const isChecked = e.target.checked;

	
//     if (isChecked) {
//         body.classList.add('dark-theme');
//     } else {
//         body.classList.remove('dark-theme');
//     }
// });