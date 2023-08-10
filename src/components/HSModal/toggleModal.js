export default function toggleModal(modalClassName, toggleClass) {
  const modal = document.querySelector(modalClassName);

  if (modal) {
    const isModalVisible = modal.classList.contains(toggleClass);

    if (isModalVisible) {
      modal.classList.remove(toggleClass);
    } else {
      modal.classList.add(toggleClass);
    }
  }
}
