$(function(){
    // $('#zoom_01').ezPlus({
    //     preloading: 1,
    //     zoomWindowWidth: 400,
    //     zoomWindowHeight: 300,
    //     zoomLevel: 1,
    //     easing: true,
    //     zoomWindowFadeIn: 500,
    //     zoomWindowFadeOut: 500,
    //     lensFadeIn: 500,
    //     lensFadeOut: 500
    // });
    $("#zoom_02").ezPlus({
        gallery: 'gallery_01',
        cursor: 'pointer',
        galleryActiveClass: "active",
        imageCrossfade: true,
        // loadingIcon: "http://www.elevateweb.co.uk/spinner.gif"
    });


    $("#zoom_02").bind("click", function (e) {
        var ez = $('#zoom_02').data('ezPlus');
        ez.closeAll(); //NEW: This function force hides the lens, tint and window
        debugger
        let w = window.innerWidth;
        if(w < 768){
            let img_path = ez.getGalleryList()[0].href;
            let imgtag = `<img src="${img_path}">`;
            $('#modal_area').css('display','block')
            $('.modal_inr').html(imgtag)
            // $.fancyboxPlus(ez.getGalleryList()[0].href);
        }
        return false;
    });

    //Triggered when window width is changed.
    // $( window ).on( "resize", function() {
    //     var windowWidth = $( window ).width(), // get window width
    //         imgWidth = $( "#responsive_img").width(); // get image width
    //     //Init elevateZoom
    //     initEZPlus();
    //     //display status
    //     $( "#status" ).html("Status: Window resized!.");
    //     //display image and window width
    //     $( "#imgWidth" ).html("Image width: " + imgWidth + "px" + "<br />" + "Window width: " + windowWidth + "px");
    // });

    // function initEZPlus() {
    //     $("#zoom_03").ezPlus({
    //         responsive : true,
    //         scrollZoom : false,
    //         showLens: true,

    //         tint: true,
    //         tintColour: '#0F0',
    //         tintOpacity: 0.5,
    //         respond: [
    //             {
    //                 range: '600-799',
    //                 tintColour: '#F00',
    //                 zoomWindowHeight: 100,
    //                 zoomWindowWidth: 100
    //             },
    //             {
    //                 range: '800-1199',
    //                 tintColour: '#00F',
    //                 zoomWindowHeight: 200,
    //                 zoomWindowWidth: 200
    //             },
    //             {
    //                 range: '100-599',
    //                 enabled: false,
    //                 showLens: false
    //             }
    //         ]
    //     });
    // }
    // let w = window.innerWidth;
    // const resize = ()=>{
 
    //     let timeoutID = 0;
    //     let delay = 500;
     
    //     window.addEventListener("resize", ()=>{
    //         clearTimeout(timeoutID);
    //         timeoutID = setTimeout(()=>{
     
    //             //ここにリサイズした後に実行したい処理を記述
    //             console.log("resize");
    //             w = window.innerWidth;
    //             if(w < 768){
    //                 // debugger
    //                 // $(".zoomContainer").remove()
    //             }
     
    //         }, delay);
    //     }, false);
    // };
     
    // resize();

});