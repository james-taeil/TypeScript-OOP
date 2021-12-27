{
    // ! TypeScript가 강력한 이유 중 하나는 alias 때문이다.
    // ? type을 정할 수 있다.

    // TODO 기본형 형태로 가능
    type Text = string;
    const name: Text = 'Edan';
    type Num = number;
    const age: Num = 10;

    // TODO Object 형태로 가능
    type Car = {
        name: string,
        price: number;
    }
    const userCar: Car = {
        name: 'sonata',
        price: 300000000
    }

    // ! string literal types
    type Name = 'edan';
    // const taeil: Name = 'james'; // ! error 반드시 string literal types에 정한 값만 넣을 수 있다.
    
    // ? 사실 문자열만 할 수 있는건 아니다.
    type True = true;
    let check: True;
    
}