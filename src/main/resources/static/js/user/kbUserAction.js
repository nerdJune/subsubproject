
$(function(){
    $("#submitBtn").on("click", function(e) {
        e.preventDefault();
        alert("kb success");

        var fomr =  $("#form").serialize();
        console.log(fomr);

        var name = $("#name").val();
        var hpone1 = $("#hphone1").val();
        var hpone2 = $("#hphone2").val();
        var hpone3 = $("#hphone3").val();
        var etc = $("#etc").val(); // 주소or이메일
        var agree = $("#agree").is(":checked");

        $.ajax({
            type : "post",
            url : "/save",
            dataType : "json",
            data : {
                "name" : name,
                "etc" : etc,
                "agree" : agree,
                "type" : $("#type").val()
            },
            success: function(res) {
                alert("kb success");

            },
            error: function(err) {
                alert(err);
            }
        })
    })
});

function createUrl(type) {

}
