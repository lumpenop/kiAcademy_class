//class는 동적인 객체를 만들기 위해서
// constructor를 함께 정의해줘야함 (constructor가 가장 먼저 실행된다)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

Person.prototype.getName = function(){ //prototype이 메소드와 constuctor를 가지고 있음
    return this.name;
}

function Person2(name, age){
    this.name = name,  
    this.age = age;

    this.setName = function(_name){
        this.name = _name;
    }
}

let me = new Person('sw', 20); // __proto__에서 메소드, constuctor 참조
let me2 = new Person2('sw', 31); // __proto__에서 메소드, constuctor 참조



Person2.prototype.getName = function(){ //prototype이 메소드와 constuctor를 가지고 있음
    return this.name;
}

Person2.prototype.getAge = function(){
    return this.age;
}

Person2.getAge = function(){  // class 하위에 바로 정의하면 class 내부에서 static을 사용한 것과 같다 (정적 메소드)
    return this.age;           // 정적 메소드는 객체 생성시 상속되지 않고, class에서만 사용 가능
}                              // staic의 this는 class의 this와 다르기 때문에 사용 불가

console.dir(Person);
console.dir(Person2);
console.dir(me);
console.dir(me2);
