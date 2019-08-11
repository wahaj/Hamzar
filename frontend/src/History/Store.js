let Store = (function() {
    let loginStatus = false;

    let getLogStatus = function() {
        return loginStatus;    // Or pull this from cookie/localStorage
    };

    let setLogStatus = function(logS) {
        loginStatus = logS;
        // Also set this in cookie/localStorage
    };

    return {
        getLogStatus: getLogStatus,
        setLogStatus: setLogStatus
    }

})();

export default Store;