document.querySelectorAll('.hidden-link').forEach(function (element) {
  var a = document.createElement('a'); 
  var link = document.createTextNode(element.getAttribute("data-link-title"));
  a.appendChild(link); 
  a.href = element.getAttribute("data-link-url"); 
  a.rel = "nofollow";
  element.appendChild(a); 
});
