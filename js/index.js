//show cart

const cartPage = document.querySelector('.cart-page');
const cartBtn = document.querySelector('.cartBtn');
let closeBtn = document.querySelector('.close-btn');
let success = document.querySelector('.success-msg');
let clearCart = document.querySelector('.clear-cart');
const cartItems = document.querySelector('.cart-div');


cartBtn.addEventListener('click', () => {
    cartPage.classList.toggle('show-cart');
})
    
closeBtn.addEventListener('click', () => {
    cartPage.classList.toggle('show-cart');
        
})

const successMsg = () => {
    success.style.display = "block";
    success.innerHTML = `Item added successfully`;
    setTimeout(()=> {success.remove()}, 1500)
}


//add items to cart

const addBtn = document.querySelectorAll('.item-add');
const item = {};

addBtn.forEach(btn => {
    
    btn.addEventListener('click', e => {
        // console.log(e.target);
       
      if(e.target.parentElement.classList.contains('item-add')) {
            let itemName = e.target.parentElement.nextElementSibling.children[0].textContent;
            let domPrice = e.target.parentElement.nextElementSibling.children[1].textContent;
            let itemPrice = domPrice.slice(1);

            item.name = itemName;
            item.price = itemPrice;

            // console.log(item);

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-info');


            cartItem.innerHTML = `
            
                <div class="cart-item-name">
                    ${item.name}
                </div>

                <input type="number" class="cart-counter">

                <div class="cart-item-delete">×</div>

                <div class="cart-item-full-price">
                    <div class="cart-item-price">$${item.price}</div>
                </div>
            `
        ;
                
        //select cart
        const newCart = document.querySelector('.cart-page');
        const total = document.querySelector('.total');

        cartItems.appendChild(cartItem);
        newCart.insertBefore(cartItems, total);
        

        successMsg();
        } 

       
        //show total
        const showTotal = () => {
            const total =[];
            const items = document.querySelectorAll('.cart-item-price');
            const quantityElement = document.querySelectorAll('.cart-counter');

            items.forEach(e => {
                // console.log(e.textContent)
                e.textContent.slice(1);
                total.push(parseFloat(e.textContent.replace('$', '')));
            });

            // console.log(total);

            let quantity = quantityElement.value;

            const totalMoney = total.reduce((total, item) => {
                total += item * quantity;
                return total;
            }, 0)

            const finalMoney = totalMoney.toFixed(2);
            // console.log(finalMoney);
            document.querySelector('.show-price').textContent = finalMoney;
            document.querySelector('.t-f-p-p').textContent = finalMoney;
            document.querySelector('.item-count').textContent = total.length;
        }
        showTotal();


        })
    })
    

    //remove item
    let removeBtn = document.querySelector('.cart-item-delete');

    function removeItem(e){
        // const cartPage = document.querySelector('.cart-page');
        if(e.target.classList.contains('cart-item-delete')){
            let item = e.target.parentElement;
            cartItems.removeChild(item)
        }   
        // console.log(removeBtn)

        //show total
        const showTotal = () => {
            const total =[];
            const items = document.querySelectorAll('.cart-item-price');

            items.forEach(e => {
                // console.log(e.textContent)
                e.textContent.slice(1);
                total.push(parseFloat(e.textContent.replace('$', '')));
            });

            // console.log(total);

            const totalMoney = total.reduce((total, item) => {
                total -= -item;
                return total;
            }, 0)

            const finalMoney = totalMoney.toFixed(2);
            // console.log(finalMoney);
            document.querySelector('.show-price').textContent = finalMoney;
            document.querySelector('.t-f-p-p').textContent = finalMoney;
            document.querySelector('.item-count').textContent = total.length;

        }
        showTotal();
    }

cartPage.addEventListener('click', removeItem);


//clear cart
const clearCartItems = (e) => {
    
}

clearCart.addEventListener('click', clearCartItems);