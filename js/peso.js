$(function(){

    $("#peso-form").submit(function(event){
      
        event.preventDefault();
        
    }).validate({
        rules:{
            data:{
                required:true,
                date:true,
            },
            peso:{
                required:true,
                number:true
            },
          
        },
        submitHandler:function(form){
            alert('Salvo!');
        }
    })    
})