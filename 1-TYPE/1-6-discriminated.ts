{
    // TODO discriminated union type
    
    // print LoginState(state)
    // success -> body
    // fail -> reason
    // * 동일한 key, state별로 다른 값이 있어야 한다.

    type SuccessState = {
        result: 'success';
        response: {
            body: string
        };
    };

    type FailState = {
        result: 'fail';
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    const login = (): LoginState => {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        };
    }

    const printLoginState = (state: LoginState): void  => {
        // state.result 공통적인 propoty를 가지고 있다.

        if(state.result === 'success') {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }

    

}