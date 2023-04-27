import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    repo: [],
}

export const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        setRepos: (state, action) => {
            state.repo = action.payload
        },
    },
})

export const { setRepos } = repoSlice.actions

export default repoSlice.reducer