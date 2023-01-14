$(document).ready(function(){
    $("#sinfom").validate({
        rules:{
            fname:{
                required:true,
                minulength:4,
                maxlensth:6
            },
            sname:{
                required:true,
                minulength:4,
            },
            pass:{
                minulength:6
            },
            emi:{
                required:true,
                email:true
            },
            Das:{
                required:true,
            },
            yeas:{
                required:true,
            },
            moth:{
                required:true,
            },
            genter:{
                required:true,
            }


        },
        messages:{
            fname:"enter fist name"
        }

    })
})    
