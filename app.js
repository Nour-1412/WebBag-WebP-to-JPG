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
document.getElementById("infoBox");

let jpgUrl = "";

imageInput.addEventListener(
"change",
showPreview
);

function showPreview(){

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
formatSize(file.size);

infoBox.style.display =
"block";

downloadBtn.style.display =
"none";

}

convertBtn.addEventListener(
"click",
convertImage
);

function convertImage(){

const file =
imageInput.files[0];

if(!file){

alert("يرجى اختيار صورة");

return;

}

const img =
new Image();

img.onload = () => {

const canvas =
document.createElement("canvas");

canvas.width =
img.width;

canvas.height =
img.height;

const ctx =
canvas.getContext("2d");

ctx.fillStyle =
"#ffffff";

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

jpgUrl =
canvas.toDataURL(
"image/jpeg",
0.95
);

downloadBtn.href =
jpgUrl;

downloadBtn.download =
"webbag-image.jpg";

downloadBtn.style.display =
"flex";

};

img.src =
URL.createObjectURL(file);

}

function formatSize(bytes){

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
