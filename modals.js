// Reporting modals
var reportingModal = document.getElementById("reporting-modal");
var reportingBtn = document.getElementById("reporting-btn");
var reportingSpan = reportingModal.getElementsByClassName("close")[0];
//Automation modals
var spreadsheetModal = document.getElementById("spreadsheet-modal");
var spreadsheetBtn = document.getElementById("spreadsheet-btn");
var spreadsheetSpan = spreadsheetModal.getElementsByClassName("close")[0];

//meetings modals
var meetingsModal = document.getElementById("meetings-modal");
var meetingsBtn = document.getElementById("meetings-btn");
var meetingsSpan = meetingsModal.getElementsByClassName("close")[0];

// data collection modals
var analyticsModal = document.getElementById("analytics-modal");
var analyticsBtn = document.getElementById("analytics-btn");
var analyticsSpan = analyticsModal.getElementsByClassName("close")[0];



// reporting events
reportingBtn.onclick = function () {
	reportingModal.style.display = "block";
};

reportingSpan.onclick = function () {
	reportingModal.style.display = "none";
};

// spreadsheet events
spreadsheetBtn.onclick = function () {
	spreadsheetModal.style.display = "block";
};

spreadsheetSpan.onclick = function () {
	spreadsheetModal.style.display = "none";
};

// meetings event
meetingsBtn.onclick = function () {
	meetingsModal.style.display = "block";
};

meetingsSpan.onclick = function () {
	reportmeetingsModalingModal.style.display = "none";
};

// analytics events
analyticsBtn.onclick = function () {
	analyticsModal.style.display = "block";
};

analyticsSpan.onclick = function () {
	analyticsModal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == reportingModal) {
		reportingModal.style.display = "none";
	}else if (event.target == spreadsheetModal) {
		spreadsheetModal.style.display = "none";
	}else if (event.target == meetingsModal) {
		meetingsModal.style.display = "none";
	}else if (event.target == analyticsModal) {
		analyticsModal.style.display = "none";
	}
};


// // Auto modals
// const modalsInfo = [
// 	{
// 		id: "reporting",
// 		title: "Rapportering",
// 		content: "Noe tekst går her med masse info blabla bla",
// 	},
// ];

// function createModals() {
//     modalsInfo.forEach(mod => {

//     })
// }

// function createModal(id, title, content) {
//     const html = `
//     <div id="${id}" class="modal">
//     <div class="modal-container">
//     <div class="modal-header">
//         <span class="close">&times;</span>
//         <h2>${title}</h2>
//     </div>
//     <div class="modal-content">
      
//       <p>${content}</p>
//     </div>
//     </div>
  
//   </div>
//     `
    
// }