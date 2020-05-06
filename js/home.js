$('document').ready(function(){
    loadGoods();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('goods.json', function ( data ) {
        //console.log( data );
        var out = '';
        for (var key in data){
            out+='<p>'+data[key]['name']+'</p>';
            out+='<p>'+data[key]['cost']+'</p>';
            out+='<img src="'+data[key].image+'">';
        }
        $('#goods').html(out);
    })
}