// MDV: Modelo Vista Controlador


export default  class Model{
    constructor(){

        this.view = null;
        //  "todos" se recupera de localStorage 
        this.todos = JSON.parse(localStorage.getItem('todos'));

        if (!this.todos || this.todos.length < 1){
            // o se inicializa con un objeto predeterminado si no hay ninguno en localStorage
            this.todos = [{
                id: 0,
                title: 'Tarea numero 1',
                description: 'Detalles..',
                Completed: false,
            }]
            // "currentId" se establece en el último id de la lista de tareas o en 1 si no hay tareas.
        this.currentId = 1;

        }else{
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
    }


    setView(view){
      this.view = view;
    }

//    gaurdamos la los items en el localStorage
    save(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
    }
// obtenemos una copia de los "todos"
    getTodos(){
        return this.todos.map((todo)=>({...todo}));
    }
//  este metodo se encuentra la tarea con el id especificado y devuelve su índice.
    findTodo(id){
        return this.todos.findIndex((todo)=> todo.id === id);
    }
 // se alterna el estado "completed" de una tarea. 
    toggleCompleted(id){
        console.log(id);
     const index = this.findTodo(id);
     const todo = this.todos[index];
     todo.completed = !todo.completed;
     this.save();
     console.log(this.todos)
    }
//  permite editar los valores de una tarea.
    editTodo(id, values){
       const index = this.findTodo(id);
       Object.assign(this.todos[index], values);
       this.save();
    }
//  de esta forma agregamos un nueva tarea o item a la lista 
    addTodo(title, description){
       const todo = {
        id: this.currentId++,
        title: title,
        description: description,
        completed: false,
       }

       this.todos.push(todo); // de esta forma añadimos los todo a todos
       console.log(this.todos);

       this.save()

       return Object.assign({},todo);
    }
    // eliminamos una tarea de la lista
    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index, 1);
        this.save();
    }
}


