let currentActiveButton = null;

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const result = document.getElementById("submit");
const card1 = document.getElementById("hidden");
const num = document.getElementById("num");
const card2 = document.getElementById("hidden1");

function handleButtonClick(button) {
  if (currentActiveButton) {
    currentActiveButton.classList.add("button");
    currentActiveButton.classList.remove("active");
  }

  button.classList.add("active");
  button.classList.remove("button");

  currentActiveButton = button;
  num.textContent = `You selected ${currentActiveButton.id} out of 5`;
}

function submit() {
  if (currentActiveButton) {
    card1.classList.add("hidden");
    card2.classList.remove("hidden1");
  } else {
    alert("Pilih dulu lah wak");
  }
}

one.addEventListener("click", () => handleButtonClick(one));
two.addEventListener("click", () => handleButtonClick(two));
three.addEventListener("click", () => handleButtonClick(three));
four.addEventListener("click", () => handleButtonClick(four));
five.addEventListener("click", () => handleButtonClick(five));

result.addEventListener("click", submit);
