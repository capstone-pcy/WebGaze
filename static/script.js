webgazer.showVideoPreview(false).showPredictionPoints(false);
let var1 = 0;
function stop() {
  var1 = 1;
  console.log('윤식하이ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ');
}
function start() {
  var1 = 2;
  console.log('윤식하이ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ');
}

webgazer
  .setGazeListener((data, timestamp) => {
    if (var1 == 1) {
      webgazer.pause();
    }
    if (var1 == 2) {
      console.log(data, timestamp)
    }
  })
  .begin()

