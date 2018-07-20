//https://www.tslang.cn/docs/handbook/basic-types.html
export { };

//boolean
let isRed: boolean = false;

//number 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。
let score: number = 5

//string 
let name: string = "bob";
name = 'lily';
//模板字符串
let sentence: string = `hi, ${name}`;

//arraay
let colours: string[] = ['red', 'green', 'blue'];
let list: Array<number> = [1, 2, 3];

//元组 Tuple
let x: [string, number];
x = ['haha', 2];
x = [2, 'haha']; //error
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // error

//enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue}
let colorName: string = Color1[2];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list1: any[] = [1, true, "free"];

//void 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
function warnUser(): void {
    alert("This is my warning message");
}

//Null 和 Undefined 默认情况下null和undefined是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

/*never
never类型表示的是那些永不存在的值的类型
never类型是任何类型的子类型，也可以赋值给任何类型
没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
*/

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//类型断言 告诉编译器“我知道自己在干什么”
//尖括号语法，
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//as语法
let strLength1: number = (someValue as string).length;