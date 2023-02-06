// DOMContentLoaded se asegura que no se ejecute codigo JS hasta que todo el codigo html se termine de ejeuctar
document.addEventListener(`DOMContentLoaded`,()=>{
    const title = document.getElementById(`title`);
    const description = document.getElementById(`description`)
    const table = document.getElementById(`table`)
    const alert = document.getElementById(`alert`);
    const btn = document.getElementById(`add`);
    let id = 1;


    function borrarTodo(id){
        console.log(id)
        document.getElementById(id).remove();
    }



    btn.onclick = addTodo;

    function addTodo(){
        if (title.value === ''||description.value === ''){
            alert.classList.remove(`d-none`);
            alert.innerText = `Ingresa todos tus datos`
            console.error("title and description are requierd")

            title.style.borderColor = "red";
            description.style.borderColor = "Red";
            return;
            
            }
        else {

            console.log(`title:`, title.value);
            console.log(`description:`, description.value);

            title.style.borderColor = "green";
            description.style.borderColor = "green"
            
            const row = table.insertRow();
            row.setAttribute(`id`, id++)
            row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
              </td>

            `;

            const btnRemove = document.createElement(`button`);
            btnRemove.classList.add(`btn`,`btn-danger`,`mb-1`,`ml-1`);
            btnRemove.innerHTML = `<i class = "fa fa-trash"></i>`;
            btnRemove.onclick = (e)=>{
            borrarTodo(row.getAttribute(`id`))
            
            }
            row.children[3].appendChild(btnRemove);
        }
    }
})


