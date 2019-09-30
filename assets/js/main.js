/// <reference path="../../typings/globals/jquery/index.d.ts" />

var servingMenuItems;
var selectedServingMenuItems;

$(window).on("load", (evt)=>{
    servingMenuItems = $(".servingMenu-item");
    selectedServingMenuItems = 0;
    setServingMenuActiveItem(selectedServingMenuItems);
})

function setServingMenuActiveItem(index){
    var item = $(servingMenuItems[index]);

    for(let i = 0; i < 4; i++){
        let item = $(servingMenuItems[i]);
        item.removeClass("servingMenuSelectedItem");
    }
    item.addClass("servingMenuSelectedItem");
    selectedServingMenuItems = index;
}