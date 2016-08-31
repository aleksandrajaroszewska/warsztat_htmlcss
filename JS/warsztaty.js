

$(document).ready(function() { 
    
     
    $("#show").hover(
       function() {
       $("#menu").fadeIn("fast");
    }, function(){
       $("#menu").fadeOut("fast");
    });
    
  $(".lll").hover(function(){
    $(this).hide(1000);  
  },function(){
    $(this).show(3000);
  });
    
  var slideNumber = 0;
    var max = $(".main").length;
    
   $(".arr1").click(function(event){
       slideNumber = slideNumber - 1;
       if (slideNumber<0) {
           slideNumber= max-1;
       }; 
       Slider(slideNumber);
   });
   
   
     $(".arr2").click(function(event){
       slideNumber = slideNumber + 1;
       if (slideNumber>=max) {
           slideNumber=0;
       };       
       Slider(slideNumber);
   });
       
 
    function Slider(slideNumber){
       
     $(".main").hide("slow")
        
     $(".main").eq(slideNumber).show("slow");
                    
    };     
 
});



$(document).ready(function(){
    
 
    
  $("#drop1").click(function(){
    $("#panel1").toggleClass("showPanel");
      $("#panel1 > li").click(function(){
         
    
        $("#label1").html($(this).html());
          $(".name").html($(this).html());    
          $(".name_value").html($(this).data("value"));
            var test = $(this).data("value");
              globalTest= test;
            $(".sum").html(sum);    
          $("#panel1").removeClass("showMenu");
      });
  });  
    
    
  $("#drop2").click(function(){
    $("#panel2").toggleClass("showPanel");
      $("#panel2 > li").click(function(){
        $("#label2").html($(this).html());
          $(".color").html($(this).html());
      $(".color_value").html($(this).data("value"));
             var test1 = $(this).data("value"); 
               globalTest1=test1;
                $(".sum").html(sum);  
          $("#panel2").removeClass("showMenu");
      });
  }); 
    
  $("#drop3").click(function(){
    $("#panel3").toggleClass("showPanel");
      $("#panel3 > li").click(function(){
        $("#label3").html($(this).html());
        $(".pattern").html($(this).html());         $(".pattern_value").html($(this).data("value"));
              var test3 = $(this).data("value"); 
               globalTest3=test3;                          $(".sum").html(sum);                                         
          $("#panel3").removeClass("showMenu");
      });
  });
  
   var sum = function(){
       return globalTest + globalTest1 + globalTest3
   };
       

   
    
});

