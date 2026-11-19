/* Editorial illustrations: muted layered landscapes with deep-green silhouettes and gold accents.
   One composition per article, keyed by post id. */
(function(){
const D='#173a27',G='#c49a2c',L='#f3f5ef';
const sky=(a,b)=>`<linearGradient id="SK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const hills=(o={})=>`<path d="M0 ${o.h1||250}Q180 ${(o.h1||250)-60} 380 ${(o.h1||250)-10}T800 ${(o.h1||250)-25}V450H0z" fill="#a9bf9f"/>
<path d="M0 ${o.h2||300}Q240 ${(o.h2||300)-45} 460 ${(o.h2||300)-5}T800 ${(o.h2||300)-15}V450H0z" fill="#7f9c72"/>
<path d="M0 ${o.h3||350}Q300 ${(o.h3||350)-30} 560 ${(o.h3||350)}T800 ${(o.h3||350)-8}V450H0z" fill="#4f7553"/>`;
const furrows=(y=360,c='#3f6447')=>[...Array(11)].map((_,i)=>`<path d="M${400+(i-5)*30} ${y}L${400+(i-5)*170} 450" stroke="${c}" stroke-width="2" opacity=".55"/>`).join('');
const sun=(x,y,r=34,c='#e9d9a6')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const wheat=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${G}"><path d="M0 0V-46" stroke="${D}" stroke-width="2"/>${[0,1,2,3].map(i=>`<ellipse cx="-4" cy="${-40+i*7}" rx="3" ry="6" transform="rotate(-28 -4 ${-40+i*7})"/><ellipse cx="4" cy="${-40+i*7}" rx="3" ry="6" transform="rotate(28 4 ${-40+i*7})"/>`).join('')}</g>`;
const silo=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${D}"/><path d="M${x} ${y}Q${x+w/2} ${y-w*.55} ${x+w} ${y}z" fill="${D}"/>${[1,2,3].map(i=>`<path d="M${x} ${y+h*i/4}H${x+w}" stroke="#2f5a40" stroke-width="2"/>`).join('')}`;
const cow=(x,y,s=1,f=1)=>`<g transform="translate(${x} ${y}) scale(${s*f} ${s})" fill="${D}"><path d="M-60 -38Q-62 -62 -30 -62H34Q50 -62 56 -70L78 -72Q90 -70 92 -58L94 -44Q90 -38 80 -40L70 -40Q64 -30 60 -10V0H50V-14H-38V0H-48V-16Q-62 -20 -60 -38z"/><path d="M-60 -40Q-74 -30 -70 -10" stroke="${D}" stroke-width="3" fill="none"/><path d="M84 -72L80 -84M76 -72L70 -82" stroke="${D}" stroke-width="3"/></g>`;
const tractor=(x,y,s=1,boom=false)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-70 -40H10V-90H60L70 -40H90V-10H-70z" fill="${D}"/><rect x="18" y="-82" width="34" height="34" fill="#9cb8a0"/><circle cx="50" cy="-8" r="34" fill="${D}"/><circle cx="50" cy="-8" r="13" fill="${G}"/><circle cx="-48" cy="-4" r="22" fill="${D}"/><circle cx="-48" cy="-4" r="8" fill="${G}"/><path d="M-20 -40V-62" stroke="${D}" stroke-width="7"/>${boom?`<path d="M-70 -30H-250M-250 -30V-14M-210 -30V-14M-170 -30V-14M-130 -30V-14M-90 -30V-14" stroke="${D}" stroke-width="5"/>${[-250,-210,-170,-130,-90].map(v=>`<path d="M${v} -12l-12 22h24z" fill="#ffffff" opacity=".45"/>`).join('')}`:''}</g>`;
const barrel=(x,y,r=34)=>`<g transform="translate(${x} ${y})"><ellipse rx="${r}" ry="${r*1.12}" fill="${D}"/><path d="M${-r} 0H${r}M${-r*.92} ${-r*.55}H${r*.92}M${-r*.92} ${r*.55}H${r*.92}" stroke="${G}" stroke-width="3"/><circle r="${r*.32}" fill="none" stroke="#2f5a40" stroke-width="3"/></g>`;
const turbine=(x,y,h,a=0)=>`<g transform="translate(${x} ${y})"><path d="M-4 0L-2 ${-h}H2L4 0z" fill="${D}"/><g transform="translate(0 ${-h}) rotate(${a})">${[0,120,240].map(r=>`<path d="M0 0L-5 -8Q0 ${-h*.55} 4 -8z" fill="${D}" transform="rotate(${r})"/>`).join('')}<circle r="6" fill="${G}"/></g></g>`;
const truck=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${D}"><rect x="-80" y="-56" width="104" height="44"/><path d="M28 -44H58L74 -24V-12H28z"/><circle cx="-56" cy="-8" r="11"/><circle cx="-26" cy="-8" r="11"/><circle cx="52" cy="-8" r="11"/><rect x="-74" y="-50" width="92" height="8" fill="${G}"/></g>`;
const ship=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-200 0H210L180 46H-170z" fill="${D}"/><rect x="150" y="-60" width="44" height="60" fill="${D}"/><rect x="158" y="-52" width="28" height="10" fill="${G}"/>${[0,1,2,3,4,5].map(i=>`<rect x="${-180+i*52}" y="${-34-(i%2)*30}" width="48" height="${34+(i%2)*30}" fill="${['#2f5a40',G,'#1e4a32','#8a6f2a','#2f5a40','#1e4a32'][i]}" stroke="${D}" stroke-width="2"/>`).join('')}</g>`;
const water=(y,c='#6f9aa3')=>`<rect x="0" y="${y}" width="800" height="${450-y}" fill="${c}"/>${[0,1,2,3].map(i=>`<path d="M${60+i*190} ${y+30+i%2*28}h70M${120+i*190} ${y+70-i%2*20}h50" stroke="#cfe0e0" stroke-width="3" opacity=".6"/>`).join('')}`;
const vines=(c=D)=>[...Array(9)].map((_,i)=>{const x=400+(i-4)*120,x2=400+(i-4)*12;return `<path d="M${x} 450L${x2} 300" stroke="#3f6447" stroke-width="3"/>${[0,1,2,3,4,5].map(k=>{const t=k/6,px=x+(x2-x)*t,py=450-150*t,r=26*(1-t)+5;return `<circle cx="${px}" cy="${py-r*.8}" r="${r}" fill="${c}" opacity="${.95-t*.4}"/>`}).join('')}`}).join('');
const domes=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${D}"><rect x="-40" y="-60" width="80" height="60"/><rect x="-18" y="-96" width="36" height="36"/><path d="M-22 -96Q-30 -120 0 -140Q30 -120 22 -96z" fill="${G}"/><path d="M0 -140V-160M-8 -152H8" stroke="${D}" stroke-width="3"/>${[-30,30].map(v=>`<rect x="${v-9}" y="-78" width="18" height="18"/><path d="M${v-11} -78Q${v-15} -92 ${v} -104Q${v+15} -92 ${v+11} -78z" fill="${G}"/>`).join('')}</g>`;
const izba=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="-70" y="-70" width="140" height="70" fill="${D}"/><path d="M-86 -66L0 -128L86 -66z" fill="#2f5a40"/><rect x="-44" y="-52" width="26" height="24" fill="${G}"/><rect x="18" y="-52" width="26" height="24" fill="${G}"/>${[...Array(6)].map((_,i)=>`<path d="M-70 ${-60+i*11}H70" stroke="#2f5a40" stroke-width="2"/>`).join('')}</g>`;
const hen=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${D}"><path d="M-18 0Q-26 -18 -10 -26Q-4 -38 6 -34Q14 -32 12 -24L18 -22L12 -18Q16 -4 4 0z"/><path d="M6 -34l2 -6 3 5z" fill="#b5532f"/></g>`;
const cart=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-110 -150H-80L-50 -30H70L94 -110H-70" stroke="${D}" stroke-width="9" fill="none" stroke-linejoin="round"/><circle cx="-36" cy="-6" r="14" fill="${D}"/><circle cx="56" cy="-6" r="14" fill="${D}"/>${[-50,-20,10,40,70].map((v,i)=>wheat(v,-36-(i%2)*8,1.1)).join('')}<g transform="translate(110 -170) rotate(14)"><path d="M0 0H80L100 26L80 52H0z" fill="${G}"/><circle cx="14" cy="26" r="6" fill="${L}"/><text x="58" y="34" font-family="Georgia,serif" font-size="22" font-weight="700" fill="${D}" text-anchor="middle">&#8364;</text></g></g>`;
const still=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-60" rx="60" ry="64" fill="#a8632f"/><path d="M-60 -60H60" stroke="${D}" stroke-width="3"/><path d="M-14 -120Q0 -150 14 -120z" fill="#a8632f"/><path d="M0 -146Q60 -180 120 -120V-40" stroke="#a8632f" stroke-width="10" fill="none"/><rect x="96" y="-60" width="48" height="60" fill="${D}"/><rect x="-70" y="-4" width="140" height="8" fill="${D}"/></g>`;
const pivot=(y)=>`<path d="M80 ${y}H720" stroke="${D}" stroke-width="5"/>${[...Array(8)].map((_,i)=>`<path d="M${120+i*80} ${y}l-24 40h48z" stroke="${D}" stroke-width="3" fill="none"/><path d="M${120+i*80} ${y+4}v10" stroke="#cfe0e0" stroke-width="3"/>`).join('')}`;
const barn=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-90 0V-90L0 -150L90 -90V0z" fill="${D}"/><path d="M-36 0V-70H36V0" fill="#2f5a40"/><path d="M-36 -70L36 0M36 -70L-36 0" stroke="${G}" stroke-width="4"/><circle cy="-104" r="14" fill="${G}"/></g>`;

let UID=0;const wrap=(defs,body)=>{const u='SK'+(++UID);return `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>${defs.replace('id="SK"','id="'+u+'"')}</defs><rect width="800" height="450" fill="url(#${u})"/>${body}</svg>`};
const S={
 'pourquoi-ce-blog':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(640,90)+hills({h1:240})+domes(560,250,.8)+domes(640,262,.55)+izba(250,360,1)+furrows(372)+hen(420,410,1.4)+hen(470,420,1.1)+hen(380,428,1.2)),
 'about':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(170,90)+hills({h1:240})+domes(560,260,1)+domes(470,268,.6)+domes(660,272,.6)+izba(230,372,.9)+furrows(380)+hen(380,420,1.3)+hen(430,430,1.1)),
 'accord-cerealier':()=>wrap(sky('#d9e2de','#eef1ec'),sun(130,80,30)+water(300,'#5f8790')+ship(430,320,1)+silo(640,170,46,130)+silo(694,150,46,150)+silo(748,180,46,120)),
 'plan-eau':()=>wrap(sky('#d9e5e3','#eff3ee'),sun(660,80)+hills({h1:230,h2:270})+`<ellipse cx="300" cy="300" rx="230" ry="38" fill="#6f9aa3"/><ellipse cx="300" cy="300" rx="230" ry="38" fill="none" stroke="${D}" stroke-width="5"/>`+`<path d="M0 360Q300 330 800 352V450H0z" fill="#4f7553"/>`+pivot(380)+furrows(400)),
 'vendanges-canicule':()=>wrap(sky('#e8d7a6','#f1ead2'),sun(400,150,70,'#f0c86a')+`<circle cx="400" cy="150" r="96" fill="none" stroke="#f0c86a" stroke-width="2" opacity=".6"/>`+hills({h1:280,h2:300,h3:320})+vines()),
 'distillation-crise':()=>wrap(sky('#dde3d8','#eff1ea'),hills({h1:230,h2:270})+vines('#2f5a40')+`<rect x="0" y="360" width="800" height="90" fill="#4f7553"/>`+barrel(130,380)+barrel(204,380)+barrel(167,318)+still(560,420,1.1)),
 'mercosur':()=>wrap(sky('#d9e2de','#eef1ec'),sun(660,80,28)+water(250,'#5f8790')+ship(330,265,.75)+`<path d="M0 330Q400 300 800 320V450H0z" fill="#7f9c72"/><path d="M0 380Q400 360 800 372V450H0z" fill="#4f7553"/>`+cow(250,420,1.1)+cow(520,430,1,-1)+cow(680,410,.8)),
 'loi-orientation':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(140,90)+hills()+barn(560,330,1)+furrows(352)+tractor(300,420,1.1)+wheat(700,440,1.4)+wheat(730,446,1.2)+wheat(760,440,1.4)),
 'negociations-commerciales':()=>wrap(sky('#dfe4da','#f0f2ec'),hills({h1:260,h2:300,h3:340})+furrows(350)+cart(360,420,1.25)),
 'cereales-ukrainiennes':()=>wrap(sky('#dde4d6','#eff2ea'),sun(640,80,30,'#e6d38d')+hills({h1:250})+`<path d="M0 360H800" stroke="${D}" stroke-width="2"/>`+[...Array(14)].map((_,i)=>`<path d="M${30+i*56} 330V362" stroke="${D}" stroke-width="3"/>`).join('')+`<path d="M30 340H790" stroke="${D}" stroke-width="2"/>`+`<rect x="0" y="362" width="800" height="88" fill="#4f7553"/>`+silo(90,200,44,140)+silo(140,180,44,160)+truck(360,420,1)+truck(540,420,1)+truck(720,420,1)),
 'glyphosate-10-ans':()=>wrap(sky('#dde4dc','#eff2ec'),sun(130,80,28)+hills()+furrows(352)+tractor(600,420,1.05,true)+[...Array(6)].map((_,i)=>wheat(60+i*30,440,1.2)).join('')),
 'mhe-elevages':()=>wrap(sky('#d5dfd4','#ecf0e8'),`<path d="M0 260L150 150L260 230L420 120L560 220L680 160L800 230V450H0z" fill="#8ea589"/>`+hills({h1:290,h2:320,h3:360})+`<path d="M0 380H800" stroke="${D}" stroke-width="2"/>`+[...Array(14)].map((_,i)=>`<path d="M${20+i*58} 360V392" stroke="${D}" stroke-width="3"/>`).join('')+cow(240,430,1.15)+cow(480,420,.95,-1)+cow(650,436,1.05)),
 'planification-ecologique':()=>wrap(sky('#d9e3dc','#eff2ec'),sun(140,90)+hills({h1:260})+turbine(480,300,190,10)+turbine(600,290,150,50)+turbine(700,300,120,85)+`<path d="M0 350Q300 320 800 342V450H0z" fill="#4f7553"/>`+furrows(360)+[...Array(7)].map((_,i)=>wheat(70+i*34,446,1.3)).join(''))
};

