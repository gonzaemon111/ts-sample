import NewPerson from './NewPerson'
export default class Programmer extends NewPerson {
  salary: number
  skills: Array<{ lang: string; rate: number }>

  constructor(init?: Partial<Programmer>) {
    super()
    Object.assign(this, init)
  }
}

const obje = {
  name: 'hoge',
  age: 90,
  salary: 200,
  skills: [{ lang: 'javascript', rate: 5 }, { lang: 'ruby', rate: 1 }]
}

const hoge = new Programmer(obje)
console.log(hoge.skills[0].lang) // javascript