const SUCCESS_FILE = "tide-download-demo.txt";
const successButton = document.querySelector("#success-btn");
const failButton = document.querySelector("#fail-btn");
const replayButtons = document.querySelectorAll(".replay");

function reset(button) {
  button.classList.remove("is-running", "is-success", "is-fail");
  button.disabled = false;
}

function animate(button, outcome) {
  if (button.classList.contains("is-running")) return;
  reset(button);
  button.disabled = true;
  button.classList.add("is-running");

  const duration = outcome === "success" ? 1180 : 920;
  window.setTimeout(() => {
    button.classList.remove("is-running");
    button.classList.add(outcome === "success" ? "is-success" : "is-fail");
    button.disabled = false;

    if (outcome === "success") {
      downloadDemoFile();
    }
  }, duration);
}

function downloadDemoFile() {
  const contents = [
    "TIDE download demo",
    "Every byte arrived.",
    "This file was generated locally by the button animation demo."
  ].join("\\n");
  const blob = new Blob([contents], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = SUCCESS_FILE;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

successButton.addEventListener("click", () => animate(successButton, "success"));
failButton.addEventListener("click", () => animate(failButton, "fail"));

replayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    const outcome = target.id === "success-btn" ? "success" : "fail";
    animate(target, outcome);
  });
});
