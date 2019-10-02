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
  let ranks = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < ranks.length; i++) {
    let rank = ranks[i];
    console.log(`----> ${rank.innerHTML}`);
    let children = rank.children;
    // console.log(children + '------------->')
  }
}
