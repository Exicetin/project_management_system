// import {initFragment} from "webpack";

export class Projects {
    constructor() {
        this.openModalBtn = document.getElementById('open-modal');
        this.editModalBtn = document.getElementById('edit-1');
        this.modal = document.getElementById('modal');
        this.overlay = document.getElementById('overlay');


        this.projectArrey = [
            {
                title: 'Разработка корпоративной системы взаимодействия внутри медицинской организации',
                teamNum: 1,
                id: 1,

            },
            {
                title: 'Разработка проекта',
                teamNum: 2,
                id: 2,
            }
        ]


        this.init();

    }

    init() {
        this.openModalBtn.onclick = () => {
            this.showModal('create');
            this.modal.style.display = 'flex';
            this.overlay.style.display = 'block';
        }


        this.overlay.onclick = () => {
            this.modal.style.display = 'none';
            this.overlay.style.display = 'none';
        }

        this.getData().then(response => {
            this.projectArrey = response.projects;

            this.showProject();
        })

    };

    async getData() {
        const result = await fetch('data/projects.json').then(res => res.json());

        return result;
    }


    showModal(type) {
        this.modal.innerHTML = '';
        let modalInfo = document.createElement('div');
        modalInfo.classList.add('modal__info');

        let modalTitle = document.createElement('h2');
        modalTitle.classList.add('modal__title');


        let nameInput = document.createElement('input');
        nameInput.classList.add('modal__input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'projectName');
        nameInput.setAttribute('placeholder', 'Название проекта');
        nameInput.id = 'project-name';

        let teamNumber = document.createElement('input');
        teamNumber.classList.add('modal__input');
        teamNumber.setAttribute('type', 'text');
        teamNumber.setAttribute('name', 'teamNumber');
        teamNumber.setAttribute('placeholder', 'Номер команды');
        teamNumber.id = 'team-number';

        let modalActions = document.createElement('div');
        modalActions.classList.add('modal__action');

        let modalConfirm = document.createElement('input');
        modalConfirm.classList.add('modal__confirm');
        modalConfirm.setAttribute('type', 'submit');

        modalConfirm.id = 'create-project';
        modalConfirm.onclick = () => {
            this.validForm(nameInput, teamNumber);
        }

        let closeModal = document.createElement('button');
        closeModal.classList.add('modal__close');
        closeModal.id = 'cancel-modal';
        closeModal.innerText = 'Отмена';
        closeModal.onclick = () => {
            this.modal.style.display = 'none';
            this.overlay.style.display = 'none';
        }



        if (type === 'create') {
            modalTitle.innerText = 'Новый проект';
            modalConfirm.setAttribute('value', 'Создать проект');
        } else if (type === 'edit') {
            modalTitle.innerText = 'Изменение проекта';
            modalConfirm.setAttribute('value', 'Изменить проект');
        }

        modalActions.appendChild(modalConfirm);
        modalActions.appendChild(closeModal);

        modalInfo.appendChild(modalTitle);
        modalInfo.appendChild(nameInput);
        modalInfo.appendChild(teamNumber);
        modalInfo.appendChild(modalActions);

        this.modal.appendChild(modalInfo);


    }

    showProject() {

        let projectList = document.getElementById('projectList');
        projectList.innerHTML = '';

        this.projectArrey.forEach(project => {
            let projectItem = document.createElement('div');
            projectItem.classList.add('project__item');

            let projectTitle = document.createElement('h2');
            projectTitle.classList.add('project__title');
            projectTitle.innerText = project.title;

            let projectTeam = document.createElement('div');
            projectTeam.classList.add('project__team');
            projectTeam.innerHTML = `<span class="project__span">Команда</span> №${project.teamNum}`;


            let projectAction = document.createElement('div');
            projectAction.classList.add('project__action');
            projectAction.id = `edit-${project.id};`
            projectAction.innerHTML = `<svg class="project__edit" id="edit-1" width="40" height="40" viewBox="0 0 40 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_14)">
                                    <path
                                        d="M36.8437 1.69531C35.1328 -0.015625 32.3672 -0.015625 30.6562 1.69531L28.3047 4.03906L35.9531 11.6875L38.3047 9.33594C40.0156 7.625 40.0156 4.85938 38.3047 3.14844L36.8437 1.69531ZM13.4687 18.8828C12.9922 19.3594 12.625 19.9453 12.4141 20.5938L10.1016 27.5312C9.875 28.2031 10.0547 28.9453 10.5547 29.4531C11.0547 29.9609 11.7969 30.1328 12.4766 29.9062L19.4141 27.5938C20.0547 27.3828 20.6406 27.0156 21.125 26.5391L34.1953 13.4609L26.5391 5.80469L13.4687 18.8828ZM7.5 5C3.35937 5 0 8.35938 0 12.5V32.5C0 36.6406 3.35937 40 7.5 40H27.5C31.6406 40 35 36.6406 35 32.5V25C35 23.6172 33.8828 22.5 32.5 22.5C31.1172 22.5 30 23.6172 30 25V32.5C30 33.8828 28.8828 35 27.5 35H7.5C6.11719 35 5 33.8828 5 32.5V12.5C5 11.1172 6.11719 10 7.5 10H15C16.3828 10 17.5 8.88281 17.5 7.5C17.5 6.11719 16.3828 5 15 5H7.5Z"
                                        fill="#4693CA" />
                                </g>

                                <defs>
                                    <clipPath id="clip0_1_14">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>`;
            projectAction.onclick = () => {
                this.showModal('edit');
                this.modal.style.display = 'flex';
                this.overlay.style.display = 'block';
            }

            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectTeam);
            projectItem.appendChild(projectAction);
            projectList.appendChild(projectItem);




        })
    }

    validForm(title, teamNum) {
        title.style.borderColor = '#337db1';
        teamNum.style.borderColor = '#337db1';

        if (title.value && /^\d+$/.test(teamNum.value)) {
            console.log('Все работает хорошо!')
            this.creatProject(title.value, teamNum.value);
        } else if (!title.value) {
            title.style.borderColor = 'red';

        } else if (!/^\d+$/.test(teamNum.value)) {
            teamNum.style.borderColor = 'red';
        }
    }

    creatProject(title, teamNum) {
        let newProject = {
            title: title,
            teamNum: teamNum,
        }

        this.projectArrey.push(newProject);

        this.modal.style.display = 'none';
        this.overlay.style.display = 'none';

        this.showProject();
    }
}











