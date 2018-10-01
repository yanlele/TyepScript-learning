/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018/9/30
 */

// 一个测试而已
/*class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }
}
let person: Animal = new Animal('yanle');
console.log(person.getName());

let student: Animal = new Animal('dupeng');

let fun:Function = function(animal: Animal) {
    return animal.getName();
};

console.log(fun(person));

export default Animal;*/

// 关于接口和抽象类
/*
interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {

    getPaddingString(): string {
        return null;
    }
}


abstract class Person {
    public abstract getPaddingString(): string;
}

class People extends Person {

    public getPaddingString(): string {
        return '123';
    }
}

export default People*/



// 关于构造函数 get he set 方法
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    get _name(): string {
        return this.name;
    }

    set _name(value: string) {
        this.name = value;
    }
}

let person:Animal = new Animal('YANLE');
console.log(person._name);
person._name = 'lelelelele';
console.log(person._name);
console.log(person);



export default Animal;
