(function() {
    // Get all checkboxes on the page
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Function to save the checkbox state to localStorage
    function saveState(e) {
    const checkbox = e.target;
    localStorage.setItem(checkbox.id, checkbox.checked);
    }
    
    // Function to load the checkbox state from localStorage
    function loadState(checkbox) {
    const checked = JSON.parse(localStorage.getItem(checkbox.id));
    checkbox.checked = checked || false;
    }
    
    // Attach event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
    loadState(checkbox);
    checkbox.addEventListener('change', saveState);
    });
    })();
    function increaseCount() {
        var count = parseInt(document.getElementById("counter").textContent);
        count += 1;
        document.getElementById("counter").textContent = count;
      }
      