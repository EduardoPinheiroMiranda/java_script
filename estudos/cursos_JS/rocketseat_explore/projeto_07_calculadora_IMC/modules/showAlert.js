export const showAlert = {
    attention : document.querySelector(".alertClose"),

    open() {
        showAlert.attention.classList.remove("alertClose")
        showAlert.attention.classList.add("notification")
    },
    close() {
        showAlert.attention.classList.add("alertClose")
        showAlert.attention.classList.remove("notification")
    }
}
