import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
    class Person {
        constructor(name = 'Anonymous', age = 0) {
            this.name = name;
            this.age = age;
        }
        getGreeting() {
            return `Hi I'm ${this.name}.`;
        }
        getPersonDescription() {
            return `${this.name} is ${this.age} old.`;
        }
    }

    class Employee extends Person {
        constructor(name,age,title) {
            super(name, age);
            this.title = title;
        }
        hasJob() {
            return !!this.title;
        }

        getGreeting() {

            if (this.title) {
                return `hi i am ${this.name} i work as ${this.title}.`;
            }
            else {
                return super.getGreeting();
            }
        }
    }

    class programmer extends Person {
        constructor(name, age, language = 'assembly') {
            super(name, age);
            this.language = language;
        }

        getGreeting() {
            if (this.language) {
                return `hi i am ${this.name} i work as ${this.title} i speak ${this.language}.`;
            }
            else {
                return super.getGreeting();
            }
        }
    }

    let person = new programmer('alex', 25, 'coder');

    console.log(person.getGreeting());
});

