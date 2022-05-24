$(document).ready(function () {
  $(window).on('scroll', function () {
    $(window).scrollTop() > 50 ? $('header, .btn-top').addClass('active') : $('header, .btn-top').removeClass('active')
  })
})
