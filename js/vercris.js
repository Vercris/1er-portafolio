/*  ANIMACIONES */
document.addEventListener('DOMContentLoaded', function() {
                   //  LAS LLAMADAS
    var carousel    = document.querySelectorAll('.carousel');
    var parallax    = document.querySelectorAll('.parallax');
    var collapsible = document.querySelectorAll('.collapsible');
    var boton = document.querySelectorAll('.fixed-action-btn');
    var slider = document.querySelectorAll('.slider');
    var sidenav = document.querySelectorAll('.sidenav');
    
    //  LAS INSTANCIAS
    var instances = M.Sidenav.init(sidenav);
    var  Ins_parallax= M.Parallax.init(parallax);
    var instances = M.Slider.init(slider,
        {
                indicators:false,
                Duration:5000,
                interval:5000
        });
    var instances = M.FloatingActionButton.init(boton,
        {
            hoverEnabled:false
        });
    var  Ins_carousel = M.Carousel.init(carousel,
        {
            dist:0,
                shift:0,
                indicators:true,
                noWrap:false,
        });
    var Ins_collapsible = M.Collapsible.init(collapsible,
        {
            accordion: true,
            inDuration:250,
            outDuration:250,
        }
        );
});