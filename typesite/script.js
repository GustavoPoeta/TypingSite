document.addEventListener("DOMContentLoaded", function () {
  fetch("./words_dictionary.json")

    .then((response) => response.json())

    .then((data) => {


      const boxOfWord = document.getElementById("wordsBox");
      
      const arrayObj = Object.keys(data);
      
      const start = document.getElementById("start");

      const input = document.getElementById("input");

      const word = document.getElementsByClassName("word");

      const inputValue = [];
      
      const wordArray = [];

      let wordValue;
      

      const randomProp = () => {
        const index = Math.floor(Math.random() * arrayObj.length);
        // const randomWord = arrayObj[index].split("");
        wordArray.push(arrayObj[index]); 
        wordValue = arrayObj[index];
        return arrayObj[index];
      }; // function that returns a random key from the object. It takes its randomized index and returns the index's key. 
      
      
      const newWord = () => {
        const newElement = document.createElement("h3");
        newElement.setAttribute('class', 'word');
        const insertWord = document.createTextNode(randomProp());

        newElement.appendChild(insertWord);
        boxOfWord.appendChild(newElement);
      }; // Add a word to the page 

      
      input.addEventListener("keydown", (key) => {
        if (key.code === "Enter") {
          const userInput = input.value;
          if(userInput == wordValue) {
            word[0].style.color = "rgb(126, 205, 129)";
            setTimeout(() => {
              word[0].remove()
              input.value = "";
              inputValue = [];
              wordArray = [];   
            }, 1000)
            setTimeout(() => {
              newWord();
            },1200)      
          }
        }
      })
      

      start.addEventListener("mouseover", () => {
        start.style = "font-size: 18px; width: 63px; height: 33px;";
      }); // if the mouse is over start, the event listener will change its properties
      
      start.addEventListener("mouseout", () => {
        start.style = "font-size: 17px; width: 60px; height: 30px;";
      }); // if the mouse is out of start, the event listener will change back its properties
      
      start.addEventListener("click", () => {
        setTimeout(() => {
          if (wordArray.length == 0) {
            newWord();
          } else {
            alert("You must type the word that is already shown on screen.");
          }
        }, 500);
      }) // when start is clicked, a word is created  after half a second

    })



    .catch((error) => {
      console.error("Error fetching ", error);
    });
});