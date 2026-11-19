import './styles.css';
(function(){
var views=document.querySelectorAll('.view'),links=document.querySelectorAll('#nv a');
var map={cs1:'work',cs2:'work',cs3:'work',concept:'work'};
function route(){var h=(location.hash||'#home').slice(1);if(!document.getElementById('v-'+h))h='home';
views.forEach(function(v){v.classList.toggle('on',v.id==='v-'+h)});
links.forEach(function(a){a.classList.toggle('on',a.dataset.r===(map[h]||h))});window.scrollTo(0,0)}
window.addEventListener('hashchange',route);route();
function tg(box){box.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){
box.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
document.querySelectorAll('[data-g="'+box.dataset.tg+'"]').forEach(function(p){p.classList.toggle('on',p.id===b.dataset.t)})})})}
document.querySelectorAll('.tabs').forEach(tg);
document.querySelectorAll('[data-go]').forEach(function(b){b.addEventListener('click',function(){
document.querySelector('[data-tg="m3"] [data-t="'+b.dataset.go+'"]').click()})});
var ts=document.getElementById('ts'),tt;
document.querySelectorAll('[data-toast]').forEach(function(b){b.addEventListener('click',function(){
ts.textContent=b.dataset.toast;ts.style.display='block';clearTimeout(tt);tt=setTimeout(function(){ts.style.display='none'},3500)})});
var chips=document.querySelectorAll('#lb .chip'),sel='';
chips.forEach(function(c){c.addEventListener('click',function(){sel=c.textContent;chips.forEach(function(x){x.classList.toggle('on',x===c)});document.getElementById('subm').textContent=''})});
document.getElementById('sub').addEventListener('click',function(){document.getElementById('subm').textContent=sel?'Label submitted: '+sel+'. Next image loading…':'Choose a label first.'});
})();
