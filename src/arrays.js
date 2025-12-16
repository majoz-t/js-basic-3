
//1
function Suma(arrayX){
    let firstTotal= 0;
    for ( const num of arrayX){
        firstTotal += num;
    }
    return firstTotal;
}
let array1=[6,8,9,5,2,3];
Suma(array1);
console.log(Suma(array1));

//2
function Sum2(arrayX){
    let secondTotal= 0;
    for ( const num2 of arrayX){
        secondTotal += num2;
    }
    return secondTotal/arrayX.length;
}
let array2=[1,9,5,2,3];
Sum2(array2);
console.log(Sum2(array2));

//3
function order(arrayX){
    arrayX.sort((a, b) => a - b);
    return arrayX;
}
let array3=[1,4,9,5,2,3];
order(array3);
console.log(order(array3));

//4
function newElements(arrayX, numX){
   let newArray= arrayX.filter(num => num>numX);
   return newArray;
}
let array4=[2,5,8,7,3];
const num4=4;
newElements(array4, num4);
console.log(newElements(array4, num4));

//5
function fusionArrays(arrayX, arrayY){
    const newFusion= arrayX.concat(arrayY);
    return newFusion;
}
let array5=[5,3,7,9];
let array6=[2,8,4,6];
fusionArrays(array5,array6);
console.log(fusionArrays(array5,array6));

//6
function topNum(list){
    return Math.max(...list)
}
let array7=[5,3,9,7,6];
topNum(array7);
console.log(topNum(array7));

//7
function bottomNum(list){
    return Math.min (...list)
}
let array8=[5,3,9,7,6];
bottomNum(array8);
console.log(bottomNum(array8));

//8
function howMany(arrayX, elemX ){
    return arrayX.filter(item => item === elemX).length;
}

let array9=['Manzana','Pera','Piña','Pera','Sandia','Naranja','Pera'];
const elem= 'Pera';
howMany(array9,elem);
console.log(howMany(array9,elem));

//9
function noDouble(arrayX){
    return [...new Set(arrayX)];
}
let array10=[2,9,15,2,6,7,1,2];
noDouble(array10);
console.log(noDouble(array10));

//10
function inverse(arrayX){
    return arrayX.toReversed();
}
let array11=[5,2,9,3,1];
inverse(array11);
console.log(inverse(array11));