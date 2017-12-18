$(document).ready(function() {

    $("nav .btn-success").click(function() {
        $("#modal-add").show()
    })

    $(".modals .glyphicon-remove").click(function() {
        $(".modals").hide();
    })

    document.getElementById("num").oninput = function () {
        if (this.value.length > 11) {
            this.value = this.value.slice(0,11); 
        }
    }


    $(".add-btn").click(function() {


        if ($(".name").val() === "" && $(".num").val().length < 11) {
            $(".modals button").attr("disable",true);
        } else {
            $(".modals").hide();
            $("#filler").prepend("<li><div class='row'><div class='col-lg-6 col-lg-offset-1'><h4 class='filter'><span class='glyphicon glyphicon-user'></span>" + $(".name").val() + 
            "</h4><h4 class='green'><span class='glyphicon glyphicon-earphone'></span>" + + $(".num").val() + 
            "</h4><h4><span class='glyphicon glyphicon-envelope'></span>" + $(".email").val() + 
            "</h4></div><div class='col-lg-3 col-lg-offset-1'><button class='btn btn-danger glyphicon glyphicon-trash'></button></div></div></li>");
    
            $("input").val("");
    
            $("#filler .glyphicon-trash").click(function() {
                var parents = $(this).closest("li");
                parents.remove();
            })
        }

        $("nav h1 span").show();
        function count(counter) {
            $("nav h1 span span").html(counter);
        }
        count($("#filler li").length)


    })

    $(".btn-info").click(function() {
        $(this).hide();
        $("#search").append("<div class='input-group'><span class='input-group-addon glyphicon glyphicon-search' id='sizing-addon1'></span><input type='text' class='form-control' placeholder='Search' aria-describedby='sizing-addon1'></div>");

        function listFilter(list) {
            jQuery.expr[':'].Contains = function(a,i,m){
                return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
            };
            
            $("#search input").change( function () {
                var value = $(this).val();
                if(value) {
                    $(list).find(".filter:not(:Contains(" + value + "))").closest("li").slideUp();
                    $(list).find(".filter:Contains(" + value + ")").closest("li").slideDown();
                    } else {
                    $(list).find("li").slideDown();
                } return false;
            })
            
            .keyup( function () {
            $(this).change();
       });
     }
   
     $(function () {
       listFilter($("#filler"));
     });
    })

})