window.addEventListener("load", () => {
    setTimeout(() => {      
        console.log("Job Auto Apply Script Running...");

        // Helper function to fill an input field if empty
        function fillInput(input, value) {
        if (!(input.disabled && input.value.trim() === "")) {
            input.value = value;
        }
        }

        // Retrieve stored user details from Chrome storage
        chrome.storage.sync.get("userDetails", (data) => {
        if (!data.userDetails) {
            console.log("No user details found. Please set up your details via the extension popup.");
            return;
        }
        
        const userDetails = data.userDetails;

        // Fill standard single fields
        const inputs = document.querySelectorAll("input, textarea, select");
        inputs.forEach(input => {
            const fieldText = (input.placeholder|| input.closest('label').innerHTML || "").toLowerCase();

            if (fieldText.includes("first") && fieldText.includes("name") && userDetails.firstName) {
            fillInput(input, userDetails.firstName);
            } 
            else if (fieldText.includes("last") && fieldText.includes("name") && userDetails.lastName) {
                fillInput(input, userDetails.lastName);
            } 
            else if (fieldText.includes("name") && userDetails.firstName && userDetails.lastName) {
                fillInput(input, userDetails.firstName + " " + userDetails.lastName);
            } 
            else if (fieldText.includes("email") && userDetails.email) {
            fillInput(input, userDetails.email);
            } 
            else if ((fieldText.includes("phone") || fieldText.includes("contact")) && userDetails.phone) {
            fillInput(input, userDetails.phone);
            } 
            else if (fieldText.includes("address") && userDetails.address) {
            fillInput(input, userDetails.address);
            } 
            else if (fieldText.includes("city") && userDetails.city) {
            fillInput(input, userDetails.city);
            } 
            else if (fieldText.includes("state") && userDetails.state) {
            fillInput(input, userDetails.state);
            } 
            else if ((fieldText.includes("zip") || fieldText.includes("postal")) && userDetails.zip) {
            fillInput(input, userDetails.zip);
            } 
            else if (fieldText.includes("country") && userDetails.country) {
            fillInput(input, userDetails.country);
            } 
            else if (fieldText.includes("linkedin") && userDetails.linkedin) {
            fillInput(input, userDetails.linkedin);
            } 
            else if (fieldText.includes("cover letter") && userDetails.coverLetter) {
            fillInput(input, userDetails.coverLetter);
            }
        });

        // Handle multiple education fields:
        /*const eduFields = Array.from(document.querySelectorAll("input, textarea, select")).filter(el => {
            const text = (el.name || el.id || el.placeholder || "").toLowerCase();
            return text.includes("education") || text.includes("university");
        });
        if (eduFields.length > 1 && userDetails.education && Array.isArray(userDetails.education)) {
            eduFields.forEach((el, i) => {
            if (userDetails.education[i]) {
                el.value = userDetails.education[i];
            }
            });
        } else if (eduFields.length === 1 && userDetails.education && Array.isArray(userDetails.education)) {
            // If only one education field exists, join multiple entries
            eduFields[0].value = userDetails.education.join("\n");
        }*/

        // Handle multiple experience fields:
        /*const expFields = Array.from(document.querySelectorAll("input, textarea, select")).filter(el => {
            const text = (el.name || el.id || el.placeholder || "").toLowerCase();
            return text.includes("experience") || text.includes("work history") || text.includes("employment");
        });
        if (expFields.length > 1 && userDetails.experience && Array.isArray(userDetails.experience)) {
            expFields.forEach((el, i) => {
            if (userDetails.experience[i]) {
                el.value = userDetails.experience[i];
            }
            });
        } else if (expFields.length === 1 && userDetails.experience && Array.isArray(userDetails.experience)) {
            // If only one experience field exists, join multiple entries
            expFields[0].value = userDetails.experience.join("\n");
        }*/

        console.log("Job application form auto-filled (if matching fields were found).");
        });
    }, 5000);
});
