import '../style.less';
import { Router } from './router.js';

 class App {
    constructor() {
        // this.router = new this Router(); - почему то у меня было написано так, когда убрла this, выдает ошибку 
        this.router = new Router();

        // console.log('Запуск конструктора');

        window.addEventListener('DOMContentLoaded', this.routerChanging.bind(this));
        window.addEventListener('popstate', this.routerChanging.bind(this));
    }

    routerChanging() {
        // console.log('Изменение роута');
        this.router.openRoute();
    }
}

(new App());

