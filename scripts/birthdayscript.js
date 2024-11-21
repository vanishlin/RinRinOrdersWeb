window.onload = function() {
    
    setTimeout(() => {
        document.querySelector('.coupon-container').classList.remove('hidden'); // 显示优惠券
        flipAllCoupons(); 
    }, 500); 
};

function flipAllCoupons() {
    const coupons = document.querySelectorAll('.coupon');
    
    coupons.forEach((coupon, index) => {
        setTimeout(() => {
            coupon.classList.add('flipped'); 
        }, index * 200); 
    });
   
    setTimeout(() => {
        document.querySelector('.coupon-container').style.display = 'none'; 
        document.getElementById('message').style.display = 'block'; 
    }, coupons.length * 400); 
    
}