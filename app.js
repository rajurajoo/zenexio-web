const $=s=>document.querySelector(s)||document.createElement('div'),$$=s=>[...document.querySelectorAll(s)];
const chips=(a,t='span')=>a.map(x=>`<${t}>${x}</${t}>`).join('');

/* ---------- DATA ---------- */
const D={
rot:['IT Solutions','Web Development','CRM','Digital Marketing','Business Automation'],
marq:['IT Solutions','Web Development','CRM','Digital Marketing','Business Automation','Custom Software','UI/UX Design','SEO'],
why:['Business-focused technology','Modern and scalable solutions','Custom development','Creative digital expertise','Transparent processes','Responsive support','Performance-driven strategies','Solutions designed for long-term growth'],
svc:[
 {t:'Web Development',s:'Websites That Work as Hard as Your Business',p:'Modern, responsive, high-performance websites built to attract visitors, communicate your brand, generate leads, and convert customers.',l:['Corporate Websites','Business Websites','E-commerce Websites','Landing Pages','WordPress Development','Custom Website Development','Web Applications','Booking Websites','Real Estate Websites','Tourism Websites','Service Business Websites','Portfolio Websites','Website Redesign','Website Maintenance','Website Speed Optimization','SEO-Friendly Development','API & Third-Party Integrations']},
 {t:'CRM & Business Software',s:'Turn Leads Into Customers',p:'Custom CRM platforms that bring leads, customers, sales, follow-ups, quotations, invoices, employees and reports into one system.',l:['Lead Management','Sales Pipeline','Customer Management','Follow-Up Management','Quotation Management','Invoice Management','Employee Management','Reports & Analytics','CRM Integrations']},
 {t:'Digital Marketing',s:'Get Seen. Get Leads. Get Results.',p:'Strategy, creative content, search optimization, paid advertising, and performance analysis to attract the right audience.',l:['Social Media Marketing','Search Engine Optimization','Google Ads','Meta Advertising','Content Marketing','Brand & Creative Design']},
 {t:'IT Solutions',s:'Technology Infrastructure You Can Depend On',p:'Secure, reliable, and efficient technology infrastructure that fits today and leaves room to grow.',l:['IT Consulting','Business IT Solutions','Cloud Solutions','Server Setup','Website Hosting','Domain & Email Setup','Business Email Solutions','Data Backup','Network Solutions','Cybersecurity Solutions','Software Integration','Technical Support','System Maintenance','Cloud Migration','Database Solutions']},
 {t:'Software Development',s:'Software Built Around Your Business',p:'When off-the-shelf software doesn\'t fit, we develop custom software designed around your exact requirements.',l:['Business Management Software','ERP Solutions','CRM Systems','Booking Systems','Inventory Management','HR Management','Accounting Systems','Customer Portals','Employee Portals','Admin Dashboards','SaaS Platforms','Mobile Applications','API Development']},
 {t:'Business Automation',s:'Work Smarter. Automate Repetitive Tasks.',p:'Automate repetitive workflows so your team can focus on customers, sales, and growth.',l:['Lead capture','Lead assignment','Customer notifications','Follow-up reminders','WhatsApp communication','Email notifications','Quotation generation','Invoice generation','Payment reminders','Task assignment','Sales workflows','Reporting','Data synchronization']}
],
pipe:['New Lead','Qualified','Inquiry','Quotation','Follow-Up','Negotiation','Won / Lost'],
crm:[
 ['Lead Management','Capture and organize leads from multiple sources.',['Lead creation','Lead assignment','Lead source tracking','Lead qualification','Lead status','Lead scoring','Lead masking','Bulk lead upload','Lead distribution']],
 ['Sales Pipeline','Manage your complete sales journey.',['New Lead','Qualified','Inquiry','Quotation','Follow-Up','Negotiation','Won / Lost']],
 ['Customer Management','Maintain a complete customer profile.',['Contact information','Communication history','Activities','Documents','Quotations','Orders','Payments','Follow-ups','Notes']],
 ['Follow-Up Management','Never miss an opportunity.',['Follow-up reminders','Scheduled calls','Tasks','Notifications','Pending follow-ups','Missed follow-up alerts']],
 ['Quotation Management','Create professional quotations quickly.',['Quotation creation','Product/service selection','Discounts','Taxes','Terms & conditions','PDF generation','Email/WhatsApp sharing','Quotation status tracking']],
 ['Invoice Management','Manage your billing process from one platform.',['Invoice creation','Tax calculation','Payment tracking','Outstanding balances','Payment reminders','Invoice reports']],
 ['Employee Management','Manage users and sales teams.',['User accounts','Roles & permissions','Team assignment','Activity tracking','Performance monitoring','Attendance integration']],
 ['Reports & Analytics','Make better decisions using real-time business data.',['Sales reports','Lead reports','Conversion reports','Revenue reports','Employee performance','Source performance','Follow-up reports','Outstanding payments','Profit analysis']]
],
integ:['WhatsApp','Email','SMS','Phone systems','Payment gateways','Website forms','Google services','APIs','Third-party software'],
webFeat:['Modern UI/UX','Responsive design','Fast loading','SEO-friendly structure','SSL security','Contact forms','WhatsApp integration','Social media integration','Google Maps integration','Analytics integration','Lead capture','CMS functionality','Secure hosting support'],
mkt:[
 ['📣','Social Media Marketing','Build a recognizable brand across major social platforms.',['Social media strategy','Content planning','Creative designs','Reels & video content','Copywriting','Hashtag strategy','Community management','Monthly reporting']],
 ['🔍','Search Engine Optimization','Improve your visibility when customers search for your services.',['Technical SEO','On-page SEO','Keyword research','Local SEO','Content optimization','Website optimization','Link building','SEO reporting']],
 ['🎯','Google Ads','Reach customers actively searching for your products and services.',['Search campaigns','Display campaigns','Remarketing','Performance campaigns','Keyword targeting','Conversion tracking','Campaign optimization']],
 ['📱','Meta Advertising','Reach your target audience through highly targeted campaigns.',['Facebook Ads','Instagram Ads','Lead generation','Traffic campaigns','Remarketing','Conversion campaigns','Audience targeting']],
 ['✍️','Content Marketing','Create content that informs, engages, and converts.',['Website content','Blog articles','Social media content','Promotional content','Landing page copy','Video scripts']],
 ['🎨','Brand & Creative Design','Make your business look as professional as it operates.',['Logo design','Brand identity','Social media creatives','Marketing materials','Brochures','Presentations','Advertisements','Corporate profiles']]
],
it:['IT Consulting','Cloud Solutions','Server Setup','Website Hosting','Domain & Email Setup','Data Backup','Network Solutions','Cybersecurity','Technical Support','Cloud Migration','Database Solutions'],
sw:['ERP Solutions','CRM Systems','Booking Systems','Inventory Management','HR Management','Accounting Systems','Customer Portals','Admin Dashboards','SaaS Platforms','Mobile Applications','API Development'],
auto:['Lead capture','Lead assignment','Follow-up reminders','WhatsApp communication','Email notifications','Quotation generation','Invoice generation','Payment reminders','Task assignment','Reporting','Data synchronization'],
ind:[
 ['🏢','Real Estate',['Real Estate CRM','Lead management','Property management','Agent management','Property listings','Follow-ups','Sales pipeline','WhatsApp automation']],
 ['✈️','Tourism & Travel',['Tourism CRM','Package management','Booking management','Visa tracking','Customer management','Supplier management','Quotations','Payment tracking']],
 ['🩺','Healthcare & Clinics',['Customer management','Appointment systems','CRM','Digital marketing','Lead generation','Communication automation']],
 ['🛍️','Retail & E-commerce',['E-commerce websites','Inventory systems','CRM','Marketing automation','Customer management']],
 ['💼','Professional Services',['Lead management','CRM','Quotation systems','Customer portals','Business automation']],
 ['🏨','Hospitality',['Booking websites','Digital marketing','Customer management','Reservation systems','Online promotions']],
 ['🏗️','Construction & Contracting',['Project management','CRM','Lead management','Quotation systems','Customer portals']]
],
proc:[['Discover','We understand your business, challenges, objectives, and requirements.'],['Strategize','Our team develops a solution strategy aligned with your goals.'],['Design','We create intuitive interfaces and experiences designed around your users.'],['Develop','Our developers turn the approved concept into a functional digital solution.'],['Test','We test functionality, performance, responsiveness, and security.'],['Launch','Your website, software, CRM, or campaign is deployed and prepared for real-world use.'],['Grow','We continue optimizing your digital presence and technology as your business grows.']],
whyc:[['🧵','Customized Solutions','We don\'t believe every business should use the same solution. We build around your requirements.'],['🚀','Modern Technology','We use modern development approaches and technologies to create scalable digital solutions.'],['🤝','One Digital Partner','Website, CRM, software, marketing, automation, and IT — everything under one roof.'],['📈','Scalable Solutions','Our solutions are designed to grow with your business.'],['💬','Transparent Communication','Clear processes, clear deliverables, and clear communication throughout the project.'],['🛟','Long-Term Support','Our relationship doesn\'t end when the project goes live. We remain available to support and improve your digital ecosystem.']],
stack:[['Front-End','HTML5|CSS3|JavaScript|React|Next.js'],['Back-End','PHP|Node.js|Python|Laravel|APIs'],['Databases','MySQL|PostgreSQL|MongoDB'],['CMS','WordPress|WooCommerce|Custom CMS'],['Cloud & Infrastructure','AWS|Cloud Hosting|VPS|CDN|SSL'],['Integrations','WhatsApp|Payment Gateways|Google Services|Email|SMS|REST APIs|Third-Party Platforms']],
folio:[['🌐','Corporate Websites','Modern websites designed to establish credibility and generate business enquiries.','linear-gradient(135deg,#a1d9ff,#eeffff)'],['🧩','CRM Platforms','Custom CRM systems designed around sales and customer management workflows.','linear-gradient(135deg,#c9ef81,#eeffff)'],['🛒','E-commerce Platforms','Online stores designed to provide seamless shopping experiences.','linear-gradient(135deg,#c0d2c1,#a1d9ff)'],['⚙️','Business Automation','Connected systems that reduce manual work and improve operational efficiency.','linear-gradient(135deg,#c9ef81,#a1d9ff)'],['📊','Digital Marketing Campaigns','Data-driven campaigns designed to increase visibility, traffic, leads, and conversions.','linear-gradient(135deg,#eeffff,#c0d2c1)']],
price:[['Website Development','Starting From','AED 699','Ideal for businesses looking for a professional online presence.'],['CRM Development','Custom','Pricing','Built around your sales, customer, and operational workflow.',1],['Digital Marketing','Monthly','Plans Available','Flexible packages for social media, SEO, paid advertising, and content.'],['Custom Software','Project-Based','Pricing','Designed and developed according to your business requirements.'],['Mobile Application','Tailored','Quote on Request','iOS and Android apps connected with your CRM, APIs, databases and business systems.']],
faq:[['What services does Zenexio provide?','Zenexio provides web development, CRM development, software development, IT solutions, digital marketing, business automation, and creative digital services.'],['Can you build a completely custom CRM?','Yes. We can develop a CRM around your specific sales process, business workflow, users, permissions, reports, integrations, and automation requirements.'],['Do you provide website maintenance?','Yes. We can provide ongoing website maintenance, updates, security monitoring, performance optimization, and technical support.'],['Can you integrate WhatsApp with our CRM?','Yes. WhatsApp can be integrated with CRM workflows for communication, notifications, lead management, and automation, subject to the applicable WhatsApp/API requirements.'],['Can you redesign our existing website?','Yes. We can redesign an existing website with a modern UI/UX, improved performance, mobile responsiveness, SEO-friendly structure, and improved conversion experience.'],['Do you provide digital marketing after website development?','Yes. We can provide ongoing SEO, social media management, content creation, Google Ads, Meta Ads, and other digital marketing services.'],['Can Zenexio develop mobile applications?','Yes. We can develop mobile applications and connect them with CRM, APIs, databases, and business systems where required.'],['Do you work with businesses in the UAE?','Yes. Zenexio can support businesses in the UAE as well as clients in other markets.']]
};

