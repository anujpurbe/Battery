// Smooth scroll
function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
})
}


// PARTICLES BACKGROUND
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
})


// ENERGY CHART
const chartCanvas = document.getElementById("energyChart")

if(chartCanvas){

new Chart(chartCanvas,{
type:'line',
data:{
labels:['1800','1859','1899','1991','Future'],
datasets:[{
label:'Energy Density',
data:[20,40,60,250,500],
borderColor:'#00c6ff',
borderWidth:3,
fill:false
}]
},
options:{
responsive:true
}
})

}


// ADVANCED 3D ATOM MODEL
const atomCanvas = document.getElementById("atomCanvas")

if(atomCanvas){

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,1,0.1,1000)

const renderer = new THREE.WebGLRenderer({
canvas:atomCanvas,
alpha:true
})

renderer.setSize(400,400)

camera.position.z = 6


// NUCLEUS
const nucleusGeometry = new THREE.SphereGeometry(1,32,32)
const nucleusMaterial = new THREE.MeshBasicMaterial({
color:0x00c6ff
})

const nucleus = new THREE.Mesh(nucleusGeometry,nucleusMaterial)

scene.add(nucleus)


// ELECTRON ORBITS
const orbitGeometry = new THREE.TorusGeometry(2,0.02,16,100)
const orbitMaterial = new THREE.MeshBasicMaterial({
color:0x00c6ff
})

const orbit1 = new THREE.Mesh(orbitGeometry,orbitMaterial)
const orbit2 = new THREE.Mesh(orbitGeometry,orbitMaterial)

orbit2.rotation.x = Math.PI/2

scene.add(orbit1)
scene.add(orbit2)


// ELECTRONS
const electronGeometry = new THREE.SphereGeometry(0.15,16,16)
const electronMaterial = new THREE.MeshBasicMaterial({
color:0xffffff
})

const electron1 = new THREE.Mesh(electronGeometry,electronMaterial)
const electron2 = new THREE.Mesh(electronGeometry,electronMaterial)

scene.add(electron1)
scene.add(electron2)

let angle = 0
let scrollSpeed = 0


function animateAtom(){

requestAnimationFrame(animateAtom)

angle += 0.02 + scrollSpeed

electrons[0].position.x = Math.cos(angle)*2
electrons[0].position.y = Math.sin(angle)*2

electrons[1].position.x = Math.cos(angle+2)*2
electrons[1].position.z = Math.sin(angle+2)*2

electrons[2].position.y = Math.cos(angle+4)*2
electrons[2].position.z = Math.sin(angle+4)*2

orbit1.rotation.y += 0.01 + scrollSpeed
orbit2.rotation.x += 0.01 + scrollSpeed
orbit3.rotation.z += 0.01 + scrollSpeed

renderer.render(scene,camera)

}

animateAtom()

}


// BATTERY CHARGE SIMULATION
let charge = 0

function chargeBattery(){

if(charge < 100){

charge += 10

document.getElementById("batteryLevel").style.width = charge + "%"

document.getElementById("batteryText").innerText =
"Charge Level: " + charge + "%"

}

}


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function(){

const nav = document.querySelector(".navbar")

if(nav){
nav.classList.toggle("nav-scrolled", window.scrollY > 50)
}

})


// TIMELINE ANIMATION
const timelineItems = document.querySelectorAll(".timeline-item")

window.addEventListener("scroll", () => {

timelineItems.forEach(item => {

const position = item.getBoundingClientRect().top

if(position < window.innerHeight - 100){
item.classList.add("show")
}

})

})


// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {

let scrollTop = document.documentElement.scrollTop

let scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight

let scrollPercent = (scrollTop / scrollHeight) * 100

const progress = document.querySelector(".scroll-progress")

if(progress){
progress.style.width = scrollPercent + "%"
}

})


// ACTIVE NAV LINK
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(section => {

const sectionTop = section.offsetTop - 150

if(pageYOffset >= sectionTop){
current = section.getAttribute("id")
}

})

navLinks.forEach(link => {

link.classList.remove("active")

if(link.getAttribute("href") === "#" + current){
link.classList.add("active")
}

})

})


// FADE SECTIONS
const fadeSections = document.querySelectorAll(".fade-section")

function revealSections(){

fadeSections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top

if(sectionTop < window.innerHeight - 100){
section.classList.add("visible")
}

})

}

window.addEventListener("scroll", revealSections)
revealSections()


