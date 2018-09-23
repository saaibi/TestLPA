export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "COUNTERSUM":
            return (state >= 0 ? state = state + 1 : state);
        case "COUNTERRES":
            return (state >= 1 ? state = state - 1 : state);
        default:
            return state;
    }
}