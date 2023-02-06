// Alert en caso de que no se ingresen datos al querer hace UPDATE al Modal
export default class AlertModal{
    constructor (alertId){
    this.alertModal = document.getElementById(`modal-alert`);

    }

    show(message){
        this.alertModal.classList.remove(`d-none`);
        this.alertModal.innerText = message;
    }

    hide(){
        this.alertModal.classList.add('d-none');
    }
}