(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var box=document.querySelector('.petals'),
      n=innerWidth<640?16:26,   /* EDIT: how many roses and petals fall at once */
      cols=['#ff7a9a','#e11d48','#ffb3c6','#c2185b','#ff4d79'];
  for(var k=0;k<n;k++){
    var f=document.createElement('span'),i=document.createElement('i'),rose=k%3===0;
    f.className='fall';
    f.style.left=(Math.random()*100)+'%';
    f.style.fontSize=(rose?22+Math.random()*16:12+Math.random()*12)+'px';
    f.style.animationDuration=(10+Math.random()*9)+'s';
    f.style.animationDelay=(Math.random()*8)+'s';
    i.style.animationDuration=(3+Math.random()*3)+'s';
    i.style.animationDelay=(-Math.random()*3)+'s';
    if(rose){i.textContent='🌹';}
    else{i.className='petal';i.style.background=cols[k%cols.length];}
    f.appendChild(i);box.appendChild(f);
  }
})();
