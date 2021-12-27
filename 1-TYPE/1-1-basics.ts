// gㅣobal scope issue로 블럭 안에서 작성한다.

{
    /** 
    * Javascript ES6 문법
    var 
    hoisting 문제로 사용 지양하기
    좋지 않는 방법

    let
    let name = 'hello';
    name = 'world'; // 재할당 가능

    const 
    재할당 불가능
    const result = 1;
    result = 2; // error 


    * Type
    * Primitive : number, string, boolean, symbol, bigint, null, undefined
    * Object : function, array ... 
    */

    /**
     * TypeScript
     * number
     * const num:number = 1;
     * const num:number = 'test'; error
     * 
     * string
     * const str: string = 'test';
     * 
     * boolean
     * cosnt bool: boolean = true;
     */ 
    // undefined
    // Javascript 내부에 아무것도 없다는 것을 나타낼 때 사용하는 것
    // user가 undefined를 선언해주는 것은 지양된다.

    // null
    // user가 사용할 때 지향하는 바는 null을 사용하는 것이 맞다.
    // null은 값이 없는 공간 자체를 말할 때 사용하는 뜻이다.
     
    // undefined, null은 typescript에는 단독으로 사용하지 않고 데이터가 들어갈 수도 있고, 아닐 수도 있을 때 사용한다.
    // const num: number | null | undefined;
     
    // undefined는 데이터 타입이 명확하지 않으면 보편적으로 사용하고, null은 값이 명확하지 않으면 사용한다.
    
    const temp = (n): number | undefined => {
     return 1 || undefined;
    }
    
    // unknown
    // typescript에서 처음 본 타입
    // 무슨타입인지 모르는 상태를 지정할 때 쓰인다
    let notSure: unknown = 1;
    notSure = 'hello';
    notSure = true;
    
    // any
    // 파이널 프로젝트에서 typescript를 사용하여 프로젝트를 했지만 실상은 any 남발이었다.
    // any는 무엇이든 들어가는 type
    let all: any = 1;
    all = 'test';
    
    // void
    // 회사에 있는 스타일가이드에 따라 다르다.
    // 아무것도 리턴하지 않을 때 사용한다.
    const print = (): void => {
        console.log('hello');
        return;
    }
    
    // 변수에 void를 사용하려면 할당 할 수 있는 게 undefined 밖에 없다. => 안쓴다.
    let vo: void = undefined;
    // vo = 1; // error

    // never
    // application에서 핸들링할 수 없는 함수를 호출 할 때 사용하긴 한다.
    // error를 던지기 때문에 application은 죽을 수 있다.
    // return 값이 없다.
    // error 던지거나, 무한루프 일 때, never 사용
    const throwError = (message: string): never => {
        // message -> server (log)
        throw new Error(message);
    }

    // object
    let obj: object;
    const sameObject = (obj: object) => {

    }
    // 어떤 object 다 넣을 수 있다.
    // 선호지 않는 스타일이다.ㄴ
    sameObject({num : 1});
    sameObject({name: 'test'});
    
}

