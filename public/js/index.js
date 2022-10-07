const email = document.getElementById("email")
const submitBtn = document.getElementById("fakeBtn")

submitBtn.addEventListener('click', function(){
    console.log(email.value)
    submitBtn.style.color = "#FF0000"
})


