const roll_dice = document.querySelector(".roll_dice")
const hold = document.querySelector(".hold")
const new_game = document.querySelector(".new_game")
const dice = document.querySelector(".dice")
const dice_img = document.querySelector("#dice_img")

const currents_score_right = document.querySelector(".currents_score right")
const currents_score_left = document.querySelector(".currents_score left")


function getRandomInt() {
  return Math.floor(Math.random() * 6 + 1);
}


roll_dice.addEventListener("click", () => { 
  const randomint=getRandomInt()
  dice.innerHTML = `<img id="dice_img" src="./assest/img/${randomint}.jpg">` }
  
  
  
  
  )




