glob = {};

glob.initAA = 0;

glob.init = () => {
	glob.initAA++;

	if (glob.initAA < 1)
	return;

	$('.inputDate').
	datepicker();
};
	
$(window).ready(() => {
	glob.init();
});

$(document).ready(() => {
	glob.init();
});
