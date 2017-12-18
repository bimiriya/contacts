$(document).ready(function() {

    $("nav .btn-success").click(function() {
        $("#modal-add").show()
    })

    document.getElementById("num").oninput = function () {
        if (this.value.length > 10) {
            this.value = this.value.slice(0,10); 
        }
    }

    $(".add-btn").click(function() {
        $("input").each(function() {
            if ($(this).val().length == 0) {
                $(".modals button").attr("disable",true);
            } else {
                $(".modals").hide();
            }
        })


        
        $("#filler").prepend("<li><div><button class='btn btn-default glyphicon glyphicon-trash'></button></div><h1>" + $(".name").val() + 
        "</h1><h2>" + $(".num").val() + 
        "</h2><span>" + $(".email").val() + 
        "</span></li>");

        $("input").val("");

        $("#filler .glyphicon-trash").click(function() {
            var parents = $(this).parent();
            parents.remove();
        })

    })
    
    $(".modals .glyphicon-remove").click(function() {
        $(".modals").hide();
    })

    $(".btn-info").click(function() {
        $(this).hide();
        $("#search").append("<div class='input-group'><span class='input-group-addon glyphicon glyphicon-search' id='sizing-addon1'></span><input type='text' class='form-control' placeholder='Search' aria-describedby='sizing-addon1'></div>");

        function listFilter(list) {
            
       $("#search input").change( function () {
           var value = $(this).val();
           if(value) {
             $(list).find("h1:not(:Contains(" + value + "))").parent().slideUp();
             $(list).find("h1:Contains(" + value + ")").parent().slideDown();
           } else {
             $(list).find("li").slideDown();
           }
           return false;
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