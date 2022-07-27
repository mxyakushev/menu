const foodItem = document.querySelectorAll('.food__item');
const button = document.querySelectorAll('.menu__btn');

button.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.classList[1]) {
            case 'menu__breakfast-btn': {
                hideFunction('breakfast');
                break;
            }
            case 'menu__lunch-btn': {
                hideFunction('lunch');
                break;
            }
            case 'menu__shakes-btn': {
                hideFunction('shakes');
                break;
            }
            case 'menu__dinner-btn': {
                hideFunction('dinner');
                break;
            }
            case 'menu__all-btn': {
                hideFunction('food__item');
                break;
            }
            default: {
                alert('Press the button again');
            }
        }
    });
})

function hideFunction(className){
    foodItem.forEach(item => {
        if(!item.classList.contains(className)){
            item.classList.add('hide');
        }
        else {
            item.classList.remove('hide');
        }
    })
}
