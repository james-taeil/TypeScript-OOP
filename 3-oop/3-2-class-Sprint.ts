{
    type CoffeeCup = {
        shots: number,
        milk: boolean
    }

    class CoffeeMaker {
        // beans gram
        static BEANS_GRAMM_PER_SHOT: number = 19; // * class level
        coffeeBeans: number = 0; // * instance level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // machine
        makeCoffee = (shots: number): CoffeeCup => {
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
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);
}