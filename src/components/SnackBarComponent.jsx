import { Snackbar, Alert } from '@mui/material';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { closeModal, modalSelector } from '../redux/slices/modalSlice';


function SnackBarComponent() {
	const { isOpen, modalType, data } = useSelector(modalSelector);

	const dispatch = useDispatch();
	const handleClose = (e) => {
		dispatch(closeModal({ type: 'SNACK-BAR' }));
	};
	return (
		<>
			{modalType === 'SNACK-BAR' && (
				<Snackbar
					open={isOpen && modalType === 'SNACK-BAR'}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity={data.severity}
						sx={{ width: '100%' }}
						style={{fontSize: '1.5rem'}}
					>
						{data.message}
					</Alert>
				</Snackbar>
			)}
		</>
	);
}

export default SnackBarComponent;