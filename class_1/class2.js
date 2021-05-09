class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName = function(){
        return this.name;
    }
}


class Action extends Person{
    constructor(name ,age){   // 상속 시 constructor는 함께 상속되지만 사용 시에는 super로 부모의 this를 가져옴
        super(name, age);
    }

    fun = function(){
        cohnsole.log('run');
        name = this.getName();
    }
}


a = new Action('sw',31);

console.dir(a);


class Model{
    constructor(){

    }
    static init(){

    }
}

class User extends Model{
    static init(){
        super.init()
    }
}