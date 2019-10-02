function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let x = document.querySelectorAll('#grand-node div');
  return x[x.length - 1];
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.rank-list');
  console.log("------------------>" + JSON.stringify(ranks));
}
