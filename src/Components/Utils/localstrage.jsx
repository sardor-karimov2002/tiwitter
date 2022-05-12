const TODO_KEY="todos"
function getTodosLocal(){
    return JSON.parse(localStorage.getItem(TODO_KEY))|| []
}
function setTodosLocal(data) {
    localStorage.setItem(TODO_KEY, JSON.stringify(data))
}


export {getTodosLocal,setTodosLocal}