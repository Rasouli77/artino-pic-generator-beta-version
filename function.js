
let number = 0
function test() {

    // subject: the first dropdown
    const subject = document.getElementById("subject");

    // style
    const style = document.getElementById("style");

    // ratio
    const ratio = document.getElementById("ratio");

    // type
    const type = document.getElementById("type");

    // year
    const d = new Date();
    let year = d.getFullYear();
   
   
    // week
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

   
    
    
    number++;
    
    
    

 
    var result = document.querySelector(".result");

    result.innerHTML = year.toString().slice(-1) + Math.ceil(days / 7) + "A" + subject.options[subject.selectedIndex].value + style.options[style.selectedIndex].value + ratio.options[ratio.selectedIndex].value + number.toString().padStart(3, '0') + type.options[type.selectedIndex].value;

    

    
}

 