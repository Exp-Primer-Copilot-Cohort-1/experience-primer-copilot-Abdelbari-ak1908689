function skillsMember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var url = "http://localhost:8080/skills/" + member + "/" + skills;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("skillsResult").innerHTML = xhr.responseText;
    }
  }
}
