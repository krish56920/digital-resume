// Function to show more info about 'About Me' section
function showMoreInfo() {
    alert('I am passionate about coding and problem solving. I enjoy working on IoT and software development projects.');
  }
  
  // Function to show more details about a specific skill
  function showSkill(skill) {
    alert(`You selected: ${skill}. I have extensive experience working with this skill in various projects.`);
  }
  
  // Function to view project details
  function viewProjectDetails(projectName) {
    alert(`More information about the ${projectName} project: \nThis project involved complex problem solving and hands-on coding.`);
  }
  
  // Contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const num = document.getElementById('num').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  