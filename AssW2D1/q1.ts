interface IUniversity {
    name: string;
    dept: string;
    graduation(year: number): void;
}
class University implements IUniversity {
    name: string;
    dept: string;
    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number){
        console.log(`graduation ${this.dept} ${year} students`)
    }
}

var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
