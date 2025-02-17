// Add Education field dynamically
/*document.getElementById("addEducation").addEventListener("click", () => {
    const container = document.getElementById("educationContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "educationEntry";
    input.placeholder = "Enter education details";
    container.appendChild(input);
  });
  
  // Add Experience field dynamically
  document.getElementById("addExperience").addEventListener("click", () => {
    const container = document.getElementById("experienceContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "experienceEntry";
    input.placeholder = "Enter work experience";
    container.appendChild(input);
  });*/
  
  // Save details to Chrome storage
  document.getElementById("save").addEventListener("click", () => {
    // Collect values from standard fields
    const userDetails = {
      fullName: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      country: document.getElementById("country").value,
      linkedin: document.getElementById("linkedin").value,
      coverLetter: document.getElementById("coverLetter").value,
      // Gather all education entries into an array
      /*education: Array.from(document.getElementsByClassName("educationEntry"))
                  .map(input => input.value)
                  .filter(val => val.trim() !== ""),
      // Gather all experience entries into an array
      experience: Array.from(document.getElementsByClassName("experienceEntry"))
                  .map(input => input.value)
                  .filter(val => val.trim() !== "")*/
    };
  
    chrome.storage.sync.set({ userDetails }, () => {
      alert("Details saved successfully!");
    });
  });
  
  // Load saved details when the popup opens
  chrome.storage.sync.get("userDetails", (data) => {
    if (data.userDetails) {
      const details = data.userDetails;
      document.getElementById("firstName").value = details.firstName || "";
      document.getElementById("lastName").value = details.lastName || "";
      document.getElementById("email").value = details.email || "";
      document.getElementById("phone").value = details.phone || "";
      document.getElementById("address").value = details.address || "";
      document.getElementById("city").value = details.city || "";
      document.getElementById("state").value = details.state || "";
      document.getElementById("zip").value = details.zip || "";
      document.getElementById("country").value = details.country || "";
      document.getElementById("linkedin").value = details.linkedin || "";
      document.getElementById("coverLetter").value = details.coverLetter || "";
  
      // Load Education entries
      /*const eduContainer = document.getElementById("educationContainer");
      eduContainer.innerHTML = ""; // clear default input
      if (details.education && details.education.length) {
        details.education.forEach(edu => {
          const input = document.createElement("input");
          input.type = "text";
          input.className = "educationEntry";
          input.placeholder = "Enter education details";
          input.value = edu;
          eduContainer.appendChild(input);
        });
      } else {
        // Add one default input if none exists
        const input = document.createElement("input");
        input.type = "text";
        input.className = "educationEntry";
        input.placeholder = "Enter education details";
        eduContainer.appendChild(input);
      }
  
      // Load Experience entries
      const expContainer = document.getElementById("experienceContainer");
      expContainer.innerHTML = "";
      if (details.experience && details.experience.length) {
        details.experience.forEach(exp => {
          const input = document.createElement("input");
          input.type = "text";
          input.className = "experienceEntry";
          input.placeholder = "Enter work experience";
          input.value = exp;
          expContainer.appendChild(input);
        });
      } else {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "experienceEntry";
        input.placeholder = "Enter work experience";
        expContainer.appendChild(input);
      }*/
    }
  });
  