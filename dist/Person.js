var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var takashi = new Person("takashi", 70);
console.log(takashi); // 結果 => Person { name: 'takashi', age: 70 }
console.log(takashi.age); // 70
// Personクラスはage , nameの二つのプロパティ意を持つ
console.log("-------------------");
// partial を使った例
console.log("partialを使った例");
// class Person {
//   name: string;
//   age: number;
// }
// const a: Partial<Person>;
// const b: { name?: string, age?: number };
// aとbは同様の型として振る舞う
