// if class ends with _unready then we consider element unusable (yet)


// cancel clicks on <a class="unready"> and <button class="unready">
document.addEventListener("click", function(event) {
  var target = event.target;
  while (target) {
    if (target.className.match(/_unready\b/)) {
      event.preventDefault();
      return;
    }
    target = target.parentElement;
  }
});

// cancel submits of <form class="unready">
document.addEventListener("submit", function(event) {
  if (event.target.className.match(/_unready\b/)) {
    event.preventDefault();
  }
});
