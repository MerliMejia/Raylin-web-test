/// <reference path="../../typings/globals/jquery/index.d.ts" />

/**
 * @author Merli Mejia - merlimejia2@gmail.com
 * @description This file contains the functionality for the Serving Menu
 */

var servingMenuItems;
var selectedServingMenuItems;

/**
 * @description Init
 */
$(window).on("load", (evt)=>{
    servingMenuItems = $(".servingMenu-item");
    selectedServingMenuItems = 0;
    setServingMenuActiveItem(selectedServingMenuItems);
})

/**
 * @description This method remove the .servingMenuSelectedItem class from all the non selected items and add it to the selected one
 * @param {*} index The index number for the selected menu item
 */
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