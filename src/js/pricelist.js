//Переключатель таблиц на странице цены
let pricelist = document.querySelector('.prices__table-wrapper');

if (pricelist) {
    let usmanPriceControl = document.querySelector('.js-price-control-usman');
    let otradnoePriceControl = document.querySelector('.js-price-control-otradnoe');
    let otradnoePriceTable = document.querySelector('.js-price-table-otradnoe');
    let usmanPriceTable = document.querySelector('.js-price-table-usman');
    
    usmanPriceControl.addEventListener('click', function() {
        if (this.classList.contains('tab-bar__item_disabled')) {
            this.classList.remove('tab-bar__item_disabled');
            this.classList.add('tab-bar__item_active');
            otradnoePriceTable.hidden = true;
            usmanPriceTable.hidden = false;
            otradnoePriceControl.classList.remove('tab-bar__item_active');
            otradnoePriceControl.classList.add('tab-bar__item_disabled');
        }
    });

    otradnoePriceControl.addEventListener('click', function() {
        if (this.classList.contains('tab-bar__item_disabled')) {
            this.classList.remove('tab-bar__item_disabled');
            this.classList.add('tab-bar__item_active');
            usmanPriceTable.hidden = true;
            otradnoePriceTable.hidden = false;
            usmanPriceControl.classList.remove('tab-bar__item_active');
            usmanPriceControl.classList.add('tab-bar__item_disabled');
        }
    });
}