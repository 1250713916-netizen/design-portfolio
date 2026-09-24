const projects = [
  {
    id: "01",
    title: "洗地机产品系统",
    category: "家用清洁电器",
    year: "2026",
    role: "产品设计 / CMF / 结构",
    intro: "围绕家庭地面清洁场景进行设计，重点解决产品比例、握持体验、视觉层级与清洁底座之间的整体关系。通过简洁的几何语言和克制的 CMF，让产品在功能复杂的情况下依然保持清晰、轻量的视觉感受。",
    cover: "images/project-01/cover.webp",
    details: [
      {image:"images/project-01/01.webp", title:"整体造型", text:"通过圆角几何与纵向比例控制建立产品的整体形象，同时兼顾握持、转向和收纳关系。"},
      {image:"images/project-01/02.webp", title:"细节设计", text:"针对手柄、杆体、连接件与机身交界处进行细节收敛，减少视觉断裂。"},
      {image:"images/project-01/03.webp", title:"CMF", text:"以低饱和中性色为主，结合哑光塑料与金属质感部件，形成克制、耐用的家居产品气质。"},
      {image:"images/project-01/04.webp", title:"结构与落地", text:"结合内部空间、零部件布局、装配关系和制造工艺，对外观比例进行同步优化。"}
    ]
  },
  {
    id: "02",
    title: "云舱拖把欧派联名款",
    category: "家居清洁工具",
    year: "2026",
    role: "产品设计/ CMF",
    intro: "在原有云舱拖把基础上，升级为伸缩杆，搭配欧派经典品牌色做重新配色",
    cover: "images/project-02/cover.webp",
    details: [
      {image:"images/project-02/01.webp", title:"场景使用", text:""},
      {image:"images/project-02/02.webp", title:"产品细节", text:""},
      {image:"images/project-02/03.webp", title:"产品配色方案", text:""},
    ]
  },
  {
    id: "03",
    title: "笑脸温感棉擦",
    category: "家居清洁工具",
    year: "2026",
    role: "产品设计/ CMF",
    intro: "系列化产品设计",
    cover: "images/project-03/cover.webp",
    details: [
      {image:"images/project-03/01.webp", title:"使用场景", text:""},
      {image:"images/project-03/02.webp", title:"细节展示", text:""},
      {image:"images/project-03/03.webp", title:"配色展示", text:""},
    ]
  },
  {
    id: "04",
    title: "硅胶套扫组合",
    category: "家居清洁工具",
    year: "2026",
    role: "产品设计 / CMF/结构",
    intro: "通过软胶扫把可同时清理水渍和粉尘垃圾，整体可折叠收纳",
    cover: "images/project-04/cover.webp",
    details: [
      {image:"images/project-04/01.webp", title:"细节展示", text:""},
      {image:"images/project-04/02.webp", title:"细节展示", text:""},
      {image:"images/project-04/03.webp", title:"结构设计", text:""},
    ]
  },
  {
    id: "05",
    title: "伸缩夹布拖把",
    category: "家居清洁工具",
    year: "2026",
    role: "产品设计 / CMF/结构",
    intro: "通过伸缩结构，可兼容不同尺寸无纺布/抹布等",
    cover: "images/project-05/cover.webp",
    details: [
      {image:"images/project-05/01.webp", title:"细节展示", text:"这里填写说明。"},
      {image:"images/project-05/02.webp", title:"细节展示", text:"这里填写说明。"},
      {image:"images/project-05/03.webp", title:"细节展示", text:"这里填写说明。"},
    ]
  },
  {
    id: "05",
    title: "部分往年项目",
    category: "艺术装置/家具/医疗设备/工业设备/清洁用品/概念设计",
    year: "2017~2026",
    role: "产品设计 / CMF/结构",
    intro: "",
    cover: "images/project-06/cover.webp",
    details: [
      {image:"images/project-06/01.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/02.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/03.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/04.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/05.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/06.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/07.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/08.webp", title:"", text:"这里填写说明。"},
      {image:"images/project-06/09.webp", title:"", text:"这里填写说明。"},
    ]
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");

function img(src, alt){
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.outerHTML='<div class="placeholder">图片待替换：${src}</div>'">`;
}

grid.innerHTML = projects.map((p,i)=>`
  <article class="project-card" data-index="${i}">
    <div class="cover">${img(p.cover,p.title)}</div>
    <div class="project-meta">
      <span class="index">${p.id}</span>
      <h3>${p.title}</h3>
      <span class="cat">${p.category}</span>
    </div>
  </article>
`).join("");

document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("click",()=>openProject(Number(card.dataset.index)));
});

function openProject(i){
  const p=projects[i];
  document.getElementById("modalNo").textContent=`${p.id} / PROJECT`;
  document.getElementById("modalTitle").textContent=p.title;
  document.getElementById("modalCategory").textContent=p.category;
  document.getElementById("modalCover").src=p.cover;
  document.getElementById("modalCover").alt=p.title;
  document.getElementById("modalMeta").innerHTML=`
    <strong>年份</strong>　${p.year}<br>
    <strong>职责</strong>　${p.role}
  `;
  document.getElementById("modalIntro").textContent=p.intro;
  document.getElementById("modalDetails").innerHTML=p.details.map((d,n)=>`
    <article class="detail-item">
      <div class="detail-image">${img(d.image,`${p.title} ${d.title}`)}</div>
      <div class="detail-text">
        <h4>${String(n+1).padStart(2,"0")} / ${d.title}</h4>
        <p>${d.text}</p>
      </div>
    </article>
  `).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("lock");
  modal.scrollTop=0;
  // 详情页进入浏览历史：手机系统左滑/浏览器返回时关闭详情，回到首页。
  if(!modalOpenedByHistory){
    history.pushState({portfolioProject:true},"","#project");
    modalOpenedByHistory=true;
  }
}

function closeProject(fromPopState=false){
  if(!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("lock");
  if(modalOpenedByHistory && !fromPopState){
    modalOpenedByHistory=false;
    history.back();
  }else{
    modalOpenedByHistory=false;
  }
}

document.getElementById("modalClose").addEventListener("click",()=>closeProject());
window.addEventListener("popstate",()=>{ if(modalOpenedByHistory) closeProject(true); });
document.addEventListener("keydown",e=>{if(e.key==="Escape") closeProject();});
modal.addEventListener("click",e=>{if(e.target===modal) closeProject();});

// 手机详情页左滑：关闭详情并回到首页。
let touchStartX=0,touchStartY=0,touchStartTime=0;
modal.addEventListener("touchstart",e=>{
  const t=e.changedTouches[0];
  touchStartX=t.clientX; touchStartY=t.clientY; touchStartTime=Date.now();
},{passive:true});
modal.addEventListener("touchend",e=>{
  const t=e.changedTouches[0];
  const dx=t.clientX-touchStartX;
  const dy=t.clientY-touchStartY;
  const dt=Date.now()-touchStartTime;
  if(dx < -70 && Math.abs(dx)>Math.abs(dy)*1.25 && dt<700){ closeProject(); }
},{passive:true});

document.querySelector(".mobile-menu").addEventListener("click",()=>{
  const nav=document.querySelector(".desktop-nav");
  nav.style.display=nav.style.display==="flex"?"":"flex";
  if(nav.style.display==="flex"){
    nav.style.position="absolute";
    nav.style.right="5vw";
    nav.style.top="58px";
    nav.style.background="#e8e8e5";
    nav.style.padding="14px 18px";
    nav.style.flexDirection="column";
    nav.style.gap="16px";
  }
});
