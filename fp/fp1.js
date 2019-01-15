function kekka(){

  var seikai=0;
  var trueAns = new Array(0,3);

  for (i=0 ; i<2 ; i++)
  {
    if( document.radio1.elements[trueAns[i]].checked )
      seikai++;
  }

  alert("あなたは"+seikai+"問正解でした！");
}
