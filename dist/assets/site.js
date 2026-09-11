// Progressive enhancement: navigation remains visible without JavaScript.
document.documentElement.classList.add("js");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
toggle.hidden = false;
function closeMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia("(min-width: 651px)").addEventListener("change", closeMenu);
// The form opens the visitor's email app. It never claims an email was sent.
const form = document.querySelector("#inquiry-form");
if (form) {
  const status = document.querySelector("#form-status");
  const brief = () => {
    const data = new FormData(form);
    return {
      subject: "After Hours inquiry — " + data.get("service"),
      body:
        "Name: " +
        data.get("name") +
        "\nEmail: " +
        data.get("email") +
        "\nService: " +
        data.get("service") +
        "\n\n" +
        data.get("message"),
    };
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = brief();
    window.location.href =
      "mailto:daxtonmz0021@gmail.com?subject=" +
      encodeURIComponent(data.subject) +
      "&body=" +
      encodeURIComponent(data.body);
    status.textContent =
      "Your email app has been requested. Review the draft and send it there. Nothing has been sent by this website. If no app opened, download your inquiry and email it to daxtonmz0021@gmail.com.";
  });
  document.querySelector("#download-inquiry").addEventListener("click", () => {
    if (!form.reportValidity()) return;
    const data = brief();
    const url = URL.createObjectURL(
      new Blob([data.subject + "\n\n" + data.body], { type: "text/plain" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "after-hours-inquiry.txt";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent =
      "Your inquiry download is ready. Email the file to daxtonmz0021@gmail.com. Nothing has been sent by this website.";
  });
  const service = new URLSearchParams(window.location.search).get("service");
  if (
    service &&
    [...form.elements.service.options].some(
      (option) => option.value === service,
    )
  )
    form.elements.service.value = service;
}
