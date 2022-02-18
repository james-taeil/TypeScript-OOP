{
  type CoffeeCup = {
    shots: number;
    milk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 15;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
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
    
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // todo inheritance
  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans)
    }
    
    private steamMilk(): void {
      console.log('Stemaing some milk 🥛')
    }
    
    makeCoffee (shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();

      return {
        ...coffee,
        milk: true
      }
    }
  } 

  const machine = new CoffeeMachine(32);
  const latteeMachine = new CafeLatteMachine(30, 'aa11');
  const coffee = latteeMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteeMachine.serialNumber);

}