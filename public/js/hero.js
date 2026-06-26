/* ═══════════════════════════════════════════════════
   UNIVERSE / SOLAR SYSTEM — Zoomed, Realistic
═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, dpr;
  let stars = [];
  let lastTime = 0;
  let elapsed  = 0;

  const PERSP = 0.38; // y-compression — orbital plane tilt

  const PLANETS = [
    { name:'Mercury', rF:0.110, sz:5.5,  spd:4.15,  a0:0.6  },
    { name:'Venus',   rF:0.185, sz:9.5,  spd:1.62,  a0:2.1  },
    { name:'Earth',   rF:0.265, sz:10.5, spd:1.00,  a0:0.9,
      moon:{ rF:0.038, sz:2.8, spd:13.4 } },
    { name:'Mars',    rF:0.355, sz:7.5,  spd:0.532, a0:3.8  },
    { name:'Jupiter', rF:0.510, sz:26,   spd:0.084, a0:1.3  },
    { name:'Saturn',  rF:0.690, sz:20,   spd:0.034, a0:5.0, rings:true },
    { name:'Uranus',  rF:0.870, sz:14.5, spd:0.012, a0:0.4  },
    { name:'Neptune', rF:1.040, sz:13.5, spd:0.006, a0:2.5  },
  ];

  let pAngles = PLANETS.map(p => p.a0);

  /* ── resize ──────────────────────────────────────── */
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    buildStars();
  }

  function buildStars() {
    stars = [];
    for (let i = 0; i < 600; i++) {
      const rnd = Math.random();
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.7 + 0.15,
        base: 0.2 + Math.random() * 0.8,
        ph: Math.random() * Math.PI * 2,
        spd: 0.3 + Math.random() * 1.8,
        col: rnd < 0.12 ? '#ffe8c0' : rnd < 0.25 ? '#c8d8ff' : rnd < 0.33 ? '#ffd0d0' : '#ffffff'
      });
    }
  }

  function orbitCenter() { return { cx: W * 0.52, cy: H * 0.50 }; }
  function orbitScale()  { return Math.min(W, H) * 0.72; }

  /* ── background + nebula ─────────────────────────── */
  function drawBackground() {
    ctx.fillStyle = '#03020e';
    ctx.fillRect(0, 0, W, H);
    [
      { x:W*0.08, y:H*0.15, r:W*0.40, c:'rgba(65,12,125,0.08)'  },
      { x:W*0.88, y:H*0.75, r:W*0.36, c:'rgba(12,35,110,0.09)'  },
      { x:W*0.48, y:H*0.88, r:W*0.44, c:'rgba(85,12,65,0.06)'   },
      { x:W*0.15, y:H*0.82, r:W*0.30, c:'rgba(8,65,85,0.07)'    },
      { x:W*0.92, y:H*0.10, r:W*0.32, c:'rgba(45,8,88,0.07)'    },
      { x:W*0.55, y:H*0.28, r:W*0.24, c:'rgba(0,25,75,0.06)'    },
    ].forEach(n => {
      const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
      g.addColorStop(0,n.c); g.addColorStop(1,'transparent');
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    });
  }

  /* ── stars ───────────────────────────────────────── */
  function drawStars(now) {
    ctx.save();
    stars.forEach(s => {
      const tw = s.base*(0.4+0.6*Math.sin(now*0.001*s.spd+s.ph));
      ctx.globalAlpha=tw; ctx.fillStyle=s.col;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
      if (s.r>1.3 && tw>0.65) {
        ctx.globalAlpha=tw*0.22; ctx.strokeStyle=s.col; ctx.lineWidth=0.5;
        const cr=s.r*3.2;
        ctx.beginPath();
        ctx.moveTo(s.x-cr,s.y); ctx.lineTo(s.x+cr,s.y);
        ctx.moveTo(s.x,s.y-cr); ctx.lineTo(s.x,s.y+cr);
        ctx.stroke();
      }
    });
    ctx.restore();
  }

  /* ── distant galaxy ──────────────────────────────── */
  function drawGalaxy(gx,gy,rot,sc,alpha) {
    ctx.save(); ctx.globalAlpha=alpha;
    ctx.translate(gx,gy); ctx.rotate(rot); ctx.scale(sc,sc*0.46);
    const cg=ctx.createRadialGradient(0,0,0,0,0,26);
    cg.addColorStop(0,'rgba(220,200,255,0.95)');
    cg.addColorStop(0.3,'rgba(160,130,255,0.5)');
    cg.addColorStop(1,'transparent');
    ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(0,0,26,0,Math.PI*2); ctx.fill();
    for (let arm=0;arm<2;arm++) {
      const sa=arm*Math.PI;
      ctx.beginPath();
      for (let t=0;t<=3.6*Math.PI;t+=0.07) {
        const rr=2+t*3.6, x=rr*Math.cos(sa+t), y=rr*Math.sin(sa+t);
        t<0.01?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.strokeStyle='rgba(195,175,255,0.32)'; ctx.lineWidth=2.5; ctx.stroke();
      ctx.strokeStyle='rgba(220,210,255,0.12)'; ctx.lineWidth=6;   ctx.stroke();
    }
    ctx.restore();
  }

  /* ── orbit ellipse ───────────────────────────────── */
  function drawOrbit(cx,cy,r) {
    ctx.beginPath();
    ctx.ellipse(cx,cy,r,r*PERSP,0,0,Math.PI*2);
    ctx.strokeStyle='rgba(255,255,255,0.05)';
    ctx.lineWidth=0.8; ctx.stroke();
  }

  /* ── sun ─────────────────────────────────────────── */
  function drawSun(cx,cy,now) {
    const r=Math.min(W,H)*0.052;
    const pulse=0.80+0.20*Math.sin(now*0.0013);

    ctx.save(); ctx.globalAlpha=0.06*pulse;
    let g=ctx.createRadialGradient(cx,cy,r,cx,cy,r*7);
    g.addColorStop(0,'#fff5a0'); g.addColorStop(0.5,'#ff8800'); g.addColorStop(1,'transparent');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cx,cy,r*7,0,Math.PI*2); ctx.fill();
    ctx.restore();

    ctx.save(); ctx.globalAlpha=0.18*pulse;
    let g2=ctx.createRadialGradient(cx,cy,0,cx,cy,r*3.2);
    g2.addColorStop(0,'#fff8c0'); g2.addColorStop(0.4,'#ffaa00'); g2.addColorStop(1,'transparent');
    ctx.fillStyle=g2; ctx.beginPath(); ctx.arc(cx,cy,r*3.2,0,Math.PI*2); ctx.fill();
    ctx.restore();

    const sd=ctx.createRadialGradient(cx-r*0.3,cy-r*0.3,0,cx,cy,r);
    sd.addColorStop(0,'#fffce0'); sd.addColorStop(0.3,'#ffe040');
    sd.addColorStop(0.68,'#ff8c00'); sd.addColorStop(1,'#ff4000');
    ctx.fillStyle=sd; ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();

    ctx.save(); ctx.globalAlpha=0.25+0.10*Math.sin(now*0.002);
    for (let i=0;i<12;i++) {
      const fa=(i/12)*Math.PI*2+now*0.00012;
      const flen=r*(0.4+0.5*Math.sin(now*0.0028+i*1.4));
      ctx.strokeStyle=i%2===0?'rgba(255,200,0,0.55)':'rgba(255,110,0,0.38)';
      ctx.lineWidth=i%3===0?2.2:1.2;
      ctx.beginPath();
      ctx.moveTo(cx+Math.cos(fa)*r*0.92,cy+Math.sin(fa)*r*0.92);
      ctx.lineTo(cx+Math.cos(fa)*(r+flen),cy+Math.sin(fa)*(r+flen));
      ctx.stroke();
    }
    ctx.restore();
  }

  /* ── saturn rings ────────────────────────────────── */
  function drawSaturnRings(px,py,r,front) {
    const rIn=r*1.38, rOut=r*2.45;
    ctx.save();
    ctx.beginPath();
    if (front) ctx.rect(px-rOut-4, py,          rOut*2+8, rOut*PERSP+6);
    else        ctx.rect(px-rOut-4, py-rOut*PERSP-6, rOut*2+8, rOut*PERSP+6);
    ctx.clip();

    /* ring bands */
    const bands=[
      {r1:rIn,      r2:rIn*1.12, c:'rgba(200,175,95,0.55)'},
      {r1:rIn*1.12, r2:rIn*1.35, c:'rgba(180,155,75,0.35)'},
      {r1:rIn*1.35, r2:rIn*1.68, c:'rgba(215,195,110,0.65)'},
      {r1:rIn*1.68, r2:rOut,     c:'rgba(165,140,60,0.30)'},
    ];
    bands.forEach(b=>{
      ctx.beginPath();
      ctx.ellipse(px,py,b.r2,b.r2*PERSP,0,0,Math.PI*2);
      ctx.ellipse(px,py,b.r1,b.r1*PERSP,0,Math.PI*2,0,true);
      ctx.fillStyle=b.c; ctx.fill();
    });
    ctx.restore();
  }

  /* ── individual planet renderers ─────────────────── */

  function renderMercury(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.28,py-r*.28,0,px,py,r);
    g.addColorStop(0,'#d0ccc8'); g.addColorStop(0.4,'#a8a4a0');
    g.addColorStop(0.8,'#787470'); g.addColorStop(1,'#504c48');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    // craters
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    [[-.3,-.2,.18],[.2,.3,.12],[-.1,.35,.09],[.35,-.15,.14],[-.2,.1,.10]].forEach(([dx,dy,cr])=>{
      ctx.fillStyle='rgba(60,55,50,0.35)';
      ctx.beginPath(); ctx.arc(px+dx*r,py+dy*r,cr*r,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle='rgba(180,175,165,0.25)'; ctx.lineWidth=0.8;
      ctx.beginPath(); ctx.arc(px+dx*r,py+dy*r,cr*r,0,Math.PI*2); ctx.stroke();
    });
    ctx.restore();
  }

  function renderVenus(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.25,py-r*.25,0,px,py,r);
    g.addColorStop(0,'#f5e890'); g.addColorStop(0.45,'#e0c050');
    g.addColorStop(0.80,'#c09020'); g.addColorStop(1,'#907010');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    // swirling cloud bands
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    for (let i=0;i<5;i++) {
      const by=py-r+r*2*(i/5);
      const cx2=px+Math.sin(i*1.8)*r*0.15;
      ctx.strokeStyle=`rgba(255,240,160,${0.15+i%2*0.12})`;
      ctx.lineWidth=r*0.28;
      ctx.beginPath(); ctx.ellipse(cx2,by+r*0.2,r*0.9,r*0.10,0.15,0,Math.PI*2); ctx.stroke();
    }
    ctx.restore();
  }

  function renderEarth(px,py,r) {
    // ocean base
    const g=ctx.createRadialGradient(px-r*.3,py-r*.3,0,px,py,r);
    g.addColorStop(0,'#70b8ff'); g.addColorStop(0.5,'#2868d0'); g.addColorStop(1,'#143890');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    // continents
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    const continents=[
      // Americas
      {x:-.30,y:-.10,rx:.22,ry:.50,rot:0.15},
      // Europe/Africa
      {x:.14,y:-.05,rx:.18,ry:.55,rot:-0.10},
      // Asia
      {x:.42,y:-.28,rx:.38,ry:.38,rot:0.20},
      // Australia
      {x:.38,y:.38,rx:.18,ry:.14,rot:0.30},
      // Antarctica
      {x:0,y:.78,rx:.40,ry:.16,rot:0},
    ];
    continents.forEach(c=>{
      ctx.save(); ctx.translate(px+c.x*r,py+c.y*r); ctx.rotate(c.rot);
      const cg=ctx.createRadialGradient(0,0,0,0,0,c.rx*r);
      cg.addColorStop(0,'rgba(55,120,35,0.90)');
      cg.addColorStop(0.5,'rgba(45,100,25,0.80)');
      cg.addColorStop(1,'rgba(80,140,50,0.40)');
      ctx.fillStyle=cg;
      ctx.beginPath(); ctx.ellipse(0,0,c.rx*r,c.ry*r,0,0,Math.PI*2); ctx.fill();
      ctx.restore();
    });
    // cloud wisps
    ctx.globalAlpha=0.30;
    ctx.fillStyle='#ffffff';
    [[-.15,-.55,.30,.08],[.25,-.18,.35,.07],[-.40,.20,.28,.065],[.10,.50,.32,.08]].forEach(([dx,dy,rx,ry])=>{
      ctx.beginPath(); ctx.ellipse(px+dx*r,py+dy*r,rx*r,ry*r,dx*0.5,0,Math.PI*2); ctx.fill();
    });
    // north polar ice
    ctx.globalAlpha=0.55; ctx.fillStyle='#e8f0ff';
    ctx.beginPath(); ctx.ellipse(px,py-r*.80,r*.32,r*.15,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
    // atmosphere rim
    ctx.save(); ctx.globalAlpha=0.22;
    const atm=ctx.createRadialGradient(px,py,r*.90,px,py,r*1.14);
    atm.addColorStop(0,'transparent'); atm.addColorStop(1,'rgba(100,170,255,0.80)');
    ctx.fillStyle=atm; ctx.beginPath(); ctx.arc(px,py,r*1.14,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function renderMars(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.28,py-r*.28,0,px,py,r);
    g.addColorStop(0,'#e87050'); g.addColorStop(0.45,'#c04530');
    g.addColorStop(0.80,'#8c2810'); g.addColorStop(1,'#5a1408');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    // surface detail — dark patches (maria)
    ctx.fillStyle='rgba(100,30,10,0.30)';
    [[ .20, .10,.28],[ -.25,.20,.22],[ .05,-.35,.18]].forEach(([dx,dy,cr])=>{
      ctx.beginPath(); ctx.ellipse(px+dx*r,py+dy*r,cr*r,cr*r*0.65,dx,0,Math.PI*2); ctx.fill();
    });
    // polar ice caps
    ctx.globalAlpha=0.70; ctx.fillStyle='#f0eeee';
    ctx.beginPath(); ctx.ellipse(px,py-r*.78,r*.28,r*.13,0,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=0.40;
    ctx.beginPath(); ctx.ellipse(px,py+r*.80,r*.18,r*.08,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function renderJupiter(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.25,py-r*.25,0,px,py,r);
    g.addColorStop(0,'#f0d090'); g.addColorStop(0.5,'#c89050');
    g.addColorStop(0.85,'#a06820'); g.addColorStop(1,'#704800');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    // bands
    const jbands=[
      {y:-.65,h:.12,c:'rgba(200,150,80,0.55)'},
      {y:-.48,h:.14,c:'rgba(160,100,50,0.45)'},
      {y:-.28,h:.18,c:'rgba(210,160,90,0.50)'},
      {y:-.08,h:.16,c:'rgba(140,85,35,0.55)'},
      {y:.10, h:.14,c:'rgba(200,155,85,0.45)'},
      {y:.26, h:.18,c:'rgba(155,95,40,0.50)'},
      {y:.46, h:.14,c:'rgba(195,145,75,0.40)'},
      {y:.62, h:.12,c:'rgba(140,90,38,0.45)'},
    ];
    jbands.forEach(b=>{
      ctx.fillStyle=b.c;
      ctx.fillRect(px-r,py+b.y*r,r*2,b.h*r);
    });
    // Great Red Spot
    const grsG=ctx.createRadialGradient(px+r*.20,py+r*.06,0,px+r*.20,py+r*.06,r*.28);
    grsG.addColorStop(0,'rgba(195,60,30,0.75)');
    grsG.addColorStop(0.5,'rgba(165,50,20,0.55)');
    grsG.addColorStop(1,'rgba(140,40,15,0)');
    ctx.fillStyle=grsG;
    ctx.beginPath(); ctx.ellipse(px+r*.20,py+r*.06,r*.28,r*.17,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function renderSaturn(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.25,py-r*.25,0,px,py,r);
    g.addColorStop(0,'#f0e098'); g.addColorStop(0.45,'#d4c060');
    g.addColorStop(0.80,'#a89030'); g.addColorStop(1,'#786010');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    const sbands=[
      {y:-.50,h:.12,c:'rgba(200,180,100,0.40)'},
      {y:-.28,h:.18,c:'rgba(160,130,60,0.35)'},
      {y:-.06,h:.16,c:'rgba(190,165,90,0.38)'},
      {y:.14, h:.18,c:'rgba(150,120,50,0.35)'},
      {y:.36, h:.12,c:'rgba(185,160,85,0.30)'},
    ];
    sbands.forEach(b=>{ctx.fillStyle=b.c; ctx.fillRect(px-r,py+b.y*r,r*2,b.h*r);});
    ctx.restore();
  }

  function renderUranus(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.28,py-r*.28,0,px,py,r);
    g.addColorStop(0,'#c0eef4'); g.addColorStop(0.5,'#68c0d0');
    g.addColorStop(0.80,'#308898'); g.addColorStop(1,'#185868');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    ctx.globalAlpha=0.15;
    ctx.fillStyle='#a0dce8';
    ctx.beginPath(); ctx.ellipse(px,py-r*.45,r*.80,r*.14,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(px,py+r*.20,r*.70,r*.12,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
    // faint ring (Uranus has rings too)
    ctx.save(); ctx.globalAlpha=0.18;
    ctx.strokeStyle='rgba(160,220,230,0.7)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.ellipse(px,py,r*1.60,r*1.60*PERSP,0,0,Math.PI*2); ctx.stroke();
    ctx.restore();
  }

  function renderNeptune(px,py,r) {
    const g=ctx.createRadialGradient(px-r*.28,py-r*.28,0,px,py,r);
    g.addColorStop(0,'#6090f8'); g.addColorStop(0.45,'#2848d0');
    g.addColorStop(0.80,'#1030a0'); g.addColorStop(1,'#081870');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.clip();
    // Great Dark Spot
    ctx.fillStyle='rgba(10,20,100,0.45)';
    ctx.beginPath(); ctx.ellipse(px-r*.20,py-r*.10,r*.26,r*.18,-.3,0,Math.PI*2); ctx.fill();
    // cloud streaks
    ctx.globalAlpha=0.25; ctx.fillStyle='#a0c0ff';
    ctx.beginPath(); ctx.ellipse(px,py+r*.35,r*.60,r*.08,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  /* ── planet dispatcher ───────────────────────────── */
  const renderers = [
    renderMercury, renderVenus, renderEarth, renderMars,
    renderJupiter, renderSaturn, renderUranus, renderNeptune
  ];

  function drawPlanet(px,py,idx) {
    const p=PLANETS[idx];
    const r=p.sz;
    // glow
    ctx.save(); ctx.globalAlpha=0.22;
    const gl=ctx.createRadialGradient(px,py,0,px,py,r*2.6);
    const gc=['#b0b0b0','#f0e0a0','#4090ff','#e05030',
              '#d0a050','#e0d080','#80d0e0','#4060e0'][idx];
    gl.addColorStop(0,gc+'99'); gl.addColorStop(1,'transparent');
    ctx.fillStyle=gl; ctx.beginPath(); ctx.arc(px,py,r*2.6,0,Math.PI*2); ctx.fill();
    ctx.restore();
    // render planet-specific surface
    renderers[idx](px,py,r);
    // dark side shadow
    const sh=ctx.createRadialGradient(px+r*.38,py+r*.38,0,px,py,r*1.08);
    sh.addColorStop(0.38,'transparent'); sh.addColorStop(1,'rgba(0,0,0,0.65)');
    ctx.fillStyle=sh; ctx.beginPath(); ctx.arc(px,py,r*1.08,0,Math.PI*2); ctx.fill();
  }

  /* ── moon ────────────────────────────────────────── */
  function drawMoon(mx,my,r) {
    const g=ctx.createRadialGradient(mx-r*.22,my-r*.22,0,mx,my,r);
    g.addColorStop(0,'#e0e0de'); g.addColorStop(0.55,'#a8a8a4'); g.addColorStop(1,'#585854');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(mx,my,r,0,Math.PI*2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(mx,my,r,0,Math.PI*2); ctx.clip();
    ctx.fillStyle='rgba(50,48,44,0.35)';
    [[-.2,-.1,.22],[.25,.18,.16],[-.05,.30,.14]].forEach(([dx,dy,cr])=>{
      ctx.beginPath(); ctx.arc(mx+dx*r,my+dy*r,cr*r,0,Math.PI*2); ctx.fill();
    });
    ctx.restore();
    const sh=ctx.createRadialGradient(mx+r*.3,my+r*.3,0,mx,my,r);
    sh.addColorStop(0.4,'transparent'); sh.addColorStop(1,'rgba(0,0,0,0.55)');
    ctx.fillStyle=sh; ctx.beginPath(); ctx.arc(mx,my,r,0,Math.PI*2); ctx.fill();
  }

  /* ── asteroid belt ───────────────────────────────── */
  function drawAsteroids(cx,cy,r) {
    ctx.save();
    for (let i=0;i<160;i++) {
      const a=(i/160)*Math.PI*2+elapsed*0.000038;
      const spr=r*(0.90+0.18*Math.abs(Math.sin(i*17.3+1.1)));
      const ax=cx+Math.cos(a)*spr;
      const ay=cy+Math.sin(a)*spr*PERSP;
      ctx.globalAlpha=0.08+0.28*Math.abs(Math.sin(i*4.1));
      ctx.fillStyle='#8888a0';
      ctx.beginPath(); ctx.arc(ax,ay,0.5+1.0*Math.abs(Math.sin(i*8.3)),0,Math.PI*2); ctx.fill();
    }
    ctx.restore();
  }

  /* ── comet ───────────────────────────────────────── */
  function drawComet(now) {
    const cycle=24000, phase=(now%cycle)/cycle;
    if (phase>0.16) return;
    const t=phase/0.16;
    const cx2=W*(0.92-t*1.7), cy2=H*(0.04+t*0.32);
    const tLen=80+50*Math.sin(t*Math.PI);
    const alpha=Math.sin(t*Math.PI)*0.95;
    ctx.save(); ctx.globalAlpha=alpha;
    const tg=ctx.createLinearGradient(cx2,cy2,cx2+tLen,cy2-tLen*0.28);
    tg.addColorStop(0,'rgba(255,255,255,0.95)');
    tg.addColorStop(0.3,'rgba(180,205,255,0.55)');
    tg.addColorStop(1,'rgba(100,145,255,0)');
    ctx.strokeStyle=tg; ctx.lineWidth=1.8;
    ctx.beginPath(); ctx.moveTo(cx2,cy2); ctx.lineTo(cx2+tLen,cy2-tLen*0.28); ctx.stroke();
    // secondary tail
    ctx.globalAlpha=alpha*0.35;
    const tg2=ctx.createLinearGradient(cx2,cy2,cx2+tLen*0.8,cy2-tLen*0.10);
    tg2.addColorStop(0,'rgba(180,220,255,0.8)');
    tg2.addColorStop(1,'rgba(100,160,255,0)');
    ctx.strokeStyle=tg2; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(cx2,cy2); ctx.lineTo(cx2+tLen*0.8,cy2-tLen*0.10); ctx.stroke();
    ctx.globalAlpha=alpha;
    ctx.fillStyle='#ffffff';
    ctx.beginPath(); ctx.arc(cx2,cy2,2.8,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  /* ── main render ─────────────────────────────────── */
  function draw(now) {
    ctx.clearRect(0,0,W,H);
    const {cx,cy}=orbitCenter();
    const OS=orbitScale();

    drawBackground();
    drawStars(now);
    drawGalaxy(W*.05, H*.09, 0.45, 1.00, 0.62);
    drawGalaxy(W*.94, H*.88, 1.20, 0.80, 0.52);
    drawGalaxy(W*.91, H*.08, 2.00, 0.58, 0.48);
    drawGalaxy(W*.07, H*.86, 0.90, 0.48, 0.38);

    PLANETS.forEach(p=>drawOrbit(cx,cy,p.rF*OS));

    const beltR=(PLANETS[3].rF+PLANETS[4].rF)*0.5*OS;
    drawAsteroids(cx,cy,beltR);
    drawComet(now);

    /* compute screen positions */
    const pPos=PLANETS.map((p,i)=>({
      px: cx+Math.cos(pAngles[i])*p.rF*OS,
      py: cy+Math.sin(pAngles[i])*p.rF*OS*PERSP,
      sinA: Math.sin(pAngles[i]),
      idx: i
    }));

    /* back half (behind sun) — higher sinA = further back = draw first */
    pPos.filter(p=>p.sinA>=0).sort((a,b)=>b.sinA-a.sinA).forEach(({px,py,idx})=>{
      if (PLANETS[idx].rings) drawSaturnRings(px,py,PLANETS[idx].sz,false);
      drawPlanet(px,py,idx);
      if (PLANETS[idx].rings) drawSaturnRings(px,py,PLANETS[idx].sz,true);
      if (PLANETS[idx].moon) {
        const mr=PLANETS[idx].moon.rF*OS;
        const ma=pAngles[idx]*PLANETS[idx].moon.spd+elapsed*0.00048;
        drawMoon(px+Math.cos(ma)*mr, py+Math.sin(ma)*mr*PERSP, PLANETS[idx].moon.sz);
      }
    });

    drawSun(cx,cy,now);

    /* front half (in front of sun) */
    pPos.filter(p=>p.sinA<0).sort((a,b)=>a.sinA-b.sinA).forEach(({px,py,idx})=>{
      if (PLANETS[idx].rings) drawSaturnRings(px,py,PLANETS[idx].sz,false);
      drawPlanet(px,py,idx);
      if (PLANETS[idx].rings) drawSaturnRings(px,py,PLANETS[idx].sz,true);
      if (PLANETS[idx].moon) {
        const mr=PLANETS[idx].moon.rF*OS;
        const ma=pAngles[idx]*PLANETS[idx].moon.spd+elapsed*0.00048;
        drawMoon(px+Math.cos(ma)*mr, py+Math.sin(ma)*mr*PERSP, PLANETS[idx].moon.sz);
      }
    });

    checkHover(pPos);
    drawTooltip();
  }

  /* ── loop ────────────────────────────────────────── */
  function loop(now) {
    const dt=Math.min(now-(lastTime||now),50);
    lastTime=now; elapsed+=dt;
    PLANETS.forEach((p,i)=>{ pAngles[i]+=p.spd*0.00022*dt; });
    draw(now);
    requestAnimationFrame(loop);
  }

  /* ── planet hover tooltip ────────────────────────── */
  let mouse = { x: -9999, y: -9999 };
  let tooltip = { name: '', x: 0, y: 0, alpha: 0, target: 0 };

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  function checkHover(pPos) {
    let hit = null;
    for (const { px, py, idx } of pPos) {
      const r = PLANETS[idx].sz * 1.8;
      const dx = mouse.x - px, dy = mouse.y - py;
      if (dx*dx + dy*dy < r*r) { hit = { name: PLANETS[idx].name, x: px, y: py - PLANETS[idx].sz - 10 }; break; }
    }
    if (hit) {
      tooltip.name = hit.name;
      tooltip.x = hit.x;
      tooltip.y = hit.y;
      tooltip.target = 1;
    } else {
      tooltip.target = 0;
    }
    tooltip.alpha += (tooltip.target - tooltip.alpha) * 0.12;
  }

  function drawTooltip() {
    if (tooltip.alpha < 0.01) return;
    ctx.save();
    ctx.globalAlpha = tooltip.alpha;
    ctx.font = 'bold 13px "Raleway", sans-serif';
    ctx.textAlign = 'center';
    const w = ctx.measureText(tooltip.name).width + 22;
    const h = 26;
    const tx = tooltip.x, ty = tooltip.y;
    // pill background
    const bg = ctx.createLinearGradient(tx - w/2, ty - h/2, tx + w/2, ty + h/2);
    bg.addColorStop(0, 'rgba(20,15,5,0.88)');
    bg.addColorStop(1, 'rgba(40,30,8,0.88)');
    ctx.fillStyle = bg;
    ctx.strokeStyle = 'rgba(212,175,55,0.7)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(tx - w/2, ty - h, w, h, 6);
    ctx.fill(); ctx.stroke();
    // text
    ctx.fillStyle = '#d4af37';
    ctx.shadowColor = '#d4af37';
    ctx.shadowBlur = 8;
    ctx.fillText(tooltip.name, tx, ty - h/2 + 5);
    ctx.restore();
  }

  /* ── custom cursor ───────────────────────────────── */
  const cursor = { x: -9999, y: -9999, visible: false };
  document.addEventListener('mousemove', e => {
    cursor.x = e.clientX; cursor.y = e.clientY; cursor.visible = true;
  });
  document.addEventListener('mouseleave', () => { cursor.visible = false; });

  /* overlay canvas for cursor (sits on top of everything) */
  const cursorCanvas = document.createElement('canvas');
  cursorCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;';
  document.body.appendChild(cursorCanvas);
  const cCtx = cursorCanvas.getContext('2d');

  function resizeCursorCanvas() {
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCursorCanvas);
  resizeCursorCanvas();

  /* hide default cursor site-wide */
  const cursorStyle = document.createElement('style');
  cursorStyle.textContent = '*{cursor:none!important}';
  document.head.appendChild(cursorStyle);

  let cursorPulse = 0;
  function drawCursor() {
    cCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
    requestAnimationFrame(drawCursor); // always keep loop alive
    if (!cursor.visible) return;
    const { x, y } = cursor;
    cursorPulse += 0.06;
    const pulse = 0.7 + 0.3 * Math.sin(cursorPulse);
    const gold = '#d4af37';

    cCtx.save();
    cCtx.shadowColor = gold;
    cCtx.shadowBlur = 12 * pulse;
    cCtx.strokeStyle = gold;
    cCtx.globalAlpha = 0.9 * pulse;
    cCtx.lineWidth = 1.5;

    // outer circle
    cCtx.beginPath();
    cCtx.arc(x, y, 12, 0, Math.PI * 2);
    cCtx.stroke();

    // crosshair lines
    const gap = 5, len = 8;
    cCtx.beginPath();
    cCtx.moveTo(x - gap - len, y); cCtx.lineTo(x - gap, y);
    cCtx.moveTo(x + gap, y);       cCtx.lineTo(x + gap + len, y);
    cCtx.moveTo(x, y - gap - len); cCtx.lineTo(x, y - gap);
    cCtx.moveTo(x, y + gap);       cCtx.lineTo(x, y + gap + len);
    cCtx.stroke();

    // center dot
    cCtx.globalAlpha = pulse;
    cCtx.fillStyle = gold;
    cCtx.beginPath();
    cCtx.arc(x, y, 1.8, 0, Math.PI * 2);
    cCtx.fill();

    cCtx.restore();
  }
  drawCursor();

  window.addEventListener('resize',resize,{passive:true});
  resize();
  requestAnimationFrame(loop);
})();
