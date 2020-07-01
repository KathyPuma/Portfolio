export default function rootReducer(state = { darkMode: false }, action) {
   switch (action.type) {
      case "CHANGE_MODE":
         return { ...state, darkMode: !state.darkMode };
      default:
         return state
   }
}