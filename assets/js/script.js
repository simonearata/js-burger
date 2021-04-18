// prezzo standard
var priceAdd = document.getElementById('price');
var nome_utente = document.getElementById('name');
var button = document.getElementById('button');
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var coupon = document.getElementById("coupon")
var standard_price = 50;
var coupons = ['sconto1', 'sconto2'];
var discount = 0.2;
writePrice(standard_price, priceAdd);






// EVENTI

button.addEventListener("click", function(){

  //controllo nome
  var nome_inserito = nome_utente.value.trim()

  if(nome_inserito.length === 0){
    
    alert("Attenzione! Inserire nome hamburger");


  }else{

    var priceItem = 0;

    for(i = 0; i < ingredients.length; i++){
      
      var ingredient = ingredients[i]

      if(ingredient.checked === true){
        priceItem += parseInt(ingredient.value)
      }
    }
    
    var prezzo_totale = standard_price + priceItem;

    if(copuons.includes(coupon.value) === true){
      prezzo_totale *= (1 - discount);
    }

    writePrice(prezzo_totale, priceAdd);
  }
});



// FUNZIONI

// funzione per scrivere il prezzo
function writePrice(value, target){
  target.innerHTML = value.toFixed(2);
}