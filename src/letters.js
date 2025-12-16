function one(text1, text2){
     return  text1 +' '+ text2;
}
console.log(one('Hola','mundo'));

function two(text1){
    return text1.length;
}
console.log(two('Bienvenidos'));

function three(text1){
    return text1.toUpperCase();
}
console.log(three('la luna esta llena'));

function four(text1){
    return text1.toLowerCase();
}
console.log(four('The MOON is Full'));

function five(text1,index){
    return text1.charAt(index);
}
console.log(five('Roberta',5));

function six(text1){
    return text1.split('').reverse().join('');
}
console.log(six('rana'));

function seven(text1, caracter){
    let numCar= 0;
    for(const letter of text1){
        if(letter === caracter){
            numCar ++;
        }
    }
    return numCar;
}
console.log(seven('elefante','e'));

function eight(text1){
    return text1.replace(/\s/g,'');
}
console.log(eight('Que Bello día !'));

function nine(text1){
    const text1Ok= text1.toLowerCase().replace(/\s/g,'');
    const text2Ok= text1.split('').reverse().join('').toLowerCase().replace(/\s/g,'');
    if(text2Ok==text1Ok){
        return true;
    } else {
        return false;
    }
}
console.log(nine('El le'));

function ten(text1){
    const word= text1.split(' ');
    const firstLetter= word.map(function(word){
       return word.charAt(0).toUpperCase()+word.slice(1);
    })
    return firstLetter.join(' ');
}
console.log(ten('el niño juega a la pelota'));