function updatePriceList(type, price) {

    let currentPrice = document.getElementById(type + "-price").innerText;
    document.getElementById("total-price").innerText =
        parseFloat(document.getElementById("total-price").innerText) - parseFloat(currentPrice);
    const Price = price;
    const Cost = document.getElementById(type + "-price");
    console.log(Cost);
    parseFloat(document.getElementById("total-price").innerText) - parseFloat(Cost.innerText);
    Cost.innerText = Price;
    document.getElementById("total-price").addEventListener('click', function () {
        Cost1.innerText = Price1;
    });
    document.getElementById("total-price").innerText =
        parseFloat(document.getElementById("total-price").innerText) + Price;

    document.getElementById("final-price").innerText =
        parseFloat(document.getElementById("final-price").innerText) - parseFloat(currentPrice);

    document.getElementById("final-price").innerText =
        parseFloat(document.getElementById("final-price").innerText) + Price;

}

document.getElementById("16gb-memory").addEventListener('click', function () {

    updatePriceList('extramemory', 180);
    document.getElementById("16gb-memory").disabled = true;
    document.getElementById("8gb-memory").disabled = false;
});
document.getElementById("8gb-memory").addEventListener('click', function () {
    updatePriceList('extramemory', 0);
    document.getElementById("16gb-memory").disabled = false;
    document.getElementById("8gb-memory").disabled = true;

});
document.getElementById("256gb-ssd").addEventListener('click', function () {
    updatePriceList('extrastorage', 0)
});
document.getElementById("512gb-ssd").addEventListener('click', function () {
    updatePriceList('extrastorage', 100)
});
document.getElementById("1tb-ssd").addEventListener('click', function () {
    updatePriceList('extrastorage', 180)
});
document.getElementById("add-delivery-charge").addEventListener('click', function () {

    updatePriceList('extradelivery', 20);
    document.getElementById("add-delivery-charge").disabled = true;
    document.getElementById("delivery-charge").disabled = false;
});
document.getElementById("delivery-charge").addEventListener('click', function () {
    updatePriceList('extradelivery', 0);
    document.getElementById("add-delivery-charge").disabled = false;
    document.getElementById("delivery-charge").disabled = true;

});

document.getElementById('apply-btn').addEventListener('click', function () {
    let promoCodeValue = document.getElementById('promo-input').value;
    if (promoCodeValue == 'stevekaku') {
        let totalPrice = document.getElementById('total-price').innerText;
        document.getElementById('promo-input').value = '';
        document.getElementById('final-price').innerText = parseFloat(totalPrice) * .8;
    }
});
