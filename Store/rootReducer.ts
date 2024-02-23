import { reducer as countReducer } from "./count";

// Define the ActionType with a more specific type for the 'type' property
export interface ActionType {
    type: string;
    payload?: any;
}

// Use a more specific type for the rootReducer
export type RootState = {
    count: ReturnType<typeof countReducer>;
};

// Define the rootReducer explicitly as a function that combines different reducers
const rootReducer = {
    count: countReducer,
};

export default rootReducer;
