{
  type CoffeeCup = {
    shots: number,
    milk: boolean
  }

  // ? interface : 사용하기 위해서 가지고 있는 규약, 행동을 명시해 놓은 계약서 같은 친구 
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 15;
    private constructor(private coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine')
    }

    private grindBeans(shots: number) {
      console.log(`grinding bean for ${shots}`);

      if (shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT > this.coffeeBeans) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log(`heating up coffee machine 🔥`);
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ☕`);
      return {
        shots,
        milk: false,
      }
    }

    public makeCoffee = (shots: number): CoffeeCup => {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  /* const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
  console.log(maker); */
  // todo abstraction
  // ? 결론부터 말하자면 접근제어, interface 등을 통해 할 수 있다.
  // * 가장 심플한 해결책으로 내부적으로 쓰이는 함수는 private으로 설정하는 것

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machnie: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machnie.makeCoffee(2);
      console.log(coffee);
      this.machnie.fillCoffeeBeans(45);
      this.machnie.clean();
    }
  }

  const maker2: CoffeeMachine = CoffeeMachine.makeMachine(30);
  // maker2.fillCoffeeBeans(30); // ! Error - interface에 있는 기능만 사용 가능
  const amateur = new AmateurUser(maker2);
  const pro = new ProBarista(maker2);
  pro.makeCoffee();

}