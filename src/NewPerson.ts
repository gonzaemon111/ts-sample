class NewPerson {
  name?: string;
  age?: number;

  constructor(init?: Partial<NewPerson>) {
    Object.assign(this, init);
  }
}

const obj = { name: "takashi", age: 70 };
const takasi = new NewPerson(obj);

console.log(takasi);