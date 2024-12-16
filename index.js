    const openPopupButton = document.querySelector('.open-popup');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-button');

    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'flex'; 
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none'; 
        }
    });


    