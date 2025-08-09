// wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function(){

    // Create Shortcuts
    let btnFilters = document.querySelectorAll(".FilterBtn");
    let divGalleryItems = document.querySelectorAll("#Gallery .GalItem");

    // Create a function to apply the filter
    function applyFilter(category){
        // change the words in the data-category in the Filterbtn class to all lowercase so it is easyier to call them in the js script
        let selectedCategory = category.toLowerCase();

        // Check each gallery item if it matches the correct data category tag
        //if it matches then it will be shown and if it doesnt it will be hidden
        divGalleryItems.forEach(function(item){
            let itemCategory = item.dataset.category.toLowerCase();
            
            //If All is selected then it will display all of the gallery but if a differnt filter is selected it will only display approriate items.
            if (selectedCategory === "all" || itemCategory === selectedCategory){
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Setup a click event for each button
    btnFilters.forEach(function(button){
        button.addEventListener("click", function(){

            // Once a new button is selected reset the active button so the style doesn't show it as still selected
            btnFilters.forEach(function(btn){
                btn.classList.remove("active");
            });

            // Make it so the new button that was just clicked now shows the Selected styling
            button.classList.add("active");

            //apply the filter so that the data catergory matches the right item
            applyFilter(button.dataset.category);
        });
    });

    // make it so when you first click on gallery the All filter is automatically selected by defualt
    applyFilter("All");
});
