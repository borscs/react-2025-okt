import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";


// NOTE: PURE REDUX IN REACT
// const initialState = {counter: 0, showCounter: true};
//
// const counterReducer = (state =initialState, action) => {
// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
//
// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
//
// 	if(action.type === 'incrementVale') {
// 		return {
// 			counter: state.counter + action.payload,
// 			showCounter: state.showCounter,
// 		};
// 	}
//
// 	if(action.type === 'toggleCounter') {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}
//
// 	console.warn(
// 		`Action type ${action.type} is not supported`
// 	)
// 	return state;
// }
//
//
// const store = createStore(counterReducer);
//
// export default store;

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		incrementVale: (state, action) => {
			state.counter += action.payload;
		},
		toggleCounter: (state) => {
			state.showCounter = !state.showCounter;
		}
	}
});


const initialAuthState = {
	isAuthenticated: false
};


const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		}
	}
})



const store = configureStore({
	reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;




