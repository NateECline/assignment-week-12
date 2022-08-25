var number = 0;
function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1), cell0 = row.insertCell(0), cell1 = row.insertCell(1), cell2 = row.insertCell(2), cell3 = row.insertCell(3), cell4 = row.insertCell(4);
  var input1 = document.getElementById("form_name").value, input2 = document.getElementById("form_lastname").value, input3 = document.getElementById("form_tag").value, input4 = document.getElementById("form_role").value;
  number++
  cell0.innerHTML = '<strong>'+number+'</strong>';
  cell1.innerHTML = input1;
  cell2.innerHTML = input2;
  cell3.innerHTML = input3;
  cell4.innerHTML = input4;
}