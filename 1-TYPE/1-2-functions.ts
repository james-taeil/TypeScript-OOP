{
    /* // ? JavaScript
    const justAdd = (num1, num2) => {
        return num1 + num2;
    }

    // ? TypeScript
    const tsAdd = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    // TODO JavaSCript
    const jsFetch = (id) => {
        // ! code...
        return new Promise((resolve, reject) => {
            resolve(400);
        });
    }

    // ? TypeSCript
    // const tsFetch = (id: string): object => {
    //     // ! code...
    //     return new Promise((resolve: object, reject: void): void => {
    //         resolve(400);
    //     }) 
    // }

    // ! 배운점 - 꼭 기억해야 되는 점
    const tsFetchAnswer = (id: string): Promise<number> => {
        // * 마지막 resolve(숫자) 숫자를 fetch 하니 promise 타입의 number를 넣는다.
        // ! code...
        return new Promise((resolve, reject) => {
            resolve(400);
        })
    }


    // ! optional parameter
    const printName = (firstName: string, lastName: string): void => {
        console.log(firstName);
        console.log(lastName);
    }
    printName('taeil', 'kim'); // TODO OK
    // printName('steve') // ! Error 두개 인자 모두 받아야 한다.
    // printName('abc', 0); // ! Error parameter값의 error */

    /* // ? 인자를 전달해도 되고, 안해도 되는 방법은 없을까?
    // ! optional parameter 
    // TODO 타입 지정 전에 `?`를 사용하면 된다.
    const printName2 = (firstName: string, lastName?: string): void => {
        console.log(firstName);
        console.log(lastName);
    }

    printName2('edan'); // ! parameter하나만으로도 에러가 나지 않는다.

    // TODO defult parameter
    const printMessage = (message: string = 'Defult message'): void => {
        console.log(message);
    }
    printMessage(); */

    // TODO REST parameter
    const addNum = (...num: number[]): number => {
        return num.reduce((a, c) => a + c, 0);
    }

    console.log(addNum(10));
    console.log(addNum(10, 20));
    console.log(addNum(10, 20, 50));
}