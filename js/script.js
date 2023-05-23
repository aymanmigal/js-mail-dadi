const email = [
    'aymanmigal@gmail.com',
    'giovannibarone@gmail.com',
    'michelavisaggi@gmail.com',
    'carmelamontesano@gmail.com'
];

let mailUtente = prompt('Inserisci la tua mail');
let emailFound = false;



for(let i=0; i < email.length; i++) {
    if(mailUtente === email[i]){
        emailFound = true;

    }

}
if(emailFound === true){
    
    document.getElementById('found-mail').innerHTML = `EMAIL TROVATA`;
}
else{
    
    document.getElementById('found-mail').innerHTML = `EMAIL NON TROVATA`;
}