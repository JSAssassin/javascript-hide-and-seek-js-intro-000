function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length - 1];
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < ranks.length; i++) {
    let rank = ranks[i];
    let children = rank.children;
    for(let j = 0; j < children.length; j++) {
      let child = children[i];
      console.log(`${child} ------->`)
    }
    // console.log(children + '------------->')
  }
}
