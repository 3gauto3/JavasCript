let libro, biblioteca

do {
libro = parseInt(prompt("Ingrese un libro"))

if(libro == 1){
alert ("La batalla cultural $3400")
break
}

if (libro == 2){
alert ("El libro negro de la nueva izquierda $5040")
break
}

if (libro == 3){
alert("Libertad, libertad, libertad: Para romper las cadenas que no nos dejan crecer $3400")
break
}

if (libro == 4){
    alert("Pandenomics: La economía que viene en tiempos de megarrecesión, inflación y crisis global $4560")
    break
} 

else{
alert("Ingrese el libro existente")
} 

} while (biblioteca != 1,2,3,4);
