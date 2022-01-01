{
    // TODO Union Types
    // * or 로 비슷하게 이해할 수 있다.
    
    type Direction = 'left' | 'right' | 'down' | 'up';

    const move = (direction: Direction): void => {
        console.log(direction);
    }

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;
    // const tile: TileSize = 100; // ! error

    // function: login -> success, fail

    /* type Login = true | false;
    type DB = string;
    const loginCheck = (id: string, check: Login, DBinfo: DB): Boolean => {
        if(id === typeof String && DBinfo !== null) {
            check = true;
        }
        return check;
    } */

    /* type SuccessState = {
        response: {
            body: string;
        }
    }

    type FailState = {
        resson: string
    }

    type LoginState = SuccessState | FailState;

    const login = (): LoginState => {
        return {
            response: {
                body: 'logged in!',
            }
        };
    } */

    // print LoginState(state)
    // success -> body
    // fail -> reason
    // * 생각보다 어렵다... union type에 대한 이해가 아직 부족한 듯

    type SuccessState = {
        response: {
            body: string
        }
    }

    type FailState = {
        reason: string
    }

    type LoginState = SuccessState | FailState;

    const printLoginState = (state: LoginState): void  => {
        if('response' in state) {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }

    // ! 하지만 in 방식은 별로 좋지 않다.

}