  var urlParams;
  (window.onpopstate = function() {
    var match,
      pl = /\+/g, // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function(s) {
        return decodeURIComponent(s.replace(pl, " "));
      },
      query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query)) {
      urlParams[decode(match[1])] = decode(match[2]);
    }
  })();

  let everything = document.getElementById('everything');
  everything.innerHTML = JSON.stringify(urlParams);

  for (key in urlParams) {
    let ele = document.getElementById(key);
    if (ele == null)
      continue;

    if (key == 'picture')
      ele.src = 'images/' + urlParams[key];
    else
      ele.innerHTML = urlParams[key];
  }
