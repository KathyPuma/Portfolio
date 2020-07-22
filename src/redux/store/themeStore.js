import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';


const saveToLocalStorage = (themeStore) => {
  try {
    const serializedState = JSON.stringify(themeStore)
    localStorage.setItem('themeStore', serializedState)
  } catch (err) {
    console.log("ERROR", err)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('themeStore')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log("ERROR", err)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const themeStore = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

themeStore.subscribe(() => saveToLocalStorage(themeStore.getState()))


export default themeStore;