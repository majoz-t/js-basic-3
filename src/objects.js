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
let mainObject={
    nombre: "Ismael",
    edad: 37,
    altura: 1.87,
}
const chainText= "peso"
function newPropety(mainObject, chainText){
    mainObject[chainText]=null;
    console.log(mainObject);
}
newPropety(mainObject, chainText);

4//
const propetyOut= "edad";
function deletePropety(mainObject,propetyOut){
    delete mainObject[propetyOut];
    console.log(mainObject);
}
deletePropety(mainObject,propetyOut);

5//
function quantityProp(mainObject){
    return Object.keys(mainObject).length;
}
const total= quantityProp(mainObject);
console.log(total);