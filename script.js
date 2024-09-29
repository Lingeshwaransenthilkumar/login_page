document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById('logo');
    const img = document.getElementById('img');
    const loginPage = document.getElementById('loginPage');
    const container = document.querySelector('.container');

    // First phase: Display and animate the logo
    logo.style.opacity = 1;
    setTimeout(() => {
        logo.style.opacity = 0;
    }, 2000); 

    // Second phase: Image zooms from center
    setTimeout(() => {
        img.style.opacity = 1;
        img.style.animation = "imageZoom 2.5s forwards";
    }, 2500); 

    // Third phase: Logo reappears with a circle background
   
     setTimeout(() => {
        logo.classList.add('logo-circle');
        logo.style.opacity = 1;
    }, 2600); 
    

    // Fourth phase: Transition to flex layout and move logo to the left
    setTimeout(() => {
        container.classList.add('flex-layout');

        const leftSection = document.createElement('div');
        leftSection.classList.add('left-section');
        leftSection.appendChild(logo);
        leftSection.appendChild(loginPage);

        const rightSection = document.createElement('div');
        rightSection.classList.add('right-section');

        container.innerHTML = '';
        container.appendChild(leftSection);
        container.appendChild(rightSection);

        setTimeout(() => {
            logo.classList.remove('logo-circle');
        }, 2000); 
        // Show the login page after the logo moves
        setTimeout(() => {
            loginPage.style.display = 'block';
            loginPage.style.opacity = 1;
        }, 2000); 
    }, 7000); 
});


// handling Login button
function handleLogin() {
    const loginText = document.getElementById('loginText');
    const loader = document.getElementById('loader');
    
    loginText.style.opacity = '0';
    loader.style.display = 'block';
  
    setTimeout(() => {
      loader.style.display = 'none';
      loginText.style.opacity = '1';

      location.reload();

  
    }, 3000); 
  }