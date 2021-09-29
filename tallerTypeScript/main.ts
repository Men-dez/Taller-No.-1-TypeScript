import { Course } from "./course.js";
import { dataCourses } from "./dataCourses.js";


const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"
const btnfilterByName: HTMLElement = document.getElementById('button-filterByName')!; // Nodo tbody que tiene el id="button-filterByName"
const inputValue: HTMLInputElement = (document.getElementById("search-box") as HTMLInputElement);
const textCreds: HTMLElement = document.getElementById('creds')!; // Nodo tbody que tiene el id="button-filterByName"
const table: HTMLElement = document.getElementById('tableInfo')!; // Nodo tbody que tiene el id="button-filterByName"
renderCoursesInTable(dataCourses);
textCreds.innerHTML = String(getTotalCredits(dataCourses));

function renderCoursesInTable(courses: Course[]): void {
  courses.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function getTotalCredits(courses: Course[]): number {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
}

function clearCoursesInTable(){
  let bodyRef = table.getElementsByTagName('tbody')[0]; 
  bodyRef.innerHTML = '';
}

function searchCourseByName(nameKey: string, courses: Course[]) {
    return nameKey === '' ? dataCourses : courses.filter( c => 
      c.name.match(nameKey));
  } 

function applyFilterByName() { 
  let text = inputValue.value;
  console.log(text)
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
  textCreds.innerHTML = String(getTotalCredits(coursesFiltered));
}
  
btnfilterByName.onclick = () => applyFilterByName();
