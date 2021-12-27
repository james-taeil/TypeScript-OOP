{
    // TODO Union Types
    // * or 로 비슷하게 이해할 수 있다.
    
    type Direction = 'left' | 'right' | 'down' | 'up';

    const move = (direction: Direction): string => {
        return direction;
    }

}