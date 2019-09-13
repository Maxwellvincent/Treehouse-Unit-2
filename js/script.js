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
window.onload=function() {
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

      for (var i = 0; i < list.length; i += 1) {
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
      // grabs total number of pages by taking amount in list / by amount of pages and then rounding the number up so that decimals wont occur.
      const totalPages = Math.ceil(list.length/ perPage);
      // creating a div and unorder list to be appended to the main div.
      const div = document.createElement("DIV");
      const uL = document.createElement("UL");
      // setting pagination class to div
      div.setAttribute("class","pagination");
      div.appendChild(uL);
      divPage.appendChild(div);
      
      // Creating a for loop to index through all pages
      for (var i = 1; i <= totalPages; i += 1) {

         // creating li and a elements to each page of the pagination.
         const listItem = document.createElement("li");
         const anchor = document.createElement("a");

         // creating text content to be placed within the anchor tag, along with setting attributes within the anchor element
         anchor.textContent = i;
         anchor.setAttribute('href','#');

         // appending the a tage to the list item, and the list item to the pagination div.
         listItem.appendChild(anchor);
         uL.appendChild(listItem);

          // Making sure that the first page is set to active. 
          if(anchor.textContent === 1) {
            anchor.className = "active";
         }

         // adding a click event listener to each a tag that get loops through
         anchor.addEventListener("click", (e) => {
            // Select all element that has the class of active
            let activeElement = document.querySelectorAll('.active');
            // Removing the active class thats placed on any element, and then setting active to the element that has been clicked. 

            for (let i = 0; i < activeElement.length; i += 1){
               activeElement[i].classList.remove('active');
               e.target.className = 'active';
            }
            // Running the show page function, with what ever page has been clicked. 
            showPage(showList, e.target.textContent);
         });
         
      }

   }

   showPage(showList,1);
   appendPageLinks(showList);
}



// Remember to delete the comments that came with this file, and replace them with your own code comments.