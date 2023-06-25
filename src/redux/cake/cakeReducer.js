import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numOfCake:12
}

const cakeReducer = (state= initialState ,action)=>{

    switch(action.types){
        case BUY_CAKE: return{
            ...state,
            numOfCake:state.numOfCake
        }
        default : return state
    }

}


export default cakeReducer