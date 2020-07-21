let Store = (function() {
    let loginStatus = false;
    let cartNo = -1;

    let getLogStatus = function() {
        return loginStatus;    // Or pull this from cookie/localStorage
    };

    let getCartNo = function (){
      return cartNo ;
    }
    let setCartNo= function(cN){
      cartNo = cN;
    }

    let setLogStatus = function(logS) {
        loginStatus = logS;
        // Also set this in cookie/localStorage
    };

    return {
        getLogStatus: getLogStatus,
        setLogStatus: setLogStatus,
        setCartNo : setCartNo,
        getCartNo : getCartNo
    }

})();

export default Store;
