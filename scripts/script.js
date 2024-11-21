window.onload = function() {
    setTimeout(() => {
        document.querySelector('.intro-message').style.display = 'none'; 
        document.querySelector('.coupon-container').classList.remove('hidden'); 
    }, 1500); 
};

function flipCoupon(selectedCoupon) {
    if (selectedCoupon.classList.contains('disabled') || selectedCoupon.classList.contains('flipped')) {
        return;
    }

    const coupons = document.querySelectorAll('.coupon');
    coupons.forEach(coupon => {
        coupon.classList.remove('selected', 'deselected');
        coupon.classList.add('disabled'); 
    });

    selectedCoupon.classList.add('selected', 'flipped', 'disabled');

    coupons.forEach(coupon => {
        if (coupon !== selectedCoupon) {
            coupon.classList.add('deselected');
        }
    });
    
    if(isbirthday===1){
		setTimeout(() => {
        window.location.href = "BirthdayServlet"; 
    }, 3000); // 延迟3秒
	}else{
		setTimeout(() => {
        window.location.href = "MenuServlet"; 
    }, 3000); // 延迟3秒
	}
    
    
};



