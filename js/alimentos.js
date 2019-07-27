$(function(){

    $("#alimentos-form").submit(function(event){
      
        event.preventDefault();
        
    }).validate({
        rules:{
            data:{
                required:true,
                date:true,
            },
            tipo:{
                required:true,
            },
            calorias:{
                required:true,
            },
            descricao:{
                required:true,
            },
          
        },
        submitHandler:function(form){
            alert('Salvo!');
        }
    })    
})