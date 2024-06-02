document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data using AJAX
    $.ajax({
        url: 'scripts/loaded.json',
        dataType: 'json',
        success: function(data) {
            // Get the portfolio container element
            var aboutTextContainer = document.getElementById('about_section_card');
            
            // Check if the portfolio container exists
            if (aboutTextContainer) {
                // Iterate over each item in the JSON data
                data.forEach(function(item) {
                    // Create HTML for the card
                    var aboutTextHTML = `
                    <p class="about_title">${item.title}</p>
                        <p id="about_text">
                            ${item.description}
                        </p>
                    `;
                    
                    // Append the card HTML to the portfolio container
                    aboutTextContainer.innerHTML += aboutTextHTML;
                });
            } else {
                console.error('Container not found in the DOM');
            }

        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
});
