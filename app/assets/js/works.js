const works = document.querySelectorAll(".work")

for (let i = 0; i < works.length; i++) {
	const work = works[i]
	work.style.backgroundColor = i % 2 ? "#b6b6b6" : "#acacac"
}
