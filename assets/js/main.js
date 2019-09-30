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
    var item2;

    index >= 4 ? item2 = $(servingMenuItems[index - 4]): item2 = $(servingMenuItems[index + 4]);

    for(let i = 0; i < 8; i++){
        let item = $(servingMenuItems[i]);
        item.removeClass("servingMenuSelectedItem");
    }
    item.addClass("servingMenuSelectedItem");
    item2.addClass("servingMenuSelectedItem");
    selectedServingMenuItems = index;
}