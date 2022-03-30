const floverClicks = document.querySelectorAll('.flover__cart__wrapper');
console.log(floverClicks);
Object.values(floverClicks).map(floverClick => {
    floverClick.onclick = function (event) {
        console.log(event.currentTarget);

        floverClick.classList.toggle('flover__cart__wrapper-active');


        const floverCart = event.currentTarget.querySelector('.flover__cart');

        floverCart.classList.toggle('flover__cart-active');



        const floverImg = event.currentTarget.querySelector('.flover__cart-img');

        floverImg.classList.toggle('flover__cart-img-active');

    };
});
