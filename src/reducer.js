export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQAVAkcUvCoZ736LgxiLgTIewZbwrR2YLlf9XOQS3k9rTfb_FHJGKhfWRI4tnoF18-Ed7OdERR38SONE-XsZIfdnopGvFX2lTooazbU9zb3Z4SjIvW2NtBpt0Jkjfy9sVkDO-87XWX220ZOhjLmgXxXTEYMt8NdWaBIhd1O70x1KQiNbJ5KsyIgEIL9u9d5rjh6virJ9HibfbccxonVq'
}


const reducer = (state = initialState , action) =>{

    //Action -> type , [payload]
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        }
        default:
            return state
    
    
    }
}
export default reducer;

