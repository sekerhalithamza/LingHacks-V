const inputElements = document.getElementsByClassName("range-bar");
const inputValues = document.getElementsByClassName("range-bar-value");

var emotionArr = {};

for (const inputElement of inputElements) {
  inputElement.addEventListener("input", () => {
    const labelValue = inputElement.nextElementSibling;
    labelValue.innerText = `${inputElement.value}%`;
  });
}

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  submitBtn.style.backgroundColor = "#4ce099";
  emotionArr = {
    love: Number(inputValues[0].innerText.replace("%", "")) / 100 ,
    anger: Number(inputValues[1].innerText.replace("%", "")) / 100,
    joy: Number(inputValues[2].innerText.replace("%", "")) / 100,
    sadness: Number(inputValues[3].innerText.replace("%", "")) / 100,
    suprise: Number(inputValues[4].innerText.replace("%", "")) / 100,
    fear: Number(inputValues[5].innerText.replace("%", "")) / 100,
  };
});
