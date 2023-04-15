//your JS code here. If required.
function changeColor() {
	var blockId = document.getElementById("block_id").value;
	var color = document.getElementById("color_id").value;
	document.getElementById(blockId).style.backgroundColor = color;
}

function resetColor() {
	var blocks = document.getElementsByClassName("grid-item");
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].style.backgroundColor = "transparent";
	}
}
