import { Projects } from "./components/project.js";
import { Teams } from "./components/team.js";
import { Auth } from "./components/auth.js";
import { Price } from "./components/price.js";
import { Support } from "./components/support.js";

export class Router {
    constructor() {
        this.content = document.getElementById('content');
        this.pageTitleElement = document.getElementById('page-title');
        this.route = [
            {
                route: '#/',
                title: 'Проекты',
                template: 'template/projects.html',
                load: () => {
                    new Projects();
                }
            },
            {
                route: '#/teams',
                title: 'Команды',
                template: 'template/teams.html',
                load: () => {
                    new Teams();
                }
            },
            {
                route: '#/auth',
                title: 'Авторизация',
                template: 'template/auth.html',
                load: () => {
                    new Auth();
                }
            },
            {
                route: '#/price',
                title: 'Прайс',
                template: 'template/price.html',
                load: () => {
                    new Price();
                }
            },
            {
                route: '#/support',
                title: 'Вопросы',
                template: 'template/support.html',
                load: () => {
                    new Support();
                }
            },
            // {
            //     route: '#/logout',
            //     title: '',
            //     template: '',
            //     load: () => {
            //     }
            // },

        ]
    }

    async openRoute() {
        const urlRoute = window.location.hash.split('?')[0];

        document.getElementById('menu').style.display = 'flex';

        if (urlRoute === '#/auth') {
            window.location.href = '#/auth';
            document.getElementById('menu').style.display = 'none';   
        }

        const newRoute = this.route.find(item => {
            return item.route === urlRoute;
        });

        if (!newRoute) {
            window.location.href = '#/';
            return;
        };
        this.content.innerHTML = await fetch(newRoute.template).then(response => response.text());
        this.pageTitleElement.innerText = newRoute.title;

        newRoute.load();
    }
}