
const listaEmail = [
    "mario.rossi@example.com",
    "luigi.verdi@example.com",
    "anna.bianchi@example.com",
    "paola.neri@example.com"
];
  const emailUtente = prompt("Inserisci la tua email per verificare l'accesso:");
  
  let accessoConcesso = false;
  for (let i = 0; i < listaEmail.length; i++) {
    if (listaEmail[i] === emailUtente) {
      accessoConcesso = true; 
      break; 
    }
  }
   
  if (accessoConcesso) {
    console.log("Accesso consentito. Benvenuto alla festa!");
  } else {
    console.log("Accesso negato. Mi dispiace, non sei nella lista degli invitati.");
  }
  