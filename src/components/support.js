export class Support {
    constructor() {
        this.form = document.getElementById('supportForm');
        this.modal = document.getElementById('modal');
        this.closeModalButton = document.getElementById('closeModal');
        this.openModal = document.getElementById('send-quest');
        this.overlay = document.getElementById('overlay');


        this.openModal.onclick = () => {
            this.showModal();
        };
        this.overlay.onclick = () => {
            this.closeModal();
        }
        
        this.init();

        console.log(this.modal);
        console.log(this.overlay);
    
    }

    init() {
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
    }

    showModal() {
        this.modal.style.display = "block";
        this.overlay.style.display = "block";

    }

    closeModal() {
        this.modal.style.display = "none";
        this.overlay.style.display = "none ";

    }

    outsideClick(event) {
        if (event.target === this.modal) {
            this.closeModal();
        }
    }
}