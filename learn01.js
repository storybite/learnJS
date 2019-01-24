//자바스크립트의 객체는 기본적으로 파이썬의 딕셔너리 또는 json 형식
// var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80}; 
// console.log("grades.egoing:", grades.egoing)
// for(key in grades) {
//     document.write("key : "+key+" value : "+grades[key]+"<br />");
// }
var grades2 = {
    "list" : {'egoing': 10, 'k8805': 6, 'sorialgi': 800},
    'show' : function(){
        for(var name in this.list){
            console.log("grades2.show..", name)
        }
    }
};
console.log("grades2.list ->", grades2.list)
grades2.show();

//딕셔너리 타입의 반환1
function dicRtn1() {
    return {
        "a":1,
        "b":2
    }
}
console.log("dicRtn1()->",dicRtn1())
function dicRtn2() {
    return {
        "a" : function() {return 10},
        "b" : function() {return 20}
    }
}
console.log("dicRtn2()->",dicRtn2())
f_rtn1 = dicRtn2()
console.log("f_rtn1.a()->",f_rtn1.a())
console.log("f_rtn1.b()->",f_rtn1.b())

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}

//{} 함수 포함 가능(함수가 객체인지) 여부
var ga = {
    fa(x){
        return x+1
    }
}
console.log("ga:",ga)

//문자열 보간
var a = 10
var b = 20

console.log(`문자열 보간 a:${a},b:${b}`)



test = function (id) {
    return id;
}(20);
console.log("test(id)->",test)


//closure와 encapsulation
function factory_movie1(title){
    return {    
        "get_title" : function(){return title},
        "set_title" : function(_title){title=_title}
    }
}
movie1 = factory_movie1("mv1")
movie2 = factory_movie1("mv2")
console.log("movie1.get_title():", movie1.get_title());
movie1.set_title('mv11')
console.log("movie1.get_title():", movie1.get_title());

console.log("movie2.get_title():", movie2.get_title());
movie2.set_title('mv22')
console.log("movie2.get_title():", movie2.get_title());


//자바스크립트 객체
function Person(name) {
    this.name = name;
    this.intro = function(){
        return "my name is " + this.name +"입니다."
    }
}
p1 = new Person("아무개1")
console.log(p1.intro())
p2 = new Person("아무개2")
console.log(p2.intro())


function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product "' + name + '" with a negative price');
  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log("cheese:",cheese)

function callMe(arg1, arg2){
    var s = "";

    s += "this value: " + this;
    s += "<br />";
    for (i in callMe.arguments) {
        s += "arguments: " + callMe.arguments[i];
        s += "<br />";
    }
    return s;
}

document.write("Original function: <br/>");
document.write(callMe(1, 2));
document.write("<br/>");

document.write("Function called with call: <br/>");
document.write(callMe.call(1));



function callMe(arg1, arg2){
    var s = "";

    s += "this value: " + this;
    s += "<br />";
    for (i in callMe.arguments) {
        s += "arguments: " + callMe.arguments[i];
        s += "<br />";
    }
    return s;
}

document.write("Original function: <br/>");
document.write(callMe(1, 2));
document.write("<br/>");

document.write("Function called with apply: <br/>");
document.write(callMe.apply(3, [ 4, 5 ]));


//import { id } from './root_my_module.js'
