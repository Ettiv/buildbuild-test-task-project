import {combineReducers} from "redux";
import reposReducer from "./reposReducer";

const rootReducer = combineReducers({
        reposes: reposReducer
    }
);

export default rootReducer;