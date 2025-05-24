// Select all certificate buttons
  const buttons = document.querySelectorAll('.certificate-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the sibling certificate image within the same card-body
      const cardBody = button.parentElement;
      const certificate = cardBody.querySelector('.certificate-image');

      if (certificate) {
        // Toggle display
        if (certificate.style.display === 'none' || certificate.style.display === '') {
          certificate.style.display = 'block';
          button.textContent = 'Hide Certificate';
        } else {
          certificate.style.display = 'none';
          button.textContent = 'Show Certificate';
        }
      }
    });
  });