// WORKFLOW MODAL
function openWorkflow(){
document.getElementById("workflowModal").style.display="flex"
}

function closeWorkflow(){
document.getElementById("workflowModal").style.display="none"
}

window.onclick = function(event){

const modal = document.getElementById("workflowModal")

if(event.target == modal){
modal.style.display = "none"
}

}


// IMAGE ZOOM
const workflowImage = document.getElementById("workflowImage")
const zoomOverlay = document.getElementById("zoomOverlay")
const zoomedImage = document.getElementById("zoomedImage")

if(workflowImage){

workflowImage.addEventListener("click", function(){

zoomedImage.src = this.src
zoomOverlay.style.display = "flex"

})

zoomOverlay.addEventListener("click", function(){
zoomOverlay.style.display = "none"
})

}


// TEAM ATOM ANIMATION
const teamCanvas = document.getElementById("atomTeamCanvas")

if(teamCanvas){

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,1,0.1,1000)

const renderer = new THREE.WebGLRenderer({
canvas:teamCanvas,
alpha:true
})

renderer.setSize(400,400)

camera.position.z = 6

const nucleusGeometry = new THREE.SphereGeometry(1,32,32)

const nucleusMaterial = new THREE.MeshBasicMaterial({
color:0x00c6ff
})

const nucleus = new THREE.Mesh(nucleusGeometry,nucleusMaterial)

scene.add(nucleus)

const ringGeometry = new THREE.TorusGeometry(2,0.03,16,100)

const ringMaterial = new THREE.MeshBasicMaterial({
color:0x00c6ff
})

const ring = new THREE.Mesh(ringGeometry,ringMaterial)

scene.add(ring)

function animateTeam(){

requestAnimationFrame(animateTeam)

nucleus.rotation.y += 0.01
ring.rotation.x += 0.01
ring.rotation.y += 0.01

renderer.render(scene,camera)

}

animateTeam()

}


// QUANTUM PARTICLE FIELD
const quantumCanvas = document.getElementById("quantumCanvas")

if(quantumCanvas){

const ctx = quantumCanvas.getContext("2d")

quantumCanvas.width = 700
quantumCanvas.height = 350

let particles = []

for(let i=0;i<35;i++){
particles.push({
x:Math.random()*quantumCanvas.width,
y:Math.random()*quantumCanvas.height,
vx:(Math.random()-0.5)*1.5,
vy:(Math.random()-0.5)*1.5
})
}

function animateQuantum(){

ctx.clearRect(0,0,quantumCanvas.width,quantumCanvas.height)

particles.forEach(p=>{

p.x += p.vx
p.y += p.vy

if(p.x<0 || p.x>quantumCanvas.width) p.vx *= -1
if(p.y<0 || p.y>quantumCanvas.height) p.vy *= -1

ctx.beginPath()
ctx.arc(p.x,p.y,3,0,Math.PI*2)
ctx.fillStyle="#00c6ff"
ctx.fill()

})

requestAnimationFrame(animateQuantum)

}

animateQuantum()

}


// REACTOR ENERGY WAVES
const reactorCanvas = document.getElementById("reactorCanvas")

if(reactorCanvas){

const ctx = reactorCanvas.getContext("2d")

reactorCanvas.width = 900
reactorCanvas.height = 400

let t = 0

function animateReactor(){

ctx.clearRect(0,0,reactorCanvas.width,reactorCanvas.height)

for(let i=0;i<5;i++){

ctx.beginPath()

for(let x=0;x<reactorCanvas.width;x++){

let y = reactorCanvas.height/2 +
Math.sin((x*0.02)+(t+i))*40

if(x===0){
ctx.moveTo(x,y)
}else{
ctx.lineTo(x,y)
}

}

ctx.strokeStyle="rgba(0,200,255,0.6)"
ctx.lineWidth=2
ctx.stroke()

}

t += 0.05

requestAnimationFrame(animateReactor)

}

animateReactor()

}

function openWorkflow(){
const modal = document.getElementById("workflowModal");
const viewer = document.getElementById("pdfViewer");

viewer.src = "files/Atomic Endurance Research Workflow.pdf";
modal.style.display = "flex";
}

function closeWorkflow(){
const modal = document.getElementById("workflowModal");
const viewer = document.getElementById("pdfViewer");

viewer.src = "";
modal.style.display = "none";
}

function downloadPDF(){
window.open("files/Atomic Endurance Research Workflow.pdf","_blank");
}

