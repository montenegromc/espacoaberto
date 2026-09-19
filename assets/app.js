const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.classList.toggle('open',o);menu.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('[data-dot]')];let idx=0,timer;
function show(i){if(!slides.length)return;idx=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===idx));dots.forEach((d,n)=>d.classList.toggle('active',n===idx))}
function auto(){clearInterval(timer);timer=setInterval(()=>show(idx+1),6000)}
document.querySelector('[data-next]')?.addEventListener('click',()=>{show(idx+1);auto()});document.querySelector('[data-prev]')?.addEventListener('click',()=>{show(idx-1);auto()});dots.forEach(d=>d.addEventListener('click',()=>{show(+d.dataset.dot);auto()}));auto();

document.querySelector('[data-lead-form]')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget),nome=f.get('nome'),seg=f.get('segmento'),uni=f.get('unidade');const msg=`Olá! Meu nome é ${nome}. Gostaria de agendar uma visita ao Colégio Espaço Aberto. Segmento: ${seg}. Unidade de interesse: ${uni}.`;window.open(`https://wa.me/5585981277244?text=${encodeURIComponent(msg)}`,'_blank','noopener')});
