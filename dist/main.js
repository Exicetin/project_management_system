/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-progect/./style.less?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.less */ \"./style.less\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\n\r\n class App {\r\n    constructor() {\r\n        // this.router = new this Router(); - почему то у меня было написано так, когда убрла this, выдает ошибку \r\n        this.router = new _router_js__WEBPACK_IMPORTED_MODULE_1__.Router();\r\n\r\n        // console.log('Запуск конструктора');\r\n\r\n        window.addEventListener('DOMContentLoaded', this.routerChanging.bind(this));\r\n        window.addEventListener('popstate', this.routerChanging.bind(this));\r\n    }\r\n\r\n    routerChanging() {\r\n        // console.log('Изменение роута');\r\n        this.router.openRoute();\r\n    }\r\n}\r\n\r\n(new App());\r\n\r\n\n\n//# sourceURL=webpack://js-progect/./src/app.js?");

/***/ }),

/***/ "./src/components/auth.js":
/*!********************************!*\
  !*** ./src/components/auth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Auth: () => (/* binding */ Auth)\n/* harmony export */ });\nclass Auth {\r\n    constructor() {\r\n        this.login = document.getElementById('login');\r\n        this.password = document.getElementById('password');\r\n        this.auth = document.getElementById('auth');\r\n       \r\n        this.auth.onclick = () => {\r\n            this.init();\r\n        }        \r\n    }\r\n\r\n    init() {\r\n        this.getData().then(response => {\r\n            this.persons = response.persons;\r\n            console.log(this.persons);\r\n            \r\n            this.authPerson();\r\n        })           \r\n    }\r\n\r\n    async getData() {\r\n        const result = await fetch('data/person.json').then(res => res.json());\r\n        return result;\r\n    }\r\n\r\n    authPerson() {\r\n        let loginValue = this.login.value;\r\n        let passwordValue = this.password.value;\r\n\r\n        this.persons.forEach(person => {\r\n            if (loginValue === person.login || loginValue === person.email) {\r\n                if (passwordValue === person.password) {\r\n                    window.location.href = '#/'\r\n                } \r\n            } else {\r\n                this.login.value = \"\";\r\n                this.password.value = \"\";\r\n            }\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://js-progect/./src/components/auth.js?");

/***/ }),

/***/ "./src/components/price.js":
/*!*********************************!*\
  !*** ./src/components/price.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Price: () => (/* binding */ Price)\n/* harmony export */ });\nclass Price {\r\n    constructor() {\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        this.getData().then(response => {\r\n            this.priceArray = response.price;\r\n            console.log(this.priceArray);\r\n\r\n            this.showPrice();\r\n        })\r\n    }\r\n\r\n    async getData() {\r\n        const result = await fetch('data/price.json').then(res => res.json());\r\n        return result;\r\n    }\r\n\r\n    showPrice() {\r\n     \r\n        this.pricePlans = document.getElementById('pricePlans');\r\n        this.pricePlans.innerHTML = '';\r\n        this.priceArrey.forEach(price => {\r\n\r\n            let pricePlan = document.createElement('div');\r\n            pricePlan.classList.add('price__plan');\r\n\r\n            let priceTitle = document.createElement('p');\r\n            priceTitle.classList.add('price__title');\r\n            priceTitle.innerText = price.title;\r\n\r\n            let priceList = document.createElement('ol');\r\n            priceList.classList.add('price__list');\r\n\r\n            price.conditions.forEach(item => {\r\n                let priceListItem = document.createElement('li');\r\n                priceListItem.classList.add('price__item');\r\n                priceListItem.innerText = item;\r\n\r\n                priceList.appendChild(priceListItem);\r\n\r\n            });\r\n\r\n\r\n\r\n            pricePlan.appendChild(priceTitle);\r\n            pricePlan.appendChild(priceList);\r\n            this.pricePlans.appendChild(pricePlan);\r\n\r\n\r\n\r\n\r\n\r\n        })\r\n    }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://js-progect/./src/components/price.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\n// import {initFragment} from \"webpack\";\r\n\r\nclass Projects {\r\n    constructor() {\r\n        this.openModalBtn = document.getElementById('open-modal');\r\n        this.editModalBtn = document.getElementById('edit-1');\r\n        this.modal = document.getElementById('modal');\r\n        this.overlay = document.getElementById('overlay');\r\n\r\n\r\n        this.projectArrey = [\r\n            {\r\n                title: 'Разработка корпоративной системы взаимодействия внутри медицинской организации',\r\n                teamNum: 1,\r\n                id: 1,\r\n\r\n            },\r\n            {\r\n                title: 'Разработка проекта',\r\n                teamNum: 2,\r\n                id: 2,\r\n            }\r\n        ]\r\n\r\n\r\n        this.init();\r\n\r\n    }\r\n\r\n    init() {\r\n        this.openModalBtn.onclick = () => {\r\n            this.showModal('create');\r\n            this.modal.style.display = 'flex';\r\n            this.overlay.style.display = 'block';\r\n        }\r\n\r\n\r\n        this.overlay.onclick = () => {\r\n            this.modal.style.display = 'none';\r\n            this.overlay.style.display = 'none';\r\n        }\r\n\r\n        this.getData().then(response => {\r\n            this.projectArrey = response.projects;\r\n\r\n            this.showProject();\r\n        })\r\n\r\n    };\r\n\r\n    async getData() {\r\n        const result = await fetch('data/projects.json').then(res => res.json());\r\n\r\n        return result;\r\n    }\r\n\r\n\r\n    showModal(type) {\r\n        this.modal.innerHTML = '';\r\n        let modalInfo = document.createElement('div');\r\n        modalInfo.classList.add('modal__info');\r\n\r\n        let modalTitle = document.createElement('h2');\r\n        modalTitle.classList.add('modal__title');\r\n\r\n\r\n        let nameInput = document.createElement('input');\r\n        nameInput.classList.add('modal__input');\r\n        nameInput.setAttribute('type', 'text');\r\n        nameInput.setAttribute('name', 'projectName');\r\n        nameInput.setAttribute('placeholder', 'Название проекта');\r\n        nameInput.id = 'project-name';\r\n\r\n        let teamNumber = document.createElement('input');\r\n        teamNumber.classList.add('modal__input');\r\n        teamNumber.setAttribute('type', 'text');\r\n        teamNumber.setAttribute('name', 'teamNumber');\r\n        teamNumber.setAttribute('placeholder', 'Номер команды');\r\n        teamNumber.id = 'team-number';\r\n\r\n        let modalActions = document.createElement('div');\r\n        modalActions.classList.add('modal__action');\r\n\r\n        let modalConfirm = document.createElement('input');\r\n        modalConfirm.classList.add('modal__confirm');\r\n        modalConfirm.setAttribute('type', 'submit');\r\n\r\n        modalConfirm.id = 'create-project';\r\n        modalConfirm.onclick = () => {\r\n            this.validForm(nameInput, teamNumber);\r\n        }\r\n\r\n        let closeModal = document.createElement('button');\r\n        closeModal.classList.add('modal__close');\r\n        closeModal.id = 'cancel-modal';\r\n        closeModal.innerText = 'Отмена';\r\n        closeModal.onclick = () => {\r\n            this.modal.style.display = 'none';\r\n            this.overlay.style.display = 'none';\r\n        }\r\n\r\n\r\n\r\n        if (type === 'create') {\r\n            modalTitle.innerText = 'Новый проект';\r\n            modalConfirm.setAttribute('value', 'Создать проект');\r\n        } else if (type === 'edit') {\r\n            modalTitle.innerText = 'Изменение проекта';\r\n            modalConfirm.setAttribute('value', 'Изменить проект');\r\n        }\r\n\r\n        modalActions.appendChild(modalConfirm);\r\n        modalActions.appendChild(closeModal);\r\n\r\n        modalInfo.appendChild(modalTitle);\r\n        modalInfo.appendChild(nameInput);\r\n        modalInfo.appendChild(teamNumber);\r\n        modalInfo.appendChild(modalActions);\r\n\r\n        this.modal.appendChild(modalInfo);\r\n\r\n\r\n    }\r\n\r\n    showProject() {\r\n\r\n        let projectList = document.getElementById('projectList');\r\n        projectList.innerHTML = '';\r\n\r\n        this.projectArrey.forEach(project => {\r\n            let projectItem = document.createElement('div');\r\n            projectItem.classList.add('project__item');\r\n\r\n            let projectTitle = document.createElement('h2');\r\n            projectTitle.classList.add('project__title');\r\n            projectTitle.innerText = project.title;\r\n\r\n            let projectTeam = document.createElement('div');\r\n            projectTeam.classList.add('project__team');\r\n            projectTeam.innerHTML = `<span class=\"project__span\">Команда</span> №${project.teamNum}`;\r\n\r\n\r\n            let projectAction = document.createElement('div');\r\n            projectAction.classList.add('project__action');\r\n            projectAction.id = `edit-${project.id};`\r\n            projectAction.innerHTML = `<svg class=\"project__edit\" id=\"edit-1\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <g clip-path=\"url(#clip0_1_14)\">\r\n                                    <path\r\n                                        d=\"M36.8437 1.69531C35.1328 -0.015625 32.3672 -0.015625 30.6562 1.69531L28.3047 4.03906L35.9531 11.6875L38.3047 9.33594C40.0156 7.625 40.0156 4.85938 38.3047 3.14844L36.8437 1.69531ZM13.4687 18.8828C12.9922 19.3594 12.625 19.9453 12.4141 20.5938L10.1016 27.5312C9.875 28.2031 10.0547 28.9453 10.5547 29.4531C11.0547 29.9609 11.7969 30.1328 12.4766 29.9062L19.4141 27.5938C20.0547 27.3828 20.6406 27.0156 21.125 26.5391L34.1953 13.4609L26.5391 5.80469L13.4687 18.8828ZM7.5 5C3.35937 5 0 8.35938 0 12.5V32.5C0 36.6406 3.35937 40 7.5 40H27.5C31.6406 40 35 36.6406 35 32.5V25C35 23.6172 33.8828 22.5 32.5 22.5C31.1172 22.5 30 23.6172 30 25V32.5C30 33.8828 28.8828 35 27.5 35H7.5C6.11719 35 5 33.8828 5 32.5V12.5C5 11.1172 6.11719 10 7.5 10H15C16.3828 10 17.5 8.88281 17.5 7.5C17.5 6.11719 16.3828 5 15 5H7.5Z\"\r\n                                        fill=\"#4693CA\" />\r\n                                </g>\r\n\r\n                                <defs>\r\n                                    <clipPath id=\"clip0_1_14\">\r\n                                        <rect width=\"40\" height=\"40\" fill=\"white\" />\r\n                                    </clipPath>\r\n                                </defs>\r\n                            </svg>`;\r\n            projectAction.onclick = () => {\r\n                this.showModal('edit');\r\n                this.modal.style.display = 'flex';\r\n                this.overlay.style.display = 'block';\r\n            }\r\n\r\n            projectItem.appendChild(projectTitle);\r\n            projectItem.appendChild(projectTeam);\r\n            projectItem.appendChild(projectAction);\r\n            projectList.appendChild(projectItem);\r\n\r\n\r\n\r\n\r\n        })\r\n    }\r\n\r\n    validForm(title, teamNum) {\r\n        title.style.borderColor = '#337db1';\r\n        teamNum.style.borderColor = '#337db1';\r\n\r\n        if (title.value && /^\\d+$/.test(teamNum.value)) {\r\n            console.log('Все работает хорошо!')\r\n            this.creatProject(title.value, teamNum.value);\r\n        } else if (!title.value) {\r\n            title.style.borderColor = 'red';\r\n\r\n        } else if (!/^\\d+$/.test(teamNum.value)) {\r\n            teamNum.style.borderColor = 'red';\r\n        }\r\n    }\r\n\r\n    creatProject(title, teamNum) {\r\n        let newProject = {\r\n            title: title,\r\n            teamNum: teamNum,\r\n        }\r\n\r\n        this.projectArrey.push(newProject);\r\n\r\n        this.modal.style.display = 'none';\r\n        this.overlay.style.display = 'none';\r\n\r\n        this.showProject();\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-progect/./src/components/project.js?");

/***/ }),

