export class Auth {
    constructor() {
        this.login = document.getElementById('login');
        this.password = document.getElementById('password');
        this.auth = document.getElementById('auth');
       
        this.auth.onclick = () => {
            this.init();
        }        
    }

    init() {
        this.getData().then(response => { 
            this.persons = response.persons;
            console.log(this.persons);
            
            this.authPerson();
        })           
    }

    async getData() {
        const result = await fetch('data/person.json').then(res => res.json());
        return result;
    }

    authPerson() {
        let loginValue = this.login.value;
        let passwordValue = this.password.value;

        this.persons.forEach(person => {
            if (loginValue === person.login || loginValue === person.email) {
                if (passwordValue === person.password) {
                    window.location.href = '#/';
                } 
            } else {
                this.login.value = "";
                this.password.value = "";
            }
        });
    }
}