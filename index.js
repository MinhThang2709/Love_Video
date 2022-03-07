
// var dataLength = data.length
// var index = 0
// var x = document.getElementById("autoplay");


// function writeWord(value) {
//   document.getElementById('editText').innerHTML = data.substring(0, value)
// }



// function runWrite() {
//   // const a = data.substring(0, index)
//   writeWord(index)
//   index += 1
//   if (index === dataLength + 1) {
//     clearInterval(isRun)
//   }
// }

// const isRun = setInterval(() => {
//   runWrite()
// }, 300);
// // document.getElementById("autoplay").autoplay

// function playAudio() {
//   x.play()
// }
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover', ()=>{
  mouseCursor.classList.add("link-grow");
  link.classList.add("hover-link");
  });
  link.addEventListener('mouseleave', ()=>{
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hover-link");
  })
    
});

var data = "Chúc Em 8-3 Vui Vẻ"

function validateText(){
  var value = document.getElementById('minhthang').value 
  var fr = `<video width="320" height="240" controls autoplay>
  <source src="./video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`
  if(value === data){
  //  document.getElementById('video').innerHTML = fr
  window.location.href = "video.html";
  } else {
    alert("chua dung dau con cho")
  }
}