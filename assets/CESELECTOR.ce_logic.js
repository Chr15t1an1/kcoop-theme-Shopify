// console.log(stateMap);
var minrequiredHours = 0;
var cart = [];
var userRequirements = [];
var userPost = '';

// Grab Form data and
function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

function processForm(thePost){
// save post Object
userPost = thePost;
reversedStateMap = swap(stateMap);
  // take in post data and grab all of the requirements
  Object.keys(thePost).forEach(function(key) {
    // console.log('a');
 userRequirements.push(requirements[reversedStateMap[thePost[key]]]);
  });
  maxHours = getUserRequiredHours(userRequirements);
  minrequiredHours = maxHours;
  }

function getUserRequiredHours(userRequirements) {
temp_hours_array = [];
  // get User Required Hours
  Object.keys(userRequirements).forEach(function(key) {
temp_hours_array.push(userRequirements[key]['requiredHours']);
  });
  return Math.max(...temp_hours_array);
}


function addStateCE(usrRequirements) {
  Object.keys(usrRequirements).forEach(function(key) {
  if (allCourses[usrRequirements[key]['stateCE']]) {
  // console.log(usrRequirements[key]['stateCE']);
  cart.push(allCourses[usrRequirements[key]['stateCE']]);
  }
  });
  }



function countHoursInCart(Kart) {
  // console.log(Kart);
  var i, len;
  var totalHours = 0;
  for (i = 0, len = cart.length; i < len; i++) {
    //  text += cart[i] + "<br>";
      // console.log(cart[i]['hours']);
      totalHours=totalHours+parseInt(cart[i]['hours']);
  }

return totalHours;

}

function isEightHourRequired(requirements){
  for (var i = 0; i < requirements.length; i++) {
  if(requirements[i].require8Hr){
   return true;
  }
  }
}

function pruneDuplicates(cart){
  var cleanCartnewArray = [];
   var lookupObject  = {};

   for(var i in cart) {
      lookupObject[cart[i]['variantId']] = cart[i];
   }

   for(i in lookupObject) {
       cleanCartnewArray.push(lookupObject[i]);
   }
    return cleanCartnewArray;

}

  // console.log(Kart);
  // var i, len;
  //
  // for (i = 0, len = cart.length; i < len; i++) {
  //   if (parseInt(cart[i]['hours']) > 7) {
  //     return true;
  //   }
  // }
  //
  // return false;

// function removeDuplicates(originalArray, prop) {
//      var newArray = [];
//      var lookupObject  = {};
//
//      for(var i in originalArray) {
//         lookupObject[originalArray[i][prop]] = originalArray[i];
//      }
//
//      for(i in lookupObject) {
//          newArray.push(lookupObject[i]);
//      }
//       return newArray;
//  }







// Grab Form data and
function addRemainingHours(reqs){


if (isEightHourRequired(reqs)) {
  // console.log('add 8 hour to cart');
  cart.push(allCourses['8hr']);
}
// }else {
//   cart.push(allCourses['7hr']);
// }
cart = pruneDuplicates(cart);
// Need to process
hoursInCart = countHoursInCart(cart);
  // console.log(userRequirements);
  // console.log(minrequiredHours);
  // console.log(hoursInCart);
  var hoursRemaining = minrequiredHours - hoursInCart;
console.log(hoursRemaining);
      if (hoursInCart >= minrequiredHours) {
        console.log('add products to cart');
      }else if (hoursRemaining === 8) {
        console.log('add 8 hour to cart');
        cart.push(allCourses['8hr']);
        addRemainingHours(userRequirements);
      }else if (hoursRemaining === 7) {
        console.log('add 7 hour to cart');
        cart.push(allCourses['7hr']);
        addRemainingHours(userRequirements);
      }else if (!fedInCart()) {
        console.log('Federal Not in Cart');
        cart.push(allCourses['7hr']);
        addRemainingHours(userRequirements);
      }else if (hoursRemaining === 3) {
        console.log('Adding 3 hour NY');
        cart.push(allCourses['3ny']);
        addRemainingHours(userRequirements);
      } else if (hoursRemaining === 2) {
        console.log('Adding 2hours PA + MD');
        cart.push(allCourses['1pa']);
        cart.push(allCourses['1md']);
        addRemainingHours(userRequirements);
      } else {
        console.log('Something wrong');

        addRemainingHours(userRequirements);
      }
  }
// if (!fedInCart()) {console.log('federal not in cart');}

function fedInCart() {
  // console.log(Kart);
  var i, len;

  for (i = 0, len = cart.length; i < len; i++) {
    if (parseInt(cart[i]['hours']) > 6) {
      return true;
    }
  }

  return false;


}





        function addToCart(courses) {

                  payload = '';

                  for (var i = 0; i < cart.length; i++) {
                    var vId = cart[i].variantId;
                    payload = payload+'updates['+vId+']=1&';

                  // jQuery.post('/cart/add.js', {
                  //             quantity: 1,
                  //             id: vId
                  //           });

                }
                console.log(payload);

                // jQuery.post('/cart/update.js', {updates: {payload}});
                // $.post('/cart/update.js', {updates: {payload}});
                // jQuery.post('/cart/update.js', {updates: {payload}});
                // this.setState({isSubmitting: true})
                // Shopify.moveAlong();

                jQuery.post('/cart/update.js', payload);

            }

        // // this.setState({isSubmitting: true})
        // Shopify.moveAlong();
    // }



      // console.log(requirements[reversedStateMap[thePost[key]]]);
          // userRequirements[] = reversedStateMap[thePost[key]];
          // console.log(key, thePost[key]);
      // console.log(requirements[thePost[key]]);
      // console.log(typeof $(thePost).serializeArray());
      // console.log(thePost);
      // console.log(thePost);
    //   thePost.forEach(state, index) => {
    //   console.log(state);
    // });
    // console.log(userRequirements[key]['requiredHours']);
    // console.log(temp_hours_array)
    // console.log(Math.max(...temp_hours_array));
    //  (courses){
    //
    //
    //
    // }
