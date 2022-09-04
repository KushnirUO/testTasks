import {createSlice} from '@reduxjs/toolkit'

const blockSlice = createSlice({
    name: 'blocks',
    initialState: {
       blocks: [],
    },
    reducers: {
        addBlock(state, action) {
            state.blocks.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                text: action.payload.text,
                link: action.payload.link,
                file: action.payload.file
            });
        },
        removeBlock: (state, action) => {
            state.blocks = state.blocks.filter(block => block.id !== action.payload.id)
        }
    }
})

export const {addBlock, removeBlock} = blockSlice.actions
export default blockSlice.reducer