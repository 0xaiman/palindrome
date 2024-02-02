document.addEventListener("DOMContentLoaded",()=>{
    (function (){
        const textInput = document.getElementById("text-input");
        const checkBtn = document.getElementById("check-btn");
        const resultDiv = document.getElementById("result");

        checkBtn.addEventListener("click",()=>{
            if(textInput === ''){
                alert("Please input a value.")
            }else{
                var cleanedStr = filterAlphanumeric(textInput.value).toLowerCase();
                var isPalindrome = checkPalindrome(cleanedStr);
    
                resultDiv.innerHTML = isPalindrome ? textInput.value + " is a palindrome." : textInput.value + " is not a palindrome." 
                
    
            }
    
            function filterAlphanumeric(str){
                placeholderStr = '';
                for(let i=0; i<str.length ; i++){
                    if((str[i]>='a'&& str[i]<='z')|| (str[i]>='A'&& str[i]<='Z')||(str[i]>='0'&& str[i]<='9')){
                    placeholderStr+=str[i];
    
                    }
                }
    
                return placeholderStr;
    
            }
    
            function checkPalindrome(str){
                let reversedStr = str.split('').reverse().join('');
    
                return str === reversedStr;
    
            }

        })

      

 
        })();
});


