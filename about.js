$(document).ready(function () {
  $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $("#navbarNavAltMarkup").hasClass("navbar-collapse collapse show");
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
          $("#openCloseBtn").click();
      }
  });
});