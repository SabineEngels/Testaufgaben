

    // Zähler

    let counter = 0;
    let artikelpreis = 24.95;
    let gesamtpreis = 0;

    let clickminus = document.querySelector("#minus");
    clickminus.addEventListener("click", minuscounter);

    let clickplus = document.querySelector("#plus");
    clickplus.addEventListener("click", pluscounter);

    let change_counter = document.querySelector("#choice");
    let change_cart = document.querySelector("#shoppingcart");

    function minuscounter() {
        if (counter > 0) {
            counter = counter - 1;
            gesamtpreis = counter * artikelpreis;
            gesamtpreis = gesamtpreis.toFixed(2);
            change_counter.innerHTML = counter;
            change_cart.innerHTML = gesamtpreis + "€";
        }
    }

    function pluscounter() {
        counter = counter + 1;
        gesamtpreis = counter * artikelpreis;
        gesamtpreis = gesamtpreis.toFixed(2);
        change_counter.innerHTML = counter;
        change_cart.innerHTML = gesamtpreis + "€";
    }

    // Suchfeld

    var r = document.querySelector(':root');
    let clickButton = document.querySelector(".lupe");
    clickButton.addEventListener("click", buttonClick);

    function buttonClick() {
        r.style.setProperty('--opacity', 1);
    }
