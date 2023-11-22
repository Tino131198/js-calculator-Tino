const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

document.addEventListener('DOMContentLoaded', function () {

    function preventEnterSubmit(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }


    buttons.forEach(button => {
        button.addEventListener('keydown', preventEnterSubmit);
    });
});

let geschiedenis = '';
let geschiedenisarray = [];
let optellen = -1;
let opnieuw;
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.id === 'clear') {
            display.innerText = '';
            geschiedenis = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
            geschiedenis = display.innerText;
        } else if (display.innerText !== '' && item.id === 'equal') {
            try {
                const result = eval(display.innerText);
                if (isNaN(result) || !isFinite(result)) {
                    throw new Error('Ongeldige invoer');
                }
                display.innerText = result;
                geschiedenis += '=' + result + '\n';
                geschiedenisarray.push(geschiedenis);
                geschiedenis = '';
                optellen++;
                opnieuw = optellen;
            } catch (error) {
                display.innerText = 'Fout: Ongeldige invoer';
                geschiedenis = '';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Vul wat in';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
            geschiedenis += item.id;
        }
    });
});


document.addEventListener('keydown', function(event){
    switch(event.key){
        case '1':
            display.innerText += 1;
            geschiedenis += '1';
            break;
        case '2':
            display.innerText += 2;
            geschiedenis += '2';
            break;
        case '3':
            display.innerText += 3;
            geschiedenis += '3';
            break;
        case '4':
            display.innerText += 4;
            geschiedenis += '4';
            break;
        case '5':
            display.innerText += 5;
            geschiedenis += '5';
            break;
        case '6':
            display.innerText += 6;
            geschiedenis += '6';
            break;
        case '7':
            display.innerText += 7;
            geschiedenis += '7';
            break;
        case '8':
            display.innerText += 8;
            geschiedenis += '8';
            break;
        case '9':
            display.innerText += 9;
            geschiedenis += '9';
            break;
        case '0':
            display.innerText += 0;
            geschiedenis += '0';
            break;
        case 'Backspace':
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
            geschiedenis = display.innerText;
            break;
        case 'Enter':
        case '=':
            if(display.innerText != ''){
                try {
                    const result = eval(display.innerText);
                    if (isNaN(result) || !isFinite(result)) {
                        throw new Error('Ongeldige invoer');
                    }
                    display.innerText = result;
                    geschiedenis += '=' + result + '\n';
                    geschiedenisarray.push(geschiedenis);
                    geschiedenis = '';
                    optellen++;
                    opnieuw = optellen;
                } catch (error) {
                    display.innerText = 'Fout: Ongeldige invoer';
                    geschiedenis = '';
                    setTimeout(() => (display.innerText = ''), 2000);
                }
                break;
            }
            else{
                display.innerText = 'Vul wat in';
                setTimeout(() => (display.innerText = ''), 2000)
                break;
            }
            break;
        case 'c':
        case 'C':
             display.innerText = '';
             geschiedenis = '';
             break;
        case '-':
             display.innerText += '-';
             geschiedenis += '-';
             break;
        case '+':
            display.innerText += '+';
            geschiedenis += '+';
            break;
        case '*':
        case 'x':
        case 'X':
            display.innerText += '*';
            geschiedenis += '*';
            break;
        case ':':
        case '/':
            display.innerText += '/';
            geschiedenis += '/';
            break;
        case '(':
            display.innerText += '(';
            geschiedenis += '(';
            break;
        case ')':
            display.innerText += ')';
            geschiedenis += ')';
            break;
        case 'g':
        case 'G':
            vorige();
      }
})

function vorige() {

    display.innerText = geschiedenisarray[optellen];
    if(!geschiedenisarray[optellen]){
        display.innerText = 'Geen geschiendenis meer'
        setTimeout(() => (display.innerText = ''), 2000);
        optellen = opnieuw;
    }
    else{
    console.log(geschiedenisarray[optellen]);
    console.log(opnieuw);
    optellen--;
    }
}