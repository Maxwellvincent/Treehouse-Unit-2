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
   const divPageHeader = document.querySelector(".page-header");
   const mainList = document.querySelector(".student-list");

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


   // Create a Div element, append input and button elements to that div, add specific Ids to the seach and submit elements.
const searchDiv = document.createElement("DIV");
const searchBar = document.createElement("input");
const submitButton = document.createElement("button");
searchDiv.className = "student-search";
searchBar.setAttribute("placeholder","Search for students...");
searchBar.setAttribute("id", "search-input");
submitButton.setAttribute("id", "submit");
submitButton.textContent = "Sumbit";
searchDiv.appendChild(searchBar);
searchDiv.appendChild(submitButton);
divPageHeader.appendChild(searchDiv);

const userSearch = document.querySelector("#search-input");
const userSubmit = document.querySelector("#submit");

function studentFilter (userInput, search) {
   var li, listText, i, txtValue;
   var filter = userSearch.value.toLowerCase();
   console.log(filter);
   //  grabbing all li within the Ul of mainList
    li = mainList.getElementsByTagName("li");
   console.log(li);
   // looping through all of the li elements
    for ( var i = 0; i < li.length; i += 1){
      //  grabbing the innertext of each list item and setting it equal to itemText
      listText = li[i].firstElementChild.getElementsByTagName("h3")[0];
      txtValue = listText.textContent || listText.innerText;
      console.log(txtValue);
      if(txtValue.toLowerCase().indexOf(filter) != -1){
         li[i].style.display = "";
      } else {
         li[i].style.display = "none";
      }
    }
}

// Click events for keyup on search bar
userSearch.addEventListener("keyup", (e) => {
   studentFilter(e.target.value, showList);

})
// Click event for sumbit on search bad
userSubmit.addEventListener("submit", (e) => {
   studentFilter(e.target.value, showList);
})

