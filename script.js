// projects click -> open link in new tab
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.dataset.link;
    if(link) window.open(link, '_blank', 'noopener');
  });
});

function scrollToProjects(){
  const el = document.getElementById('projects');
  if(!el) return;
  window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 20, behavior:'smooth'});
}

function contactMe(){
  window.location.href = 'mailto:seunome@exemplo.com';
}

// progressive reveal for projects when scrolling
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 0;
      entry.target.animate([{opacity:0, transform:'translateY(14px)'},{opacity:1, transform:'translateY(0)'}],{duration:500,fill:'forwards',easing:'cubic-bezier(.2,.8,.2,1)'});
      observer.unobserve(entry.target);
    }
  })
},{threshold:0.12});

document.querySelectorAll('.project-card').forEach(c=>observer.observe(c));
