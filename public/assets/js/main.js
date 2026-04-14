/*-----------------------------------------------------------------------------------

    Theme Name: Fixity - Handyman Services HTML Template
    Description: Handyman Services HTML Template
    Author: Website Design Templates
    Version: 1.1
        
    ---------------------------------- */

!(function (o) {
	"use strict";
	var t = o(window);
	function a() {
		var e, a;
		((e = o(".full-screen")),
			(a = t.height()),
			e.css("min-height", a),
			(e = o("header").height()),
			(a = o(".screen-height")),
			(e = t.height() - e),
			a.css("height", e));
	}
	(o("#preloader").fadeOut("normall", function () {
		o(this).remove();
	}),
		t.on("scroll", function () {
			var e = t.scrollTop(),
				a = o(".navbar-brand img"),
				s = o(".navbar-brand.logodefault img");
			(e <= 50
				? (o("header").removeClass("scrollHeader").addClass("fixedHeader"),
					a.attr("src", "img/logos/logo-inner.png"))
				: (o("header").removeClass("fixedHeader").addClass("scrollHeader"),
					a.attr("src", "img/logos/logo.png")),
				s.attr("src", "img/logos/logo.png"));
		}),
		t.on("scroll", function () {
			500 < o(this).scrollTop()
				? o(".scroll-to-top").fadeIn(400)
				: o(".scroll-to-top").fadeOut(400);
		}),
		o(".scroll-to-top").on("click", function (e) {
			(e.preventDefault(), o("html, body").animate({ scrollTop: 0 }, 600));
		}),
		o(".parallax,.bg-img").each(function (e) {
			o(this).attr("data-background") &&
				o(this).css(
					"background-image",
					"url(" + o(this).data("background") + ")",
				);
		}),
		o(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
		o(".source-modal").magnificPopup({
			type: "inline",
			mainClass: "mfp-fade",
			removalDelay: 160,
		}),
		o(".current-year").text(new Date().getFullYear()),
		t.resize(function (e) {
			(setTimeout(function () {
				a();
			}, 500),
				e.preventDefault());
		}),
		a(),
		o(document).ready(function () {
			(o(".testimonial-carousel").owlCarousel({
				loop: !0,
				responsiveClass: !0,
				autoplay: !0,
				smartSpeed: 900,
				nav: !1,
				dots: !0,
				center: !1,
				margin: 15,
				responsive: {
					0: { items: 1, margin: 0 },
					768: { items: 1 },
					992: { items: 1 },
				},
			}),
				o(".testimonial-carousel-02").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					smartSpeed: 900,
					nav: !0,
					navText: [
						"<i class='ti-arrow-left'></i>",
						"<i class='ti-arrow-right'></i>",
					],
					dots: !1,
					center: !1,
					margin: 15,
					responsive: {
						0: { items: 1, margin: 0 },
						768: { items: 1 },
						992: { items: 1 },
					},
				}),
				o(".testimonial-carousel-03").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					smartSpeed: 900,
					nav: !1,
					dots: !1,
					center: !1,
					margin: 15,
					responsive: {
						0: { items: 1, margin: 0 },
						768: { items: 1 },
						992: { items: 1 },
					},
				}),
				o(".testimonial-carousel-04").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					autoplayTimeout: 5e3,
					smartSpeed: 1500,
					nav: !1,
					navText: [
						"<span class='fa-solid fa-arrow-left-long'></span>",
						"<span class='fa-solid fa-arrow-right-long'></span>",
					],
					dots: !0,
					center: !1,
					margin: 30,
					responsive: {
						0: { items: 1 },
						768: { items: 1 },
						1200: { items: 1 },
					},
				}),
				o(".testimonial-carousel-05").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					smartSpeed: 1500,
					nav: !1,
					dots: !0,
					center: !1,
					margin: 20,
					responsive: {
						0: { items: 1, dots: !1 },
						575: { items: 1 },
						992: { items: 1 },
						1200: { items: 1 },
					},
				}),
				o(".testimonial-carousel-06").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					smartSpeed: 1500,
					nav: !1,
					dots: !0,
					center: !1,
					margin: 25,
					responsive: {
						0: { items: 1, dots: !1 },
						768: { items: 2 },
						992: { items: 2 },
					},
				}),
				o(".service-carousel").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					autoplayTimeout: 3e3,
					smartSpeed: 1500,
					nav: !1,
					center: !1,
					autoplayHoverPause: !0,
					dots: !0,
					margin: 30,
					responsive: {
						0: { items: 1 },
						768: { items: 2 },
						1400: { items: 3 },
					},
				}),
				o(".clients01-carousel").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					autoplayTimeout: 5e3,
					smartSpeed: 1500,
					nav: !1,
					dots: !1,
					center: !1,
					margin: 30,
					responsive: {
						0: { items: 1 },
						576: { items: 2 },
						768: { items: 2 },
						992: { items: 3 },
						1200: { items: 4 },
					},
				}),
				o(".clients-carousel2").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					autoplayTimeout: 5e3,
					smartSpeed: 1500,
					nav: !1,
					dots: !1,
					center: !1,
					margin: 30,
					responsive: {
						0: { items: 1 },
						576: { items: 2 },
						768: { items: 3 },
						992: { items: 3 },
						1200: { items: 3 },
					},
				}),
				o(".clients-carousel3").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					autoplayTimeout: 5e3,
					smartSpeed: 1500,
					nav: !1,
					dots: !1,
					center: !1,
					margin: 0,
					responsive: {
						0: { items: 1 },
						576: { items: 2 },
						768: { items: 3 },
						992: { items: 4 },
						1200: { items: 6 },
					},
				}),
				o(".portfolio-carousel1").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					autoplay: !0,
					smartSpeed: 1400,
					nav: !1,
					dots: !0,
					center: !1,
					margin: 20,
					responsive: {
						0: { items: 1 },
						576: { items: 2 },
						768: { items: 2 },
						992: { items: 3 },
						1200: { items: 5 },
					},
				}),
				o(".portfolio-carousel2").owlCarousel({
					loop: !0,
					responsiveClass: !0,
					center: !0,
					nav: !1,
					dots: !0,
					autoplay: !0,
					autoplayTimeout: 5e3,
					margin: 30,
					smartSpeed: 900,
					responsive: { 0: { items: 1 }, 768: { items: 2 } },
				}),
				o(".slider-fade").owlCarousel({
					items: 1,
					loop: !0,
					dots: !0,
					margin: 0,
					nav: !1,
					navText: [
						"<i class='ti-arrow-left'></i>",
						"<i class='ti-arrow-right'></i>",
					],
					autoplay: !0,
					smartSpeed: 1500,
					mouseDrag: !1,
					animateIn: "fadeIn",
					animateOut: "fadeOut",
					responsive: { 992: { items: 1, nav: !0, dots: !1 } },
				}),
				o(".slider-fade1").owlCarousel({
					items: 1,
					loop: !0,
					dots: !0,
					margin: 0,
					nav: !1,
					navText: [
						"<i class='ti-arrow-left'></i>",
						"<i class='ti-arrow-right'></i>",
					],
					autoplay: !0,
					smartSpeed: 1500,
					mouseDrag: !1,
					animateIn: "fadeIn",
					animateOut: "fadeOut",
					responsive: { 992: { nav: !0, dots: !1 } },
				}),
				o(".owl-carousel").owlCarousel({
					items: 1,
					loop: !0,
					dots: !1,
					margin: 0,
					autoplay: !0,
					smartSpeed: 500,
				}),
				o(".slider-fade").on("changed.owl.carousel", function (e) {
					e = e.item.index - 2;
					(o("span").removeClass("animated fadeInUp"),
						o("h1").removeClass("animated fadeInUp"),
						o(".butn").removeClass("animated fadeInUp"),
						o(".owl-item")
							.not(".cloned")
							.eq(e)
							.find("span")
							.addClass("animated fadeInUp"),
						o(".owl-item")
							.not(".cloned")
							.eq(e)
							.find("h1")
							.addClass("animated fadeInUp"),
						o(".owl-item")
							.not(".cloned")
							.eq(e)
							.find(".butn")
							.addClass("animated fadeInUp"));
				}),
				o(".slider-fade1").on("changed.owl.carousel", function (e) {
					e = e.item.index - 2;
					(o(".small-title").removeClass("animated fadeInUp"),
						o(".title").removeClass("animated fadeInUp"),
						o(".butn").removeClass("animated fadeInUp"),
						o(".owl-item")
							.not(".cloned")
							.eq(e)
							.find(".small-title")
							.addClass("animated fadeInUp"),
						o(".owl-item")
							.not(".cloned")
							.eq(e)
							.find(".title")
							.addClass("animated fadeInUp"),
						o(".owl-item")
							.not(".cloned")
							.eq(e)
							.find(".butn")
							.addClass("animated fadeInUp"));
				}),
				o(".countup").counterUp({ delay: 25, time: 2e3 }),
				o(".countdown").countdown({
					date: "01 May 2028 00:01:00",
					format: "on",
				}));
		}),
		t.on("load", function () {
			(o(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),
				o(".portfolio-link").on("click", (e) => {
					e.stopPropagation();
				}));
		}));
})(jQuery);
