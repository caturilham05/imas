const targetDate=new Date('November 21, 2024 00:00:00').getTime(),countdownElement=document.getElementById("countdown"),mainContent=document.getElementById("main-content"),hasReload=!1,timer=setInterval(()=>{const e=(new Date).getTime(),n=targetDate-e;if(n<=0){clearInterval(timer),countdownElement.style.display="none",mainContent.style.display="block",hasReload||(hasReload=!0,setTimeout(()=>{window.location.reload()},1e3))}else{const t=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),a=Math.floor(n%36e5/6e4),l=Math.floor(n%6e4/1e3);countdownElement.textContent=`${t}d ${o}h ${a}m ${l}s`}},1e3);window.addEventListener("load",()=>{const e=(new Date).getTime();if(e<targetDate)return countdownElement.style.display="block",void(mainContent.style.display="none");Swal.fire({title:"Do you want to play music in the background?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes",cancelButtonText:"No"}).then(e=>{e.isConfirmed?(document.querySelector(".song").play(),animationTimeline()):animationTimeline()})});const animationTimeline=()=>{const e=document.getElementsByClassName("hbd-chatbox")[0],n=document.getElementsByClassName("wish-hbd")[0];e.innerHTML=`<span>${e.innerHTML.split("").join("</span><span>")}</span>`,n.innerHTML=`<span>${n.innerHTML.split("").join("</span><span>")}</span>`;const t={opacity:0,y:-20,rotationX:5,skewX:"15deg"},o={opacity:0,y:20,rotationY:5,skewX:"-15deg"},a=new TimelineMax;a.to(".container",.6,{visibility:"visible"}).from(".one",.7,{opacity:0,y:10}).from(".two",.4,{opacity:0,y:10}).to(".one",.7,{opacity:0,y:10},"+=3.5").to(".two",.7,{opacity:0,y:10},"-=1").from(".three",.7,{opacity:0,y:10}).to(".three",.7,{opacity:0,y:10},"+=3").from(".four",.7,{scale:.2,opacity:0}).from(".fake-btn",.3,{scale:.2,opacity:0}).staggerTo(".hbd-chatbox span",1.5,{visibility:"visible"},.05).to(".fake-btn",.1,{backgroundColor:"rgb(127, 206, 248)"},"+=4").to(".four",.5,{scale:.2,opacity:0,y:-150},"+=1").from(".idea-1",.7,t).to(".idea-1",.7,o,"+=2.5").from(".idea-2",.7,t).to(".idea-2",.7,o,"+=2.5").from(".idea-3",.7,t).to(".idea-3 strong",.5,{scale:1.2,x:10,backgroundColor:"rgb(21, 161, 237)",color:"#fff"}).to(".idea-3",.7,o,"+=2.5").from(".idea-4",.7,t).to(".idea-4",.7,o,"+=2.5").from(".idea-5",.7,{rotationX:15,rotationZ:-10,skewY:"-5deg",y:50,z:10,opacity:0},"+=1.5").to(".idea-5 span",.7,{rotation:90,x:8},"+=1.4").to(".idea-5",.7,{scale:.2,opacity:0},"+=2").staggerFrom(".idea-6 span",.8,{scale:3,opacity:0,rotation:15,ease:Expo.easeOut},.2).staggerTo(".idea-6 span",.8,{scale:3,opacity:0,rotation:-15,ease:Expo.easeOut},.2,"+=1.5").staggerFromTo(".baloons img",2.5,{opacity:.9,y:1400},{opacity:1,y:-1e3},.2).from(".profile-picture",.5,{scale:3.5,opacity:0,x:25,y:-25,rotationZ:-45},"-=2").from(".hat",.5,{x:-100,y:350,rotation:-180,opacity:0}).staggerFrom(".wish-hbd span",.7,{opacity:0,y:-50,rotation:150,skewX:"30deg",ease:Elastic.easeOut.config(1,.5)},.1).staggerFromTo(".wish-hbd span",.7,{scale:1.4,rotationY:150},{scale:1,rotationY:0,color:"#ff69b4",ease:Expo.easeOut},.1,"party").from(".wish h5",.5,{opacity:0,y:10,skewX:"-15deg"},"party").staggerTo(".eight svg",1.5,{visibility:"visible",opacity:0,scale:80,repeat:3,repeatDelay:1.4},.3).to(".six",.5,{opacity:0,y:30,zIndex:"-1"}).staggerFrom(".nine p",1,t,1.2).to(".last-smile",.5,{rotation:90},"+=1");const l=document.getElementById("replay");l.addEventListener("click",()=>{a.restart()})};
