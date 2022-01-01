{
    // TODO Type Assertions (별로 좋은 방법이 아님...)

    // 불가피하게 쓰이는 경우
    // ! return value는 any type으로 지정하였지만 확실한 return은 string value 일 경우
    function jsStringPrint(): any {
        return 'Hello';
    }

    const strLength = jsStringPrint();
    // ! 확실히 return value가 string이라는 것을 알고, string method를 사용하는 경우

    // strLength.length; // * method가 찍히지가 않는다.

    // (strLength as string).length // TODO 이렇게 하면 method가 나오게 된다.

    
}