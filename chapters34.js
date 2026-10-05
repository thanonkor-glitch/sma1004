"use strict";
(()=>{
function q(id,llo,prompt,options,answer,hint,reason){return {id,llo,prompt,options,answer,hint,correct:"ถูกต้อง: "+reason,wrong:"ลองใหม่: "+hint};}
const homogeneous=[
 q("u3hq1","LLO3.1","1. y″ + y = sin x เป็นสมการชนิดใด?",["เชิงเส้นเอกพันธ์ เพราะ sin 0 = 0","เชิงเส้นไม่เอกพันธ์ เพราะ sin x ไม่ใช่ฟังก์ชันศูนย์","ไม่เชิงเส้น เพราะมี sin x"],1,"g เป็นฟังก์ชันของ x; ต้องดูว่าเป็นศูนย์ทุกจุดหรือไม่","sin x เป็นพจน์บังคับ สัมประสิทธิ์ของ y เป็น 1 และไม่มีพจน์ไม่เชิงเส้น"),
 q("u3hq2","LLO3.2","2. สมการลักษณะเฉพาะของ y″ − 5y′ + 6y = 0 คือข้อใด?",["r² + 5r + 6 = 0","r − 5 + 6 = 0","r² − 5r + 6 = 0"],2,"แทน y = e^(rx), y′ = re^(rx), y″ = r²e^(rx)","หารด้วย e^(rx) ≠ 0 ได้ r² − 5r + 6 = 0 ตามตัวอย่าง 3.2-1"),
 q("u3hq3","LLO3.2","3. คำตอบทั่วไปของตัวอย่าง 3.2-1 คือข้อใด?",["C₁e^(2x) + C₂e^(3x)","(C₁ + C₂x)e^(2x)","C₁cos 2x + C₂sin 2x"],0,"แยก r² − 5r + 6 = (r − 2)(r − 3)","ราก 2 และ 3 ต่างกัน จึงมีฐาน e^(2x), e^(3x)"),
 q("u3hq4","LLO3.1, LLO3.2","4. ทำไมตัวอย่าง 3.2-2 ต้องใช้ xe^(2x) ร่วมกับ e^(2x)?",["เพราะสมการมีตัวแปร x ทางขวา","เพราะ e^(2x) สองสำเนารวมเป็นคำตอบเดียว ต้องสร้างฐานอิสระสองคำตอบ","เพราะคำตอบทุกสมการต้องคูณ x"],1,"ลองรวม C₁e^(2x) + C₂e^(2x)","ราก 2 ซ้ำสองครั้ง จึงใช้ (C₁ + C₂x)e^(2x) โดยฐานทั้งสองมี W ≠ 0"),
 q("u3hq5","LLO3.2","5. y″ + 4y = 0 มีรากและคำตอบข้อใด?",["ราก ±2 และคำตอบเอ็กซ์โพเนนเชียลจริง","ราก 2 ซ้ำ และคำตอบ (C₁ + C₂x)e^(2x)","ราก ±2i และคำตอบ C₁cos 2x + C₂sin 2x"],2,"จาก r² = −4 ต้องใช้รากเชิงซ้อน","α = 0, β = 2 คำตอบจริงคือ C₁cos 2x + C₂sin 2x ตามตัวอย่าง 3.2-3"),
 q("u3hq6","LLO3.5","6. คาบของคำตอบที่ไม่เป็นศูนย์ของ y″ + 4y = 0 คือเท่าไร?",["π","2π","4π"],0,"คาบของ sin βx และ cos βx คือ 2π/β","β = 2 จึงมีคาบ π ใช้พิจารณาคำตอบที่ไม่เป็นฟังก์ชันศูนย์"),
 q("u3hq7","LLO3.5","7. ค่าเริ่มต้นที่ใช้กำหนดคำตอบอันดับสองตามเงื่อนไขความต่อเนื่องคือข้อใด?",["y(x₀) อย่างเดียว","y(x₀) และ y′(x₀)","y′(x₀) และ y‴(x₀) เสมอ"],1,"คำตอบทั่วไปมีค่าคงตัวอิสระสองตัว ใช้ฟังก์ชันและอนุพันธ์ก่อนอันดับสอง","ค่า y และ y′ ที่จุดเดียวกันกำหนดคำตอบเมื่อรูปมาตรฐานมีสัมประสิทธิ์ต่อเนื่อง"),
 q("u3hq8","LLO3.5","8. ใน R-5: y = e^(−x)(C₁cos 2x + C₂sin 2x) มี y′(0) เท่ากับข้อใด?",["C₁ + C₂","2C₂","−C₁ + 2C₂"],2,"ใช้กฎผลคูณ โดยอนุพันธ์ e^(−x) มีเครื่องหมายลบ","y′(0) = −C₁ + 2C₂ ดังนั้น y(0) = 1, y′(0) = 0 ให้ C₁ = 1, C₂ = 1/2"),
 q("u3hq9","LLO3.5","9. ซองกราฟของคำตอบค่าเริ่มต้น R-5 เป็นข้อใด?",["±(√5/2)e^(−x)","±e^x","±2x"],0,"แอมพลิจูดส่วน cos 2x + (1/2)sin 2x คือ √(1² + (1/2)²)","ซองลดลงตาม e^(−x) จึงเป็นการสั่นที่ลดลงเมื่อ x เพิ่ม"),
 q("u3hq10","LLO3.1, LLO3.2","10. สำหรับฐาน e^(2x), e^(3x) ค่า W และความอิสระคือข้อใด?",["W = 0 จึงอิสระ","W = e^(5x) ≠ 0 จึงอิสระ","W = e^(2x) + e^(3x) เสมอ"],1,"ใช้ W = y₁y₂′ − y₁′y₂","W = 3e^(5x) − 2e^(5x) = e^(5x) ไม่เป็นศูนย์ จึงสร้างคำตอบทั่วไปสองค่าคงตัวได้"),
];
const nonhomogeneous=[
 q("u3nq1","LLO3.1","1. โครงสร้างคำตอบทั่วไปของสมการไม่เอกพันธ์คือข้อใด?",["y = y_c เท่านั้น","y = y_p เท่านั้น","y = y_c + y_p"],2,"ส่วนหนึ่งตอบสมการเอกพันธ์ อีกส่วนตอบพจน์บังคับ","y_c ให้ศูนย์ทางขวา ส่วน y_p ให้พจน์บังคับ จึงรวมเป็นคำตอบทั่วไป"),
 q("u3nq2","LLO3.3","2. ตัวอย่าง 3.3-1: y″ − y = 2 ให้คำตอบเฉพาะข้อใด?",["y_p = −2","y_p = 2","y_p = 2x"],0,"ลอง y_p = A แล้วแทน 0 − A = 2","A = −2 ตรวจ 0 − (−2) = 2"),
 q("u3nq3","LLO3.3","3. ตัวอย่าง 3.3-2: y″ + y = x ถ้าลอง Ax + B ได้ A,B เท่าไร?",["A = 0, B = 1","A = 1, B = 0","A = −1, B = 0"],1,"หาอนุพันธ์อันดับสองของ Ax + B แล้วเทียบกับ x","ได้ Ax + B = x จึงมี A = 1, B = 0 และ y_p = x"),
 q("u3nq4","LLO3.3","4. ตัวอย่าง 3.3-3 ที่ y_c มี eˣ แล้วพจน์บังคับคือ eˣ ควรลองรูปใด?",["Aeˣ","Acos x","Axeˣ"],2,"ราก 1 ซ้ำกับพจน์บังคับหนึ่งครั้ง ต้องคูณรูปทดลองด้วย x","ใช้ Axeˣ เพราะ Aeˣ ให้ข้างซ้ายเป็นศูนย์ ไม่สามารถตอบพจน์บังคับ eˣ ได้"),
 q("u3nq5","LLO3.3","5. ในตัวอย่าง 3.3-3 ค่า A ใน y_p = Axeˣ คือเท่าไร?",["−1","1","1/2"],0,"แทนอนุพันธ์ใน y″ − 3y′ + 2y จะได้ −Aeˣ","−A = 1 จึงได้ y_p = −xeˣ"),
 q("u3nq6","LLO3.3","6. ตัวอย่าง 3.3-4: y″ + y = sin x ให้คำตอบเฉพาะข้อใด?",["sin x","−(x/2)cos x","(x/2)sin x"],1,"ลอง x(Acos x + Bsin x) แล้วเทียบ −2A sin x + 2B cos x","A = −1/2, B = 0 จึงได้ y_p = −(x/2)cos x"),
 q("u3nq7","LLO3.4","7. สำหรับ ay″ + by′ + cy = g เมื่อใช้สูตรแปรค่าคงตัว ค่า forcing ที่ใส่ในสูตรคืออะไร?",["g เสมอโดยไม่ต้องหาร","ag","G = g/a หลังจัดสัมประสิทธิ์ y″ เป็น 1"],2,"สูตร u₁′,u₂′ ใช้กับรูปมาตรฐาน y″ + py′ + qy = G","ต้องหารทั้งสมการด้วย a ≠ 0 ก่อน ไม่เช่นนั้นสัมประสิทธิ์ในระบบของ u′ จะผิด"),
 q("u3nq8","LLO3.4","8. บรรทัดที่สองของระบบแปรค่าคงตัวอันดับสองคือข้อใด?",["u₁′y₁′ + u₂′y₂′ = G","u₁′y₁ + u₂′y₂ = G เช่นเดียวกับบรรทัดแรก","u₁ + u₂ = G"],0,"บรรทัดแรกใช้ y₁,y₂ และมีข้างขวาศูนย์ บรรทัดที่สองใช้อนุพันธ์ของฐาน","ระบบมีเมทริกซ์ [y₁,y₂; y₁′,y₂′] และ determinant คือ W"),
 q("u3nq9","LLO3.4","9. W ของฐาน cos x, sin x เท่ากับเท่าไร?",["0","1","−1"],1,"คำนวณ cos x·cos x − (−sin x)·sin x","W = cos²x + sin²x = 1 จึงใช้ฐานนี้ในช่วงที่ forcing ต่อเนื่องได้"),
 q("u3nq10","LLO3.4","10. สำหรับ y″ + y = tan x ช่วงที่มีศูนย์อยู่และใช้วิธีได้คือข้อใด?",["ℝ ทั้งหมด","(0,π)","(−π/2, π/2)"],2,"tan x ต้องมี cos x ≠ 0 และช่วงต้องมี x = 0","cos x ไม่เป็นศูนย์บน (−π/2, π/2) จึงเป็นช่วงที่มีศูนย์และ forcing ต่อเนื่อง"),
 q("u3nq11","LLO3.4","11. ตัวอย่าง 3.3-6: y″ + y = sec x ให้ u₁,u₂ คู่ใดเมื่อเลือกค่าคงตัวอินทิเกรตเป็นศูนย์?",["u₁ = ln|cos x|, u₂ = x","u₁ = tan x, u₂ = 0","u₁ = sec x, u₂ = sin x"],0,"W = 1 ให้ u₁′ = −tan x และ u₂′ = 1","อินทิเกรตได้ ln|cos x| และ x จึงมี y_p = cos x ln|cos x| + x sin x"),
 q("u3nq12","LLO3.3, LLO3.4","12. ตัวอย่าง 3.3-7: y″ − y = x ใช้วิธีใดได้?",["ต้องใช้แปรค่าคงตัวเท่านั้น","ใช้ได้ทั้งตัวประกอบไม่กำหนดและแปรค่าคงตัว โดยได้ y_p = −x","ใช้สมการลักษณะเฉพาะอย่างเดียวแล้วจบได้"],1,"x เป็นพหุนาม และฐานเอกพันธ์ eˣ,e^(−x) ก็ทราบแล้ว","สองวิธีใช้ได้ วิธีตัวประกอบไม่กำหนดให้ −Ax − B = x และวิธีแปรค่าคงตัวให้คำตอบเฉพาะ −x เช่นกัน"),
];
const higher=[
 q("u4q1","LLO4.1","1. สมการเชิงเส้นเอกพันธ์อันดับ n ที่รูปมาตรฐานมีสัมประสิทธิ์ต่อเนื่อง มีค่าคงตัวอิสระกี่ตัว?",["หนึ่งตัวเสมอ","n ตัว ตามฐานอิสระ n คำตอบ","n + 1 ตัว"],1,"มิติของปริภูมิคำตอบเอกพันธ์เท่ากับอันดับภายใต้เงื่อนไขที่กำหนด","คำตอบทั่วไปเป็นผลรวมเชิงเส้นของฐานอิสระ n คำตอบ มีค่าคงตัว n ตัว"),
 q("u4q2","LLO4.2","2. ตัวอย่าง 4.2-1: P(r) = (r−1)(r−2)(r−3) ให้ฐานข้อใด?",["1, x, x²","eˣ, xeˣ, x²eˣ","eˣ, e^(2x), e^(3x)"],2,"รากจริงสามค่าต่างกัน จึงใช้เอ็กซ์โพเนนเชียลของแต่ละราก","ได้ฐานอิสระสามคำตอบและคำตอบ C₁eˣ + C₂e^(2x) + C₃e^(3x)"),
 q("u4q3","LLO4.2","3. ราก r = 1 ซ้ำสามครั้งในตัวอย่าง 4.2-2 ต้องใช้ฐานใด?",["eˣ, xeˣ, x²eˣ","eˣ, eˣ, eˣ","eˣ, e^(2x), e^(3x)"],0,"รากซ้ำ k ครั้งใช้ xʲe^(rx) เมื่อ j = 0,...,k−1","ฐานคือ eˣ, xeˣ, x²eˣ จึงมีค่าคงตัวอิสระสามตัว"),
 q("u4q4","LLO4.2","4. ตัวอย่าง 4.2-3: r⁴ − 2r² + 1 มีรากแบบใด?",["1, 2, 3, 4 ต่างกัน","1 และ −1 ซ้ำอย่างละสองครั้ง","0 ซ้ำสี่ครั้ง"],1,"แยกเป็น (r²−1)² = (r−1)²(r+1)²","จึงมีฐาน eˣ, xeˣ, e^(−x), xe^(−x) รวมสี่คำตอบ"),
 q("u4q5","LLO4.2","5. แบบฝึกหัด 4 ข้อ 5: y^(4) + 4y = 0 มีฐานจริงข้อใด?",["1, x, x², x³","cos 2x, sin 2x เท่านั้น","eˣcos x, eˣsin x, e^(−x)cos x, e^(−x)sin x"],2,"r⁴+4 = (r²−2r+2)(r²+2r+2)","ราก 1±i และ −1±i ให้ฐานจริงสี่คำตอบ"),
 q("u4q6","LLO4.3","6. ตัวอย่าง 4.2-4: y‴ − y′ = eˣ ควรลอง y_p รูปใด?",["Axeˣ","Aeˣ","Ax³"],0,"ส่วนเอกพันธ์มี eˣ และราก 1 ซ้ำหนึ่งครั้ง","คูณ x ให้รูปทดลองไม่ซ้ำกับฐานเอกพันธ์"),
 q("u4q7","LLO4.3","7. ในตัวอย่าง 4.2-4 แทน y_p = Axeˣ ได้ 2Aeˣ = eˣ ค่า A คือเท่าไร?",["2","1/2","−1/2"],1,"เทียบตัวคูณของ eˣ ซึ่งไม่เป็นศูนย์","A = 1/2 จึงได้คำตอบทั่วไป C₁ + C₂eˣ + C₃e^(−x) + (x/2)eˣ"),
 q("u4q8","LLO4.4","8. ถ้า y = (C₁ + C₂x + C₃x²)eˣ ค่า y″(0) คือข้อใด?",["C₃","C₁ + C₂ + C₃","C₁ + 2C₂ + 2C₃"],2,"ให้ f = C₁+C₂x+C₃x² แล้วใช้ y″ = eˣ(f+2f′+f″)","f(0) = C₁, f′(0) = C₂, f″(0) = 2C₃ จึงได้ผลรวมดังกล่าว"),
 q("u4q9","LLO4.4","9. ค่าเริ่มต้นของตัวอย่าง 4.2-5 ให้ C₁,C₂,C₃ เท่าไร?",["2, −1, 0","2, 1, 0","1, −1, 2"],0,"ใช้ C₁=2, C₁+C₂=1, C₁+2C₂+2C₃=0","ได้คำตอบ y = (2−x)eˣ ซึ่งมี y(0)=2, y′(0)=1, y″(0)=0"),
 q("u4q10","LLO4.3","10. สำหรับ y‴ = eˣ ฐานเอกพันธ์ 1,x,x² มี det W เท่าไร?",["0","2","x²"],1,"เมทริกซ์ฐานและอนุพันธ์สองอันดับเป็นสามเหลี่ยมบน มีแนวทแยง 1,1,2","det W = 2 จึงแก้ระบบของ u₁′,u₂′,u₃′ ได้บน ℝ"),
 q("u4q11","LLO4.1, LLO4.2","11. ใน R-8: P(r)=r²(r−1)² ฐานและอันดับคือข้อใด?",["ฐาน 1,eˣ อันดับสอง","ฐาน eˣ,xeˣ,x²eˣ อันดับสาม","ฐาน 1,x,eˣ,xeˣ อันดับสี่"],2,"นับรากศูนย์ซ้ำสองครั้ง และรากหนึ่งซ้ำสองครั้ง","ดีกรี P เป็น 4 จึงมีฐาน 1,x,eˣ,xeˣ และค่าคงตัวสี่ตัว"),
 q("u4q12","LLO4.4","12. R-9: y‴ = eˣ และ y(0)=y′(0)=y″(0)=0 ให้คำตอบใด?",["y = eˣ − 1 − x − x²/2","y = eˣ","y = eˣ − 1 − x"],0,"กำหนดค่าคงตัวใน eˣ+C₁+C₂x+C₃x² จากอนุพันธ์แต่ละอันดับ","คำตอบนี้มี y′=eˣ−1−x, y″=eˣ−1, y‴=eˣ จึงผ่านทั้งสมการและค่าเริ่มต้น"),
];
function mountGroup(key,label,completionKey,questions){
 const solved=new Set(),reviews=Array.from(document.querySelectorAll(`.${key}-review`));let complete=false;
 function update(){
  const ready=solved.size===questions.length&&reviews.every(input=>input.checked);
  if(complete&&!ready){complete=false;unitCompletions.delete(completionKey);updateCourseProgress();}
  $(key+'-score').textContent=`ตอบถูก ${solved.size} / ${questions.length} ข้อ`;
  $(key+'-finish').disabled=!ready||complete;
  $(key+'-finish').textContent=complete?`ทำกิจกรรม ${label} ครบแล้ว`:`จบกิจกรรม ${label}`;
  $(key+'-finish-title').textContent=complete?`ทำกิจกรรม ${label} ครบแล้ว`:ready?"พร้อมจบกิจกรรม":"ตรวจแบบฝึกและงานเขียน";
  $(key+'-finish-text').textContent=complete?"ทำแบบฝึกหัดในชีทต่อ แล้วตรวจทบทวนด้วยฉบับเนื้อหาครบ":`ตอบถูกให้ครบ ${questions.length} ข้อ และตรวจงานคิดและจดทั้งสามตัวอย่างของช่วงนี้`;
 }
 mountQuizzes(questions,key+'-quizzes',solved,update,`หัวข้อ ${label} `);
 reviews.forEach(input=>input.addEventListener('change',update));
 $(key+'-finish').addEventListener('click',()=>{if(solved.size!==questions.length||!reviews.every(input=>input.checked))return;complete=true;unitCompletions.add(completionKey);updateCourseProgress();update();});
 update();
}
mountGroup('u3h','3.1–3.2',5,homogeneous);
mountGroup('u3n','3.3',6,nonhomogeneous);
mountGroup('u4','บท 4',7,higher);
// Pure analytical solutions, all equations taken from the current teaching sheets.
const models={
 distinct:{title:'3.2-1 · y″ − 5y′ + 6y = 0',xmin:-1,xmax:1,ymin:-20,ymax:20,solution:(x,a,b)=>a*Math.exp(2*x)+b*Math.exp(3*x),y0:(a,b)=>a+b,slope0:(a,b)=>2*a+3*b,equation:'y = C₁e<sup>2x</sup> + C₂e<sup>3x</sup>'},
 repeated:{title:'3.2-2 · y″ − 4y′ + 4y = 0',xmin:-1,xmax:1,ymin:-20,ymax:20,solution:(x,a,b)=>(a+b*x)*Math.exp(2*x),y0:a=>a,slope0:(a,b)=>2*a+b,equation:'y = (C₁ + C₂x)e<sup>2x</sup>'},
 oscillatory:{title:'3.2-3 · y″ + 4y = 0',xmin:0,xmax:2*Math.PI,ymin:-3,ymax:3,solution:(x,a,b)=>a*Math.cos(2*x)+b*Math.sin(2*x),y0:a=>a,slope0:(a,b)=>2*b,equation:'y = C₁cos 2x + C₂sin 2x'},
 damped:{title:'R-5 · y″ + 2y′ + 5y = 0',xmin:0,xmax:8,ymin:-3,ymax:3,solution:(x,a,b)=>Math.exp(-x)*(a*Math.cos(2*x)+b*Math.sin(2*x)),y0:a=>a,slope0:(a,b)=>-a+2*b,equation:'y = e<sup>−x</sup>(C₁cos 2x + C₂sin 2x)'}
};
// End pure analytical solutions.
const ns='http://www.w3.org/2000/svg';
function svg(tag,attrs,text){const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));if(text!==undefined)el.textContent=text;return el;}
function plot(){
 const key=$('u3-graph-model').value,m=models[key],a=Number($('u3-c1').value),b=Number($('u3-c2').value);
 const px=x=>52+(x-m.xmin)/(m.xmax-m.xmin)*516,py=y=>304-(y-m.ymin)/(m.ymax-m.ymin)*280;
 const grid=$('u3-grid');grid.replaceChildren();
 for(let i=0;i<=4;i++){
  const x=m.xmin+i*(m.xmax-m.xmin)/4;
  grid.append(svg('line',{x1:px(x),x2:px(x),y1:24,y2:304,stroke:Math.abs(x)<1e-8?'#92a6b2':'#e1e9ee'}),svg('text',{x:px(x),y:327,'text-anchor':'middle',class:'svg-label'},Number(x.toFixed(2))));
  const y=m.ymin+i*(m.ymax-m.ymin)/4;
  grid.append(svg('line',{x1:52,x2:568,y1:py(y),y2:py(y),stroke:Math.abs(y)<1e-8?'#92a6b2':'#e1e9ee'}),svg('text',{x:42,y:py(y)+5,'text-anchor':'end',class:'svg-label'},y));
 }
 grid.append(svg('text',{x:584,y:327,class:'svg-label'},'x'),svg('text',{x:22,y:16,class:'svg-label'},'y'));
 function path(f){let d='';for(let i=0;i<=400;i++){const x=m.xmin+i*(m.xmax-m.xmin)/400;d+=(i?'L':'M')+px(x).toFixed(2)+','+py(f(x)).toFixed(2);}return d;}
 $('u3-solution').setAttribute('d',path(x=>m.solution(x,a,b)));
 const amplitude=Math.hypot(a,b);
 $('u3-envelope-upper').setAttribute('d',key==='damped'?path(x=>amplitude*Math.exp(-x)):'');
 $('u3-envelope-lower').setAttribute('d',key==='damped'?path(x=>-amplitude*Math.exp(-x)):'');
 $('u3-initial-dot').setAttribute('cx',px(0));$('u3-initial-dot').setAttribute('cy',py(m.y0(a,b)));
 $('u3-c1-value').textContent=a.toFixed(2);$('u3-c2-value').textContent=b.toFixed(2);
 $('u3-graph-equation').innerHTML=m.equation;
 const initial=`y(0) = ${m.y0(a,b).toFixed(2)} · y′(0) = ${m.slope0(a,b).toFixed(2)}`;
 $('u3-initial-values').textContent=initial;
 $('u3-graph-domain').textContent=`คำตอบนิยามบน ℝ กราฟแสดงเฉพาะ x ∈ [${Number(m.xmin.toFixed(2))}, ${Number(m.xmax.toFixed(2))}] และ y ∈ [${m.ymin}, ${m.ymax}]`;
 $('u3-graph-title').textContent=m.title;
 $('u3-graph-desc').textContent=m.title+` เมื่อ C₁ = ${a}, C₂ = ${b}; `+initial+(key==='damped'?` ซอง ±${amplitude.toFixed(3)}e^(−x)`:'');
}
['u3-c1','u3-c2'].forEach(id=>$(id).addEventListener('input',plot));
$('u3-graph-model').addEventListener('change',plot);
$('u3-source-ivp').addEventListener('click',()=>{$('u3-graph-model').value='damped';$('u3-c1').value='1';$('u3-c2').value='0.5';plot();});
plot();updateCourseProgress();
})();
