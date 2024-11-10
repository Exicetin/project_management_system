export class Teams {
    constructor() {
        this.openModalBtn = document.getElementById('open-modal');
        this.modal = document.getElementById('modal');
        this.creatTeamBtn = document.getElementById('creat-team');
        this.cancelModal = document.getElementById('cancel-modal');
        this.overlay = document.getElementById('overlay');

        // this.teamArrey = [
        //     {
        //         id: 1,
        //         teamNum: 1,
        //         personList: ['Анна морозова В', 'Дмитрий Иванов Н', 'Степан Васильев К.']
        //     },
        //     {
        //         id: 2,
        //         teamNum: 2,
        //         personList: ['Анна морозова В', 'Дмитрий Иванов Н']
        //     },


        // ];



        this.init();

    }
    init() {
        this.openModalBtn.onclick = () => {
            this.modal.style.display = 'flex';
            this.overlay.style.display = 'block';
        }

        this.overlay.onclick = () => {
            this.modal.style.display = 'none';
            this.overlay.style.display = 'none';
        }
       
        this.getData().then(response => {
            this.teamArrey = response.teams;

            console.log(this.teamArrey);
            this.showTeam();
        })     
    }

    async getData() {
        const result = await fetch('data/teams.json').then(res => res.json());
        
        return result;
    }

    showTeam() {
        
        this.teamList = document.getElementById('teamList');
        this.teamList.innerHTML = '';
        this.teamArrey.forEach(team => {

            let teamItem = document.createElement('div');
            teamItem.classList.add('team__item');

            let teamTitle = document.createElement('h2');
            teamTitle.classList.add('team__title');
            teamTitle.innerText = `Команда № ${team.teamNum}`;

            let teamItems = document.createElement('ol');
            teamItems.classList.add('team__items');
            

            team.personList.forEach(person => {

                let personItem = document.createElement('li');
                personItem.innerText = person;
                teamItems.appendChild(personItem)
            });

            teamItem.appendChild(teamTitle);
            teamItem.appendChild(teamItems);
            this.teamList.appendChild(teamItem);


        })
    }
}

// window.onload = () => {

// }