
$(document).ready(function(){
     
    var searchBtn = $(".search__btn"),
        isSearch = true;
    
    searchBtn.on('click', function () {
        if(isSearch){
            $(".search__input").css({"visibility":"visible"});
            searchBtn.addClass('search__btn_active')
            isSearch = false;
            return;
        }
        else{
            $(".search__input").css({"visibility":"hidden"});
            searchBtn.removeClass('search__btn_active')
            isSearch = true;
            return;
        }
            
    });
    

});


