const inputEl = document.getElementById('text-input');
const checkButtonEl = document.getElementById('check-btn');
const resultEl = document.getElementById('result');
const errorMsg = document.getElementById('error-msg');
const resetBtnEl = document.getElementById('reset-btn')

checkButtonEl.addEventListener('click', checkPalindrome())
function checkPalindrome(e){
    e.preventDefault()

    let inputText = inputEl.value.trim()
    errorMsg.textContent = "";

    if(!inputText){
        errorMsg.textContent = "Please enter some text";
        return;
    }

    const cleanedText = cleanText(inputText)
    const reversedText = reverseText(cleanedText)

    const isPalindrome = cleanedText === reversedText;

    displayResult(isPalindrome)
}

function cleanText(text){
    return text.toLowerCase().replace(/[^a-z0-9]/g,'')
}

function reverseText(text){
    return text.split('').reverse().join('')
}

function displayResult(isPalindrome){
    let inputText = inputEl.value.trim()
    resultEl.textContent = ""
    resultEl.classList.remove('hidden', 'success', 'error')

    if(isPalindrome){
        resultEl.textContent = `Yes! "${inputText}" is a palindrome`
        resultEl.classList.add('success')
    }else{
        resultEl.textContent = `No! "${inputText}" is not a palindrome`
        resultEl.classList.add('error')
    }
}

function clearChecker(){
    resetBtnEl.addEventListener('click', function(e){
        e.preventDefault()
        inputEl.value = "";
        resultEl.classList.add('hidden')
        resultEl.classList.remove('success')
        resultEl.classList.remove('error')
        errorMsg.textContent = ""
    })
}

inputEl.addEventListener('input', function(){
    errorMsg.textContent = ""
})



clearChecker()