const duck=(x,y,s=1,f=1)=>`<g transform="translate(${x} ${y}) scale(${s*f} ${s})" fill="#f3f5ef" stroke="${D}" stroke-width="2.5"><path d="M-30 0Q-38 -22 -14 -26Q6 -28 14 -20Q16 -40 30 -40Q42 -40 42 -30L54 -28L42 -24Q40 -16 34 -10Q30 0 10 2z"/><circle cx="34" cy="-33" r="2.5" fill="${D}"/></g>`;
const sign=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6 0V-120M6 0V-120" stroke="#7d8a80" stroke-width="6"/><g transform="translate(0 -150) rotate(180)"><rect x="-120" y="-40" width="240" height="80" rx="10" fill="#f3f5ef" stroke="#b5532f" stroke-width="10"/><text x="0" y="12" font-family="Georgia,serif" font-size="34" font-weight="700" fill="${D}" text-anchor="middle">VILLAGE</text></g></g>`;
const flood=()=>`<path d="M0 300Q400 280 800 296V450H0z" fill="#6f9aa3"/>${[0,1,2,3,4,5].map(i=>`<path d="M${40+i*130} ${330+i%2*40}h80" stroke="#d6e6e6" stroke-width="3" opacity=".7"/>`).join('')}${[0,1,2,3,4,5,6].map(i=>`<path d="M${80+i*100} ${360-i%2*10}v-34M${70+i*100} ${340-i%2*10}l10 -8l10 8" stroke="${D}" stroke-width="3" fill="none"/>`).join('')}`;
const globe=(x,y,r)=>`<g transform="translate(${x} ${y})"><circle r="${r}" fill="#6f9aa3"/><path d="M${-r*.6} ${-r*.5}q${r*.4} ${-r*.2} ${r*.6} ${r*.1}t${r*.3} ${r*.5}q${-r*.3} ${r*.4} ${-r*.7} ${r*.1}z" fill="#4f7553"/><path d="M${r*.1} ${r*.2}q${r*.4} 0 ${r*.5} ${r*.4}q${-r*.3} ${r*.3} ${-r*.5} 0z" fill="#4f7553"/><ellipse rx="${r}" ry="${r*.35}" fill="none" stroke="${L}" stroke-opacity=".5" stroke-width="2"/><path d="M0 ${-r}V${r}" stroke="${L}" stroke-opacity=".5" stroke-width="2"/></g>`;
const stump=(x,y)=>`<g transform="translate(${x} ${y})"><path d="M0 0V-26" stroke="#6b4a1e" stroke-width="7"/><path d="M0 0l-14 10M0 0l14 10M0 0l0 14" stroke="#6b4a1e" stroke-width="4"/></g>`;
Object.assign(S,{
 'vaccination-canards':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(650,80)+hills({h1:240})+barn(170,330,.8)+`<path d="M0 350Q400 330 800 344V450H0z" fill="#4f7553"/>`+duck(380,410,1.3)+duck(480,425,1.1,-1)+duck(560,404,1.2)+duck(650,430,1.25,-1)+duck(300,436,1)),
 'arrachage-bordeaux':()=>wrap(sky('#dde3d8','#eff1ea'),sun(140,80,30)+hills({h1:240,h2:280})+`<path d="M0 320H800V450H0z" fill="#7a6a4a"/>`+furrows(320,'#5e5238')+[...Array(10)].map((_,i)=>stump(60+i*76,380+(i%3)*22)).join('')+tractor(560,330,.75)),
 'bordeaux-8000-hectares':()=>wrap(sky('#dde3d8','#eff1ea'),sun(140,80,30)+hills({h1:240,h2:280})+`<path d="M0 320H800V450H0z" fill="#4f7553"/><path d="M0 320H380V450H0z" fill="#7a6a4a"/>`+[...Array(5)].map((_,i)=>stump(40+i*70,370+(i%2)*40)).join('')+[...Array(3)].map((_,r)=>[...Array(6)].map((_,i)=>{const x=430+i*62+r*20,y=350+r*38,h=40+r*10;return `<path d="M${x} ${y}l-${h*.35} ${h}h${h*.7}z" fill="${r%2?'#2f5a40':D}"/><rect x="${x-2}" y="${y+h}" width="4" height="10" fill="#6b4a1e"/>`}).join('')).join('')),
 'glyphosate-vote-octobre':()=>S['glyphosate-10-ans'](),
 'glyphosate-renouvele':()=>wrap(sky('#dde4dc','#eff2ec'),sun(650,80,28)+hills()+furrows(352)+tractor(260,420,1.05,false)+[...Array(8)].map((_,i)=>wheat(470+i*36,440,1.3)).join('')),
 'reglement-sur-rejete':()=>wrap(sky('#dde4dc','#eff2ec'),hills({h1:250})+furrows(352)+tractor(640,420,.95,true)+globe(140,150,60)),
 'mhe-extension':()=>S['mhe-elevages'](),
 'negociations-assemblee':()=>S['negociations-commerciales'](),
 'trois-mois-de-blog':()=>S['pourquoi-ce-blog'](),
 'bilan-2023':()=>wrap(sky('#cfd9d6','#e8eee8'),sun(400,120,40,'#e9d9a6')+hills({h1:250})+domes(620,262,.6)+izba(200,370,.9)+furrows(380)+[...Array(6)].map((_,i)=>wheat(440+i*30,446,1.3)).join('')),
 'inondations-pas-de-calais':()=>wrap(sky('#c9d3d2','#e3e9e6'),`<circle cx="620" cy="80" r="30" fill="#dfe5e2"/>`+hills({h1:230,h2:270,h3:300})+barn(620,310,.7)+flood()),
 'panneaux-retournes':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(650,80)+hills()+`<path d="M330 450L390 320H410L470 450z" fill="#8a8f86"/><path d="M400 330V450" stroke="${L}" stroke-width="3" stroke-dasharray="14 12"/>`+sign(220,430,1)+furrows(352,'#3f6447')),
 'cop28-alimentation':()=>wrap(sky('#d9e3dc','#eff2ec'),hills({h1:270,h2:310,h3:350})+globe(400,170,95)+[...Array(9)].map((_,i)=>wheat(80+i*80,446,1.3)).join('')),
 'pacte-generations':()=>S['loi-orientation'](),
 'agriculteurs-allemands':()=>wrap(sky('#d6dcd9','#ecefeb'),`<g fill="#8ea589">${[0,1,2,3,4,5].map(i=>`<rect x="${250+i*50}" y="${150}" width="28" height="170"/>`).join('')}<rect x="230" y="120" width="300" height="34"/><path d="M380 70l20 50h-40z"/></g>`+`<rect x="0" y="320" width="800" height="130" fill="#7f8a82"/>`+tractor(160,430,.8)+tractor(400,430,.8)+tractor(640,430,.8))
});

