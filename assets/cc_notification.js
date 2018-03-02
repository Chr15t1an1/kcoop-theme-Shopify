///////////fireing Notif///////////
// $('#cc__fancy_notification').css('pointer-events','all');
// $('.overlay').addClass('is-active');

///////////Closing Notif///////////

$(function() {

    $('#cc__fancy_notification .overlay .cc__notif__modal .title svg, #cc__closebutton, #cc__cartbutton').click(function(){

          $('#cc__fancy_notification').css('pointer-events','none');

          $('.cc__notif__modal').addClass('fade');

          setCookie("cc_private_ce_muti_item", "yes", 5);

          setTimeout(function(){
            $('.overlay').removeClass('is-active');
            $('.cc__notif__modal').removeClass('fade');
          }, 1500);
    });

});



////cookie managment functions
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function cc_private_ce_check_multi_itemCookie() {
    var user = getCookie("cc_private_ce_muti_item");
    if (user == "yes") {
        return true;
    } else {
        setCookie("cc_private_ce_muti_item", "no", 5);
        return false;
    }
}


// Save cart data to var.
var cc_shopifyCartData;
function getUserCart(a) {
  // console.log(a);
  cc_shopifyCartData = a;
  return a;
}

//Check number of items in cart
function num_items_inCart(c) {
  c.item_count;
}


// Check the cart
function cc_shop_checkCart(){
    if (!cc_private_ce_check_multi_itemCookie()) {

          $.getJSON( "/cart.js",  function(data) {

            var cartObject = getUserCart(data);
            var cartItemsnum = num_items_inCart(cartObject);


            if (!cartItemsnum<2) {

              //fire notification.
            cartObject.items.forEach(function(element) {
                  var product_Price =  element.price;
                  var product_quantity =  element.quantity;
                  if (product_Price == 0 && product_quantity > 1) {
                    // Fire off the notifs

                    $('#cc__fancy_notification').css('pointer-events','all');
                    $('.overlay').addClass('is-active');

                  }
                });
            }
          });

    }

  }

// Check the cart on pageload or ajax request.
  $( document ).ready(cc_shop_checkCart);

  $( document ).ajaxStart(cc_shop_checkCart);
