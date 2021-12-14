let urlfeliz = "https://ih1.redbubble.net/image.1389840840.2329/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
let urltriste ="https://image.flaticon.com/icons/png/512/51/51850.png"
let imgHtml = document.querySelector("#imagencara")
let nota1
let nota2
let nota3
do{nota1 = parseInt(prompt("Ingrese su primera nota"))
}while(isNaN(nota1)&&nota1<0&&nota1>10)
do{nota2 = parseInt(prompt("Ingrese su segunda nota"))
}while(isNaN(nota2)&&nota2<0&&nota2>10)
do{nota3 = parseInt(prompt("Ingrese su tercera nota"))
}while(isNaN(nota3)&&nota3<0&&nota3>10)
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+p)
if(p>="6"){
    imgHtml.src = urlfeliz
} else{
    imgHtml.src = urltriste}