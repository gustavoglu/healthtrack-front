$(function(){

    $("#pressao-form").submit(function(event){
      
        event.preventDefault();
        
    }).validate({
        rules:{
            data:{
                required:true,
                date:true,
            },
             pressaoA:{
                 required:true,
                 number:true
            },
             por:{
                 required:true,
                 number:true
             },
          
        },
        submitHandler:function(form){
            alert('Salvo!');
        }
    })    
})