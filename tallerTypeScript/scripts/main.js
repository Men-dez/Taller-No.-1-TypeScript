import { dataCourses } from "./dataCourses.js";
var coursesTbody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses"
var btnfilterByName = document.getElementById('button-filterByName'); // Nodo tbody que tiene el id="button-filterByName"
var inputValue = document.getElementById("search-box");
var textCreds = document.getElementById('creds'); // Nodo tbody que tiene el id="button-filterByName"
var table = document.getElementById('tableInfo'); // Nodo tbody que tiene el id="button-filterByName"
renderCoursesInTable(dataCourses);
function renderCoursesInTable(courses) {
    courses.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + c.name + "</td>\n                           <td>" + c.professor + "</td>\n                           <td>" + c.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    var bodyRef = table.getElementsByTagName('tbody')[0];
    bodyRef.innerHTML = '';
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function applyFilterByName() {
    var text = inputValue.value;
    console.log(text);
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
    textCreds.innerHTML = String(getTotalCredits(coursesFiltered));
}
btnfilterByName.onclick = function () { return applyFilterByName(); };
