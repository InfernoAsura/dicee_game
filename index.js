let rand_num_dice_1 = Math.floor(Math.random() * 6);
rand_num_dice_1++;

let rand_num_dice_2 = Math.floor(Math.random() * 6);
rand_num_dice_2++;

src_dice_1 = "images/dice"+rand_num_dice_1+".png"
src_dice_2 = "images/dice"+rand_num_dice_2+".png"

if(rand_num_dice_1 > rand_num_dice_2){
    document.querySelector(".container h1").textContent = "Player 1 wins"
}
else if(rand_num_dice_1 < rand_num_dice_2){
    document.querySelector(".container h1").textContent = "Player 2 wins"
}
else{
    document.querySelector(".container h1").textContent = "Draw"
}

document.querySelector(".img1").setAttribute("src", src_dice_1)
document.querySelector(".img2").setAttribute("src", src_dice_2)

