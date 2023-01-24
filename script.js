let columns = Math.floor(document.body.clientWidth / 80);
let rows = Math.floor(document.body.clientHeight / 80);
let grid = document.querySelector(".grid");

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

	columns = Math.floor(document.body.clientWidth / 80);
	rows = Math.floor(document.body.clientHeight / 80);

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
