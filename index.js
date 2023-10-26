const mainContainer = document.querySelector(".main--hide");
const mainError = document.getElementById("main--error");
const thankYou = document.querySelector(".thank-you");
const result = document.getElementById("result");
const radio = document.querySelectorAll("input[name='radio']");

function submit() {
	for (let i = 0; i < radio.length; i += 1) {
		if (radio[i].checked == true) {
			mainContainer.remove();
			thankYou.classList.remove("--hidden");
			result.innerHTML =
				"You selected " + radio[i].value + " out of 5";
		} else {
			mainError.style.animationPlayState = "running";
		}
	}
}

