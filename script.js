console.log("This is drag and drop")
const imgbox = document.querySelector(".imgbox")
const whiteboxes = document.getElementsByClassName('whitebox')

imgbox.addEventListener('dragstart',(e)=>{
    e.target.className += ' hold'
    setTimeout(()=>{
        e.target.className = 'hide'
    },0)    
}
    
    )

imgbox.addEventListener('dragend',(e)=>{
      e.target.className = 'imgbox'
    console.log("hello ")
     })


        for(whitebox of whiteboxes){
            whitebox.addEventListener('dragover',(e)=>{
                console.log("dragging over")
            e.preventDefault();
            e.target.className += " dashed"
            });

            whitebox.addEventListener('dragenter',(e)=>{
                    console.log("drag enter")
                 
                    
                });

            whitebox.addEventListener('dragleave',(e)=>{
                        console.log("dragging leave")
                    e.target.className = 'whitebox'
                    });

            whitebox.addEventListener('drop',(e)=>{
            e.target.append(imgbox)   
            e.target.className = 'whitebox'             
            });
        }
