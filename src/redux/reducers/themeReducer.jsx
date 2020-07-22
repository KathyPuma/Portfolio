export default function rootReducer(state = { darkMode: false, toggleChecked: false }, action) {
   switch (action.type) {
      case "CHANGE_MODE":
         return { ...state, darkMode: !state.darkMode, toggleChecked: !state.toggleChecked };
      default:
         return state
   }
}