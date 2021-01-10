const arrow = document.getElementById('up');
const scrolling = () => {
	let yPosInit = window.scrollY;
	let yPosNext;
	setTimeout(() => {
		yPosNext = window.scrollY;

		if (yPosInit > 0 && yPosInit >= yPosNext) {
			arrow.classList.remove('hide');
			arrow.classList.add('show');
		} else {
			arrow.classList.remove('show');
			arrow.classList.add('hide');
		}
	}, 300);

	if (yPosInit > 0 && yPosInit > yPosNext) {
		arrow.classList.remove('hide');
		arrow.classList.add('show');
	} else {
		arrow.classList.remove('show');
		arrow.classList.add('hide');
	}
}

window.addEventListener('scroll', scrolling);