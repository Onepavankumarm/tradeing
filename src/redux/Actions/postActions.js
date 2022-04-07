import JsonPlaceHolder from "../../Apis/JsonPlaceHolder"
export const fetchPost = () => {
    return async (dispatch) => {
        const response = await JsonPlaceHolder('./posts');
        dispatch({ type: 'FETCH_POSTS', payload: response })
    }

}