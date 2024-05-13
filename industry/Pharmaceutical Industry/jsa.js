document.addEventListener('DOMContentLoaded', function() {
    var inputFields = document.querySelectorAll('input[type="text"]');
    var overlayForm = document.getElementById('newForm');

    inputFields.forEach(function(input) {
        input.addEventListener('dblclick', function(event) {
            var x = 400; // Change this value to the desired horizontal position
            var y = 200; // Change this value to the desired vertical position

            overlayForm.style.display = 'block';
            overlayForm.style.position = 'fixed';
            overlayForm.style.top = y + 'px';
            overlayForm.style.left = x + 'px';

            var fieldValue = input.value;
            document.getElementById('fieldName').value = fieldValue;
        });
    });

    document.getElementById('closeNewFormBtn').addEventListener('click', function () {
        overlayForm.style.display = 'none';
    });
});
