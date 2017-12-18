$(document).ready(function() {
    $("nav .btn-success").click(function() {
        $("#modal-add").show()

        $(".add-btn").click(function() {
            $("input").each(function() {
                if ($(this).val().length == 0) {
                    $(".modals button").attr("disable",true);
                } else {
                    $(".modals").hide();
                }
            })
            $("#filler").append("<div></div>")

        })
    })
    
    $(".modals .glyphicon-remove").click(function() {
        $(".modals").hide();
    })

    document.getElementById("num").oninput = function () {
        if (this.value.length > 10) {
            this.value = this.value.slice(0,10); 
        }
    }

})