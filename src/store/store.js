import { createStore } from "redux";
const INITIAL_STATE = {
  buildModal: "closed",
  currentInput: {
    git: "",
    build: "",
    branch: "master",
  },
  loaderStatus: "inactive",
  historyLength: 6,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_BUILD_MODAL":
      return { ...state, buildModal: action.payload };
    case "FILL_CURRENT_INPUT":
      return { ...state, currentInput: action.payload };
    case "TOGGLE_LOADER_STATUS":
      return { ...state, loaderStatus: action.payload };
    case "SET_VIEWED_HISTORY_LENGTH":
      return { ...state, historyLength: action.payload };
    default:
      return state;
  }
}
const store = createStore(reducer);
export const fillCurrentInput = (currentInput) => ({
  type: "FILL_CURRENT_INPUT",
  payload: currentInput,
});
export const toggleBuildModal = (buildModal) => ({
  type: "TOGGLE_BUILD_MODAL",
  payload: buildModal,
});
export const toggleLoader = (loaderStatus) => ({
  type: "TOGGLE_LOADER_STATUS",
  payload: loaderStatus,
});
export const setHistoryLength = (length) => ({
  type: "SET_VIEWED_HISTORY_LENGTH",
  payload: length,
});
export default store;
