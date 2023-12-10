// Wait for full document to be parsed
addEventListener("load", () => {
  const ta = document.getElementById("textarea");

  // Could use .onclick instead of addEventListener()
  document.getElementById("bigger").addEventListener("click", (e) => {
    ta.style.fontSize = "24pt";
  });

  // Fancy toggle function
  const radioToggle = (e) => {
    // Only alert on event listener
    e ? alert("Alert: Changing styles.") : null;

    const fancy = document.getElementById("fancy");
    if (fancy.checked) {
      ta.style.textDecoration = "underline";
      ta.style.color = "blue";
      ta.style.fontWeight = "bold";
    } else {
      ta.removeAttribute("style");
    }
  };

  // Setup fancy toggle events
  document
    .querySelectorAll('input[type="radio"]')
    .forEach((e) => e.addEventListener("change", radioToggle));
  radioToggle();

  // Uppercase Moo
  document.getElementById("moo").addEventListener("click", (e) => {
    ta.value = ta.value.toUpperCase();
    ta.value = ta.value.split(".").join("-Moo.");
  })
});
