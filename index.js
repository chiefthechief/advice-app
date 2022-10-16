const apiUrl = "https://api.adviceslip.com/advice";
const h1 = document.querySelector("main > section > h1");
const paragraph = document.querySelector("main > section p:nth-child(2)");
const diceButton = document.querySelector("main > section > div:last-child");
async function changeAdvice() {
   const response = await fetch(apiUrl);
   let data = await response.json();
   h1.textContent = `ADVICE #${data.slip.id}`;
   paragraph.textContent = `"${data.slip.advice}"`;
}
window.addEventListener("load", changeAdvice);
diceButton.addEventListener("click", changeAdvice);