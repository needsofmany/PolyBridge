(function () {
  var menus = document.querySelectorAll(".nav-menu");

  menus.forEach(function (menu) {
    var button = menu.querySelector("button");
    var dropdown = menu.querySelector(".nav-dropdown");
    if (!button || !dropdown) {
      return;
    }

    function setOpen(open) {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      dropdown.hidden = !open;
    }

    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target)) {
        setOpen(false);
      }
    });

    menu.addEventListener("focusout", function (event) {
      if (event.relatedTarget && !menu.contains(event.relatedTarget)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        button.focus();
      }
    });
  });
})();
