var track = function(first, second, third){
   if((first + second > third) && (first + third > second) && (third + second > first)){
    if(first === second && first === third){
      var triangle = "Equilateral";
    }
    else if(first === second || first === third || second === third){
      var triangle = "Isosceles";
    }
    else{
      var triangle = "Scalene";
    }
  }
   else{
     var triangle = "Not a triangle";
   }
   alert(triangle);
 }
