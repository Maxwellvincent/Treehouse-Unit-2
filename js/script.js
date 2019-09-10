/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// Grabs the list of all child Li elements under the parent Ul
const showList = document.querySelectorAll('.student-item');
// Variable for the number of items to show per page
const perPage = 10;
const divPage = document.querySelector(".page");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage (list, page) {
   const startIndex = ( page * perPage) - perPage;
   const endIndex = page * perPage - 1;

   for (let i = 0; i < list.length; i += 1) {
      if( i >= startIndex && i <= endIndex) {
         list[i].style.display = "block";
      } else {
         list[i].style.display = "none";
      }
   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks (list) {
   const totalPages = Math.ceil(list.length/ perPage);
   const div = document.createElement("DIV");
   const uL = document.createElement("UL");
   // const listAnchor = uL.innerHTML = "<li><a class='active' href='#'>" + + "</a></li>";
   div.setAttribute("class","pagination");
   div.appendChild(uL);
   divPage.appendChild(div);

   for (var i = 1; i <= totalPages; i += 1) {
      div.innerHTML += "<li><a class= 'active' href='#'>"+ i +"</a></li>";
   }

}
appendPageLinks(showList);






// function appendPageLinks (list) {
//    const numPages = Math.ceil(list.length / perPage);
//    const div = document.createElement('DIV');
//    div.setAttribute("class","pagination");
//    divPage.appendChild(div);
//    const unorderedList = document.createElement("UL");
//    div.appendChild(unorderedList);
//    const listItem = document.createElement("LI");
//    const anchor = document.createElement("A");

//    for (let i = 0; i < numPages.length; i += 1) {
//       anchor.textContent = i;
//       anchor.setAttribute("href", "#");
//       listItem.appendChild(anchor);
//       div.appendChild(listItem);
//       divPage.appendChild(div);
//    }

//    const allAnchor = document.querySelectorAll("a");
//    // document.querySelectorAll("a")[0].setAttribute("class","active");


//    for (let i = 0; i < allAnchor.length; i += 1) {
//       allAnchor[i].addEventListener("click", (e) => {

//       })
//    }



// div.innerHTML = `
// <ul>
//    <li> <a class"active" href="#">1</a> </li>  
//    <li> <a href="#">2</a> </li>
//    <li> <a href="#">3</a> </li>
//    <li> <a href="#">4</a> </li>

// </ul>
// `
// divPage.appendChild(div);
// }


showPage(showList,1);
// appendPageLinks(showList)





// Remember to delete the comments that came with this file, and replace them with your own code comments.