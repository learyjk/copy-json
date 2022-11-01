addGlobalEventListener("click", '[wb-data="copy-button"]', async (e) => {
  const copyButton = e.target.closest('[wb-data="copy-button"]');
  if (!copyButton) return;
  const buttonText = copyButton.querySelector('[wb-data="text"]');
  if (!buttonText) return;
  buttonText.textContent = "Copying...";

  const copyJson = (event) => {
    event.preventDefault();
    const componentJson =
      copyButton.querySelector('[wb-data="json"]').textContent;
    if (!componentJson) {
      console.error("no data found to copy.");
      buttonText.textContent = "No data found";
    } else {
      event.clipboardData.setData("application/json", componentJson);
    }
  };

  // listen for copy
  document.addEventListener("copy", copyJson);
  // execute a copy command
  document.execCommand("copy");
  // remove copy listener (to allow normal copy/paste again)
  document.removeEventListener("copy", copyJson);

  // after 1 second, set button text back
  setTimeout(() => {
    buttonText.textContent = "Copy to Webflow";
  }, 1000);
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.closest(selector)) {
      callback(e);
    }
  });
}
