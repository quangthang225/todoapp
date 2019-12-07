import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes'

let nextId = 0
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextId++,
    text
})

export const editTodo = (id) => ({
    type: EDIT_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})