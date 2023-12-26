let toastBox = document.getElementById('toast-box');
let successMsg = `Successfully submited`
let errorMsg = `Please fix the error`
let invalidMsg = ``
function showToast() {
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML=`Success`
    toastBox.appendChild(toast);
}