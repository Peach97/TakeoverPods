export function ScrollTo(id) {
  const scrollto = document.getElementById(id);
  window.scrollTo({
    top: scrollto.offsetTop,
    behavior: "smooth",
  });
}
