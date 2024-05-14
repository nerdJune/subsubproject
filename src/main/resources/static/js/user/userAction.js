
$(function(){
    $("#submitBtn").on("click", function(e) {
        e.preventDefault();



        $.ajax({
            type : "post",
            url : "/kbSave",
            dataType : "json",
            success: function(res) {
                alert("success");

            },
            error: function(err) {
                alert(err);
            }
        })
    })
});
