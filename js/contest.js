var passwordDisplay = false;

$(".radio3").change(function(){
    if($('input:radio[name="openness"]:checked').val()==2 && passwordDisplay==false){
        $("#passwordDiv").removeClass('remove');
        passwordDisplay=true;
    }else if($('input:radio[name="openness"]:checked').val()!=2 && passwordDisplay==true){
        $("#passwordDiv").addClass('remove');
        passwordDisplay=false;
    }
})