var yourMoney = +prompt('Введите ваш бюджет', '');
var shopYorName = prompt('Введите название вашего магазина', '');

var employers = ['john','trevor',];
var shopGoods = new Array (3);
for (var j = 0, J = shopGoods.length; j < J; j++){
   shopGoods [j] = prompt ('введите товар, которым будете торговать ' , '');
}

var mainList  = [
  yourMoney,
  shopYorName,
  shopGoods,
  employers,
];
oneDayMoney = yourMoney/30;
alert(oneDayMoney);
alert(mainList);
