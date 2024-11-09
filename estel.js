let isProduct3ButtonPushed = false;

// Somewhere in the code, an event changes the value of isProduct3ButtonPushed
document.getElementById('product3Button').addEventListener('click', function() {
    isProduct3ButtonPushed = true;
});

// Later in the code, we check if the button was pushed
if (isProduct3ButtonPushed) {
    console.log("Product 3 button was pushed!");
    // Additional code to handle the button being pushed
}