/***/ "./src/components/support.js":
/*!***********************************!*\
  !*** ./src/components/support.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Support: () => (/* binding */ Support)\n/* harmony export */ });\nclass Support {\r\n    constructor() {\r\n        this.form = document.getElementById('supportForm');\r\n        this.modal = document.getElementById('modal');\r\n        this.closeModalButton = document.getElementById('closeModal');\r\n        this.openModal = document.getElementById('send-quest');\r\n        this.overlay = document.getElementById('overlay');\r\n\r\n\r\n        this.openModal.onclick = () => {\r\n            this.showModal();\r\n        };\r\n        this.overlay.onclick = () => {\r\n            this.closeModal();\r\n        }\r\n        \r\n        this.init();\r\n\r\n        console.log(this.modal);\r\n        console.log(this.overlay);\r\n    \r\n    }\r\n\r\n    init() {\r\n        // this.form.addEventListener('submit', this.handleSubmit.bind(this));\r\n        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));\r\n        \r\n    \r\n        // window.addEventListener('click', this.outsideClick.bind(this));\r\n    }\r\n\r\n    // handleSubmit(event) {\r\n    //     event.preventDefault();\r\n    //     this.showModal();\r\n    //     this.form.reset(); \r\n    // }\r\n\r\n    showModal() {\r\n        this.modal.style.display = \"block\";\r\n        this.overlay.style.display = \"block\";\r\n\r\n    }\r\n\r\n    closeModal() {\r\n        this.modal.style.display = \"none\";\r\n        this.overlay.style.display = \"none \";\r\n\r\n    }\r\n\r\n    outsideClick(event) {\r\n        if (event.target === this.modal) {\r\n            this.closeModal();\r\n        }\r\n    }\r\n}\r\n\r\n\r\n// // document.addEventListener('DOMContentLoaded', () => {\r\n// //     new Support();\r\n// });\n\n//# sourceURL=webpack://js-progect/./src/components/support.js?");

/***/ }),

