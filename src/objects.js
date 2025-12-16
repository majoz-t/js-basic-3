//1
function peopleName(peopleX){
    return peopleX.nombre;
}
const people1={
    nombre: "Paula",
    edad: 57,
    nacionalidad: "Argentina"
}
peopleName(people1);
console.log(peopleName(people1));

//2
function actualAge(peopleX,ageX){
   return peopleX.edad=ageX;
}
const people2={
    nombre: "Paula",
    edad: 57,
    nacionalidad: "Argentina"
}  
let newAge=36;
actualAge(people2,newAge);
console.log(actualAge(people2,newAge));

3//
function newPropety(objectX, chainTextX){
   objectX[chainTextX]=null;
   return objectX;
}
const mainObject={
    nombre: "Ismael",
    edad: 37,
    altura: 1.87,
}
const myChainText= "peso";
console.log(newPropety(mainObject, myChainText));

4//
function deletePropety(objectX,propetyX){
    delete objectX[propetyX];
    return objectX;
}
const mainObject2={
    nombre: "Ismael",
    edad: 37,
    altura: 1.87,
}
const propetyOut= "edad";
console.log(deletePropety(mainObject2,propetyOut));

5//
function quantityProp(objectX){
    return Object.keys(objectX).length;
}
const mainObject3={
    nombre: "Rita",
    edad: 24,
    altura: 1.67,
    nacionalidad:'Española',
}
console.log(quantityProp(mainObject3));

6//
function yesOrNo(objectX, chainTextX){
    return Object.hasOwn(objectX,chainTextX);
}
const mainObject4={
    nombre: "Fito",
    edad: 67,
    altura: 1.77,
    nacionalidad:'Argentina',
}
console.log(yesOrNo(mainObject4,'peso'));

7//
function allProp(objectX){
    return Object.values(objectX);
}
const mainObject5={
    nombre: "Fabiana",
    edad: 19,
    altura: 1.57,
    nacionalidad:'Peruana',
}
console.log(allProp(mainObject5));

8//
function sameOrNo(objectX,objectY){
    const keysX= Object.keys(objectX);
    const keysY=Object.keys(objectY);
    if (keysX.length !== keysY.length)
        return false;
    for (let key of keysX) {
        if (objectX[key] !== objectY[key]){
            return false;
    }
    } 
    return true;
}
const mainObject6={
    nombre: "Julia",
    edad: 19,
    altura: 1.57,
    nacionalidad:'Chilena',
}
const mainObject7={
    nombre: "Fabiana",
    edad: 19,
    altura: 1.63,
    nacionalidad:'Chilena',
}
console.log(sameOrNo(mainObject6,mainObject7));

9//
function copyObj(objectX){
    return structuredClone(objectX);
}
const mainObject8={
    nombre: "Olga",
    edad: 29,
    altura: 1.83,
    nacionalidad:'Rusa',
}
console.log(copyObj(mainObject8));

10//
function joinObject(objectX,objectY){
    return {...objectX, ...objectY};
}
const mainObject9= {
    nombre: "Pampa",
    edad: 7,
    raza: "Bodeguero Andaluz",
}
const mainObject10={
    nombre: "Alfie",
    especie: "Perro",
    color: "Beige"
}
console.log(joinObject(mainObject9,mainObject10));