/* ---------- RENDER ---------- */
$('#marq').innerHTML=(`<span>${D.marq.join('</span><span>')}</span>`).repeat(2);
$('#whyList').innerHTML=chips(D.why,'li');
$('#integ').innerHTML=chips(D.integ);
$('#webFeat').innerHTML=chips(D.webFeat);
$('#webSvc').innerHTML=chips(D.svc[0].l);
$('#itList').innerHTML=chips(D.it);$('#swList').innerHTML=chips(D.sw);$('#autoList').innerHTML=chips(D.auto);
$('#mkt').innerHTML=D.mkt.map(m=>`<article class="card reveal"><div class="ico">${m[0]}</div><h3>${m[1]}</h3><p>${m[2]}</p><ul>${chips(m[3],'li')}</ul></article>`).join('');
$('#whyCards').innerHTML=D.whyc.map(m=>`<article class="card reveal"><div class="ico">${m[0]}</div><h3>${m[1]}</h3><p>${m[2]}</p></article>`).join('');
$('#stack').innerHTML=D.stack.map(s=>`<div class="stk reveal"><h4>${s[0]}</h4><div class="chips small">${chips(s[1].split('|'))}</div></div>`).join('');
$('#folio').innerHTML=D.folio.map(f=>`<article class="pf reveal"><div class="art" style="background:${f[3]}"><span>${f[0]}</span></div><div class="txt"><h3>${f[1]}</h3><p>${f[2]}</p></div></article>`).join('');
$('#price').innerHTML=D.price.map(p=>`<article class="pr reveal ${p[4]?'hot':''}"><h3>${p[0]}</h3><div class="amt"><small>${p[1]}</small>${p[2]}</div><p>${p[3]}</p></article>`).join('');
$('#tl').innerHTML=D.proc.map((p,i)=>`<div class="step reveal"><div class="bubble">0${i+1}</div><div><h3>${p[0]}</h3><p>${p[1]}</p></div></div>`).join('');
$('#faqList').innerHTML=D.faq.map(q=>`<div class="q reveal"><button>${q[0]}</button><div><p>${q[1]}</p></div></div>`).join('');
$$('.q button').forEach(b=>b.onclick=()=>{const q=b.parentNode,d=b.nextElementSibling,o=q.classList.toggle('open');d.style.maxHeight=o?d.scrollHeight+'px':0});

