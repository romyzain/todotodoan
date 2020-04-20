const state = {
    id : 0,
    username : '',
    email : '',
    roleId : 0,
    loading : false
}

let data = {
    id : 1,
    username : 'lianeddy',
    email : 'lian.eddy@gmail.com',
    roleId : 2
}

let reducer = {
    ...state,
    ...data
}

console.log(reducer)