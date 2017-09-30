/*
 * ViewModel のプロパティを Observable (=監視可能) として定義することで、Knockout はViewModel の
 * 変更を知ることができる.
 */

var myViewModel = {
    //personName: 'Bob', を以下に変更
    personName: ko.observable('Bob'),
    //personAge: 123 を以下に変更
    personAge: ko.observable(123)
};


//subscribe関数を記述しておくと、personNameが書き換わった時に処理が動くみたい
var subscription = myViewModel.personName.subscribe(function(newValue) {
    alert("新しい名前は " + newValue + "だそうです。");
});

//上のsubscribeの処理をもう行いたくない時は、以下を記述する.
//subscription.dispose();
