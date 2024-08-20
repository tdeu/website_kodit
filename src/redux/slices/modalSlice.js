
// modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false,
		modalType: null,
		data: {},
	},
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true;
			state.modalType = action.payload.type;
			state.data = action.payload.data;
		},
		closeModal: (state) => {
			state.isOpen = false;
			state.modalType = null;
			state.data = {};
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state) => state.modal;
export default modalSlice.reducer;