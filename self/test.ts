interface Person {
  firstName: string;
  lastName: string;
}
class Student {
  fullName: string;
  constructor(public firstName, public age, public lastName) {
    this.fullName = firstName + age + lastName;
  }
}
function greeter(person: Person) {
    return 'Hello, ' + person.firstName;
}

let user = new Student('Ning', 12, 'sheng');

document.body.innerHTML = greeter({firstName: 'Nathan', lastName: 'Ning'});
let arr = [1, 23, 3];
