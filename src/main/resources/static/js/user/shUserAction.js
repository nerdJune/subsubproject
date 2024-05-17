
$(function(){
    $("#submitBtn").on("click", function(e) {
        e.preventDefault();
        alert("sh success");
        $.ajax({
            type : "post",
            url : "/shSave",
            dataType : "json",
            success: function(res) {
                alert("sh success");

            },
            error: function(err) {
                alert(err);
            }
        })
    })
});

function createUrl(type) {

}
