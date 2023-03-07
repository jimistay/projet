function ajouterLigne() {


    let nmbOfProduction = document.getElementById("item-produit").children.length + 1;
    let newProduct = document.createElement("tr");
    newProduct.setAttribute('id', `produit-${nmbOfProduction}`);
    newProduct.innerHTML = `
                <td>
                    <input type="text" id="description-produit-${nmbOfProduction}" class="description-produit">
                </td>
                <td>
                    <input type="number" id="quant-produit-${nmbOfProduction}" class="quant-produit" value="0">
                </td>
                <td>
                    <input type="number" id="prix-produit-${nmbOfProduction}" class="prix-produit" value="0">
                </td>
                <td id="total-produit-${nmbOfProduction}" class="total-produit">0 €</td>
            `
    document.getElementById("item-produit").appendChild(newProduct);
}

function updateTotal(produitNumber, totalValue = 0) {
    if (produitNumber === 0) {
        return totalValue;
    }

    let totalProduct = `${parseFloat(document.getElementById(`quant-produit-${produitNumber}`).value) * parseFloat(document.getElementById(`prix-produit-${produitNumber}`).value)}`;
    totalValue += parseFloat(totalProduct)
    document.getElementById(`total-produit-${produitNumber}`).innerHTML = totalProduct + " €";
    return updateTotal(produitNumber - 1, totalValue);

}


function emptyValue(message) {
    window.alert(message);
}

function calculer() {
    let allProductTable = document.getElementById("item-produit");

    let total = updateTotal(allProductTable.children.length);
    document.getElementById("#sous-total-input").innerHTML = total;
    let remise = document.getElementById("remise-input").value;

    if (remise === "") {
        emptyValue("Merci d'insérer une remise");
    }

    let priceRemise = total - (total * parseFloat(remise) / 100)
    document.getElementById("sous-remise-input").innerHTML = `${priceRemise}`;
    let impot = document.getElementById("impot-input").value;

    if (impot === "") {
        emptyValue("Merci d'insérer le taux d'import ");
    }

    let impotPrice = (total * impot) / 100

    document.getElementById("taxe-input").innerHTML = `${impotPrice}`;
    let expedito = document.getElementById('expedito-input').value;
    if (expedito === "") {
        emptyValue("merci d'insérer un exepedito");
    }


    document.getElementById("solde-input").innerHTML = `${priceRemise + impotPrice + parseFloat(expedito)}`

}


function remplissage(nbrOfLine) {
    let element = ["portable", "bureau", "pc gamgins", "clé USB", "carte graphique"]
    if (nbrOfLine === 0) {
        return 0;
    }
    document.getElementById(`description-produit-${nbrOfLine}`).value = element[Math.floor(element.length * Math.random())]
    document.getElementById(`quant-produit-${nbrOfLine}`).value = `${Math.floor(50 * Math.random())}`
    document.getElementById(`prix-produit-${nbrOfLine}`).value = `${Math.floor(150 * Math.random())}`
    return remplissage(nbrOfLine - 1)
}

function autoRemp() {
    remplissage(document.getElementById("item-produit").children.length);
}

function annuler() {
    location.reload()
}
