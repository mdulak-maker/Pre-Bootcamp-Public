/*Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] 
coordinates corresponding to the locations of his customers. He also uses an array of [x,y] as
coordinates corresponding to the location where he parks his truck*/

/* Here's what we know: City blocks are perfect squares, and every street is two-way, 
at perfect right angles. He only parks by street corners (coordinates like [37,-16]). 
Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. 
Joe checks the array before deciding where to park. Given a customer coordinate array, 
return an optimal taco truck location.*/


//function to find number of customers and avg for X,Y coordinates in the array


 
    function sumAvgCustomersLocation (nestedArr){
      
        var sumY = 0;
        var sumX = 0;
        var avgX = 0;
        var avgY = 0;
        var numElements = 0;
        var numCustomers = 0;
        var bestPosition =[];
    
    for (var i = 0; i<nestedArr.length; i++){
    
            sumX += nestedArr[i][0];
            sumY += nestedArr[i][1];
    
        
    }
        numElements = nestedArr.length*2;
        numCustomers = nestedArr.length;
        avgX = Math.round(sumX/numCustomers);
        avgY = Math.round(sumY/numCustomers);
        bestPosition = [(avgX),(avgY)]
    
    return bestPosition
    
    }
    
    var testArray = [[6,6],[-6,-6], [1,1], [10,10]];
    console.log (sumAvgCustomersLocation(testArray));
    


