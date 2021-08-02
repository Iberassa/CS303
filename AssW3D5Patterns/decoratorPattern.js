function Student(id, name, courseTaking) {
    this.id = id;
    this.name = name;
    this.courseTaking = courseTaking;
}

const peter = new Student(2597, "peter Bob", "CS445");

const DecorateStudent = function(student){
    this.id = student.id;
    this.name = student.name;
    this.courseTaking = student.courseTaking;
}

DecorateStudent.prototype.logger = function(){return console.log(`${this.name} is taking ${this.courseTaking} class`) }
console.log(peter)
const decoratePeter = new DecorateStudent(peter)
decoratePeter.logger()

