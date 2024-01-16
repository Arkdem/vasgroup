function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    var dropdown = event.currentTarget.parentNode;
    dropdown.classList.toggle("active");
  }

  function closeDropdowns(event) {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.classList.contains("active") && dropdown !== event.currentTarget) {
        dropdown.classList.remove("active");
      }
    }
  }

  document.addEventListener("click", closeDropdowns);