const road=()=>`<path d="M0 340L800 310V390L0 450z" fill="#7f8a82"/><path d="M0 398L800 352" stroke="${L}" stroke-width="3" stroke-dasharray="22 16"/>`;
const bale=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-26" rx="30" ry="26" fill="${G}"/><ellipse cx="0" cy="-26" rx="16" ry="14" fill="none" stroke="#8a6f2a" stroke-width="3"/></g>`;
const eiffel=(x,y,h)=>`<g transform="translate(${x} ${y})" fill="#8ea589"><path d="M${-h*.28} 0L-4 ${-h}H4L${h*.28} 0H${h*.16}Q0 ${-h*.22} ${-h*.16} 0z"/><rect x="${-h*.2}" y="${-h*.35}" width="${h*.4}" height="${h*.04}"/><rect x="${-h*.12}" y="${-h*.62}" width="${h*.24}" height="${h*.03}"/></g>`;
const ballot=(x,y)=>`<g transform="translate(${x} ${y})"><rect x="-90" y="-80" width="180" height="120" rx="8" fill="${D}"/><rect x="-50" y="-92" width="100" height="10" fill="#2f5a40"/><path d="M-30 -150h60v70h-60z" fill="#f3f5ef" stroke="${D}" stroke-width="3"/>${[...Array(12)].map((_,i)=>{const a=i/12*Math.PI*2;return `<circle cx="${Math.cos(a)*40}" cy="${-20+Math.sin(a)*28}" r="5" fill="${G}"/>`}).join('')}</g>`;
Object.assign(S,{
 'allemagne-janvier':()=>S['agriculteurs-allemands'](),
 'blocage-a64':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(660,80)+hills({h1:250,h2:290})+road()+bale(120,410,1.2)+bale(190,404,1.2)+tractor(380,405,.8)+tractor(600,385,.7)+bale(720,372,1)),
 'deuil-ariege':()=>wrap(sky('#cfd7d3','#e6ebe7'),hills({h1:250,h2:290})+road()+`<g transform="translate(400 300)"><path d="M0 0V-60" stroke="${D}" stroke-width="3"/><path d="M0 -60q-14 -10 0 -24q14 14 0 24z" fill="${G}"/></g>`+bale(560,380,1)),
 'annonces-attal-26-janvier':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(140,80)+hills()+furrows(352)+bale(380,420,1.6)+bale(470,420,1.6)+barn(640,350,.7)),
 'siege-paris':()=>wrap(sky('#d6dcd9','#ecefeb'),eiffel(560,320,230)+`<path d="M0 300H800V450H0z" fill="#7f8a82"/>`+road()+tractor(140,430,.75)+tractor(330,420,.75)+tractor(520,410,.75)),
 'ecophyto-pause':()=>S['glyphosate-10-ans'](),
 'sur-retire':()=>S['reglement-sur-rejete'](),
 'nodu-abandonne':()=>S['glyphosate-renouvele'](),
 'salon-agriculture-2024':()=>wrap(sky('#dfe4da','#f0f2ec'),`<path d="M80 120Q400 30 720 120V330H80z" fill="#c9d5c4"/>${[...Array(8)].map((_,i)=>`<path d="M${120+i*80} 330V110" stroke="#a9bf9f" stroke-width="3"/>`).join('')}`+`<rect x="0" y="330" width="800" height="120" fill="#a9bf9f"/>`+cow(400,420,1.4)+bale(180,430,1.1)+bale(620,430,1.1)),
 'prix-plancher-explique':()=>S['negociations-commerciales'](),
 'pac-simplification':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(650,80)+hills()+`<path d="M0 350H400V450H0z" fill="#c9b36a"/>`+[...Array(6)].map((_,i)=>wheat(60+i*55,440,1.3)).join('')+`<path d="M400 350H800V450H400z" fill="#7a6a4a"/>`+furrows(350,'#5e5238').replace(/M(\d+)/g,(m,a)=>'M'+a)),
 'mercosur-bresil':()=>S['mercosur'](),
 'loa-conseil-ministres':()=>S['loi-orientation'](),
 'finance-et-agriculture':()=>wrap(sky('#d9e3dc','#eff2ec'),hills({h1:270,h2:310,h3:350})+`<path d="M200 300L300 240L380 270L480 180L600 120" stroke="${G}" stroke-width="6" fill="none"/>`+[200,300,380,480,600].map((x,i)=>`<circle cx="${x}" cy="${[300,240,270,180,120][i]}" r="8" fill="${D}"/>`).join('')+[...Array(9)].map((_,i)=>wheat(80+i*80,446,1.3)).join('')),
 'ukraine-frein-urgence':()=>S['cereales-ukrainiennes'](),
 'ecophyto-2030':()=>S['reglement-sur-rejete'](),
 'loa-adoptee-assemblee':()=>wrap(sky('#d6dcd9','#ecefeb'),`<g fill="#8ea589">${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${210+i*50}" y="150" width="26" height="170"/>`).join('')}<path d="M180 150L400 80L620 150z"/><rect x="180" y="320" width="440" height="16"/></g>`+hills({h1:340,h2:370,h3:400})),
 'europeennes-2024':()=>wrap(sky('#d9e3dc','#eff2ec'),hills({h1:280,h2:320,h3:360})+ballot(400,330)),
 'dissolution-loa':()=>S['loa-adoptee-assemblee'](),
 'bilan-semestre-2024':()=>S['bilan-2023']()
});


const rain=()=>[...Array(40)].map((_,i)=>{const x=(i*97)%800,y=(i*53)%300;return `<path d="M${x} ${y}l-8 22" stroke="#7d98a0" stroke-width="2" opacity=".55"/>`}).join('');
const sheep=(x,y,s=1,f=1)=>`<g transform="translate(${x} ${y}) scale(${s*f} ${s})"><path d="M-30 0V-14M18 0V-14" stroke="${D}" stroke-width="5"/>${[[-30,-30],[-14,-38],[2,-38],[18,-30],[-22,-20],[10,-20]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="14" fill="#f3f5ef" stroke="#c9d1c6" stroke-width="2"/>`).join('')}<ellipse cx="38" cy="-32" rx="12" ry="9" fill="${D}"/></g>`;
const fire=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 0l60 -6M-30 -6l60 6" stroke="#6b4a1e" stroke-width="6"/><path d="M0 -8C-26 -30 -6 -50 -10 -70C10 -54 30 -38 0 -8z" fill="#e0812f"/><path d="M0 -8C-10 -22 0 -32 -2 -44C10 -32 14 -22 0 -8z" fill="${G}"/></g>`;
Object.assign(S,{
 'moisson-2024-previsions':()=>wrap(sky('#c6cfcd','#e0e6e2'),rain()+hills({h1:250,h2:290})+`<path d="M0 330H800V450H0z" fill="#8a9a6a"/>`+[...Array(12)].map((_,i)=>wheat(40+i*66,446,1.2)).join('')),
 'moisson-2024-41-ans':()=>S['moisson-2024-previsions'](),
 'un-an-de-blog':()=>S['bilan-2023'](),
 'fco3-premier-foyer':()=>wrap(sky('#d7e3d4','#eef2e8'),sun(650,80)+hills({h1:250})+`<path d="M0 340H800V450H0z" fill="#5aa85f"/>`+sheep(220,420,1.3)+sheep(400,400,1.1,-1)+sheep(560,430,1.25)+[...Array(14)].map((_,i)=>`<path d="M${20+i*58} 330V362" stroke="${D}" stroke-width="3"/>`).join('')+`<path d="M0 340H800" stroke="${D}" stroke-width="2"/>`),
 'fco3-41-foyers':()=>S['fco3-premier-foyer'](),
 'dialogue-strategique':()=>S['cop28-alimentation'](),
 'vendange-2024':()=>wrap(sky('#c9d1cf','#e3e8e4'),rain()+hills({h1:280,h2:300,h3:320})+vines()),
 'vendange-2024-revue':()=>S['vendange-2024'](),
 'genevard-ministre':()=>S['loa-adoptee-assemblee'](),
 'remobilisation-g20':()=>S['mercosur'](),
 'feux-de-la-colere':()=>wrap(sky('#2c3d33','#5b6e60'),`<circle cx="650" cy="80" r="26" fill="#dfe5e2"/>`+hills({h1:280,h2:310,h3:350})+fire(300,420,1.6)+fire(520,410,1.2)+tractor(680,430,.7)),
 'assemblee-mercosur':()=>S['loa-adoptee-assemblee'](),
 'censure-barnier':()=>S['loa-adoptee-assemblee'](),
 'mercosur-montevideo':()=>S['accord-cerealier'](),
 'genevard-reconduite':()=>S['loa-conseil-ministres'](),
 'bilan-2024':()=>S['bilan-2023']()
});


Object.assign(S,{
 'elections-chambres-debut':()=>S['europeennes-2024'](),
 'percee-coordination-rurale':()=>S['europeennes-2024'](),
 'vision-agriculture-ue':()=>S['cop28-alimentation'](),
 'loa-adoptee-definitivement':()=>S['loa-adoptee-assemblee'](),
 'salon-2025':()=>S['salon-agriculture-2024'](),
 'trump-vins-200':()=>wrap(sky('#dde3d8','#eff1ea'),water(300,'#5f8790')+ship(400,320,.95)+barrel(120,300,30)+barrel(180,300,30)),
 'loa-conseil-constitutionnel':()=>S['loa-adoptee-assemblee'](),
 'trump-pause-90-jours':()=>S['accord-cerealier'](),
 'loi-duplomb-motion-rejet':()=>S['glyphosate-10-ans'](),
 'dnc-premier-foyer':()=>wrap(sky('#d7e3d4','#eef2e8'),`<path d="M0 270L120 140L220 220L360 110L480 210L600 130L800 240V450H0z" fill="#8ea589"/><path d="M360 110l-24 30h48z M120 140l-18 24h36z" fill="#f3f5ef"/>`+hills({h1:300,h2:330,h3:370})+cow(260,430,1.1)+cow(520,420,.95,-1))
});


Object.assign(S,{
 'loi-duplomb-adoptee':()=>S['loa-adoptee-assemblee'](),
 'petition-duplomb':()=>wrap(sky('#d9e3dc','#eff2ec'),hills({h1:280,h2:320,h3:360})+`<g transform="translate(400 300)"><rect x="-90" y="-150" width="180" height="230" rx="6" fill="#f3f5ef" stroke="${D}" stroke-width="4"/>${[0,1,2,3,4,5].map(i=>`<path d="M-60 ${-110+i*30}h120" stroke="#a9bf9f" stroke-width="6" stroke-linecap="round"/>`).join('')}<path d="M40 50l50 -90l14 8l-50 90z" fill="${G}"/></g>`),
 'duplomb-conseil-constitutionnel':()=>S['loa-adoptee-assemblee'](),
 'deux-ans-de-blog':()=>S['bilan-2023'](),
 'mercosur-commission-septembre':()=>S['mercosur'](),
 'genevard-lecornu':()=>S['loa-conseil-ministres'](),
 'vendange-2025':()=>S['vendanges-canicule'](),
 'dnc-ariege':()=>S['dnc-premier-foyer'](),
 'mercosur-report-janvier':()=>S['agriculteurs-allemands'](),
 'bilan-2025':()=>S['bilan-2023']()
});

Object.assign(S,{
 'mercosur-feu-vert':()=>S['agriculteurs-allemands'](),
 'mercosur-signe':()=>S['accord-cerealier'](),
 'mercosur-cjue':()=>S['loa-adoptee-assemblee'](),
 'petition-debat':()=>S['petition-duplomb'](),
 'inondations-fevrier-2026':()=>S['inondations-pas-de-calais'](),
 'salon-sans-vaches':()=>S['salon-agriculture-2024'](),
 'mercosur-application':()=>S['mercosur'](),
 'loi-urgence-presentee':()=>S['loi-orientation'](),
 'dnc-alpages':()=>S['dnc-premier-foyer'](),
 'loi-urgence-assemblee':()=>S['loa-adoptee-assemblee'](),
 'moisson-2026':()=>S['moisson-2024-previsions'](),
 'loi-urgence-adoptee':()=>S['loa-adoptee-assemblee'](),
 'trois-ans-de-blog':()=>S['bilan-2023'](),
 'secheresse-plan-2026':()=>S['vendanges-canicule'](),
 'loi-urgence-promulguee':()=>S['loi-orientation'](),
 'vendange-2026-estimation':()=>S['vendanges-canicule'](),
 'pac-accord-conseil':()=>S['agriculteurs-allemands'](),
 'vendange-2026-revue':()=>S['vendange-2024'](),
 'ou-j-en-suis':()=>S['bilan-2023']()
});
const CATDEF={story:'about',markets:'negociations-commerciales',water:'plan-eau',climate:'planification-ecologique',wine:'vendanges-canicule',trade:'mercosur',policy:'loi-orientation',pesticides:'glyphosate-10-ans',livestock:'mhe-elevages'};
window.SCENE=(k,c)=>S[k]?S[k]():(c&&CATDEF[c]&&S[CATDEF[c]]?S[CATDEF[c]]():null);

})();
