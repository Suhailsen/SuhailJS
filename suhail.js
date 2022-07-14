// Target number == 11

var SumOfTwo = function(nums, target) {
    var suhail=[];
    //   Loop
    for(var s=0;s<nums.length;s++){
        for(var b=1;b<nums.length;b++){
            let c=nums[s]+nums[b];
           
            if(c== target  && s != b){
                
               suhail[0]=s;
                suhail[1]=b;
                
            }
        }
    }
    // Return   
      return suhail;   
    };
    console.log(SumOfTwo([3, 7, 9, 2],11))
    // The output is [3, 2], because 2 at index 3 plus + 9 at index 2 will give 11, and our target is 11
