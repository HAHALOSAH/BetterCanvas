var ge = document.getElementsByClassName("grade");
var ps = document.getElementsByClassName("points_possible");
for(var i=0;i<ps.length;i++) {
	var code='	<span class="tooltip_wrap right" aria-hidden="true">\
		<span class="tooltip_text score_teaser">\
			Click to test a different score\
		</span>\
	</span>\
	  <span class="screenreader-only" role="button">\
		Click to test a different score\
	  </span>\
	' + ps[i].innerHTML;
	ge[i].innerHTML = code;
}