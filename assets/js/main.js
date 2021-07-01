$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      
    $("a").click(function (event) {
        event.preventDefault();

        // SmoothScroll variable gato guarda los id
        let gato = this.hash;
        $("html").animate({
            scrollTop: $(gato).offset().top,
        },
            800)
    })

})