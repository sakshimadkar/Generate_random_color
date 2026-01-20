let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h2 = document.querySelector("h2");
    let randomColor = generateRandomColor();
    h2.innerText = randomColor;

    let box = document.querySelector(".box");
    box.style.backgroundColor = randomColor;

    console.log("color updated..");
});

function generateRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}