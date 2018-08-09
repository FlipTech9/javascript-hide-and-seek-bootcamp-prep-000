function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankLists = document.querySelectorAll('.ranked-list')
  
  for (let i= 0, l = rankLists.length; i < l; i++){
    let children = rankLists[i].children
  }
  
  for (let j = 0, k = children.length; j < k; j++){
    children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
  
}

function deepestChild(){
  let grandNode = document.getElementById('grand-node')
  let gGrandNode = node.children[0]
  
  while (gGrandNode){
  grandNode = gGrandNode
  gGrandNode = grandNode.children[0]
  }
  return grandNode
}