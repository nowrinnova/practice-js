let itemsContainerElement=document.querySelector('.items-container');
let item={
    item_image:'images/1.jpg',
    rating:{
        stars: 4.5,
        noOfReviews:1400,

    },
    company_name:'calton London',
    item_name:'Rodihum-plated CZ Floral Studes',
    price:{
        current_price:'Rs 606',
        original_price:'Rs 1045',
        discount:'(42% Off)',
    },
}
itemsContainerElement.innerHTML =`<div class="item-container">
<img class="item-img" src="${item.item_image}" alt="item-picture">
<div class="rating">
   ${item.rating.stars} ⭐ 5 | ${item.rating.noOfReviews}
</div>
<div class="company-name">${item.company_name}</div>
<div class="item-name">${item.item_name}</div>
<div class="price">
    <span class="current-price">${item.price.current_price}</span>
    <span class="original-price">${item.price.original_price_price}</span>
    <span class="discount">${item.price.discount}</span>
</div>
<button class="btn-add-bag">Add to Cart</button>
</div>`;