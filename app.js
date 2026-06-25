const imageInput =
document.getElementById("imageInput");

const preview =
document.getElementById("preview");

const convertBtn =
document.getElementById("convertBtn");

const downloadBtn =
document.getElementById("downloadBtn");

const fileName =
document.getElementById("fileName");

const fileSize =
document.getElementById("fileSize");

const infoBox =
document.querySelector(".info");

let jpgDataUrl = "";

imageInput.addEventListener(
"change",
previewImage
);

function previewImage(){

const file =
imageInput.files[0];

if(!file) return;

preview.innerHTML = "";

const img =
document.createElement("img");

img.src =
URL.createObjectURL(file);

preview.appendChild(img);

fileName.textContent =
file.name;

fileSize.textContent =
(formatFileSize(file.size));

infoBox.style.display =
"block";

downloadBtn.style.display =
"none";

}

convertBtn.addEventListener(
"click",
convertToJPG
);

function convertToJPG(){

const file =
imageInput.files[0];

if(!file){

alert("يرجى اختيار صورة");

return;

}

const img =
new Image();

img.onload = function(){

const canvas =
document.createElement("canvas");

canvas.width =
img.width;

canvas.height =
img.height;

const ctx =
canvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.drawImage(
img,
0,
0
);

jpgDataUrl =
canvas.toDataURL(
"image/jpeg",
0.95
);

downloadBtn.href =
jpgDataUrl;

downloadBtn.download =
"webbag-converted.jpg";

downloadBtn.style.display =
"flex";

};

img.src =
URL.createObjectURL(file);

}

function formatFileSize(bytes){

if(bytes < 1024){

return bytes + " B";

}

if(bytes < 1024 * 1024){

return (
(bytes / 1024)
.toFixed(2)

* " KB"
  );

}

return (
(bytes / (1024 * 1024))
.toFixed(2)

* " MB"
  );

}
