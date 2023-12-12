let itemContainerElement=document.querySelector('.items-container');
itemContainerElement.innerHTML =`<div class="item-container">
<img class="item-img" src="images/1.jpg" alt="item-picture">
<div class="rating">
    4.5 ⭐ 5 | 1.4k
</div>
<div class="company-name">calton London</div>
<div class="item-name">Rodihum-plated CZ Floral Studes</div>
<div class="price">
    <span class="current-price">Rs 606</span>
    <span class="original-price">Rs 1045</span>
    <span class="discount">(42% Off)</span>
</div>
<button class="btn-add-bag">Add to Cart</button>
</div>`;