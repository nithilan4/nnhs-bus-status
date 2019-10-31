$(document).ready(function () {
	// This is where our code will go
});
var config = {
	apiKey: "AIzaSyBuqhkoBDozq6pyg_KBZcxSZi_pcKvjnTM",
	authDomain: "busapp-9b4ef.firebaseapp.com",
	databaseURL: "https://busapp-9b4ef.firebaseio.com",
	storageBucket: "busapp-9b4ef.appspot.com"
};
firebase.initializeApp(config);
const preObject = document.getElementById('buses');
const dbRefObject = firebase.database().ref().child('buses');
dbRefObject.on('value', snap => setTable(snap.val()));

// Get a reference to the database service
var database = firebase.database().ref();
function setTable(data) {
	//console.log(data)
	var table = document.getElementById("reportTable")
	table.innerHTML = ""
	var row = table.insertRow();
	var cellBusNumber = row.insertCell(0);
	var cellBusStatus = row.insertCell(1);

	var cellBusNumber2 = row.insertCell(2);
	var cellBusStatus2 = row.insertCell(3);

	var cellBusNumber3 = row.insertCell(4);
	var cellBusStatus3 = row.insertCell(5);

	var cellBusNumber4 = row.insertCell(6);
	var cellBusStatus4 = row.insertCell(7);

	cellBusNumber.innerHTML = "Bus #".bold();
	cellBusStatus.innerHTML = "Status".bold();
	cellBusNumber2.innerHTML = "Bus #".bold();
	cellBusStatus2.innerHTML = "Status".bold();
	cellBusNumber3.innerHTML = "Bus #".bold();
	cellBusStatus3.innerHTML = "Status".bold();
	cellBusNumber4.innerHTML = "Bus #".bold();
	cellBusStatus4.innerHTML = "Status".bold();

	var list = []
	var rowList = []
	for (x in data) { list.push("" + x); }
	j = 0;
	k = 0;
	l = 0;
	m = 0;
	for (x in data) {
		if (j < list.length / 3.72) {
			var row = table.insertRow();
			rowList.push(row);
			// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
			cellBusNumber = row.insertCell(0);
			cellBusStatus = row.insertCell(1);
			j++
		}
		else if (j < 2 * (list.length / 3.72)) {
			row = rowList[k];
			cellBusNumber = row.insertCell(2);
			cellBusStatus = row.insertCell(3);
			j++
			k++
		}
		else if (j < 3 * (list.length / 3.72)) {
			row = rowList[l];
			cellBusNumber = row.insertCell(4);
			cellBusStatus = row.insertCell(5);
			j++
			l++
		}
		else if (j < 4 * (list.length / 3.72)) {
			row = rowList[m];
			cellBusNumber = row.insertCell(6);
			cellBusStatus = row.insertCell(7);
			j++
			m++
		}
		var row = (data[x])
		// Add some text to the new cells:
		cellBusNumber.innerHTML = row["Bus"].bold();
    console.log(cellBusNumber)
		if (row["Change"] != "") {
			cellBusNumber.innerHTML = row["Bus"] + " = " + row["Change"].bold();
		}

		if (row["Status"] == "LOADING") {
			cellBusStatus.innerHTML = row["Status"].fontcolor("green").bold();
			cellBusStatus.style.padding = "1.4vw";
		}
		else if (row["Status"] == "HERE") {
			cellBusStatus.innerHTML = row["Status"].fontcolor("blue").bold();
			cellBusStatus.style.padding = "1.4vw";
		}
		else if (row["Status"] == "GONE") {
			cellBusStatus.innerHTML = row["Status"].fontcolor("red").bold();
			cellBusStatus.style.padding = "1.4vw";
		}
		else {
			cellBusStatus.innerHTML = "<br><br>"
		}
	}
	table.rows[6].insertCell(6)
	table.rows[6].insertCell(6)
	table.rows[7].insertCell(6)
	table.rows[7].insertCell(6)
}