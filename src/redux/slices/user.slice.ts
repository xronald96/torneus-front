import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: undefined,
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});
// actions
export const { setCurrentUser } = userSlice.actions;

//selectors

export const getCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
