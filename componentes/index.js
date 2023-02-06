
import Model from "./model.js";
import View from "./view.js";

// DOMContentLoaded se asegura que no se ejecute codigo JS hasta que todo el codigo html se termine de ejeuctar

document.addEventListener(`DOMContentLoaded`,()=>{
    const model = new Model();
    const view = new View();
    //establecemos la vista en el modelo.
    model.setView(view);
    //establecemos el modelo en la vista.
    view.setModel(model);
    //Usamos el método "render" en el objeto "view" para hacer que la vista se dibuje en la página web.
    view.render();


});


