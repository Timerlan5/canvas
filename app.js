
function ka() {
    const canvas = document.querySelector("#ka");
    const gtx = canvas.getContext("2d");

    gtx.beginPath();
    gtx.strokeStyle ="#5D7279"
    gtx.lineWidth = '4'
    gtx.moveTo(200, 0);
    gtx.lineTo(400, 200);
    gtx.lineTo(0, 200);
    gtx.lineTo(200, 0);
   
gtx.stroke();
}

ka()
function ru() {
    const canvas = document.querySelector("#ru");
    const gtx = canvas.getContext("2d");


    gtx.beginPath();
    gtx.fillStyle ="#5D7279"
    gtx.lineWidth = '4'
    gtx.moveTo(200, 0);
    gtx.lineTo(400, 200);
    gtx.lineTo(0, 200);
    gtx.lineTo(200, 0);
  
    gtx.fill()

}
ru()
function lo() {
    const canvas = document.querySelector("#lo");
    const gtx = canvas.getContext("2d");
    gtx.lineWidth = '4'

    gtx.moveTo(0, 0);
    gtx.lineTo(400, 0);
    gtx.lineTo(200, 200);
    gtx.lineTo(0, 0);
    
    gtx.strokeStyle = "	#223D60";
    gtx.stroke();
}
lo()
function bed() {
    const canvas = document.querySelector("#bed");
    const gtx = canvas.getContext("2d");

    gtx.beginPath()
    gtx.lineWidth = '4'
    gtx.fillStyle = "#223D60";     
    gtx.moveTo(0, 0);
    gtx.lineTo(400, 0);
    gtx.lineTo(200, 200);
    gtx.lineTo(0, 0);
     
    gtx.fill();
}
bed()


const sex = () => {
    const sections = document.querySelector('#up')
    const items = sections.querySelectorAll('canvas')
    sections.addEventListener('click', function() {
        for (const item of items) {
            item.classList.toggle('active')
        }
     })
}

sex()  

const pizda = () => {
    const sections = document.querySelector('#down')
    const items = sections.querySelectorAll('canvas')
    sections.addEventListener('click', function() {
        for (const item of items) {
            item.classList.toggle('active')
        }
    })
}
        
pizda()