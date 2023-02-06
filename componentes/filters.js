//  la clase Filters crea una funcionalidad para obtener los valores del formulario de filtrado y llamar a una función externa (el "callback") 
// con esos valores cuando se hace click en el botón de búsqueda.
export default class Filters{
    constructor(){
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');

    }

    onClick(callback){
     this.btn.onclick = (e) =>{
        e.preventDefault();
        const data = new FormData(this.form);

        callback({
            type: data.get('type'),
            words:data.get('words').toUpperCase(),

        });
     }
    }
}






