const mainCont = document.querySelector(".main");
const mainContHide = document.querySelector(".main--hide");
const thankYou = document.querySelector(".thank-you");

const result = document.getElementById("result");
const radio = document.querySelectorAll("input[name='radio']");


function submit() {
	for (let i = 0; i < radio.length; i += 1) {
		if (radio[i].checked) {
			mainContHide.remove();
			thankYou.classList.remove("--hidden");
			result.innerHTML =
			"You selected " + radio[i].value + " out of 5";
		} else {
			//do nothing
		}
	}
}

/* const error = [
	document.querySelector(".main--error"),
	document.querySelector("radio--error"),
]; */
/* radio.forEach((Element) => console.log(Element.value)); */
/* array1.forEach((element) => console.log(element)); */
