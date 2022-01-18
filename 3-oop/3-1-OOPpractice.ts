{
    type CoffeeCup = {
        shots: number,
        milk: boolean
    }

    // beans gram
    const BEANS_GRAMM_PER_SHOT: number = 19;
    let coffeeBeans: number = 0;

    // marchine
    const makeCoffee = (shots: number): CoffeeCup => {
        if (shots * BEANS_GRAMM_PER_SHOT > coffeeBeans) {
            throw new Error('Not enough coffee beans!');
        }
        
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        
        return {
            shots,
            milk: false
        }
    }
    // charge coffee beans
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

    const coffee = makeCoffee(2);
    console.log(coffee);
}