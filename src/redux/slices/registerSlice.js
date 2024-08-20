import { createSlice } from '@reduxjs/toolkit';
import axios from './../../../node_modules/axios/lib/axios';

const initialState = {
	loading: false,
	hasErrors: false,
	errMsg: '',
};

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		register: (state, { payload }) => {
			state.loading = true;
		},

		registerSuccess: (state, { payload }) => {
			state.loading = false;
		},

		registerFailure: (state, { payload }) => {
			state.loading = false;
			state.hasErrors = true;
			state.errMsg = payload;
			console.log('failure');
		},
	},
});
export const { register, registerSuccess, registerFailure } =
	registerSlice.actions;
export const registerSelector = (state) => state.register;

export const registerThunk = (data) => {
	return async (dispatch) => {
		dispatch(register());
        console.log(data);
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/send-kodit-mail`, data);
			dispatch(registerSuccess(response.data));
			return response;
		} catch (err) {
			console.error(err.message);
			dispatch(registerFailure(err.message));
			return err.response;
		}
	};
};
export default registerSlice.reducer;