//1
let people1={
    nombre: "Paula",
    edad: 57,
    nacionalidad: "Argentina"
}
function peopleName(people1){
    return people1.nombre;
}
console.log(people1.nombre);

//2
function peopleAge(newAge){
    people1.edad=newAge;
}
peopleAge(36);
console.log(people1.edad);

3//
/*function newPropety(mainObject, chainText){
    mainObject[chainText]=null;
}
const mainObject={
    
}
//const chainText="con jardín";
newPropety(mainObject, chainText);*/