let a1 = document.createElement("main")
let div1 = document.createElement("div")
let img1 = document.createElement("img")
img1.src="./imagens/ligada.png"
let body = document.querySelector("body")

img1.setAttribute("id","lig")

div1.append(img1);
a1.append(div1);
body.append(a1);

img1.value="on"


let div2 = document.createElement("div")
let img2 = document.createElement("img")
img2.src="./imagens/ACES.png"

img2.setAttribute("id","inlig")


div1.append(img2);
a1.append(div2);
body.append(a1);

document.querySelector("#inlig").onclick=liglig

function liglig(){

        if( img1.value=="on"){
        img1.src="./imagens/desligada.png"
        body.setAttribute("style","background-color:#000")
        img1.value="off"
        img2.src="./imagens/apag.png"
       
       
}else if(img1.value=="off"){
        img1.src="./imagens/ligada.png"
        body.setAttribute("style","background-color:#ffffff")
        img1.value="on"
        img2.src="./imagens/ACES.png"
}
}




