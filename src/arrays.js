
//1
let array1=[6,8,9,5,2,3];

function Suma(array1){
    let firstTotal= 0;
    for ( const num of array1){
        firstTotal += num;
    }
    return firstTotal;
}
const result1= Suma(array1);
console.log(result1);

//2
let array2=[1,9,5,2,3];

function Sum2(array2){
    let secondTotal= 0;
    for ( const num2 of array2){
        secondTotal += num2;
    }
    return secondTotal;
}
const result2= Sum2(array2)/array2.length;
console.log(result2);

//3
let array3=[1,4,9,5,2,3];

function order(array3){
    array3.sort((a, b) => a - b);
    return array3
}
let arrayInorder= order(array3);
console.log(array3);

//4
let array4=[2,5,8,7,3];
const num4=4;

function newElements(array4, num4){
   let newArray= array4.filter(num => num>num4);
   return newArray;
}
const resultNewarray= newElements(array4, num4);
console.log(resultNewarray);

//5
let array5=[5,3,7,9];
let array6=[2,8,4,6];

function fusionArrays(array5, array6){
    const newFusion= array5.concat(array6);
    return newFusion;
}

const resultFusion= fusionArrays(array5,array6);
console.log(resultFusion);
