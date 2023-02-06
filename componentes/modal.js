import AlertModal from './alert-modal.js';


//  seguimos en parte la logica a la hora de hacer el addTodo y la aplicamos al Modal
export default class Modal {
    constructor(){
        this.titleModal = document.getElementById('modal-title');
        this.descriptionModal = document.getElementById('modal-description');
        this.btnModal = document.getElementById('modal-btn');
        this.completedModal = document.getElementById('modal-completed');
        this.alertModal = new AlertModal('modal-alert');
        this.todo = null;
        
        
    }


    setValues(todo){
        this.todo = todo;
        this.titleModal.value = todo.title;
        this.descriptionModal.value = todo.description;
        this.completedModal.checked = todo.completed;
      
    }
  

    onClick(callback){
        this.btnModal.onclick = ()=>{

            if (this.titleModal.value === ''|| this.descriptionModal.value === ''){
                // console.error("title and description are requierd");
                this.alertModal.show('Title and description are required del modal');
                return;
                }
                this.alertModal.hide();
           $('#modal').modal('toggle');

           callback(this.todo.id, {

            title: this.titleModal.value,
            description: this.descriptionModal.value,
            completed: this.completedModal.checked,

           });
           
        }
    }
}