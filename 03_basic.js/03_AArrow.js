const user = {
    username : "hitesh",
    age : 19 ,

    welcome : function(){
    console.log(`welcome  ${this.username}`);
    console.log(this)
        
    }

}
//user.welcome()
user.username = "sam";
//user.welcome()

//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     //line 20 will give me undefined
//     console.log(this);
// }

// chai()


const chai = () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username)
}
chai()

//() => {}

const addtwo = (num1 ,num2) => {
    return num1+num2;
}

//another way to write 
const addtwop = (num1, num2) => num1+num2

// one more way
const addtwoo = (num1, num2) => (num1+num2)

// if we wrap them in curly brackets then we have to use the return keyword otherwise not


const addtwooo = (num1, num2) => ({username : "hitesh"})
//this is the write way to return a object
console.log(addtwooo(3,7));

const myarr = [1,2,3,4,5]

//below are the three type of syntax we generally use 

myarr.forEach(function () {})
myarr.forEach(() => {})
//myarr.forEach(() => ());
