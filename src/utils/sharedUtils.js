export const compareId = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};

export const cleanUrl = urlString => {
  var link = '';
  if (urlString != null) {
    //if the link is a mailto link, don't add HTTP to it
    if (urlString.toUpperCase().includes('MAILTO:')) {
      link = urlString;
    } else {
      link =
        urlString.indexOf('://') === -1 ? 'http://' + urlString : urlString;
    }
  }
  return link;
};

export const isProduction = () => {
  // build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
  const currentUrl = window.location.href;
  // gets the current url root from the href
  const frontEndUrl = currentUrl.split('/').slice(0, 3).join('/');
  console.log(`test1`,frontEndUrl);
  if(frontEndUrl==='https://app.modern-musician.com'){
    return true;
  }
  else{
    return false;
  }
}

export const getBackendApiUrl = () => {
  const devUrl = `https://qk9qdxpz3f.execute-api.us-east-1.amazonaws.com/dev`;
  const productionUrl = `https://ntboexei3e.execute-api.us-east-1.amazonaws.com/production`;
  return  isProduction() ? productionUrl  : devUrl;
}