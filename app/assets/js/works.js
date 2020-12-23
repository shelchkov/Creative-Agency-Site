(() => {
	const works = document.querySelectorAll(".work")
	works.forEach((work, i) => {
		work.style.backgroundColor = i % 2 ? "#b6b6b6" : "#acacac"
	})
})()
