$(window).scroll(function(){
    var current = $(window).scrollTop();
    var currentscroll = current + 400;
    var figuur1 = $("#figuur1").offset().top;
    var figuur2 = $("#figuur2").offset().top;
    var figuur3 = $("#figuur3").offset().top;
    var figuur4 = $("#figuur4").offset().top;
    var figuur5 = $("#figuur5").offset().top;
    var figuur6 = $("#figuur6").offset().top;
    var figuur7 = $("#figuur7").offset().top;
    var figuur8 = $("#figuur8").offset().top;
    var figuur9 = $("#figuur9").offset().top;

    if(currentscroll > figuur1){
        $("#pop1").addClass("slideLeft");
        $("#text1").addClass("slideRight");

        $('#pop1').removeClass("element-to-hide");
        $('#text1').removeClass("element-to-hide");

        if(currentscroll > figuur2){
            $("#pop1").removeClass("slideLeft");
            $("#text1").removeClass("slideRight");
            $("#pop1").addClass("slideRight");
            $("#text1").addClass("slideLeft");
            $('#pop1').addClass("element-to-hide");
            $('#text1').addClass("element-to-hide");


            $("#pop2").addClass("slideRight");
            $("#text2").addClass("slideLeft");

            $('#pop2').removeClass("element-to-hide");
            $('#text2').removeClass("element-to-hide");

            if(currentscroll > figuur3){
                $("#pop2").removeClass("slideLeft");
                $("#text2").removeClass("slideRight");
                $("#pop2").addClass("slideRight");
                $("#text2").addClass("slideLeft");
                $('#pop2').addClass("element-to-hide");
                $('#text2').addClass("element-to-hide");


                $("#pop3").addClass("slideRight");
                $("#text3").addClass("slideLeft");

                $('#pop3').removeClass("element-to-hide");
                $('#text3').removeClass("element-to-hide");

                if(currentscroll > figuur4){
                    $("#pop3").removeClass("slideLeft");
                    $("#text3").removeClass("slideRight");
                    $("#pop3").addClass("slideRight");
                    $("#text3").addClass("slideLeft");
                    $('#pop3').addClass("element-to-hide");
                    $('#text3').addClass("element-to-hide");


                    $("#pop4").addClass("slideRight");
                    $("#text4").addClass("slideLeft");

                    $('#pop4').removeClass("element-to-hide");
                    $('#text4').removeClass("element-to-hide");


                    if(currentscroll > figuur5){
                        $("#pop4").removeClass("slideLeft");
                        $("#text4").removeClass("slideRight");
                        $("#pop4").addClass("slideRight");
                        $("#text4").addClass("slideLeft");
                        $('#pop4').addClass("element-to-hide");
                        $('#text4').addClass("element-to-hide");


                        $("#pop5").addClass("slideRight");
                        $("#text5").addClass("slideLeft");

                        $('#pop5').removeClass("element-to-hide");
                        $('#text5').removeClass("element-to-hide");

                        if(currentscroll > figuur6){
                            $("#pop5").removeClass("slideLeft");
                            $("#text5").removeClass("slideRight");
                            $("#pop5").addClass("slideRight");
                            $("#text5").addClass("slideLeft");
                            $('#pop5').addClass("element-to-hide");
                            $('#text5').addClass("element-to-hide");


                            $("#pop6").addClass("slideRight");
                            $("#text6").addClass("slideLeft");

                            $('#pop6').removeClass("element-to-hide");
                            $('#text6').removeClass("element-to-hide");


                            if(currentscroll > figuur7){
                                $("#pop6").removeClass("slideLeft");
                                $("#text6").removeClass("slideRight");
                                $("#pop6").addClass("slideRight");
                                $("#text6").addClass("slideLeft");
                                $('#pop6').addClass("element-to-hide");
                                $('#text6').addClass("element-to-hide");


                                $("#pop7").addClass("slideRight");
                                $("#text7").addClass("slideLeft");

                                $('#pop7').removeClass("element-to-hide");
                                $('#text7').removeClass("element-to-hide");


                                if(currentscroll > figuur8){
                                    $("#pop7").removeClass("slideLeft");
                                    $("#text7").removeClass("slideRight");
                                    $("#pop7").addClass("slideRight");
                                    $("#text7").addClass("slideLeft");
                                    $('#pop7').addClass("element-to-hide");
                                    $('#text7').addClass("element-to-hide");


                                    $("#pop8").addClass("slideRight");
                                    $("#text8").addClass("slideLeft");

                                    $('#pop8').removeClass("element-to-hide");
                                    $('#text8').removeClass("element-to-hide");


                                    if(currentscroll > figuur9){
                                        $("#pop8").removeClass("slideLeft");
                                        $("#text8").removeClass("slideRight");
                                        $("#pop8").addClass("slideRight");
                                        $("#text8").addClass("slideLeft");
                                        $('#pop8').addClass("element-to-hide");
                                        $('#text8').addClass("element-to-hide");


                                        $("#pop9").addClass("slideRight");
                                        $("#text9").addClass("slideLeft");

                                        $('#pop9').removeClass("element-to-hide");
                                        $('#text9').removeClass("element-to-hide");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})