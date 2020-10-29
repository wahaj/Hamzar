import React from 'react';

var MaintainSession = (function() {
    var full_name = "initial Error";

    var getName = function() {
        return full_name;    // Or pull this from cookie/localStorage
    };

    var setName = function(name) {
        full_name = name;
        // Also set this in cookie/localStorage
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default MaintainSession;