/***/ "./src/components/team.js":
/*!********************************!*\
  !*** ./src/components/team.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Teams: () => (/* binding */ Teams)\n/* harmony export */ });\nclass Teams {\r\n    constructor() {\r\n        this.openModalBtn = document.getElementById('open-modal');\r\n        this.modal = document.getElementById('modal');\r\n        this.creatTeamBtn = document.getElementById('creat-team');\r\n        this.cancelModal = document.getElementById('cancel-modal');\r\n        this.overlay = document.getElementById('overlay');\r\n\r\n        // this.teamArrey = [\r\n        //     {\r\n        //         id: 1,\r\n        //         teamNum: 1,\r\n        //         personList: ['Анна морозова В', 'Дмитрий Иванов Н', 'Степан Васильев К.']\r\n        //     },\r\n        //     {\r\n        //         id: 2,\r\n        //         teamNum: 2,\r\n        //         personList: ['Анна морозова В', 'Дмитрий Иванов Н']\r\n        //     },\r\n\r\n\r\n        // ];\r\n\r\n\r\n\r\n        this.init();\r\n\r\n    }\r\n    init() {\r\n        this.openModalBtn.onclick = () => {\r\n            this.modal.style.display = 'flex';\r\n            this.overlay.style.display = 'block';\r\n        }\r\n\r\n        this.overlay.onclick = () => {\r\n            this.modal.style.display = 'none';\r\n            this.overlay.style.display = 'none';\r\n        }\r\n       \r\n        this.getData().then(response => {\r\n            this.teamArrey = response.teams;\r\n\r\n            console.log(this.teamArrey);\r\n            this.showTeam();\r\n        })     \r\n    }\r\n\r\n    async getData() {\r\n        const result = await fetch('data/teams.json').then(res => res.json());\r\n        \r\n        return result;\r\n    }\r\n\r\n    showTeam() {\r\n        \r\n        this.teamList = document.getElementById('teamList');\r\n        this.teamList.innerHTML = '';\r\n        this.teamArrey.forEach(team => {\r\n\r\n            let teamItem = document.createElement('div');\r\n            teamItem.classList.add('team__item');\r\n\r\n            let teamTitle = document.createElement('h2');\r\n            teamTitle.classList.add('team__title');\r\n            teamTitle.innerText = `Команда № ${team.teamNum}`;\r\n\r\n            let teamItems = document.createElement('ol');\r\n            teamItems.classList.add('team__items');\r\n            \r\n\r\n            team.personList.forEach(person => {\r\n\r\n                let personItem = document.createElement('li');\r\n                personItem.innerText = person;\r\n                teamItems.appendChild(personItem)\r\n            });\r\n\r\n            teamItem.appendChild(teamTitle);\r\n            teamItem.appendChild(teamItems);\r\n            this.teamList.appendChild(teamItem);\r\n\r\n\r\n        })\r\n    }\r\n}\r\n\r\n// window.onload = () => {\r\n\r\n// }\n\n//# sourceURL=webpack://js-progect/./src/components/team.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project.js */ \"./src/components/project.js\");\n/* harmony import */ var _components_team_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/team.js */ \"./src/components/team.js\");\n/* harmony import */ var _components_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth.js */ \"./src/components/auth.js\");\n/* harmony import */ var _components_price_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/price.js */ \"./src/components/price.js\");\n/* harmony import */ var _components_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/support.js */ \"./src/components/support.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.content = document.getElementById('content');\r\n        this.pageTitleElement = document.getElementById('page-title');\r\n        this.route = [\r\n            {\r\n                route: '#/',\r\n                title: 'Проекты',\r\n                template: 'template/projects.html',\r\n                load: () => {\r\n                    new _components_project_js__WEBPACK_IMPORTED_MODULE_0__.Projects();\r\n                }\r\n            },\r\n            {\r\n                route: '#/teams',\r\n                title: 'Команды',\r\n                template: 'template/teams.html',\r\n                load: () => {\r\n                    new _components_team_js__WEBPACK_IMPORTED_MODULE_1__.Teams();\r\n                }\r\n            },\r\n            {\r\n                route: '#/auth',\r\n                title: 'Авторизация',\r\n                template: 'template/auth.html',\r\n                load: () => {\r\n                    new _components_auth_js__WEBPACK_IMPORTED_MODULE_2__.Auth();\r\n                }\r\n            },\r\n            {\r\n                route: '#/price',\r\n                title: 'Прайс',\r\n                template: 'template/price.html',\r\n                load: () => {\r\n                    new _components_price_js__WEBPACK_IMPORTED_MODULE_3__.Price();\r\n                }\r\n            },\r\n            {\r\n                route: '#/support',\r\n                title: 'Вопросы',\r\n                template: 'template/support.html',\r\n                load: () => {\r\n                    new _components_support_js__WEBPACK_IMPORTED_MODULE_4__.Support();\r\n                }\r\n            },\r\n            // {\r\n            //     route: '#/logout',\r\n            //     title: '',\r\n            //     template: '',\r\n            //     load: () => {\r\n            //     }\r\n            // },\r\n\r\n        ]\r\n    }\r\n\r\n    async openRoute() {\r\n        const urlRoute = window.location.hash.split('?')[0];\r\n        // if (urlRoute === '#/auth') {\r\n        //     window.location.href = '#/';\r\n        //     return;\r\n        // }\r\n        document.getElementById('menu').style.display = 'flex';\r\n       \r\n        // if (urlRoute === '#/logout') {\r\n        //     window.location.href = '#/auth';\r\n        //     document.getElementById('menu').style.display = 'none';\r\n           \r\n        // }\r\n\r\n        if (urlRoute === '#/auth') {\r\n            window.location.href = '#/auth';\r\n            document.getElementById('menu').style.display = 'none';\r\n            \r\n        }\r\n\r\n\r\n\r\n        const newRoute = this.route.find(item => {\r\n            return item.route === urlRoute;\r\n        });\r\n\r\n        if (!newRoute) {\r\n            window.location.href = '#/';\r\n            return;\r\n        };\r\n        this.content.innerHTML = await fetch(newRoute.template).then(response => response.text());\r\n        this.pageTitleElement.innerText = newRoute.title;\r\n\r\n        newRoute.load();\r\n    }\r\n}\n\n//# sourceURL=webpack://js-progect/./src/router.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;