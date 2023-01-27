let columns = Math.floor(document.body.clientWidth / 80);
let rows = Math.floor(document.body.clientHeight / 80);
let grid = document.querySelector(".grid");
let r = document.querySelector(":root");


setInterval(() => {
	let randomNumber = Math.floor(Math.random() * 200) + "px";
	let randomNumber2 = Math.floor(Math.random() * 200) + "px";

	console.log(randomNumber, randomNumber2);

	r.style.setProperty("--translate", randomNumber);
	r.style.setProperty("--translate", randomNumber2);
}, 30000);

function createTile(index) {
	const tile = document.createElement("div");
	tile.classList.add("tile");

	return tile;
}

function createTiles(quantity) {
	Array.from(Array(quantity)).map((tile, index) => {
		grid.appendChild(createTile(index));
	});
}

function createGrid() {
	grid.innerHTML = "";

	columns = Math.floor(grid.clientWidth / 80);
	rows = Math.floor(grid.clientHeight / 80);

	console.log(columns, document.body.clientHeight);

	grid.style.setProperty("--columns", columns);
	grid.style.setProperty("--rows", rows);

	createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();

grid.onmousemove = (e) => {
	grid.style.setProperty("--mouse-x", `${e.clientX}px`);
	grid.style.setProperty("--mouse-y", `${e.clientY}px`);
};

grid.onmouseenter = (e) => {
	grid.style.setProperty("--opacity", 1);
};

grid.onmouseleave = (e) => {
	grid.style.setProperty("--opacity", 0);
};
