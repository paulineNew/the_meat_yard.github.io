// Выберем кнопку и форму
const $button = document.querySelector('.table');
const $form = document.querySelector('.form');
        
// При клике на кнопку
$button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
    $form.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
    });
});