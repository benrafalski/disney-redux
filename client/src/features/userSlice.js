import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    photo: 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            if(action.payload.photo !== ''){
                state.photo = action.payload.photo
            }
        },
        setSignOutState: state => {
            state.name = null
            state.email = null
            state.photo = 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'
        }
    }
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions
export const selectUserName = state => state.users.name
export const selectUserEmail = state => state.users.email
export const selectUserPhoto = state => state.users.photo
export default userSlice.reducer