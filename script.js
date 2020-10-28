function check() {
    getTotalPriceAndSetIt('siplin-tp', 'siplin-total-tp', 'siplin-amount');
    getTotalPriceAndSetIt('ginkolet-tp', 'ginkolet-total-tp', 'ginkolet-amount');
    getTotalPriceAndSetIt('panexgine-tp', 'panexgine-total-tp', 'panexgine-amount');
    getTotalPriceAndSetIt('biotil-tp', 'biotil-total-tp', 'biotil-amount');
    getTotalPriceAndSetIt('bioga-tp', 'bioga-total-tp', 'bioga-amount');
    getTotalPriceAndSetIt('biosina-tp', 'biosina-total-tp', 'biosina-amount');
    getTotalPriceAndSetIt('biovina-tp', 'biovina-total-tp', 'biovina-amount');

    getTotalPriceAndSetIt('siplin-mrp', 'siplin-total-mrp', 'siplin-amount');
    getTotalPriceAndSetIt('ginkolet-mrp', 'ginkolet-total-mrp', 'ginkolet-amount');
    getTotalPriceAndSetIt('panexgine-mrp', 'panexgine-total-mrp', 'panexgine-amount');
    getTotalPriceAndSetIt('biotil-mrp', 'biotil-total-mrp', 'biotil-amount');
    getTotalPriceAndSetIt('bioga-mrp', 'bioga-total-mrp', 'bioga-amount');
    getTotalPriceAndSetIt('biosina-mrp', 'biosina-total-mrp', 'biosina-amount');
    getTotalPriceAndSetIt('biovina-mrp', 'biovina-total-mrp', 'biovina-amount');

    totalPay('siplin-total-tp', 'pay-siplin-total-tp');
    totalPay('ginkolet-total-tp', 'pay-ginkolet-total-tp');
    totalPay('panexgine-total-tp', 'pay-panexgine-total-tp');
    totalPay('biotil-total-tp', 'pay-biotil-total-tp');
    totalPay('bioga-total-tp', 'pay-bioga-total-tp');
    totalPay('biosina-total-tp', 'pay-biosina-total-tp');
    totalPay('biovina-total-tp', 'pay-biovina-total-tp');
    const totalMrp = parseInt(document.getElementById('siplin-total-mrp').innerHTML) + parseInt(document.getElementById('ginkolet-total-mrp').innerHTML) + parseInt(document.getElementById('panexgine-total-mrp').innerHTML) + parseInt(document.getElementById('biotil-total-mrp').innerHTML) + parseInt(document.getElementById('bioga-total-mrp').innerHTML) + parseInt(document.getElementById('biosina-total-mrp').innerHTML) + parseInt(document.getElementById('biovina-total-mrp').innerHTML)
    document.getElementById('total-mrp').innerHTML = totalMrp;
    const totalTp = parseInt(document.getElementById('siplin-total-tp').innerHTML) + parseInt(document.getElementById('ginkolet-total-tp').innerHTML) + parseInt(document.getElementById('panexgine-total-tp').innerHTML) + parseInt(document.getElementById('biotil-total-tp').innerHTML) + parseInt(document.getElementById('bioga-total-tp').innerHTML) + parseInt(document.getElementById('biosina-total-tp').innerHTML) + parseInt(document.getElementById('biovina-total-tp').innerHTML)
    document.getElementById('total-tp').innerHTML = totalTp;
    const totalPayAmount = parseInt(document.getElementById('pay-siplin-total-tp').innerHTML) + parseInt(document.getElementById('pay-ginkolet-total-tp').innerHTML) + parseInt(document.getElementById('pay-panexgine-total-tp').innerHTML) + parseInt(document.getElementById('pay-biotil-total-tp').innerHTML) + parseInt(document.getElementById('pay-bioga-total-tp').innerHTML) + parseInt(document.getElementById('pay-biosina-total-tp').innerHTML) + parseInt(document.getElementById('pay-biovina-total-tp').innerHTML)
    document.getElementById('pay-total-tp').innerHTML = totalPayAmount;
}
document.getElementById('check').addEventListener('click', check);
function getTotalPriceAndSetIt(id, idToSet, productAmount) {
    let price = parseInt(document.getElementById(id).innerHTML);
    price = price * (document.getElementById(productAmount).value);
    document.getElementById(idToSet).innerHTML = price;
}
function totalPay(totalTp, idToSet) {
    let totalTp2 = parseInt(document.getElementById(totalTp).innerHTML)
    totalTp2 = 45 / 100 * totalTp2;
    document.getElementById(idToSet).innerHTML = totalTp2;
}
