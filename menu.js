function showService(mealId) {
    const sections = document.querySelectorAll('.meal-section');
    sections.forEach(section => {
        section.style.display = 'none';
    })
    document.getElementById(mealId).style.display = 'block';
}