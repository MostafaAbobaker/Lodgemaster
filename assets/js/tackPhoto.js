document.addEventListener("DOMContentLoaded", (ev) => {
  //get the captured media file
  let input = document.getElementById("capture");

  input.addEventListener("change", (ev) => {
    console.dir(input.files[0]);
    if (input.files[0].type.indexOf("image/") > -1) {
      img.src = window.URL.createObjectURL(input.files[0]);
      let img = `<img src="${img.src}" alt="">`;
      const dropArea = document.querySelector("#dragArea");
      dropArea.innerHTML = imgTag;
    }
  });
});
