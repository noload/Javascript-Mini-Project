let toastBox = document.getElementById('toast-box');
let successMsg = `<i class='bx bxs-check-circle'></i>Successfully submited`
let errorMsg = `<i class='bx bx-error'></i> Please fix the error`
let invalidMsg = `<i class='bx bxs-error'></i>Invalid input,check again`
function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML=msg
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error')
    }

    if (msg.includes('invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}

