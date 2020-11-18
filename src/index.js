import javascriptBarcodeReader from "javascript-barcode-reader";

let image = new Image();
image.crossOrigin = "Anonymous";
image.src = "./barcode.jpg";
image.onload = function () {
  javascriptBarcodeReader({
    image: image,
    barcode: "code-39"
  })
    .then((result) => {
      document.getElementById("barcode-title").innerHTML = result;
    })
    .catch(console.log);
};
