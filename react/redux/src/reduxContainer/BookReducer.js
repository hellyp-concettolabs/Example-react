import { buybook } from "./BookAction"
import { sellbook } from "./BookAction"

const initialState ={
    NumberofBooks :20
}

const BookReducer = (state=initialState,action) =>{
    switch(action.type){

        case buybook: return{
            ...state, NumberofBooks : state.NumberofBooks-1
        }
        case sellbook : return{
            ...state, NumberofBooks : state.NumberofBooks+1
        }
         default : return state
    }
}
export default BookReducer;