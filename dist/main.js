/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', event => {\n  console.log('DOM fully loaded and parsed'); //Canvas Setup and Constants\n\n  let canvas = document.getElementById('demoCanvas');\n  window.canvas = canvas;\n  let ctx = canvas.getContext('2d');\n  CANVAS_WIDTH = canvas.width;\n  CANVAS_HEIGHT = canvas.height; //Mouse Movement & Logic\n\n  document.addEventListener(\"mousemove\", mouseMoveHandler, false);\n  let paddleWidth = 4;\n\n  function mouseMoveHandler(e) {\n    var relativeX = e.clientX - canvas.offsetLeft;\n\n    if (relativeX > 0 && relativeX < canvas.width) {\n      paddleX = relativeX - paddleWidth / 2;\n    }\n  }\n\n  function renderCanvasElements() {\n    //Floor\n    ctx.fillstyle = \"white\";\n    ctx.fillRect(0, 530, 1220, 20); //Radio Table\n\n    ctx.fillRect(20, 360, 100, 1000); //Radio\n\n    ctx.fillRect(35, 320, 70, 100); //Fishtank Table\n    //Left Leg\n\n    ctx.fillRect(280, 480, 70, 120); //Right Leg\n\n    ctx.fillRect(940, 480, 70, 120); //Tabletop\n\n    ctx.fillRect(220, 470, 850, 10); //Fishtank\n\n    ctx.strokeRect(230, 100, 830, 370);\n  } //test Fish rendering and animation\n\n\n  let fishArray = [];\n  let gameFrame = 0; // const initialFishNum = 1;\n\n  class midFish {\n    constructor() {\n      const midFishImage = new Image();\n      midFishImage.src = './assets/mid_fish_sprite_sheet_final.png';\n      this.type = midFishImage;\n      this.speed = Math.random() * 4 - 2;\n      this.size = 3;\n      this.radius = 30;\n      this.spriteWidth = 45;\n      this.spriteHeight = 45;\n      this.width = this.spriteWidth;\n      this.height = this.spriteHeight;\n      this.x = Math.floor(Math.random() * (1060 - 230) + 230);\n      this.y = Math.floor(Math.random() * (420 - 100) + 100); // this.spriteWidthLeft = spriteWidthLeft;\n      // this.spriteHeightLeft = spriteHeightLeft;\n\n      this.frame = 0;\n      this.angle = 0;\n      this.angleSpeed = Math.random() * 0.2;\n      this.curve = Math.random() * 5; // this.swimSpeed = Math.floor(Math.random() * 3 + 1);\n      // this.frameLeft = 45\n    }\n\n    update() {\n      this.x += this.speed;\n      this.y += this.curve * Math.sin(this.angle);\n      this.angle += this.angleSpeed;\n      if (this.x + this.width > 1063) this.speed = Math.random() * -3;\n      if (this.x + this.width < 267) this.speed = Math.random() * 3;\n      if (this.y + this.height > 435) this.curve = Math.random() * 5;\n      if (this.y + this.height < 100) this.angleSpeed = Math.random() * 0.2;\n\n      if (gameFrame % 7 === 0) {\n        this.frame > 1 ? this.frame = 0 : this.frame++;\n      }\n\n      ; //Allows us to control update rate of animations and \n      //cycles through the three animations\n    }\n\n    draw() {\n      // ctx.fillRect(this.x, this.y, this.radius, this.radius);\n      if (this.speed < 0) {\n        ctx.drawImage(this.type, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);\n      } else ctx.drawImage(this.type, this.frame * this.spriteWidth, 45, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);\n    }\n\n  }\n\n  ;\n\n  function animate() {\n    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    renderCanvasElements();\n    fishArray.forEach(fish => {\n      fish.update();\n      fish.draw();\n    });\n    gameFrame++;\n    requestAnimationFrame(animate);\n  }\n\n  ;\n  testFish = new midFish();\n  fishArray.push(testFish);\n  console.log(fishArray);\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfV0lEVEgiLCJ3aWR0aCIsIkNBTlZBU19IRUlHSFQiLCJoZWlnaHQiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFkZGxlV2lkdGgiLCJlIiwicmVsYXRpdmVYIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJwYWRkbGVYIiwicmVuZGVyQ2FudmFzRWxlbWVudHMiLCJmaWxsc3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVJlY3QiLCJmaXNoQXJyYXkiLCJnYW1lRnJhbWUiLCJtaWRGaXNoIiwiY29uc3RydWN0b3IiLCJtaWRGaXNoSW1hZ2UiLCJJbWFnZSIsInNyYyIsInR5cGUiLCJzcGVlZCIsIk1hdGgiLCJyYW5kb20iLCJzaXplIiwicmFkaXVzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJ4IiwiZmxvb3IiLCJ5IiwiZnJhbWUiLCJhbmdsZSIsImFuZ2xlU3BlZWQiLCJjdXJ2ZSIsInVwZGF0ZSIsInNpbiIsImRyYXciLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsImZpc2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0ZXN0RmlzaCIsInB1c2giXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpc2hfdGFuay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCcpO1xuXG4gICAgLy9DYW52YXMgU2V0dXAgYW5kIENvbnN0YW50c1xuXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vQ2FudmFzJyk7XG5cbiAgICB3aW5kb3cuY2FudmFzID0gY2FudmFzXG5cbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBDQU5WQVNfV0lEVEggPSBjYW52YXMud2lkdGg7XG5cbiAgICBDQU5WQVNfSEVJR0hUID0gY2FudmFzLmhlaWdodDtcblxuICAgIC8vTW91c2UgTW92ZW1lbnQgJiBMb2dpY1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVIYW5kbGVyLCBmYWxzZSk7XG5cbiAgICBsZXQgcGFkZGxlV2lkdGggPSA0XG5cblxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgICAgICB2YXIgcmVsYXRpdmVYID0gZS5jbGllbnRYIC0gY2FudmFzLm9mZnNldExlZnQ7XG4gICAgICAgIGlmKHJlbGF0aXZlWCA+IDAgJiYgcmVsYXRpdmVYIDwgY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICBwYWRkbGVYID0gcmVsYXRpdmVYIC0gcGFkZGxlV2lkdGgvMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckNhbnZhc0VsZW1lbnRzKCkge1xuICAgIC8vRmxvb3JcbiAgICBjdHguZmlsbHN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLDUzMCwgMTIyMCwgMjApO1xuXG4gICAgLy9SYWRpbyBUYWJsZVxuICAgIGN0eC5maWxsUmVjdCgyMCwgMzYwLCAxMDAsIDEwMDApO1xuXG4gICAgLy9SYWRpb1xuXG4gICAgY3R4LmZpbGxSZWN0KDM1LCAzMjAsIDcwLCAxMDApXG5cbiAgICAvL0Zpc2h0YW5rIFRhYmxlXG5cbiAgICAvL0xlZnQgTGVnXG4gICAgY3R4LmZpbGxSZWN0KDI4MCwgNDgwLCA3MCwgMTIwKVxuXG4gICAgLy9SaWdodCBMZWdcbiAgICBjdHguZmlsbFJlY3QoOTQwLCA0ODAsIDcwLCAxMjApXG5cbiAgICAvL1RhYmxldG9wXG4gICAgY3R4LmZpbGxSZWN0KDIyMCwgNDcwLCA4NTAsIDEwKVxuXG4gICAgLy9GaXNodGFua1xuICAgIGN0eC5zdHJva2VSZWN0KDIzMCwgMTAwLCA4MzAsIDM3MClcblxuICAgIH1cblxuICAgIC8vdGVzdCBGaXNoIHJlbmRlcmluZyBhbmQgYW5pbWF0aW9uXG4gICAgXG4gICAgbGV0IGZpc2hBcnJheSA9IFtdO1xuXG4gICAgbGV0IGdhbWVGcmFtZSA9IDA7XG5cbiAgICAvLyBjb25zdCBpbml0aWFsRmlzaE51bSA9IDE7XG5cbiAgICBjbGFzcyBtaWRGaXNoIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBjb25zdCBtaWRGaXNoSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG1pZEZpc2hJbWFnZS5zcmMgPSAnLi9hc3NldHMvbWlkX2Zpc2hfc3ByaXRlX3NoZWV0X2ZpbmFsLnBuZydcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IG1pZEZpc2hJbWFnZTtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNCAtIDI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSAzO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAzMDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSA0NTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gNDU7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zcHJpdGVXaWR0aFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNwcml0ZUhlaWdodFxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwNjAgLSAyMzApICsgMjMwKTtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MjAgLSAxMDApICsgMTAwKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc3ByaXRlV2lkdGhMZWZ0ID0gc3ByaXRlV2lkdGhMZWZ0O1xuICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGVIZWlnaHRMZWZ0ID0gc3ByaXRlSGVpZ2h0TGVmdDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMC4yO1xuICAgICAgICAgICAgdGhpcy5jdXJ2ZSA9IE1hdGgucmFuZG9tKCkgKiA1O1xuICAgICAgICAgICAgLy8gdGhpcy5zd2ltU3BlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzICsgMSk7XG4gICAgICAgICAgICAvLyB0aGlzLmZyYW1lTGVmdCA9IDQ1XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5jdXJ2ZSAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLmFuZ2xlU3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA+IDEwNjMpIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogLTM7XG4gICAgICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA8IDI2NykgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzO1xuICAgICAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gNDM1KSB0aGlzLmN1cnZlID0gTWF0aC5yYW5kb20oKSAqIDU7XG4gICAgICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCAxMDApIHRoaXMuYW5nbGVTcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAwLjI7XG4gICAgICAgICAgICBpZiAoZ2FtZUZyYW1lICUgNyA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZSA+IDEgPyB0aGlzLmZyYW1lID0gMCA6IHRoaXMuZnJhbWUrKztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL0FsbG93cyB1cyB0byBjb250cm9sIHVwZGF0ZSByYXRlIG9mIGFuaW1hdGlvbnMgYW5kIFxuICAgICAgICAgICAgLy9jeWNsZXMgdGhyb3VnaCB0aGUgdGhyZWUgYW5pbWF0aW9uc1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIGRyYXcoKXtcbiAgICAgICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnR5cGUsIHRoaXMuZnJhbWUgKiB0aGlzLnNwcml0ZVdpZHRoLCAwLCB0aGlzLnNwcml0ZVdpZHRoLCB0aGlzLnNwcml0ZUhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnR5cGUsIHRoaXMuZnJhbWUgKiB0aGlzLnNwcml0ZVdpZHRoLCA0NSwgdGhpcy5zcHJpdGVXaWR0aCwgdGhpcy5zcHJpdGVIZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICByZW5kZXJDYW52YXNFbGVtZW50cygpO1xuICAgICAgICBmaXNoQXJyYXkuZm9yRWFjaChmaXNoID0+IHtcbiAgICAgICAgICAgIGZpc2gudXBkYXRlKCk7XG4gICAgICAgICAgICBmaXNoLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWVGcmFtZSsrO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfTtcblxuICAgIHRlc3RGaXNoID0gbmV3IG1pZEZpc2goKTtcblxuICAgIGZpc2hBcnJheS5wdXNoKHRlc3RGaXNoKTtcblxuICAgIGNvbnNvbGUubG9nKGZpc2hBcnJheSk7IFxuXG4gICAgYW5pbWF0ZSgpO1xuXG59KTtcblxuIl0sIm1hcHBpbmdzIjoiQUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBK0NDLEtBQUQsSUFBVztFQUNyREMsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFEcUQsQ0FHckQ7O0VBRUEsSUFBSUMsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBYjtFQUVBQyxNQUFNLENBQUNGLE1BQVAsR0FBZ0JBLE1BQWhCO0VBRUEsSUFBSUcsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtFQUVBQyxZQUFZLEdBQUdMLE1BQU0sQ0FBQ00sS0FBdEI7RUFFQUMsYUFBYSxHQUFHUCxNQUFNLENBQUNRLE1BQXZCLENBYnFELENBZXJEOztFQUVBYixRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDYSxnQkFBdkMsRUFBeUQsS0FBekQ7RUFFQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7O0VBR0EsU0FBU0QsZ0JBQVQsQ0FBMEJFLENBQTFCLEVBQTZCO0lBQ3pCLElBQUlDLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxPQUFGLEdBQVliLE1BQU0sQ0FBQ2MsVUFBbkM7O0lBQ0EsSUFBR0YsU0FBUyxHQUFHLENBQVosSUFBaUJBLFNBQVMsR0FBR1osTUFBTSxDQUFDTSxLQUF2QyxFQUE4QztNQUMxQ1MsT0FBTyxHQUFHSCxTQUFTLEdBQUdGLFdBQVcsR0FBQyxDQUFsQztJQUNIO0VBQ0o7O0VBRUQsU0FBU00sb0JBQVQsR0FBZ0M7SUFDaEM7SUFDQWIsR0FBRyxDQUFDYyxTQUFKLEdBQWdCLE9BQWhCO0lBQ0FkLEdBQUcsQ0FBQ2UsUUFBSixDQUFhLENBQWIsRUFBZSxHQUFmLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLEVBSGdDLENBS2hDOztJQUNBZixHQUFHLENBQUNlLFFBQUosQ0FBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLElBQTNCLEVBTmdDLENBUWhDOztJQUVBZixHQUFHLENBQUNlLFFBQUosQ0FBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLEVBVmdDLENBWWhDO0lBRUE7O0lBQ0FmLEdBQUcsQ0FBQ2UsUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsR0FBM0IsRUFmZ0MsQ0FpQmhDOztJQUNBZixHQUFHLENBQUNlLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEdBQTNCLEVBbEJnQyxDQW9CaEM7O0lBQ0FmLEdBQUcsQ0FBQ2UsUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsRUFBNUIsRUFyQmdDLENBdUJoQzs7SUFDQWYsR0FBRyxDQUFDZ0IsVUFBSixDQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUI7RUFFQyxDQXZEb0QsQ0F5RHJEOzs7RUFFQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7RUFFQSxJQUFJQyxTQUFTLEdBQUcsQ0FBaEIsQ0E3RHFELENBK0RyRDs7RUFFQSxNQUFNQyxPQUFOLENBQWM7SUFDVkMsV0FBVyxHQUFHO01BQ1YsTUFBTUMsWUFBWSxHQUFHLElBQUlDLEtBQUosRUFBckI7TUFDQUQsWUFBWSxDQUFDRSxHQUFiLEdBQW1CLDBDQUFuQjtNQUNBLEtBQUtDLElBQUwsR0FBWUgsWUFBWjtNQUNBLEtBQUtJLEtBQUwsR0FBYUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQWpDO01BQ0EsS0FBS0MsSUFBTCxHQUFZLENBQVo7TUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtNQUNBLEtBQUtDLFdBQUwsR0FBbUIsRUFBbkI7TUFDQSxLQUFLQyxZQUFMLEdBQW9CLEVBQXBCO01BQ0EsS0FBSzVCLEtBQUwsR0FBYSxLQUFLMkIsV0FBbEI7TUFDQSxLQUFLekIsTUFBTCxHQUFjLEtBQUswQixZQUFuQjtNQUNBLEtBQUtDLENBQUwsR0FBU04sSUFBSSxDQUFDTyxLQUFMLENBQVdQLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixPQUFPLEdBQXhCLElBQStCLEdBQTFDLENBQVQ7TUFDQSxLQUFLTyxDQUFMLEdBQVNSLElBQUksQ0FBQ08sS0FBTCxDQUFXUCxJQUFJLENBQUNDLE1BQUwsTUFBaUIsTUFBTSxHQUF2QixJQUE4QixHQUF6QyxDQUFULENBWlUsQ0FhVjtNQUNBOztNQUNBLEtBQUtRLEtBQUwsR0FBYSxDQUFiO01BQ0EsS0FBS0MsS0FBTCxHQUFhLENBQWI7TUFDQSxLQUFLQyxVQUFMLEdBQWtCWCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBbEM7TUFDQSxLQUFLVyxLQUFMLEdBQWFaLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUE3QixDQWxCVSxDQW1CVjtNQUNBO0lBQ0g7O0lBQ0RZLE1BQU0sR0FBRztNQUNMLEtBQUtQLENBQUwsSUFBVSxLQUFLUCxLQUFmO01BQ0EsS0FBS1MsQ0FBTCxJQUFVLEtBQUtJLEtBQUwsR0FBYVosSUFBSSxDQUFDYyxHQUFMLENBQVMsS0FBS0osS0FBZCxDQUF2QjtNQUNBLEtBQUtBLEtBQUwsSUFBYyxLQUFLQyxVQUFuQjtNQUNBLElBQUksS0FBS0wsQ0FBTCxHQUFTLEtBQUs3QixLQUFkLEdBQXNCLElBQTFCLEVBQWdDLEtBQUtzQixLQUFMLEdBQWFDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUFDLENBQTlCO01BQ2hDLElBQUksS0FBS0ssQ0FBTCxHQUFTLEtBQUs3QixLQUFkLEdBQXNCLEdBQTFCLEVBQStCLEtBQUtzQixLQUFMLEdBQWFDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUE3QjtNQUMvQixJQUFJLEtBQUtPLENBQUwsR0FBUyxLQUFLN0IsTUFBZCxHQUF1QixHQUEzQixFQUFnQyxLQUFLaUMsS0FBTCxHQUFhWixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBN0I7TUFDaEMsSUFBSSxLQUFLTyxDQUFMLEdBQVMsS0FBSzdCLE1BQWQsR0FBdUIsR0FBM0IsRUFBZ0MsS0FBS2dDLFVBQUwsR0FBa0JYLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFsQzs7TUFDaEMsSUFBSVQsU0FBUyxHQUFHLENBQVosS0FBa0IsQ0FBdEIsRUFBd0I7UUFDcEIsS0FBS2lCLEtBQUwsR0FBYSxDQUFiLEdBQWlCLEtBQUtBLEtBQUwsR0FBYSxDQUE5QixHQUFrQyxLQUFLQSxLQUFMLEVBQWxDO01BQ0g7O01BQUEsQ0FWSSxDQVdMO01BQ0E7SUFFSDs7SUFDRE0sSUFBSSxHQUFFO01BQ0Y7TUFDQSxJQUFJLEtBQUtoQixLQUFMLEdBQWEsQ0FBakIsRUFBb0I7UUFDcEJ6QixHQUFHLENBQUMwQyxTQUFKLENBQWMsS0FBS2xCLElBQW5CLEVBQXlCLEtBQUtXLEtBQUwsR0FBYSxLQUFLTCxXQUEzQyxFQUF3RCxDQUF4RCxFQUEyRCxLQUFLQSxXQUFoRSxFQUE2RSxLQUFLQyxZQUFsRixFQUFnRyxLQUFLQyxDQUFyRyxFQUF3RyxLQUFLRSxDQUE3RyxFQUFnSCxLQUFLL0IsS0FBckgsRUFBNEgsS0FBS0UsTUFBakk7TUFDQyxDQUZELE1BR0FMLEdBQUcsQ0FBQzBDLFNBQUosQ0FBYyxLQUFLbEIsSUFBbkIsRUFBeUIsS0FBS1csS0FBTCxHQUFhLEtBQUtMLFdBQTNDLEVBQXdELEVBQXhELEVBQTRELEtBQUtBLFdBQWpFLEVBQThFLEtBQUtDLFlBQW5GLEVBQWlHLEtBQUtDLENBQXRHLEVBQXlHLEtBQUtFLENBQTlHLEVBQWlILEtBQUsvQixLQUF0SCxFQUE2SCxLQUFLRSxNQUFsSTtJQUNIOztFQTVDUzs7RUE2Q2I7O0VBRUQsU0FBU3NDLE9BQVQsR0FBbUI7SUFDZjNDLEdBQUcsQ0FBQzRDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CMUMsWUFBcEIsRUFBa0NFLGFBQWxDO0lBQ0FTLG9CQUFvQjtJQUNwQkksU0FBUyxDQUFDNEIsT0FBVixDQUFrQkMsSUFBSSxJQUFJO01BQ3RCQSxJQUFJLENBQUNQLE1BQUw7TUFDQU8sSUFBSSxDQUFDTCxJQUFMO0lBQ0gsQ0FIRDtJQUlBdkIsU0FBUztJQUNUNkIscUJBQXFCLENBQUNKLE9BQUQsQ0FBckI7RUFDSDs7RUFBQTtFQUVESyxRQUFRLEdBQUcsSUFBSTdCLE9BQUosRUFBWDtFQUVBRixTQUFTLENBQUNnQyxJQUFWLENBQWVELFFBQWY7RUFFQXJELE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUIsU0FBWjtFQUVBMEIsT0FBTztBQUVWLENBbklEIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXNoX3RhbmsvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;