document.getElementById("hackquiz").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    var script;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            script = this.responseText;
            chrome.tabs.executeScript({
                code: script
            });
        }

    }
    xhr.open("GET", "full_marks.js");
    xhr.send(); 
});