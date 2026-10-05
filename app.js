"use strict";
const $ = (id) => document.getElementById(id);
const quizData = [
 {id:"q1",llo:"LLO1.1",prompt:"1. ใน dy/dx = x² เมื่อ y = y(x) ตัวแปรอิสระ ตัวแปรตาม และอนุพันธ์คืออะไร?",options:["x เป็นตัวแปรอิสระ y เป็นตัวแปรตาม และ dy/dx เป็นอัตราการเปลี่ยนแปลงของ y เทียบกับ x","y เป็นตัวแปรอิสระ x เป็นตัวแปรตาม และ x² เป็นอนุพันธ์","x² เป็นตัวแปรอิสระ dy/dx เป็นตัวแปรตาม และ y เป็นอนุพันธ์"],answer:0,hint:"มอง y เป็นฟังก์ชัน y(x) แล้วอ่าน dy/dx ว่าอะไรเปลี่ยนเทียบกับอะไร",correct:"ถูกต้อง: x เป็นตัวแปรอิสระ y(x) เป็นตัวแปรตาม และ dy/dx เป็นอัตราการเปลี่ยนแปลงของ y เทียบกับ x ซึ่งสมการกำหนดให้เท่ากับ x² อิงหัวข้อ 1.2",wrong:"ลองใหม่: y เป็นฟังก์ชันของ x ส่วน dy/dx เป็นอนุพันธ์ที่สมการกำหนดค่าให้เท่ากับ x²"},
 {id:"q2",llo:"LLO1.2, LLO1.3",prompt:"2. y″ + (y′)² = cos x มีอันดับ ดีกรี และความเป็นเชิงเส้นอย่างไร?",options:["อันดับ 2 ดีกรี 2 เชิงเส้น","อันดับ 2 ดีกรี 1 ไม่เชิงเส้น","อันดับ 1 ดีกรี 2 ไม่เชิงเส้น"],answer:1,hint:"อันดับและดีกรีดูที่ y″ แต่ความเป็นเชิงเส้นต้องตรวจทุกพจน์ รวม (y′)²",correct:"ถูกต้อง: y″ เป็นอนุพันธ์สูงสุดและมีกำลัง 1 จึงมีอันดับ 2 ดีกรี 1 แต่ (y′)² ทำให้สมการไม่เชิงเส้น อิงแบบฝึกหัด 1 ข้อ 1.3",wrong:"ลองใหม่: อย่าใช้กำลังของ y′ กำหนดดีกรี เพราะอนุพันธ์สูงสุดคือ y″ และอย่าสรุปว่าเป็นเชิงเส้นเพียงเพราะดีกรี 1"},
 {id:"q3",llo:"LLO1.2",prompt:"3. เมื่อ u = u(x,t) และ D เป็นค่าคงที่ไม่เป็นศูนย์ สมการ ∂u/∂t = D∂²u/∂x² เป็นชนิดใด?",options:["ODE อันดับ 1 ดีกรี 2","PDE อันดับ 1 ดีกรี 1","PDE อันดับ 2 ดีกรี 1"],answer:2,hint:"สัญลักษณ์ ∂ คืออนุพันธ์ย่อย และมีอนุพันธ์ย่อยอันดับสองตาม x",correct:"ถูกต้อง: เป็น PDE มีอนุพันธ์ย่อยสูงสุดอันดับ 2 และเป็นพหุนามของอนุพันธ์โดยอนุพันธ์สูงสุดมีกำลัง 1 จึงมีดีกรี 1 อิงหัวข้อ 1.2",wrong:"ลองใหม่: จำนวนตัวแปรหรือจำนวนพจน์ไม่ได้กำหนดอันดับ ดู ∂²u/∂x² ซึ่งเป็นอนุพันธ์ย่อยอันดับสอง"},
 {id:"q4",llo:"LLO1.3",prompt:"4. xy″ − y cos x = x บนช่วง x > 0 เป็นสมการแบบใด?",options:["เชิงเส้นอันดับสองไม่เอกพันธ์","ไม่เชิงเส้นเพราะมี cos x","เชิงเส้นอันดับสองเอกพันธ์"],answer:0,hint:"cos x เป็นสัมประสิทธิ์ที่ขึ้นกับตัวแปรอิสระ ไม่ใช่ cos y แล้วตรวจ g(x)",correct:"ถูกต้อง: y″ และ y มีกำลังหนึ่ง ไม่คูณกัน สัมประสิทธิ์ขึ้นกับ x เท่านั้น และ g(x) = x ไม่เป็นฟังก์ชันศูนย์ จึงไม่เอกพันธ์ อิงแบบฝึกหัด 1 ข้อ 3.2",wrong:"ลองใหม่: สัมประสิทธิ์ cos x ใช้ในสมการเชิงเส้นได้ พจน์บังคับทางขวาคือ x จึงไม่ใช่เอกพันธ์"},
 {id:"q5",llo:"LLO1.4",prompt:"5. y‴ + x²y = cos x เขียนในรูป F = 0 อย่างไร?",options:["F(x,y,y′,y″) = y″ + x²y − cos x = 0","F(x,y,y′,y″,y‴) = y‴ + x²y − cos x = 0","F(x,y,y′,y″,y‴) = y‴ + x²y + cos x = 0"],answer:1,hint:"อนุพันธ์สูงสุดกำหนด n และเมื่อย้าย cos x มาทางซ้ายต้องเปลี่ยนเครื่องหมาย",correct:"ถูกต้อง: n = 3 และ F = y‴ + x²y − cos x จึงมี F = 0 อิงแบบฝึกหัด 1 ข้อ 2.2",wrong:"ลองใหม่: สมการมี y‴ จึงต้องใช้รูปทั่วไปอันดับ 3 และย้ายพจน์ cos x มาซ้ายด้วยเครื่องหมายลบ"},
 {id:"q6",llo:"LLO1.4",prompt:"6. ข้อใดเป็นตัวอย่าง ODE เชิงเส้นอันดับสองแบบไม่เอกพันธ์ตามเงื่อนไขที่กำหนด?",options:["y‴ + 2y′ + y = x","y″ + y² = x","y″ + 2y′ + y = x"],answer:2,hint:"ตรวจครบสามเกณฑ์: อนุพันธ์สูงสุดเป็น y″ ทุกพจน์เป็นเชิงเส้น และ g(x) ไม่เป็นฟังก์ชันศูนย์",correct:"ถูกต้อง: ข้อสุดท้ายมีอันดับ 2 เป็นเชิงเส้น และ g(x) = x ไม่เป็นฟังก์ชันศูนย์ อีกสองข้อผิดเงื่อนไขอันดับและความเป็นเชิงเส้น ตามลำดับ จากนั้นลองแต่งสมการของเราในกิจกรรมงานเขียน",wrong:"ลองใหม่: ข้อแรกมีอันดับ 3 ส่วนข้อสองมี y² จึงไม่เชิงเส้น ต้องผ่านเกณฑ์ทั้งสามพร้อมกัน"}
];
const quizTotal = quizData.length;
const solved = new Set();
let completed = false;
const unitCompletions = new Set();
function updateCourseProgress() {
 const chapter2Complete=[2,3,4].every(key=>unitCompletions.has(key));
 $("course-progress").textContent=[unitCompletions.has(1),chapter2Complete,[5,6].every(key=>unitCompletions.has(key)),unitCompletions.has(7)].map((done,index)=>`บท ${index+1}: ${done?"ครบแล้ว":"ยังไม่ครบ"}`).join(" · ");
 const third=$("u3-completion-status"),fourth=$("u4-completion-status");
 if(third)third.textContent=[5,6].every(key=>unitCompletions.has(key))?"ทำกิจกรรมบท 3 ครบทั้งสองช่วงแล้ว":"3.1–3.2: "+(unitCompletions.has(5)?"ครบแล้ว":"ยังไม่ครบ")+" · 3.3: "+(unitCompletions.has(6)?"ครบแล้ว":"ยังไม่ครบ");
 if(fourth)fourth.textContent=unitCompletions.has(7)?"ทำกิจกรรมบท 4 ครบแล้ว":"ทำแบบฝึกบท 4 และตรวจงานคิดและจดสามตัวอย่างให้ครบ";
 const status=$("u2-completion-status");
 if(status)status.textContent=(chapter2Complete?"ทำกิจกรรมบท 2 ครบทั้งสามช่วงแล้ว · ":"")+["2.1–2.2","2.3–2.4","2.5–2.6"].map((label,i)=>`${label}: ${unitCompletions.has(i+2)?"ครบแล้ว":"ยังไม่ครบ"}`).join(" · ");
}
function navigate() {
 const hash=location.hash;
 if(hash==="#main"){$("main").focus();return;}
 const first=["#lesson","#c1-intro","#c1-linear","#explore","#concepts","#example","#general-form","#practice"].includes(hash);
 let active=first?"lesson":"overview";
 for(const n of [2,3,4])if(hash===`#unit${n}`||(hash.startsWith(`#u${n}-`)&&Boolean($(hash.slice(1)))))active=`unit${n}`;
 for(const id of ["overview","lesson","unit2","unit3","unit4"])$(id).hidden=id!==active;
 const home=document.querySelector(".nav-home");home.classList.toggle("active",active==="overview");home.setAttribute("aria-current",active==="overview"?"page":"false");
 document.querySelectorAll(".nav-unit").forEach(link=>{const selected=link.getAttribute("href")===`#${active}`;link.classList.toggle("active",selected);link.setAttribute("aria-current",selected?"page":"false");});
 if(active==="overview"||["#lesson","#unit2","#unit3","#unit4"].includes(hash))window.scrollTo({top:0,behavior:"instant"});
 else requestAnimationFrame(()=>$(hash.slice(1)).scrollIntoView({block:"start",behavior:"instant"}));
}
window.addEventListener("hashchange",navigate);
navigate();
const symbolMeanings = {
 x:"x คือตัวแปรอิสระ เราพิจารณาการเปลี่ยนแปลงของ y เทียบกับ x",
 y:"y = y(x) คือตัวแปรตามหรือฟังก์ชันที่ไม่ทราบค่า ซึ่งขึ้นกับ x",
 derivative:"dy/dx คืออนุพันธ์ของ y เทียบกับ x หรืออัตราการเปลี่ยนแปลงของ y ต่อ x สมการนี้กำหนดให้มีค่าเท่ากับ x²"
};
document.querySelectorAll(".symbol-button").forEach(button=>{
 button.addEventListener("click",()=>{
  document.querySelectorAll(".symbol-button").forEach(other=>other.setAttribute("aria-pressed",String(other===button)));
  $("symbol-explanation").textContent=symbolMeanings[button.dataset.symbol];
 });
});
let stepsShown=1;
$("next-step").addEventListener("click",()=>{
 const steps=$("example-steps").querySelectorAll(".worked-step");
 if(stepsShown<steps.length){steps[stepsShown].hidden=false;stepsShown++;}
 $("step-count").textContent=`ขั้น ${stepsShown} / ${steps.length}`;
 if(stepsShown===steps.length){$("next-step").disabled=true;$("next-step").textContent="เปิดครบทุกขั้นแล้ว";}
});
function mountQuizzes(data, containerId, solvedItems, update, unitLabel="") {
data.forEach((q, questionIndex)=>{
 const container=document.createElement("div");container.className="quiz";container.dataset.quizId=q.id;
 const fieldset=document.createElement("fieldset");
 const legend=document.createElement("legend");legend.textContent=q.prompt;fieldset.append(legend);
 const options=document.createElement("div");options.className="options";
 q.options.forEach((label,index)=>{
  const option=document.createElement("label");option.className="option";
  const input=document.createElement("input");input.type="radio";input.name=q.id;input.value=index;input.id=q.id+"-"+index;
  const text=document.createElement("span");text.textContent=label;option.append(input,text);options.append(option);
  input.addEventListener("change",()=>{feedback.hidden=true;if(solvedItems.delete(q.id))update();});
 });
 const llo=document.createElement("p");llo.className="source-note";llo.textContent=q.llo;
 fieldset.append(options);container.append(llo,fieldset);
 const actions=document.createElement("div");actions.className="quiz-actions";
 const check=document.createElement("button");check.type="button";check.className="button secondary";check.textContent="ตรวจคำตอบ";check.setAttribute("aria-label",`ตรวจคำตอบ${unitLabel}ข้อ ${questionIndex+1}`);
 const hintButton=document.createElement("button");hintButton.type="button";hintButton.className="hint-button";hintButton.textContent="ขอคำใบ้";hintButton.setAttribute("aria-expanded","false");hintButton.setAttribute("aria-controls",q.id+"-hint");
 const hint=document.createElement("div");hint.className="hint";hint.id=q.id+"-hint";hint.hidden=true;hint.textContent=q.hint;
 const feedback=document.createElement("div");feedback.className="feedback";feedback.hidden=true;feedback.setAttribute("aria-live","polite");feedback.setAttribute("role","status");
 hintButton.addEventListener("click",()=>{hint.hidden=!hint.hidden;hintButton.setAttribute("aria-expanded",String(!hint.hidden));hintButton.textContent=hint.hidden?"ขอคำใบ้":"ปิดคำใบ้";});
 check.addEventListener("click",()=>{
  const choice=container.querySelector("input:checked");feedback.hidden=false;
  if(!choice){feedback.className="feedback retry";feedback.textContent="เลือกคำตอบก่อน แล้วกดตรวจอีกครั้ง";return;}
  const correct=Number(choice.value)===q.answer;
  if(correct)solvedItems.add(q.id);else solvedItems.delete(q.id);
  feedback.className="feedback "+(correct?"good":"retry");feedback.textContent=correct?q.correct:q.wrong;update();
 });
 actions.append(check,hintButton);container.append(actions,hint,feedback);$(containerId).append(container);
});
}
mountQuizzes(quizData,"quiz-container",solved,updateScore);
function updateScore(){
 const allCorrect=solved.size===quizTotal;
 const reviewed=$("reflection-reviewed").checked;
 if(completed&&(!allCorrect||!reviewed)){
  completed=false;unitCompletions.delete(1);updateCourseProgress();$("finish").textContent="ทำกิจกรรมบท 1 ครบ";
 }
 $("quiz-score").textContent=`ตอบถูก ${solved.size} / ${quizTotal} ข้อ`;
 $("finish").disabled=!allCorrect||!reviewed||completed;
 if(!completed){
  $("finish-title").textContent=allCorrect&&reviewed?"ทำกิจกรรมครบแล้ว":allCorrect?"เหลืองานเขียนของเรา":`ตรวจแบบฝึกให้ครบ ${quizTotal} ข้อ`;
  $("finish-text").textContent=allCorrect&&reviewed?"แบบฝึกตรวจอัตโนมัติครบ และตรวจสมการที่แต่งด้วยตนเองแล้ว":allCorrect?"กลับไปสร้างสมการและทำเครื่องหมายตรวจตามเกณฑ์ในหัวข้อ 1.5":"ลองใช้คำใบ้และเหตุผลก่อนตอบใหม่ แล้วตรวจงานเขียนในหัวข้อ 1.5";
 }
}
$("reflection-reviewed").addEventListener("change",updateScore);
updateScore();
$("finish").addEventListener("click",()=>{
 if(solved.size!==quizTotal||!$("reflection-reviewed").checked)return;
 completed=true;$("finish").disabled=true;$("finish").textContent="เรียนจบแล้ว";$("finish-title").textContent="ทำกิจกรรมบท 1 ครบแล้ว";$("finish-text").textContent="ทบทวนแบบฝึกหัด 1 ในชีทใช้ในคาบหน้า 7 และเก็บสมการที่แต่งไว้ในชีท งานเขียนส่วนนี้เป็นการตรวจด้วยตนเอง";unitCompletions.add(1);updateCourseProgress();
});
