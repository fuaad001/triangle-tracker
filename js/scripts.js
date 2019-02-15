var track = function(first, second, third){
  var firstlength = document.getElementById("firstl").value;
  var secondlength = document.getElementById("secondl").value;
  var thirdlength = document.getElementById("thirdl").value;

  var first = parseInt(firstlength);
  var second = parseInt(secondlength);
  var third = parseInt(thirdlength);

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
     var triangle = "NO triangle at all";
   }
   document.getElementById("result").innerHTML = "The type of triangle is: " + triangle;
 }
