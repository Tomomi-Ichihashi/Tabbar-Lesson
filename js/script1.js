  // .hide();は特定のHTML要素を非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event){
  $("#tab-contents .tab").hide();
  // .removeClass()はクラス属性が設定されているHTML要素からクラスを削除する
  $("#tab-menu .active").removeClass("active");
  // .addClass()は任意のHTML要素にクラス属性を追加する
  $(this).addClass("active");
  // .attr()はHTML要素の属性を取得したり、設定できる
  // .show()は要素を表示する
  $($(this).attr("href")).show();
  event.preventDefault();
});
