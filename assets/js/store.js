import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
 * state layout: {
 *   tasks: [... Tasks ...],
 *   users: [... Users ...],
 *   task_form: {
 *     title: "",
 *     description: "",
 *     work_time: null,
 *     done: null,
 *     assignee_id: null,
 *     token: ""
 *   }
 *   user_form: {
 *     name: "",
 *     password: ""
 *   }
 *   token: {
 *     user_id: null,
 *     token: ""
 *   }
 *   login: {
 *     name: "",
 *     pass: ""
 *   }
 * }
 *
 * */

 function tasks(state = [], action) {
   switch (action.type) {
   case 'TASKS_LIST':
     return [...action.tasks];
   case 'ADD_TASK':
     return [action.task, ...state];
   default:
     return state;
   }
 }

 function users(state = [], action) {
   switch (action.type) {
   case 'USERS_LIST':
     return [...action.users];
   default:
     return state;
   }
 }

 let empty_task_form = {
   title: "",
   description: "",
   work_time: 0,
   done: 0,
   assignee_id: "",
   token: ""
 };

 let empty_user_form = {
   name: "",
   password: "",
   token: ""
 };

 function taskform(state = empty_task_form, action) {
   switch (action.type) {
     case 'UPDATE_TASK_FORM':
       return Object.assign({}, state, action.data);
     case 'CLEAR_TASK_FORM':
       return Object.assign({}, state, empty_task_form);
     case 'SET_TOKEN':
       return Object.assign({}, state, action.token);
     default:
       return state;
   }
 }

 function userform(state = empty_user_form, action) {
   switch (action.type) {
     case 'UPDATE_USER_FORM':
      return Object.assign({}, state, action.data);
     case 'CLEAR_USER_FORM':
      return Object.assign({}, state, empty_user_form);
     case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
     default:
      return state;
   }
 }

 function token(state = null, action) {
   switch (action.type) {
     case 'SET_TOKEN':
       return action.token;
     default:
       return state;
   }
 }

 let empty_login = {
   name: "",
   pass: "",
 };

 function login(state = empty_login, action) {
   switch (action.type) {
     case 'UPDATE_LOGIN_FORM':
       return Object.assign({}, state, action.data);
     default:
       return state;
   }
 }

 function root_reducer(state0, action) {
   console.log("reducer", action);
   // {posts, users, form} is ES6 shorthand for
   // {posts: posts, users: users, form: form}
   let reducer = combineReducers({tasks, users, taskform, userform, token, login});
   let state1 = reducer(state0, action);
   console.log("state1", state1);
   return deepFreeze(state1);
 };

 let store = createStore(root_reducer);
 export default store;
