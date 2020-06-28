export default function rootReducer(state = { mode: false }, action) {
   switch (action.type) {
      case "CHANGE_MODE":
         return { ...state, mode: !state.mode };
      default:
         return state
   }
}