document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle switch element
    const toggleSwitch = document.getElementById('flexSwitchCheckChecked');

    // Get the form elements that need to be toggled
    const employeeFields = document.querySelectorAll('.employee-field');
    const hirerFields = document.querySelectorAll('.hirer-field');

    // Get the heading element to be updated
    const heading = document.querySelector('h2');

    // Function to toggle the form fields and heading based on toggle switch state
    function toggleFormFields() {
        if (toggleSwitch.checked == false) {
            // If toggle switch is checked (Employee mode), show employee fields and hide hirer fields
            employeeFields.forEach(field => {
                field.style.display = 'block';
            });
            hirerFields.forEach(field => {
                field.style.display = 'none';
            });
            // Update the heading text
            heading.textContent = 'Apply as an Employee';
        } else {
            // If toggle switch is unchecked (Hirer mode), show hirer fields and hide employee fields
            employeeFields.forEach(field => {
                field.style.display = 'none';
            });
            hirerFields.forEach(field => {
                field.style.display = 'block';
            });
            // Update the heading text
            heading.textContent = 'Apply as a Hirer';
        }
    }

    // Initial call to toggle form fields and heading based on initial state of the toggle switch
    toggleFormFields();

    // Event listener for changes in the toggle switch state
    toggleSwitch.addEventListener('change', toggleFormFields);
});