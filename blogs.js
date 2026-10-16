(()=>{const g=document.getElementById('bgrid');if(!g)return;
 const cards=[...g.children],q=document.getElementById('bq'),btns=[...document.querySelectorAll('#bcats button')],more=document.getElementById('bmore'),cnt=document.getElementById('bcount'),empty=document.getElementById('bempty');
 let cat='All',shown=12,term='';
 const render=()=>{
  const m=cards.filter(c=>(cat==='All'||c.dataset.cat===cat)&&(!term||c.dataset.s.includes(term)));
  cards.forEach(c=>c.style.display='none');
  m.slice(0,shown).forEach(c=>{c.style.display='';c.classList.add('in')});
  more.style.display=m.length>shown?'':'none';
  cnt.textContent=m.length?('Showing '+Math.min(shown,m.length)+' of '+m.length+' articles'):'';
  empty.hidden=m.length>0};
 btns.forEach(b=>b.onclick=()=>{cat=b.dataset.cat;shown=12;btns.forEach(x=>x.classList.toggle('on',x===b));render()});
 q.oninput=()=>{term=q.value.trim().toLowerCase();shown=12;render()};
 more.onclick=()=>{shown+=12;render()};
 const u=new URLSearchParams(location.search).get('cat');
 if(u){const b=btns.find(x=>x.dataset.cat.toLowerCase()===u.toLowerCase());if(b)b.click();else render()}else render();
})();