/* tab widgets */
function tabs(nav,pane,items,btn,draw){
 $(nav).innerHTML=items.map((x,i)=>`<button class="${i?'':'on'}">${btn(x,i)}</button>`).join('');
 const set=i=>{$$(nav+' button').forEach((b,j)=>b.classList.toggle('on',i==j));$(pane).innerHTML=`<div class="fade">${draw(items[i],i)}</div>`};
 $$(nav+' button').forEach((b,i)=>b.onclick=()=>set(i));set(0);return set;
}
tabs('#svcTabs','#svcPanel',D.svc,x=>x.t,(x,i)=>`<div style="display:contents"></div>`);
// service panel uses 2-col layout: rebuild
const svcSet=i=>{const x=D.svc[i];$$('#svcTabs button').forEach((b,j)=>b.classList.toggle('on',i==j));
 $('#svcPanel').innerHTML=`<div class="fade"><div class="num grad">0${i+1}</div><h3>${x.t}</h3><h4 style="color:var(--b);font-weight:500;margin:6px 0 14px">${x.s}</h4><p>${x.p}</p></div><div class="chips small fade">${chips(x.l)}</div>`};
$$('#svcTabs button').forEach((b,i)=>b.onclick=()=>svcSet(i));svcSet(0);
tabs('#crmNav','#crmPane',D.crm,x=>x[0],x=>`<h3>${x[0]}</h3><p>${x[1]}</p><ul>${chips(x[2],'li')}</ul>`);
tabs('#indNav','#indPane',D.ind,x=>x[0]+' '+x[1],x=>`<h3>${x[0]} ${x[1]}</h3><p>Tailored technology for ${x[1].toLowerCase()} businesses.</p><ul>${chips(x[2],'li')}</ul>`);

