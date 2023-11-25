const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;// initalilly it will start from zero and then go to 100%

let percent = setInterval(blurry,30) //interval to increase by 30 ms 

function blurry(){
    load++
    if(load > 99){
        clearInterval(percent)
    }
    console.log(load)

    loadText.innerText = `${load}%` // whatever that is to 100 
    loadText.style.opacity = scale(load , 0, 100 , 1 ,0 )
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
    // This is a template literal in JavaScript, and it's used here to create a string with the scaled value followed by "px," which is the unit for pixels in CSS.
    //he blur property is set to a value that depends on the scaled value of load. The scale function is used to map the load value from the range [0, 100] to the range [30, 0], and the result is appended with "px" to create a valid CSS value for the blur property.
    
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {  // in_min 0 in_max 100 out_min 0  out_max 1
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }// solid to disappear