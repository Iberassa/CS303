type BaseObject={
    width: number;
    length: number;
}
var baseObject=<BaseObject>{
    width: 0,
    length: 0,
};
type Rectangle= {
    width: number;
    length: number;
    calcSize():number; 
};
var rectangle = <Rectangle> Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function(){
    return this.width * this.length;
}
console.log(rectangle.calcSize());