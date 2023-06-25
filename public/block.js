console.log("hello from block.js");
/*
chrome.runtime.sendMessage({ data: "Your data here" }, function (response) {
  // Handle the response from the background script if needed
});
*/

let calculatedStuff = {};

// const testFn = function () {
//   let testElems = document.getElementsByTagName("yt-formatted-string");
//   console.log(testElems.length);

//   for (const testElem of testElems) {
//     console.log(testElem);
//     // new element, didnt calculate before
//     let thingToSend = `${testElem.innerText}`;
//     chrome.runtime.sendMessage(thingToSend, (response) => {
//       let resultText = JSON.stringify(response[0], null, 2);
//       console.log("yoo got it");
//       if (resultText == null) {
//         resultText = "Couldn't calculate, sorry!";
//       }
//       testElem.innerHTML = resultText;
//       calculatedStuff[testElem] = resultText;
//     });
//   }
// };

/* 
inputElement.addEventListener('input', (event) => {
    chrome.runtime.sendMessage(event.target.value, (response) => {
        // 2. Handle results returned by the service worker (`background.js`) and update the UI.
        outputElement.innerText = JSON.stringify(response, null, 2);
    });
});
*/

/* example response output
[
  [
    {
      "label": "disappointment",
      "score": 0.5044485330581665
    },
    {
      "label": "sadness",
      "score": 0.3469431400299072
    },
    {
      "label": "annoyance",
      "score": 0.08485797047615051
    },
    {
      "label": "neutral",
      "score": 0.05476689338684082
    },
    {
      "label": "disapproval",
      "score": 0.05280729755759239
    },
    {
      "label": "realization",
      "score": 0.0147128039970994
    },
    {
      "label": "nervousness",
      "score": 0.013806507922708988
    },
    {
      "label": "approval",
      "score": 0.011522370390594006
    },
    {
      "label": "joy",
      "score": 0.0062008751556277275
    },
    {
      "label": "anger",
      "score": 0.005856028757989407
    },
    {
      "label": "embarrassment",
      "score": 0.005520221311599016
    },
    {
      "label": "caring",
      "score": 0.005480862222611904
    },
    {
      "label": "remorse",
      "score": 0.0053450302220880985
    },
    {
      "label": "disgust",
      "score": 0.004901108331978321
    },
    {
      "label": "grief",
      "score": 0.0035944394767284393
    },
    {
      "label": "confusion",
      "score": 0.0035573095083236694
    },
    {
      "label": "relief",
      "score": 0.0030994510743767023
    },
    {
      "label": "desire",
      "score": 0.0028612534515559673
    },
    {
      "label": "admiration",
      "score": 0.0027561066672205925
    },
    {
      "label": "optimism",
      "score": 0.0027287625707685947
    },
    {
      "label": "fear",
      "score": 0.002634430304169655
    },
    {
      "label": "love",
      "score": 0.00248360657133162
    },
    {
      "label": "excitement",
      "score": 0.002481137402355671
    },
    {
      "label": "curiosity",
      "score": 0.0022594754118472338
    },
    {
      "label": "amusement",
      "score": 0.001642841612920165
    },
    {
      "label": "surprise",
      "score": 0.0015645057428628206
    },
    {
      "label": "gratitude",
      "score": 0.0006519951275549829
    },
    {
      "label": "pride",
      "score": 0.000576098682358861
    }
  ]
]
*/

const modelResponse = [
  {
    label: "anger",
    score: 0.8,
  },
  {
    label: "sadness",
    score: 0.9,
  },
  {
    label: "fear",
    score: 0.9,
  },
];

const userArr = {
  anger: 0.8,
  sadness: 0.8,
  fear: 0.8,
};

var allElements = document.querySelectorAll("body > *"); // definitely not a great idea to do
var textedElements = []

for (element of allElements) {
  if (element.innerText?.length > 0) {
    textedElements.push(element)
  }
}


for (element of textedElements) {
  if (calculatedStuff[element]) {
    element.innerText = calculatedStuff[element];
  } else {
    chrome.runtime.sendMessage(element.innerText, (response) => {
      console.log("Merhaba");
      var resultText = JSON.stringify(response[0], null, 2);
      if (resultText == 0) {
        resultText = "Removed due to not being able to calculate.";
      } else {
        for (emo of modelResponse) {
          if (userArr[emo[label]] <= emo[score]) {
            console.log(emo);
            resultText = `Removed because of too much ${emo[label]}.`;
          }
        }
      }

      element.innerText = resultText;
      calculatedStuff[element] = resultText;
    });
  }
}
