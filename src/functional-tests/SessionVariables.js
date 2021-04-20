var SessionVariables = (function() {
  var token = "";
  var clientId = "";

  var getToken = function() {
    
    let token = sessionStorage.getItem('token');
    
    return token;    // Or pull this from cookie/localStorage
  };
  var getClientId = function() {
    let clientId = sessionStorage.getItem('clientId');
    clientId = clientId.replaceAll('"','');
    return clientId;    // Or pull this from cookie/localStorage
  };

  var setToken = function(token1) {
         
    sessionStorage.setItem("token", JSON.stringify(token1));
    token = token1;
    // Also set this in cookie/localStorage
  };
  var setClientId = function(clientIdTemp) {
    sessionStorage.setItem("clientId", JSON.stringify(clientIdTemp));
    clientId = clientIdTemp;     
    // Also set this in cookie/localStorage
  };

  return {
    getToken: getToken,
    getClientId: getClientId,
    setToken: setToken,
    setClientId: setClientId
  }

})();
export default SessionVariables;