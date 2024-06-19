
document.addEventListener("DOMContentLoaded", function () {
    // Function for form submission
    function handleSubmit(event) {

        // Prevent default submission
        event.preventDefault();

        // Access elements
        let formtar = event.target;
        let formData = new FormData(formtar);

        // Display element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }