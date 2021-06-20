function email_sent_otp(){
    jQuery("#email_error").html(''); 
    var email=jQuery('#email').val();
    if(email==''){
        jQuery("#email_error").html('Please Enter a Email Id');           
    }
    else{
        jQuery(".email_sent_otp").html('Please Wait..');     
        jQuery(".email_sent_otp").attr('disabled',true);
        jQuery.ajax({
            url:'send_otp.php',
            type:'post',
            data:'email='+email+'&type=email',
            success:function(result){
        if(result=='done'){
            jQuery("#email").attr('disabled',true);
            jQuery(".email_verify_otp").show();
            jQuery(".email_sent_otp").hide();
                    }
        else{
            jQuery(".email_sent_otp").html('Send Otp');     
            jQuery(".email_sent_otp").attr('disabled',false);
            jQuery("#email_error").html('Please Try After Sometime');  
            }
        }
            
    });

}
}
function email_verify_otp(){
jQuery("#email_error").html(''); 
        var email_otp=jQuery('#email_otp').val();
    if(email_otp==''){
        jQuery("#email_error").html('Please Enter valid OTP'); 
    }
    else{jQuery.ajax({
            url:'check_otp.php',
            type:'post',
            data:'otp='+email_otp+'&type=email',
            success:function(result){
                if(result=='done'){
   jQuery(".email_verify_otp").hide();
    jQuery("#email_otp_result").html("Email Sucessfully Verify");
                }
                else{
                    jQuery("#email_error").html('Please Enter a Valid OTP');  
                }
            }
            
        });

    
    }
}

function match_password(){
jQuery("#confirm_password_error").html(''); 
        var confirm_password=jQuery('#confirm_password').val();
        var password=jQuery('#password').val();
        if(password==''){
        jQuery("#password_error").html('Please Enter your password '); 
    }
    if(confirm_password==''){
        jQuery("#confirm_password_error").html('Please Confirm your password '); 
    }
    else{
      jQuery.ajax({
            url:'confirm_password.php',
            type:'post',
            data:'confirm_password='+confirm_password+ '&password='+password,
            success:function(result){
                if(result=='matched'){
   
    jQuery("#confirm_password_error").html("Password Matched");
                }
                else{
                    jQuery("#confirm_password_error").html('Please Check your password');  
                }
            }
            
        });

    
    }
}