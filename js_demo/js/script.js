function askQuestion() {
    var q = prompt('yes or no')
    if (q != 'maybe') {
        document.getElementById('question').innerHTML='your answer: ' + q + '; the correct answer is: maybe';
    } else {
        document.getElementById('question').innerHTML='you got it correct!' ;
        
    }
}

function showImage() {
    var image=document.getElementById('button');
    image.src = "images/button.jpg"
}

