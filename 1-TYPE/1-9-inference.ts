{
    // TODO Type Inference
    // * 타입이 뻔하다면 Type Inference 크게 문제 없다.
    let test = 'hello';

    // ! function parameter은 기본적으로 any 타입이다. 따라서 function을 사용할 때 숫자 혹은 문자를 넣어도 되므로 사용하지 않는게 좋다.
    // ? 해결하기 위해 parameter type을 지정해 주는 게 좋다. or defult parameter를 해주는 것도 방법 중 하나다.

    function print(message?: string) {
        console.log(message || 'not thing');
    }

    // ! TypeScript는 number type 두개를 받아 더한 값이므로 return value가 number type이라는 것을 type inference한다.
    function add(x: number, y:number) {
        return x + y;
    }


    // ? 하지만 Type Inference가 좋냐...? 라는 질문이 있다면
    // ! 아니라고 말할 수 있다.

    // * 코드가 짧으면 상관이 없지만 프로젝트 단계에서는 코드가 길어지는 만큼 명확하게 명시해주는 것이 좋다.
}