/* pipeline animation */
$('#pipe').innerHTML=D.pipe.map((p,i)=>`<span>${p}</span>${i<D.pipe.length-1?'<i>→</i>':''}`).join('');
let pi=0;setInterval(()=>{const s=$$('#pipe span');s.forEach((e,i)=>e.className=i==pi?'hot'+(pi==6?' won':''):'');pi=(pi+1)%s.length},1100);

/* rotating text */
let ri=0;setInterval(()=>{const r=$('#rot');r.style.opacity=0;r.style.transform='translateY(10px)';setTimeout(()=>{ri=(ri+1)%D.rot.length;r.textContent=D.rot[ri];r.style.opacity=1;r.style.transform='none'},350)},2200);

/* ---------- EFFECTS ---------- */
const nav=$('#nav'),prog=$('#progress'),glow=$('#glow');
addEventListener('scroll',()=>{nav.classList.toggle('sc',scrollY>20);prog.style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%'},{passive:true});
addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
$('#burger').onclick=()=>$('#links').classList.toggle('open');
$$('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));

const count=el=>{const t=+el.dataset.count,s=performance.now();(function f(n){const p=Math.min((n-s)/1600,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('hero-card'))e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach((e,i)=>{e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});

/* particle network */
function net(id){
 if(!document.querySelector(id))return;
 const c=$(id),x=c.getContext('2d');let w,h,P=[],m={x:-999,y:-999};
 const rs=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;P=Array.from({length:Math.min(90,w/16)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))};
 rs();addEventListener('resize',rs);
 c.parentNode.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
 let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(c);
 (function d(){requestAnimationFrame(d);if(!vis)return;x.clearRect(0,0,w,h);
  P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
   const dx=p.x-m.x,dy=p.y-m.y,dm=Math.hypot(dx,dy);if(dm<130){p.x+=dx/dm*1.4;p.y+=dy/dm*1.4}
   x.fillStyle='rgba(255,255,255,.85)';x.beginPath();x.arc(p.x,p.y,1.8,0,6.3);x.fill();
   for(let j=i+1;j<P.length;j++){const q=P[j],l=Math.hypot(p.x-q.x,p.y-q.y);if(l<130){x.strokeStyle=`rgba(255,255,255,${.22*(1-l/130)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}})})();
}
net('#net');net('#net2');

/* contact form -> mailto */
$('#form').onsubmit=async e=>{e.preventDefault();const form=e.target,fd=new FormData(form);fd.set('source',location.href);
 const btn=form.querySelector('button[type=submit]'),ok=$('#ok');btn.disabled=true;
 try{const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(fd).toString()});
  if(!r.ok)throw new Error(r.status);ok.textContent='Thank you! We have received your request and will reply within one business day.';ok.hidden=false;form.reset()}
 catch(_){const body=`Name: ${fd.get('name')}
Email: ${fd.get('email')}
Interested in: ${fd.get('service')}

${fd.get('message')}`;
  ok.textContent='Opening your email app… if nothing opens, write to info@zenexio.pro.';ok.hidden=false;
  location.href=`mailto:info@zenexio.pro?subject=${encodeURIComponent('Project enquiry — '+fd.get('service'))}&body=${encodeURIComponent(body)}`}
 finally{btn.disabled=false}};

/* ---------- vector icons: replace emoji with line SVGs ---------- */
const P={
'🌐':'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
'🧩':'<rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/>',
'📣':'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
'🛡':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
'🏢':'<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
'📊':'<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="5" rx=".5"/><rect x="12" y="8" width="3" height="9" rx=".5"/><rect x="17" y="5" width="3" height="12" rx=".5"/>',
'🔍':'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
'🎯':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
'📱':'<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
'✍':'<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19z"/><path d="M14 7l3 3M13 20h8"/>',
'🎨':'<path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2s-.3-2 1-2H17a4 4 0 004-4c0-5-4-10-9-10z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="10" r="1"/>',
'🧵':'<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
'🚀':'<path d="M14 4c4-1 6-1 6-1s0 2-1 6l-6 6-5-5z"/><path d="M9 11l-4 1-2 3 4 .5M13 15l-1 4-3 2-.5-4"/><circle cx="15" cy="9" r="1.2"/>',
'🤝':'<path d="M10 14a4 4 0 010-6l3-3a4 4 0 016 6l-1.5 1.5"/><path d="M14 10a4 4 0 010 6l-3 3a4 4 0 01-6-6l1.5-1.5"/>',
'📈':'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
'💬':'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
'🛟':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M5.6 5.6l3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9"/>',
'⚙':'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/><circle cx="12" cy="12" r="6.5"/>',
'🤖':'<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
'✈':'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
'🩺':'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>',
'🛍':'<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
'💼':'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18"/>',
'🏨':'<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 00-3-3h-7v6"/><circle cx="7" cy="11.5" r="1.8"/>',
'🏗':'<path d="M5 21V5l10 0M5 9h10M5 13h10M15 5v4"/><path d="M15 9l5 6M20 15v4"/><path d="M3 21h10"/>',
'🛒':'<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.5 12h11l2-8H6"/>',
'📥':'<path d="M4 13v6h16v-6M4 13l3-8h10l3 8h-5l-1 2h-4l-1-2z"/><path d="M12 3v6M9.5 7L12 9.5 14.5 7"/>',
'🧾':'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
'✉':'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
'📞':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
'📍':'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
'⚡':'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
'🔒':'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
};
const EMO=/\p{Extended_Pictographic}️?/gu;
function vecText(n){
 if(n.nodeType===3){
  if(!EMO.test(n.nodeValue)){EMO.lastIndex=0;return}EMO.lastIndex=0;
  const f=document.createDocumentFragment();let last=0,m,s=n.nodeValue;
  while((m=EMO.exec(s))){f.append(s.slice(last,m.index));const k=m[0].replace('️','');
   if(P[k]){const w=document.createElement('span');w.innerHTML=`<svg class="vi" viewBox="0 0 24 24" aria-hidden="true">${P[k]}</svg>`;f.append(w.firstChild)}last=m.index+m[0].length}
  f.append(s.slice(last));n.replaceWith(f);
 }else if(n.nodeType===1&&n.tagName!=='SCRIPT'&&n.tagName!=='STYLE'&&n.tagName!=='svg'){[...n.childNodes].forEach(vecText)}
}
vecText(document.body);
new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(vecText))).observe(document.body,{childList:true,subtree:true});

/* hero scroll zoom */
(()=>{const bg=document.querySelector('.h2-bg');if(!bg)return;let t=0;
 addEventListener('scroll',()=>{if(t)return;t=requestAnimationFrame(()=>{t=0;const y=Math.min(scrollY,innerHeight);bg.style.setProperty('--s',(1+y/innerHeight*0.18).toFixed(3))})},{passive:true})})();

/* ---------- vector illustrations (brand palette) ---------- */
const C={m:'#eeffff',l:'#c9ef81',s:'#a1d9ff',g:'#c0d2c1',k:'#000'};
const R=(x,y,w,h,f,rx=8,st)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}"${st?` stroke="${st}" stroke-width="1.5"`:''}/>`;
const T=(x,y,w,o=.18)=>`<rect x="${x}" y="${y}" width="${w}" height="5" rx="2.5" fill="#000" opacity="${o}"/>`;
const win=(inner,bg=C.m)=>`<svg class="ill" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">${R(14,12,372,236,'#000',16)}${R(18,16,364,228,bg,13)}${R(18,16,364,26,'#fff',13)}<circle cx="34" cy="29" r="4" fill="#ff6b6b"/><circle cx="48" cy="29" r="4" fill="#ffd166"/><circle cx="62" cy="29" r="4" fill="#7bd88f"/>${R(110,23,170,12,C.m,6)}${inner}</svg>`;
const ART={
website:win(`${R(30,52,340,70,C.s,12)}${R(44,64,110,10,'#000',5)}${R(44,82,160,6,'#fff',3)}${R(44,94,130,6,'#fff',3)}${R(44,106,64,12,'#000',6)}<circle cx="320" cy="87" r="30" fill="${C.l}"/><circle cx="338" cy="98" r="18" fill="#fff" opacity=".7"/>${[0,1,2].map(i=>R(30+i*116,134,108,96,[C.l,'#fff',C.g][i],12)+R(42+i*116,146,36,36,'#000',10)+T(42+i*116,194,70,.3)+T(42+i*116,206,50)).join('')}`),
crm:win(`${['New','Qualified','Quote','Won'].map((t,i)=>{const x=30+i*86;const col=[C.s,C.g,C.l,'#000'][i];return R(x,52,78,184,'#fff',10)+R(x+6,58,66,16,col,8)+`<text x="${x+39}" y="70" font-size="9" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle" fill="${i==3?C.l:'#000'}">${t}</text>`+[0,1,2].slice(0,i==3?2:3-(i%2)).map(j=>R(x+6,82+j*50,66,42,C.m,8)+T(x+12,92+j*50,40,.35)+T(x+12,104+j*50,28)+`<circle cx="${x+62}" cy="${120+j*50-6}" r="5" fill="${[C.l,C.s,C.g][j]}"/>`).join('')}).join('')}`,'#f4fffd'),
shop:win(`${R(30,50,200,16,'#fff',8)}${R(300,50,70,16,'#000',8)}${[0,1,2,3,4,5].map(i=>{const x=30+(i%3)*116,y=76+Math.floor(i/3)*82;return R(x,y,106,74,[C.l,C.s,C.g][i%3],12)+`<circle cx="${x+30}" cy="${y+30}" r="${14+i%2*4}" fill="#fff" opacity=".85"/>`+R(x+8,y+54,50,8,'#000',4)+R(x+70,y+52,28,12,'#000',6)}).join('')}`),
automation:`<svg class="ill" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"><path d="M70 130H130M200 130H240M290 70V100M290 160V190M240 130C260 130 270 100 290 100M240 130C260 130 270 160 290 160" stroke-dasharray="5 6"/></g>${[[40,100,C.l],[130,100,C.s],[240,100,C.g],[270,40,C.l],[270,160,C.s]].map(([x,y,f],i)=>R(x,y,i<3?70:60,i<3?60:50,f,16,'#000')).join('')}${R(300,30,70,12,'#000',6)}<circle cx="75" cy="130" r="9" fill="#000"/><circle cx="165" cy="130" r="9" fill="#fff" stroke="#000" stroke-width="2"/><circle cx="275" cy="130" r="9" fill="#000"/>${R(52,216,296,22,'#000',11)}<circle cx="64" cy="227" r="5" fill="${C.l}"/>${R(76,224,120,6,C.l,3)}</svg>`,
campaign:win(`<g>${[34,52,40,70,58,92,84,110].map((h,i)=>R(40+i*38,226-h*1.1,24,h*1.1,[C.l,C.s][i%2],6)).join('')}<path d="M44 190L100 168 150 178 210 140 262 150 322 96 360 70" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="360" cy="70" r="8" fill="${C.l}" stroke="#000" stroke-width="2.5"/></g>${R(30,52,100,34,'#000',10)}${R(40,62,50,6,C.l,3)}${R(40,74,30,6,'#fff',3)}`),
dashboard:win(`${R(24,46,52,192,'#000',10)}${[0,1,2,3,4].map(i=>R(34,58+i*30,32,18,i==1?'#c9ef81':'#2a2a2a',6)).join('')}${[[86,C.l],[170,C.s],[254,C.g]].map(([x,f])=>R(x,50,76,44,f,10)+R(x+8,58,30,6,'#000',3)+R(x+8,72,48,12,'#000',5)).join('')}${R(86,102,220,134,'#fff',12)}<path d="M98 214C130 200 138 170 170 176S218 130 250 142 284 118 296 112" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M98 214C130 200 138 170 170 176S218 130 250 142 284 118 296 112V226H98z" fill="${C.l}" opacity=".5"/>${R(314,102,66,134,'#fff',12)}<circle cx="347" cy="150" r="22" fill="none" stroke="${C.s}" stroke-width="11"/><circle cx="347" cy="150" r="22" fill="none" stroke="#000" stroke-width="11" stroke-dasharray="52 140" transform="rotate(-90 347 150)"/>${T(324,190,46,.3)}${T(324,204,32)}`)
};
ART.hero=ART.dashboard;
const ARTK=['website','crm','shop','automation','campaign'];
document.querySelectorAll('[data-art]').forEach(e=>e.innerHTML=ART[e.dataset.art]);
/* portfolio cards: swap emoji-icon art for mockups */
document.querySelectorAll('#folio .pf .art').forEach((a,i)=>{a.innerHTML=ART[ARTK[i%5]];a.classList.add('has-ill')});
/* industries: add an illustration to each panel */
(()=>{const pane=document.querySelector('#indPane');if(!pane)return;
 const dr=()=>{const i=[...document.querySelectorAll('#indNav button')].findIndex(b=>b.classList.contains('on'));
  if(!pane.querySelector('.ind-ill')){const d=document.createElement('div');d.className='ind-ill';const IM=['ind-realestate','ind-tourism','ind-healthcare','ind-retail','ind-services','ind-hospitality'][i];if(IM){d.classList.add('ind-photo');d.innerHTML='<img src="images/'+IM+'.webp" alt="'+(document.querySelectorAll('#indNav button')[i]?.innerText.trim()||'Industry')+' CRM dashboard" loading="lazy">'}else d.innerHTML=ART[ARTK[Math.max(i,0)%5]];pane.firstElementChild.append(d)}};
 new MutationObserver(dr).observe(pane,{childList:true});dr()})();

/* ---------- real photos ---------- */
const PH={dashboard:['images/about.webp','Analytics dashboard open on a laptop'],crm:['images/crm.webp','Task board and pipeline on a tablet'],campaign:['images/marketing.webp','Marketing performance reports on a laptop'],shop:['images/it.webp','Workspace with a business dashboard on a laptop']};
document.querySelectorAll('[data-art]').forEach(e=>{const p=PH[e.dataset.art];if(p){e.innerHTML=`<img class="photo" src="${p[0]}" alt="${p[1]}" loading="lazy">`;e.classList.add('photo-shot')}});
const PF=[['p-web','Tablet showing a corporate website'],['p-crm','CRM task board on a tablet'],['p-shop','Online store on a laptop'],['p-auto','Automation workflow dashboard'],['p-camp','Campaign charts and analytics reports']];
document.querySelectorAll('#folio .pf .art').forEach((a,i)=>{a.innerHTML=`<img class="photo" src="images/${PF[i][0]}.webp" alt="${PF[i][1]}" loading="lazy">`;a.classList.add('photo-art')});

/* showcase: cycle approach steps */
(()=>{const s=[...document.querySelectorAll('#scSteps span')];if(!s.length)return;let i=0;const t=()=>{s.forEach((e,j)=>e.classList.toggle('on',j==i));i=(i+1)%s.length};t();setInterval(t,1300)})();

/* hero dashboard tilt on scroll */
(()=>{const d=document.querySelector('#h3dash');if(!d)return;const f=()=>{const y=Math.min(scrollY,600);d.style.transform='perspective(1600px) rotateX('+Math.max(0,22-y/24)+'deg) translateY('+(-y*0.08)+'px)'};f();addEventListener('scroll',f,{passive:true})})();
