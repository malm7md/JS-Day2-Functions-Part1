function printName (){ 
    console.log("Mohammad Almohammad");

}

printName ();

function printAge(year) {
    console.log(2024-year);

}
printAge(2005);

function printAgeAndName (Name, year){ console.log (`Hello ${Name} you are ${2024-year} old`);
    
}
printAgeAndName(" mohammad", 2005);







function printHello (name,Launguage){ 
    if (Launguage === "en") {console.log(`Hello  ${name}`); }

else if (Launguage === "es") {console.log( ` Hola ${name}`);
}
else if (Launguage === "fr") {console.log( `Bonjour ${name} `);}
else if ( Launguage === "tr") {console.log(`Merhaba)  ${name}`); }






}
printHello("Mohammad", "es");





function printMax (number1,number2){
    if(number1 > number2){
        console.log(`${number1}`);
    }

    else if ( number2 > number1) {
        console.log(`${number2}`); }
}

printMax(200,100);