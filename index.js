const inputs=document.querySelectorAll(".wrapper input");
const box=document.querySelector(".boxCont");

const scale=document.getElementById("scale")
const Blur=document.getElementById("blur")
const color=document.getElementById("color")


function change() {

    const suffix=this.dataset.sizings|| '';

    if (!suffix){
        console.log(this.value)

        box.style.boxShadow=`0px 0px 10px 5px ${this.value}`;

    }

    if(this.name==="space"){
        scale.textContent=`SPACING: ${this.value}px`;
    }
    else if(this.name=="blur"){
        Blur.textContent=`BLUR: ${this.value}px`;
    }
    else{
        color.textContent=`COLOR: ${this.value}`;
    }

   


    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    
}


inputs.forEach((input)=>{

    input.addEventListener("input",change);
})