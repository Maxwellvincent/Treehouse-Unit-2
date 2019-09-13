/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Grabs the list of all child Li elements under the parent Ul

   const showList = document.querySelectorAll('.student-item');
// Variable for the number of items to show per page
   const perPage = 10;
   const divPage = document.querySelector(".page");

// Function that creates a list of items to be shown on the page

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

// Function that creates a, li, ul, and a div to appened to main div of page. 

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

         // setting the first li element to active
         if(anchor.textContent == 1) {
            anchor.className = "active";
         }
         anchor.setAttribute('href','#');

         // appending the a tag to the list item, and the list item to the pagination div.
         listItem.appendChild(anchor);
         uL.appendChild(listItem);
      
         
         // adding a click event listener to each a tag that get loops through
         anchor.addEventListener("click", (e) => {
            // Select all element that has the class of active
            let activeElement = document.querySelectorAll('.active');
            // Removing the active class thats placed on any element, and then setting active to the element that has been clicked. 

            for (let i = 0; i < activeElement.length; i += 1){
               activeElement[i].classList.remove('active');
            };
            // Running the show page function, with what ever page has been clicked. 
            showPage(showList, e.target.textContent);
            e.target.className = 'active';
         });
      }
   }
   showPage(showList,1);
   appendPageLinks(showList);
