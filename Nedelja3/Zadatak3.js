array=[5,12,27,35,43,55]

    

function deljivi(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    if (element%5==0) {
        
        console.log(element);
        
        }
    
    }

}

console.log(deljivi(array));

