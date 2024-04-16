// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Here you can authenticate the user (e.g., using Firebase Authentication).
        // For simplicity, let's assume the authentication is successful.
        const isAuthenticated = true;

        if (isAuthenticated) {
            showQuestionnaire();
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    function showQuestionnaire() {
        const container = document.querySelector(".container");
        container.innerHTML = `
            <h1>Questionnaire</h1>
            <form id="questionnaire-form">
                <!-- Add your mental health questions here -->
                <label for="question1">How are you feeling today?</label>
                <input type="text" id="question1" name="question1" required>
                <button type="submit">Submit</button>
            </form>
        `;

        const questionnaireForm = document.getElementById("questionnaire-form");
        questionnaireForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const answer = questionnaireForm.question1.value;

            // Based on the user's answer, generate relevant YouTube links.
            // For simplicity, let's assume there's a predefined set of links.
            let youtubeLinks = [];
            if (answer === "stressed") {
                youtubeLinks = ["https://www.youtube.com/watch?v=oHv6vTKD6lg", "https://www.youtube.com/watch?v=JsdvxZg_MsQ"];
            } else if (answer === "anxious") {
                youtubeLinks = ["https://www.youtube.com/watch?v=wgxh1XZhjcg", "https://www.youtube.com/watch?v=T27V8U6FFkA"];
            } else {
                youtubeLinks = ["https://www.youtube.com/watch?v=1ZYbU82GVz4", "https://www.youtube.com/watch?v=j3f8jWIjnd4"];
            }

            // Open YouTube links in new tabs.
            youtubeLinks.forEach(link => window.open(link, "_blank"));
        });
    }
});
