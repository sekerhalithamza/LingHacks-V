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
    love: inputValues[0].innerText.replace("%", ""),
    anger: inputValues[1].innerText.replace("%", ""),
    joy: inputValues[2].innerText.replace("%", ""),
    sadness: inputValues[3].innerText.replace("%", ""),
    suprise: inputValues[4].innerText.replace("%", ""),
    fear: inputValues[5].innerText.replace("%", ""),
  };
  console.log(emotionArr);
});
