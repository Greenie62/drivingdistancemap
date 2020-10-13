var inputContainer = document.querySelector(".inputContainer")

function generateClouds(){
    let puffOne=document.createElement("div")
    puffOne.className="cloudone"
    let puffTwo=document.createElement("div")
    puffTwo.className="cloudtwo"

    let puffThree=document.createElement("div")
    puffThree.className="cloudthree"


    let cloud = document.createElement("div")
    cloud.className = "cloud"
    let num = (((Math.random() * 50 | 0) + 150) * -1)
    if(num < -175){
        num+=85
    }
    cloud.style.top=`${num}px`
    console.log(num)
    cloud.appendChild(puffOne)
    cloud.appendChild(puffTwo)
    cloud.appendChild(puffThree)

     inputContainer.appendChild(cloud)
    console.log(cloud)
    // animateCloud(cloud)

     setTimeout(generateClouds,2000);
}


//generateClouds()


function animateCloud(cloud){
    console.log(cloud)

    let cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("top"));
    console.log(cloudLeft)

    if(cloudLeft < 350){
        cloudLeft+=2;
        console.log(cloudLeft)
        cloud.style.left=`${cloudLeft}px`

        let newCloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("top"));
        console.log(newCloudLeft)
        setTimeout(()=>{
            cloudLeft+=2;
            console.log(cloudLeft)
            cloud.style.left=`${cloudLeft}px`
    
            let newCloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("top"));
            console.log(newCloudLeft)
        },1000)
    }
}