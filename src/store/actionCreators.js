import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM,
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = (dispatch) => {
    return (dispatch) => {
        axios.get('http://rap2api.taobao.org/app/mock/232409/store').then((res) => {
            const data = res.data
            const action=getListAction(data)
            dispatch(action)
        })
    }
}
