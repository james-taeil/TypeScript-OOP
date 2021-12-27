{
    // TODO Array
    const numbers: number[] = [1,2,3,4,5];
    const numbers2: Array<number> = [1,2,3,4,5,6,7];
    const strings: string[] = ['a', 'b'];

    
    // ! 변경 불가 옵션 readonly
    const str = (fruits: readonly string[]): void => {
        // fruits.push() // ! error
    };

    // ! number[] vs Array<number> 차이점
    // ? readonly를 작성 할 때, number[] 방식이 맞으며, Array<number>는 에러가 난다.
    // * 한정자는 배열 및 튜플 리터널 방식에만 사용 가능하다.

    /* function num(num1: readonly Array<number>) {
        return;
    }; // ! error */

    // ? code 의 일관성 있게 짜기 위해 number[] 방식 선호

    // TODO Tuple -> interface, type alias, class 대체 방법이 있다.
    let person: [string, number];
    person = ['Edan', 29];
    
    // ! Tuple을 사용해야 되는가? 
    // ? value를 가저오는 방식이 index 접근 방식이라 가독성이 떨어진다.
    // ? object, class로 명시적으로 접근 방법이 있기 때문에


}