{
    type CoffeeCup = {
        shots: number,
        milk: boolean
    }

    // ! 은닉화
    // todo public
    // ? 기본적으로 다 볼 수 있게 만든다.
    // todo private
    // ? 외부에서 절대 볼 수 없고, 접근할 수 없다.
    // todo protected
    // ? 상속할 때 외부에서 접근 할 수 없지만, 상속한 자식 class에서는 접근 할 수 있다.

    class CoffeeMaker {
        // beans gram
        private static BEANS_GRAMM_PER_SHOT: number = 19; // * class level
        private coffeeBeans: number = 0; // * instance level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // not constructor make function
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 직접적으로 해주지않고 함수를 통해서 커피를 채우자
        public fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        // machine
        public makeCoffee = (shots: number): CoffeeCup => {
            if (shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT > this.coffeeBeans) {
                throw new Error('Not enough coffee beans!');
            }
            
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            
            return {
                shots,
                milk: false
            }
        }
    }
    // make object 
    const maker = CoffeeMaker.makeMachine(13);
    console.log(maker);

    // problem - private 으로 해결
    /* maker.coffeeBeans = 3;
    maker.coffeeBeans = -24; */

    maker.fillCoffeeBeans(20);

    // ? 주로 constructor은 private으로 한다. 이렇게 되면 new ClassName은 못쓰지만, ClassName `.`
    // ? 을 사용하여 내부적으로 사용할 수 있는 함수를 확인 할 수 있다.
    // ! Class를 design하는 것은 public, private, protected, static을 어떤 식으로 사용하는지가 좌지우지 된다.


    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        
        get age(): number {
            return this.internalAge;
        }
        
        // todo 재할당 해줄수 있는 것
        set age(num: number) {
            this.internalAge = num;
        }

        constructor(public firstName: string, private lastName: string) {
        }
    }

    const user = new User('james', 'bond');
    console.log(user.fullName);
    user.firstName = 'edan';

    // ! error 이미 할당되어 있는 firstName 값이 그대로 나온다.
    console.log(user.fullName);
    // ? 이를 해결하기 위해 geter를 사용한다.

    // * geter seter 사용하는 것
    console.log(user.age); // ? 4
    user.age = 13;
    console.log(user.age); // ? 13

}