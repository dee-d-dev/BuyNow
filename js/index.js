//show cart
(() => {
    const cartPage = document.querySelector('.cart-page');

    const cartBtn = document.querySelector('.cartBtn') ;

    cartBtn.addEventListener('click', () => {
        cartPage.classList.toggle('show-cart');
    })
})();

//add items to cart
(() => {
    const addBtn = document.querySelectorAll('.item-add');

    addBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            // console.log(e.target);

            if(e.target.parentElement.classList.contains('item-add')) {
                let itemName = e.target.parentElement.nextElementSibling.children[0].textContent;
                let domPrice = e.target.parentElement.nextElementSibling.children[1].textContent;
                let itemPrice = domPrice.slice(1);

                const item = {};
                item.name = itemName;
                item.price = itemPrice;

                // console.log(item)

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-info');
                cartItem.innerHTML = `
                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div class="cart-item-delete">×</div>

                    <div class="cart-item-price">
                        ${item.price}
                    </div>`
                ;
                
                //select cart
                const newCart = document.querySelector('.cart-page');
                const total = document.querySelector('.total');

                newCart.insertBefore(cartItem, total);
                alert('Item added successfully')
            } 

            //show total
            const showTotal = () => {
                const total =[];
                const items = document.querySelectorAll('.item-price');

                items.forEach(e => {
                    e.textContent.slice(1);
                    total.push(parseFloat(e.textContent));
                });

                // console.log(total);

                const totalMoney = total.reduce((total, item) => {
                    total += item;
                    return total;
                }, 0)

                console.log(totalMoney);
                document.querySelector('.cartBtn').textContent = totalMoney;
                document.querySelector('.cartBtn').textContent = totalMoney;
                document.querySelector('.cartBtn').textContent = totalMoney;

            }
            showTotal();


        })
    })
    
})();