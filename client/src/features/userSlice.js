import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    password: '',
    photo: 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
            state.photo = action.payload.photo
        },
        setSignOutState: (state) => {
            state.email = ''
            state.password = ''
            state.photo = 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'
        }
    }
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions

export const selectUserEmail = (state) => state.user.email
export const selectUserPassword = (state) => state.user.password
export const selectUserPhoto = (state) => state.user.photo

export default userSlice.reducer