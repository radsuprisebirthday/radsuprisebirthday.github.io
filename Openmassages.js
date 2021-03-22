$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
	//sec
	 var envelope2 = $('#envelope2');
    var btn_open2 = $("#open2");
    var btn_reset2 = $('#reset2');
	//third
	 var envelope3 = $('#envelope3');
    var btn_open3 = $("#open3");
    var btn_reset3 = $('#reset3');
	//fourth
	var envelope4 = $('#envelope4');
    var btn_open4 = $("#open4");
    var btn_reset4 = $('#reset4');
	//fifth
    var envelope5 = $('#envelope5');
    var btn_open5 = $("#open5");
    var btn_reset5 = $('#reset5');
	//sixth
	 var envelope6 = $('#envelope6');
    var btn_open6 = $("#open6");
    var btn_reset6 = $('#reset6');
	//seven
	 var envelope7 = $('#envelope7');
    var btn_open7 = $("#open7");
    var btn_reset7 = $('#reset7');
	//eight
	 var envelope8 = $('#envelope8');
    var btn_open8 = $("#open8");
    var btn_reset8 = $('#reset8');
	//nine
	 var envelope9 = $('#envelope9');
    var btn_open9 = $("#open9");
    var btn_reset9 = $('#reset9');
	
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
	
	//sec
	 envelope2.click(function() {
        open2();
    });
    btn_open2.click(function() {
        open2();
    });
    btn_reset2.click(function() {
        close2();
    }); 
	
	//third
	envelope3.click(function() {
        open3();
    });
    btn_open3.click(function() {
        open3();
    });
    btn_reset3.click(function() {
        close3();
    });
	
	//fourth
	envelope4.click(function() {
        open4();
    });
    btn_open4.click(function() {
        open4();
    });
    btn_reset4.click(function() {
        close4();
    });
	//fifth
    envelope5.click(function() {
        open5();
    });
    btn_open5.click(function() {
        open5();
    });
    btn_reset5.click(function() {
        close5();
    });
	//sixth
	envelope6.click(function() {
        open6();
    });
    btn_open6.click(function() {
        open6();
    });
    btn_reset6.click(function() {
        close6();
    });
	//seven
	envelope7.click(function() {
        open7();
    });
    btn_open7.click(function() {
        open7();
    });
    btn_reset7.click(function() {
        close7();
    });
	//eight
	envelope8.click(function() {
        open8();
    });
    btn_open8.click(function() {
        open8();
    });
    btn_reset8.click(function() {
        close8();
    });
	//nine
	envelope9.click(function() {
        open9();
    });
    btn_open9.click(function() {
        open9();
    });
    btn_reset9.click(function() {
        close9();
    });
	
    function open() {
        envelope.addClass('open')
        envelope.removeClass('close')
		setTimeout(function() {
        $('.box').addClass('box-active')
    }, 500)
    }

    function close() {
        envelope.addClass('close')
            envelope.removeClass('open');
    }

$(document).on('click','.box-cancel',function(){
       $('.box').removeClass('box-active')
   })
	//sec

 function open2() {
        envelope2.addClass('open2')
        envelope2.removeClass('close2')
		setTimeout(function() {
        $('.box2').addClass('box-active2')
    }, 500)
    }

    function close2() {
        envelope2.addClass('close2')
            envelope2.removeClass('open2');
    }

$(document).on('click','.box-cancel2',function(){
       $('.box2').removeClass('box-active2')
   })
	
	//third
	
	function open3() {
        envelope3.addClass('open3')
        envelope3.removeClass('close3')
		setTimeout(function() {
        $('.box3').addClass('box-active3')
    }, 500)
    }

    function close3() {
        envelope3.addClass('close3')
            envelope3.removeClass('open3');
    }

$(document).on('click','.box-cancel3',function(){
       $('.box3').removeClass('box-active3')
   })
	
	//fouth
	function open4() {
        envelope4.addClass('open4')
        envelope4.removeClass('close4')
		setTimeout(function() {
        $('.box4').addClass('box-active4')
    }, 500)
    }

    function close4() {
        envelope4.addClass('close4')
            envelope4.removeClass('open4');
    }

$(document).on('click','.box-cancel4',function(){
       $('.box4').removeClass('box-active4')
   })
	//fifth
	function open5() {
        envelope5.addClass('open5')
        envelope5.removeClass('close5')
		setTimeout(function() {
        $('.box5').addClass('box-active5')
    }, 500)
    }

    function close5() {
        envelope5.addClass('close5')
            envelope5.removeClass('open5');
    }

$(document).on('click','.box-cancel5',function(){
       $('.box5').removeClass('box-active5')
   })
	//sixth
	function open6() {
        envelope6.addClass('open6')
        envelope6.removeClass('close6')
		setTimeout(function() {
        $('.box6').addClass('box-active6')
    }, 500)
    }

    function close6() {
        envelope6.addClass('close6')
            envelope6.removeClass('open6');
    }

$(document).on('click','.box-cancel6',function(){
       $('.box6').removeClass('box-active6')
   })
	//seven
	function open7() {
        envelope7.addClass('open7')
        envelope7.removeClass('close7')
		setTimeout(function() {
        $('.box7').addClass('box-active7')
    }, 500)
    }

    function close7() {
        envelope7.addClass('close7')
            envelope7.removeClass('open7');
    }

$(document).on('click','.box-cancel7',function(){
       $('.box7').removeClass('box-active7')
   })
	//eight
		function open8() {
        envelope8.addClass('open8')
        envelope8.removeClass('close8')
		setTimeout(function() {
        $('.box8').addClass('box-active8')
    }, 500)
    }

    function close8() {
        envelope8.addClass('close8')
            envelope8.removeClass('open8');
    }

$(document).on('click','.box-cancel8',function(){
       $('.box8').removeClass('box-active8')
   })
	//nine
		function open9() {
        envelope9.addClass('open9')
        envelope9.removeClass('close9')
		setTimeout(function() {
        $('.box9').addClass('box-active9')
    }, 500)
    }

    function close9() {
        envelope9.addClass('close9')
            envelope9.removeClass('open9');
    }

$(document).on('click','.box-cancel9',function(){
       $('.box9').removeClass('box-active9')
   })
	$(document).on('click','.opgf',function(){
        $('.gift-box').addClass('gift-active').removeClass('box-active2')
    })
	$(document).on('click','.gift-cancel',function(){
       $('.gift-box').removeClass('gift-active')
   })
	
	});