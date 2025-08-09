// wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function(){

    // shortcut to all the filter buttons in the HTML
    let btnFilters = document.querySelectorAll(".FilterBtn");

    // shortcut to all the gallery items in the Gallery section
    let divGalleryItems = document.querySelectorAll("#Gallery .GalItem");

    // function to apply the selected filter
    function applyFilter(category){
        // convert the category to lowercase for easy matching
        let selectedCategory = category.toLowerCase();

        // loop through each gallery item
        divGalleryItems.forEach(function(item){
            // get the category for the current gallery item
            let itemCategory = item.dataset.category.toLowerCase();

            // if "all" is selected or the item's category matches, show it; otherwise hide it
            if (selectedCategory === "all" || itemCategory === selectedCategory){
                item.style.display = ""; // show item
            } else {
                item.style.display = "none"; // hide item
            }
        });
    }

    // loop through each filter button and set up a click event
    btnFilters.forEach(function(button){
        button.addEventListener("click", function(){
            // remove the active class from all buttons
            btnFilters.forEach(function(btn){
                btn.classList.remove("active");
            });

            // add the active class to the clicked button
            button.classList.add("active");

            // apply the filter based on the clicked button's data-category
            applyFilter(button.dataset.category);
        });
    });

    // run the filter on page load to show all items by default
    applyFilter("All");
});
