function toggleHint(id) {
  const element = document.getElementById(id);

  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}
