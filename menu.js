const Menu = {
  toggle: function () {
    const body = document.body
    body.classList.toggle("menu-open")
  },
}

const toggleMenuButton = document.querySelector(".toggle-menu")
toggleMenuButton.addEventListener("click", () => {
  Menu.toggle()
})

function listElementClicked() {
  Menu.toggle()
}
