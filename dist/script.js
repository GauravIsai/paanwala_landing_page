// Poem text
const kiplingPoem = `<p>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>

COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
COMING SOON <span>...</span> THE PAANWALLA <span>COMING SOON</span> THE PAANWALLA </span>
 </p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);