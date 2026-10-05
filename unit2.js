"use strict";
(()=>{
const questions = [
 {id:"u2q1",llo:"LLO2.1",prompt:"1. เหตุผลใดทำให้ y′ = xy ใช้วิธีแยกตัวแปรได้?",options:["เพราะสมการทุกข้อที่มี y′ แยกตัวแปรได้","เพราะด้านขวาเป็นผลคูณของฟังก์ชันของ x กับฟังก์ชันของ y","เพราะมีพจน์บังคับเป็นศูนย์เท่านั้น"],answer:1,hint:"ลองเขียนด้านขวาเป็น g(x)h(y)",correct:"ถูกต้อง: g(x) = x และ h(y) = y เมื่อ y ≠ 0 จึงเขียน dy/y = xdx ได้ แล้วต้องตรวจกรณี y = 0 เพิ่มด้วย ตามตัวอย่าง 2.1-1",wrong:"ลองใหม่: ต้องดูรูปของ f(x,y) ไม่ใช่ดูว่ามี y′ เพียงอย่างเดียว"},
 {id:"u2q2",llo:"LLO2.1, LLO2.2",prompt:"2. ใน y′ = 1+y/x เมื่อแทน y = vx อนุพันธ์ที่ถูกต้องคือข้อใด?",options:["y′ = xv′","y′ = v′+x","y′ = v+xv′"],answer:2,hint:"v เป็นฟังก์ชันของ x ใช้กฎอนุพันธ์ของผลคูณกับ vx",correct:"ถูกต้อง: y′ = v+xv′ แทนแล้วได้ v+xv′ = 1+v จึงมี xv′ = 1 ตามตัวอย่าง 2.2-1",wrong:"ลองใหม่: ทั้ง v และ x เปลี่ยนตาม x ต้องเก็บทั้งสองพจน์จากกฎผลคูณ"},
 {id:"u2q3",llo:"LLO2.2",prompt:"3. หลังหาร y′ = xy ด้วย y คำตอบใดต้องตรวจเพิ่มในสมการเดิม?",options:["y = 0 และรวมไว้ใน y = Ce^(x²/2) ได้ด้วย C = 0","y = x เพราะ x เป็นตัวแปรอิสระ","ไม่มี เพราะหารด้วย y ได้ทุกค่า"],answer:0,hint:"การหารใช้ได้เฉพาะ y ≠ 0 ลองแทนฟังก์ชันศูนย์ในสมการเดิม",correct:"ถูกต้อง: ถ้า y = 0 จะมี y′ = 0 และ xy = 0 จึงเป็นคำตอบที่ต้องคืนให้สูตรทั่วไป ตามตัวอย่าง 2.1-1",wrong:"ลองใหม่: ต้องตรวจกรณีที่ตัวหารเป็นศูนย์ การหารไม่ได้พิสูจน์ว่ากรณีนี้ไม่มีคำตอบ"},
 {id:"u2q4",llo:"LLO2.2, LLO2.6",prompt:"4. y′ = x²/(1+y²) ให้คำตอบโดยนัยข้อใด?",options:["y+y² = x²+C","y+y³/3 = x³/3+C","ln|y| = x³/3+C"],answer:1,hint:"เริ่มจาก (1+y²)dy = x²dx แล้วอินทิเกรตทีละพจน์",correct:"ถูกต้อง: อินทิเกรตได้ y+y³/3 = x³/3+C และหาอนุพันธ์กลับได้ (1+y²)y′ = x² ตามตัวอย่าง 2.1-2",wrong:"ลองใหม่: ∫y²dy = y³/3 และ ∫x²dx = x³/3"},
 {id:"u2q5",llo:"LLO2.5",prompt:"5. สำหรับ y+y³/3 = x³/3+C เมื่อ y(1) = 1 ค่า C เท่าไร?",options:["C = 0","C = 4/3","C = 1"],answer:2,hint:"แทนทั้ง x = 1 และ y = 1 ได้ 1+1/3 = 1/3+C",correct:"ถูกต้อง: C = 1 จึงได้ y+y³/3 = x³/3+1 ตามกราฟค่าเริ่มต้นของตัวอย่าง 2.1-2",wrong:"ลองใหม่: ต้องแทนทั้งสองฝั่ง แล้วหัก 1/3 ทางขวาออกด้วย"},
 {id:"u2q6",llo:"LLO2.2",prompt:"6. ในตัวอย่าง 2.1-3 ผลอินทิเกรต ∫x cos x dx คือข้อใด?",options:["x sin x+cos x+C","x sin x−cos x+C","x² sin x/2+C"],answer:0,hint:"ให้ u = x, dv = cos x dx แล้วใช้ ∫u dv = uv−∫v du",correct:"ถูกต้อง: x sin x−∫sin x dx = x sin x+cos x+C ตรวจอนุพันธ์ได้ sin x+x cos x−sin x = x cos x",wrong:"ลองใหม่: ∫sin x dx = −cos x เมื่อลบอินทิเกรตนี้จึงได้เครื่องหมายบวก"},
 {id:"u2q7",llo:"LLO2.2, LLO2.5",prompt:"7. ตัวอย่าง 2.2-2 ให้ xv′ = −tan v และ v(1) = 0 ควรทำอย่างไร?",options:["หารด้วย tan v ทันที เพราะ tan 0 ไม่เป็นศูนย์","ตัด v = 0 ทิ้ง เพราะเป็นคำตอบคงตัว","ตรวจ v = 0 ก่อนหาร ได้ y = 0 ที่ผ่านเงื่อนไขเริ่มต้น"],answer:2,hint:"แทน v = 0 ใน xv′ = −tan v และอย่าลืม y = vx",correct:"ถูกต้อง: v = 0 ให้ทั้งสองข้างเป็นศูนย์ จึงได้ y = 0 และ y(1) = 0 ใช้บน (0,∞) การหารด้วย tan v จะตัดคำตอบนี้ออก",wrong:"ลองใหม่: tan 0 = 0 จึงต้องตรวจคำตอบนี้ก่อนหาร และคำตอบคงตัวก็เป็นคำตอบได้"},
 {id:"u2q8",llo:"LLO2.2, LLO2.6",prompt:"8. สำหรับ y² = x²(2ln|x|+C) ของตัวอย่าง 2.2-3 เงื่อนไขใดถูกต้อง?",options:["x ≠ 0 และ 2ln|x|+C > 0 เพื่อให้ y เป็นจริงและไม่เป็นศูนย์","x ≠ 0 อย่างเดียว และใช้ y = 0 ที่ปลายช่วงได้","ใช้ได้ทุก x รวม x = 0 เพราะมี x² คูณอยู่"],answer:0,hint:"สมการเดิมมีตัวหาร xy และรูปชัดแจ้งมีรากที่สอง",correct:"ถูกต้อง: x และ y ต้องไม่เป็นศูนย์ และค่าภายในรากต้องเป็นบวก เลือกสาขาและช่วงที่ผ่านเงื่อนไขนี้ ตรวจโดยนัยได้ y′ = y/x+x/y",wrong:"ลองใหม่: ต้องรักษาโดเมนของสมการเดิมด้วย จุดที่ y = 0 ทำให้ตัวหาร xy เป็นศูนย์"},
 {id:"u2q9",llo:"LLO2.5, LLO2.6",prompt:"9. y′ = 1+y/x และ y(1) = 1 ให้คำตอบและช่วงข้อใด?",options:["y = x ln x บน (0,∞)","y = x(ln x+1) บน (0,∞)","y = x(ln|x|+1) บน ℝ รวม x = 0"],answer:1,hint:"แทน (1,1) ใน y = x(ln|x|+C) แล้วเลือกช่วงที่มี x = 1 และไม่ข้ามศูนย์",correct:"ถูกต้อง: C = 1 และช่วงคือ (0,∞) ตรวจได้ y′ = ln x+2 = 1+y/x รวมทั้ง y(1) = 1 ตามตัวอย่าง 2.1-4 / 2.2-1",wrong:"ลองใหม่: ค่าเริ่มต้นกำหนด C = 1 และสมการเดิมไม่ถูกนิยามที่ x = 0 จึงใช้ช่วง ℝ ทั้งหมดไม่ได้"}
];
const solved2 = new Set(); let completed2=false;
const reviews=Array.from(document.querySelectorAll('.u2-review'));
function updateUnit2(){
 const correct=solved2.size===questions.length, reviewed=reviews.every(input=>input.checked);
 if(completed2&&(!correct||!reviewed)){completed2=false;unitCompletions.delete(2);updateCourseProgress();}
 $("u2-quiz-score").textContent=`ตอบถูก ${solved2.size} / ${questions.length} ข้อ`;
 $("u2-finish").disabled=!correct||!reviewed||completed2;
 $("u2-finish").textContent=completed2?"ทำกิจกรรม 2.1–2.2 ครบแล้ว":"จบกิจกรรม 2.1–2.2";
 $("u2-finish-title").textContent=completed2?"ทำกิจกรรม 2.1–2.2 ครบแล้ว":correct&&reviewed?"ทำกิจกรรมครบแล้ว":correct?"เหลืองานคิดและจด":`ตรวจแบบฝึกให้ครบ ${questions.length} ข้อ`;
 $("u2-finish-text").textContent=completed2?"ทำแบบฝึกหัด 2.1 หน้า 8 และ 2.2 หน้า 12 ในชีทใช้ในคาบต่อ แล้วใช้ฉบับเนื้อหาครบตรวจทบทวน":correct&&reviewed?"แบบฝึกตรวจอัตโนมัติครบ และตรวจงานคิดและจดทั้งสามตัวอย่างด้วยตนเองแล้ว":"ตรวจงานเขียนในส่วนคิดและจด ทั้งสามตัวอย่าง แล้วใช้คำใบ้และเหตุผลตรวจแบบฝึกให้ครบ";
}
mountQuizzes(questions,"u2-quiz-container",solved2,updateUnit2,"บท 2 ");
reviews.forEach(input=>input.addEventListener('change',updateUnit2));updateUnit2();
$("u2-finish").addEventListener('click',()=>{
 if(solved2.size!==questions.length||!reviews.every(input=>input.checked))return;
 completed2=true;unitCompletions.add(2);updateCourseProgress();updateUnit2();
});
document.querySelectorAll('[data-reveal]').forEach(button=>{
 const key=button.dataset.reveal, steps=$(key+'-steps').querySelectorAll('.worked-step');let shown=1;
 button.addEventListener('click',()=>{if(shown<steps.length)steps[shown++].hidden=false;
 $(key+'-count').textContent=`ขั้น ${shown} / ${steps.length}`;
 if(shown===steps.length){button.disabled=true;button.textContent='เปิดครบทุกขั้นแล้ว';}
 });
});
// Pure graph models: actual equations and solutions from the current week-2 sheet.
const graphModels = {
 xy:{xmin:-2,xmax:2,ymin:-4,ymax:4,initialX:0,initialY:1,title:"2.1-1 · y′ = xy",f:(x,y)=>x*y,solution:(x,c)=>c*Math.exp(x*x/2),equation:"y = Ce^(x²/2)",domain:"คำตอบนิยามบน ℝ; C = 0 รวมคำตอบ y = 0"},
 implicit:{xmin:-2,xmax:2,ymin:-4,ymax:4,initialX:1,initialY:1,title:"2.1-2 · y′ = x²/(1+y²)",f:(x,y)=>x*x/(1+y*y),solution:(x,c)=>2*Math.sinh(Math.asinh((x*x*x+3*c)/2)/3),equation:"y + y³/3 = x³/3 + C",domain:"คำตอบนิยามบน ℝ; 1+y² > 0 สำหรับ y จริงทุกค่า"},
 ratio:{xmin:0.1,xmax:3,ymin:-4,ymax:6,initialX:1,initialY:1,title:"2.1-4 / 2.2-1 · y′ = 1+y/x",f:(x,y)=>1+y/x,solution:(x,c)=>x*(Math.log(x)+c),equation:"y = x(ln x + C), x > 0",domain:"กราฟนี้เลือกช่วง (0,∞) ซึ่งมี x = 1; ไม่วาดข้าม x = 0"}
};
// End pure graph models.
const ns='http://www.w3.org/2000/svg';
function el(tag,attrs,text){const element=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([key,value])=>element.setAttribute(key,String(value)));if(text!==undefined)element.textContent=text;return element;}
function plot(){
 const model=graphModels[$('u2-graph-example').value], c=Number($('u2-constant').value);
 const px=x=>52+(x-model.xmin)/(model.xmax-model.xmin)*516;
 const py=y=>304-(y-model.ymin)/(model.ymax-model.ymin)*280;
 const grid=$('u2-grid'),field=$('u2-field'),families=$('u2-families');grid.replaceChildren();field.replaceChildren();families.replaceChildren();
 for(let value=Math.ceil(model.xmin);value<=model.xmax;value++){
  grid.append(el('line',{x1:px(value),x2:px(value),y1:24,y2:304,stroke:value===0?'#afc1cb':'#e1e9ee'}));
  grid.append(el('text',{x:px(value),y:325,'text-anchor':'middle',class:'svg-label'},value));
 }
 for(let value=model.ymin;value<=model.ymax;value+=2){
  grid.append(el('line',{x1:52,x2:568,y1:py(value),y2:py(value),stroke:value===0?'#afc1cb':'#e1e9ee'}));
  grid.append(el('text',{x:42,y:py(value)+4,'text-anchor':'end',class:'svg-label'},value));
 }
 for(let i=0;i<=14;i++)for(let j=0;j<=10;j++){
  const x=model.xmin+i*(model.xmax-model.xmin)/14,y=model.ymin+j*(model.ymax-model.ymin)/10,slope=model.f(x,y);
  const dx=516/(model.xmax-model.xmin),dy=-slope*280/(model.ymax-model.ymin),norm=Math.hypot(dx,dy),ux=dx/norm,uy=dy/norm;
  const cx=px(x),cy=py(y),ex=cx+ux*9,ey=cy+uy*9;
  field.append(el('path',{d:`M${cx-ux*9},${cy-uy*9}L${ex},${ey}M${ex-ux*3-uy*2},${ey-uy*3+ux*2}L${ex},${ey}L${ex-ux*3+uy*2},${ey-uy*3-ux*2}`,fill:'none',stroke:'#90a7b2','stroke-width':1.2}));
 }
 function curve(constant){let path='';for(let i=0;i<=260;i++){const x=model.xmin+i*(model.xmax-model.xmin)/260,y=model.solution(x,constant);path+=(i?'L':'M')+px(x).toFixed(2)+','+py(y).toFixed(2);}return path;}
 [-2,-1,0,1,2].forEach(constant=>families.append(el('path',{d:curve(constant),fill:'none',stroke:'#82c0b1','stroke-width':1.2,opacity:0.5,'stroke-dasharray':constant===0?'4 3':'none'})));
 $('u2-selected-line').setAttribute('d',curve(c));
 const selectedY=model.solution(model.initialX,c),initialSlope=model.f(model.initialX,selectedY);
 $('u2-initial-dot').setAttribute('cx',px(model.initialX));$('u2-initial-dot').setAttribute('cy',py(selectedY));
 $('u2-constant-value').textContent=c.toFixed(2);
 if($('u2-graph-example').value==='xy'){
  const exponent=document.createElement('sup');exponent.textContent='x²/2';
  $('u2-graph-equation').replaceChildren(document.createTextNode('y = Ce'),exponent,document.createTextNode(' · C = '+c.toFixed(2)));
 }else $('u2-graph-equation').textContent=model.equation+' · C = '+c.toFixed(2);
 $('u2-choose-ivp').textContent=`เลือก y(${model.initialX}) = ${model.initialY} ตามชีท`;
 $('u2-ivp-explanation').textContent=`เส้นที่เลือกผ่าน (${model.initialX}, ${selectedY.toFixed(2)}) และมีความชัน ${initialSlope.toFixed(2)} ที่จุดนี้`+(c===1?' ค่าเริ่มต้นตามชีทเลือก C = 1':'');
 $('u2-domain').textContent=model.domain;
 $('u2-graph-title').textContent=model.title+' · สนามทิศทางและคำตอบ';
 $('u2-graph-desc').textContent=model.equation+` เมื่อ C = ${c.toFixed(2)} ผ่านจุด (${model.initialX}, ${selectedY.toFixed(2)}) ความชัน ${initialSlope.toFixed(2)} `+model.domain;
}
$('u2-constant').addEventListener('input',plot);
$('u2-graph-example').addEventListener('change',()=>{$('u2-constant').value='1';plot();});
$('u2-choose-ivp').addEventListener('click',()=>{$('u2-constant').value='1';plot();});plot();
})();
