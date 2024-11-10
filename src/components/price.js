export class Price {
    constructor() {
        this.init();
    }

    init() {
        this.getData().then(response => {
            this.priceArray = response.price;
            console.log(this.priceArray);

            this.showPrice();
        })
    }

    async getData() {
        const result = await fetch('data/price.json').then(res => res.json());
        return result;
    }

    showPrice() {
     
        this.pricePlans = document.getElementById('pricePlans');
        this.pricePlans.innerHTML = '';
        this.priceArray.forEach(price => {

            let pricePlan = document.createElement('div');
            pricePlan.classList.add('price__plan');

            let priceTitle = document.createElement('p');
            priceTitle.classList.add('price__title');
            priceTitle.innerText = price.title;

            let priceList = document.createElement('ol');
            priceList.classList.add('price__list');

            let priceTeam = document.createElement('p');
            priceTeam.classList.add('price__team');
            priceTeam.innerText = price.priceCount;

            price.conditions.forEach(item => {
                let priceListItem = document.createElement('li');
                priceListItem.classList.add('price__item');
                priceListItem.innerText = item;                

                priceList.appendChild(priceListItem);

            });
            
            
            pricePlan.appendChild(priceTitle);
            pricePlan.appendChild(priceTeam);
            pricePlan.appendChild(priceList);
            this.pricePlans.appendChild(pricePlan);





        })
    }


}

