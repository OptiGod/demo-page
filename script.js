let totalAmount = 0;

function addToCart(price) {
    totalAmount += price;
    document.getElementById('total').innerText = totalAmount;
    localStorage.setItem('totalAmount', totalAmount);
}

function showPaymentOptions() {
    document.getElementById('payment-options').classList.remove('hidden');
}

function showAccountInfo() {
    document.getElementById('account-info').classList.remove('hidden');
    showPaymentModal('계좌이체가 완료되었습니다. ' + totalAmount + '원을 계좌로 옮겼어요');
}

function processCardPayment() {
    showPaymentModal('카드 결제가 완료되었습니다. ' + totalAmount + '원을 결제했습니다');
}

function showPaymentModal(message) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('payment-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function resetAmount() {
    totalAmount = 0;
    document.getElementById('total').innerText = totalAmount;
    localStorage.setItem('totalAmount', totalAmount);
    document.getElementById('payment-options').classList.add('hidden');
    document.getElementById('account-info').classList.add('hidden');
}

// 페이지 로드 시 저장된 금액을 불러오기
window.onload = function() {
    if (localStorage.getItem('totalAmount')) {
        totalAmount = parseInt(localStorage.getItem('totalAmount'));
        document.getElementById('total').innerText = totalAmount;
    }
}