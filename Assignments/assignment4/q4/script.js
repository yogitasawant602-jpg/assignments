const text = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSize = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

/* Change text color */
colorBtn.addEventListener("click", function () {
    text.style.color = colorBox.value;
});

/* Change font size */
fontSize.addEventListener("input", function () {
    text.style.fontSize = fontSize.value + "px";
});

/* Toggle Italic */
italicBtn.addEventListener("click", function () {
    text.style.fontStyle =
        text.style.fontStyle === "italic" ? "normal" : "italic";
});

/* Toggle Underline */
underlineBtn.addEventListener("click", function () {
    text.style.textDecoration =
        text.style.textDecoration === "underline" ? "none" : "underline";
});

/* Toggle Bold */
boldBtn.addEventListener("click", function () {
    text.style.fontWeight =
        text.style.fontWeight === "bold" ? "normal" : "bold";
});

/* Change Font Family */
fontList.addEventListener("change", function () {
    text.style.fontFamily = fontList.value;
});

/* Get CSS Properties */
getStyleBtn.addEventListener("click", function () {
    let styles = [];

    if (text.style.color)
        styles.push("color: " + text.style.color + ";");

    if (text.style.fontSize)
        styles.push("font-size: " + text.style.fontSize + ";");

    if (text.style.fontFamily)
        styles.push("font-family: " + text.style.fontFamily + ";");

    if (text.style.textDecoration === "underline")
        styles.push("text-decoration: underline;");

    if (text.style.fontStyle === "italic")
        styles.push("font-style: italic;");

    if (text.style.fontWeight === "bold")
        styles.push("font-weight: bold;");

    cssProps.textContent = styles.join(" ");
});
