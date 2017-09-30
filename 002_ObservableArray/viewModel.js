/*
 * 一つのオブジェクトの変更を検知したいなら前回のプログラムで用いているobservable を用いる.
 * 対して、コレクション (配列) の変更を検知し、反応させたいときには observableArray を使う.
 */
var SimpleListModel = function(items) {

    // 初期値が items 配列のobservableArrayを生成
    this.items = ko.observableArray(items);

    // text box に最初は何も入れない。且つ、observable にする.
    this.itemToAdd = ko.observable("");

    this.addItem = function() {
        if (this.itemToAdd() != "") {
            // 値を配列の末尾に追加して監視側に通知
            this.items.push(this.itemToAdd());
			/* 要素を変更する関数は他にも色々あって
			 * pop() : 配列の末尾の要素を削除して、その要素を返す
			 * unshift(`new value`) : 配列の先頭に要素を挿入
			 * shift() : 配列から先頭の値を削除して、その要素を返す
			 * reverse() : 配列の要素を反転させる
			 * sort() : 配列の要素をソート。 これはデフォルトでは、アルファベット順もしくは数値順にソートする。
			 *          このデフォルトを変えるには、以下のようにするらしい. 
			 *              this.items.sort(function(left, right) {
			 *                  return left.lastName == right.lastName
			 *                      ? 0 : (left.lastName < right.lastName ? -1 : 1);	// ラストネームでソートする場合
			 *              });
			 * splice(startIndex, length) : startIndex に位置する要素から length 個分の要素を配列から削除して、それらの要素からなる配列を返す
			 * 
			 * この他にもたくさんあって、知りたい時はjs標準の関数の説明<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2> を見ろとのこと。
			 *
			 * 標準にないものとして、
			 * remove(someItem) : someItem に一致する要素を全て削除し、それらを配列として返す
			 * remove(function(item) { return item.age < 18 }) : プロパティ age が18 より小さい要素を全て削除して、それらを配列として返す。
			 * removeAll(['Chad', 132, undefined]) : 'Chad', 123, undefined に一致する要素を全て削除して、それらを配列として返す。
			 * removeAll() : 全ての要素を削除して、それらを配列として返す。
			 */


			// 値を取り出す例 (要素数,追加された要素のデータ)
			alert('配列の要素数: ' + this.items().length + '\n' + '追加された要素:  ' + this.items()[this.items().length - 1]);
			/* 他にも要素に関する関数は色々あるらしく...
			 * indexOf('pattern') : 'pattern'を要素内で探し、存在すればインデックスを返す。見つからなかったら-1を返す。
			 * slice(start,end) : javascript標準のsliceと同じらしいが、js分からんので分からん。startインデックスからendインデックスまでの配列を切り出すらしい。
			 */


            // text box を 綺麗にする. これをしないとitemToAddのobservableが動いてしまう？
            this.itemToAdd("");	// Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};

// view に bind
ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));
