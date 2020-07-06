// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var aboutBtn = document.getElementById("about-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
aboutBtn.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

const modalsInfo = [
	{
		id: "reporting",
		title: "Rapportering",
		content: "Noe tekst går her med masse info blabla bla",
	},
];

function createModals() {
    modalsInfo.forEach(mod => {

    })
}

function createModal(id, title, content) {
    const html = `
    <div id="${id}" class="modal">
    <div class="modal-container">
    <div class="modal-header">
        <span class="close">&times;</span>
        <h2>${title}</h2>
    </div>
    <div class="modal-content">
      
      <p>${content}</p>
    </div>
    </div>
  
  </div>
    `
    
}