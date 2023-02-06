import Alert from "./alert.js";

export default class AddTodo {
// de esta forma añadimos el title y la description a los todos
    constructor(){
        // creamos las variables de titulo, descripcion y el boton de añadir
        this.btn = document.getElementById(`add`)
        this.title = document.getElementById(`title`);
        this.description = document.getElementById(`description`);

        this.alert = new Alert('alert');

    }

    onClick(callback){
        this.btn.onclick = ()=>{
            // validamos que se ingrese algun tipo de dato en title y description
            if (title.value === ''||description.value === ''){
                console.error("title and description are requierd");
                title.style.borderColor = "red";
                description.style.borderColor = "Red";
                this.alert.show("title and description are requierd");
                }
            else {
                callback(this.title.value,this.description.value.toUpperCase());
                this.alert.hide();
                title.style.borderColor = "";
                description.style.borderColor = "";
            
            }
        }
        }
    }
