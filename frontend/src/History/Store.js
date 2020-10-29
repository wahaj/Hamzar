let Store = (function() {
    let loginStatus = false;
    let cartNo = -1;
    let name = '';
    let address = '';
    let phoneNum = '';

    let getLogStatus = function() {
        if(name == ''){
          name = localStorage.getItem('name')
        }
        return loginStatus;    // Or pull this from cookie/localStorage
    };
    let getAddress = function() {
        if(address == ''){
          address = localStorage.getItem('address')
        }
        return address;    // Or pull this from cookie/localStorage
    };
    let getPhoneNum = function() {
        if(phoneNum == ''){
          phoneNum = localStorage.getItem('phoneNum')
        }
        return phoneNum;    // Or pull this from cookie/localStorage
    };
    let getName = function() {
        return name;    // Or pull this from cookie/localStorage
    };

    let setName= function(cN){
      cartNo = cN;
      localStorage.setItem('name',cN);
    }
    let setAddress= function(cN){
      cartNo = cN;
      localStorage.setItem('address',cN);
    }
    let setPhoneNum= function(cN){
      cartNo = cN;
      localStorage.setItem('phoneNum',cN);
    }

    let getCartNo = function (){
      if(cartNo == -1 && localStorage.getItem('cartNo')!=null){
        cartNo = localStorage.getItem('cartNo')
      }
      return cartNo ;
    }
    let setCartNo= function(cN){
      cartNo = cN;
      localStorage.setItem('cartNo',cN);
    }

    let setLogStatus = function(logS) {
        loginStatus = logS;
        // Also set this in cookie/localStorage
    };

    return {
        getLogStatus: getLogStatus,
        setLogStatus: setLogStatus,
        setCartNo : setCartNo,
        getCartNo : getCartNo,
        getAddress : getAddress,
        getName : getName,
        getPhoneNum : getPhoneNum,
        setName : setName,
        setAddress : setAddress,
        setPhoneNum : setPhoneNum
    }

})();

export default Store;
