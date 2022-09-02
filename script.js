//var  a = document.getElementById( 'butn1' )

//a.innerText="name"
//a.style.color='red'


//var b = document.getElementsByClassName( 'bb' )[1]
//b.innerText="asus"
//b.style.color="blue"


//var c = document.getElementsByClassName( 'bb' )[2]
//b.innerText="lenovo"
//b.style.color="yellow"
//b.style.backgroundColor="red"

//var a=17
//if(a>=18) {
    //console.log("you r eligible");
// }
// //else{
//     console.log("you r not eligible ");
// }

// var  a = document.getElementById('age')

// btn=document.getElementById("btn")

// btn.addEventListener("click",()=>{
//    // b=a.value()
// lab=document.getElementById("label")
// b=a.value
// if(b>=18){
//     lab.innerText=("u r eligible "+b);
// }
// else
// {
//     lab.innerText=("u r not eligible "+b);
// }

// }

// var i=0
// while(i<=10)
// {
//     console.log(i++);
// }
// var i=0;
// for(i=0; i<=20; i++)
// {
//     console.log(i);
// }

//let a =["apple "," orange"]  
// b=a.join("or")
// console.log(b);

// let b=["batman","superman"]
// let c=["vavval"]
// result=c.concat(b)
// console.log(result)

// let fruits=["apple","orange","grapes"]
// fruits.pop()
// console.log(fruits)

// let cars=["contessa","escort"]
// cars.push("benz")
// console.log(cars)


// let cars=["contessa","escort"]
// cars.push("benz")
// cars.sort()

// console.log(cars)

// var a=[5,6,7,8,9]
// //a.forEach((element => {
//     //console.log(element);
// //}));

//to show index number also 
// a.forEach((data,index) =>
// {console.log(data,index)

// })

// var a=[5,6]
// var b = [7,8]
// var x;
// a=x;
// x=b
// y=a;
// console.log(a)
// console.log(b)

// array sorting in ascending order and also 
//swaping the elements position based on the greater number
// var a=[5,7,4]


// for(i=0;i<=a.length;i++){
//     for(j=0;j<=a.length;j++){
//         if(a[j]>a[j+1]){
//             temp = a[j]
//             a[j]=a[j+1]
//             a[j+1] = temp
//         }
//     }
// }

// console.log(a);


// var b=[7,4,6]
// for(i=0;i<b.length;i++ {
//     for(j=0;j<=b.length;j++)
// })

//user defined function creating, using return

var a=[9,5,7,4,7,5,1]
function sorted(a){
for(i=0;i<=a.length;i++){
        for(j=0;j<=a.length;j++){
            if(a[j]>a[j+1]){
                 temp = a[j]
                a[j]=a[j+1]
                a[j+1] = temp
           }
       }
    }
return a
}

console.log(sorted(a))
