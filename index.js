let rn1 = Math.floor(Math.random() * 6)+1;
let fileName1 = "images/dice" + rn1 + ".png";
console.log(rn1)
let rn2 = Math.floor(Math.random() * 6)+1;
let fileName2 = "images/dice" + rn2 + ".png";
console.log(rn2)
document.getElementsByClassName("img1")[0].setAttribute("src", fileName1);
document.getElementsByClassName("img2")[0].setAttribute("src", fileName2);
if(rn1>rn2){
    document.querySelector('h1').textContent="Player 1 wins";
}else if(rn1<rn2){
    document.querySelector('h1').textContent="Player 2 wins";
} else{
    document.querySelector('h1').textContent="Refresh me!";
}

 
