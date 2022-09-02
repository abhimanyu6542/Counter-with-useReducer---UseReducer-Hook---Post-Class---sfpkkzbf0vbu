const counterReducer = (state,action) =>{
  
  const INCREMENT = 'increment';
     const DECREMENT = 'decrement';

    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }

}

export {counterReducer}
