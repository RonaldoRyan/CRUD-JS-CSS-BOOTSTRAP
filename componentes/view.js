import AddTodo from "./add-todo.js";
import Modal from "./modal.js";
import Filters from "./filters.js";


// el modulo view es la vista de nuestro CRUD donde exportamos los modulos addTodo, Modal y filters
export default class View{
    constructor(){
          this.model = null;
          this.table = document.getElementById(`table`);
          this.addTodoForm = new AddTodo();   //le damos la funcionalidad de la clase addTodo del modulo add-todo
          this.modal = new Modal()
          this.filters = new Filters();

         this.addTodoForm.onClick((title,description) => this.addTodo(
            title, description
         ));
          this.modal.onClick((id, values)=> this.editTodo(id,values));
          
          this.filters.onClick((filters) => this.filter(filters)); 

    }

    setModel(model){
        this.model = model;

    }

    render(){

        const todos = this.model.getTodos();
        todos.forEach((todos) => {
            this.createRow(todos)
        });
    }

    filter(filters){
        const { type, words } = filters;
        const [, ...rows] = this.table.getElementsByTagName('tr');
        for (const row of rows){
        const [title, description, completed] = row.children;
        let shouldHide = false;

        if(words){
            shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words)
        }


        const shoulByCompleted = type === 'completed';
        const isCompleted = completed.children[0].checked;

        if(type !== 'all' && shoulByCompleted !== isCompleted){
            shouldHide = true;
        }
        console.log(row, shouldHide);
        if(shouldHide){
            row.classList.add('d-none');
        } else{
            row.classList.remove('d-none');
        }
    }
    }
    // con esta funcion creamos el -todo- que es compuesto de title y desciption y tambien ejutamos la funcion de crear columnas como parametrto recibe un todo
    addTodo(title, description){
        const todo = this.model.addTodo(title, description); 
        this.createRow(todo);
    }
    
    toggleCompleted(id){
        this.model.toggleCompleted(id)
    }

    editTodo(id, values){
        
          this.model.editTodo(id, values);
          const row = document.getElementById(id);
          row.children[0].innerText = values.title;
          row.children[1].innerText = values.description;
          row.children[2].children[0].checked = values.completed;

    }

    removeTodo(id){
        this.model.removeTodo(id)
        document.getElementById(id).remove(); 
    }

    createRow(todo){
        const row = table.insertRow();
        row.setAttribute(`id`, todo.id)
        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td class="text-center">
          </td>
          <td class="text-right">
          </td>

        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);

        const btnEdit = document.createElement(`button`);
        btnEdit.classList.add(`btn`,`btn-primary`,`mb-1`);
        btnEdit.innerHTML = `<i class = "fa fa-pencil"></i>`;
        btnEdit.setAttribute('data-toggle', 'modal');
        btnEdit.setAttribute('data-target', '#modal');
        btnEdit.onclick = () => this.modal.setValues({
            id: todo.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            completed: row.children[2].children[0].checked

        });
        row.children[3].appendChild(btnEdit);
        

        const btnRemove = document.createElement(`button`);
        btnRemove.classList.add(`btn`,`btn-danger`,`mb-1`,`ml-1`);
        btnRemove.innerHTML = `<i class = "fa fa-trash"></i>`;
        btnRemove.onclick = () => this.removeTodo(todo.id)
        
    
        row.children[3].appendChild(btnRemove);
    }

    


}
