window.onload = function () {
  let form = document.querySelector("form");

  // gestion de l'envoie du formulaire - désactivation du submit
  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault;
    get_data();
  });

  // fonction qui récupère et valide les données du formulaire
  const get_data = function () {
    patient_brut = {
      civilite: document.querySelector("select").value,
      nom: document.querySelector('input[name="nom"]').value,
      prenom: document.querySelector('input[name="prenom"]').value,
      gsm: document.querySelector('input[type="tel"]').value,
      email: document.querySelector('input[type="email"]').value,
      date: "",
      heure: "",
    };
    console.log(patient_brut);
    
    // amélioration: une fonction qui boucle et vérifie chaque clé
    name_control(patient_brut.nom, document.querySelector('input[name="nom"]'));
    name_control(patient_brut.prenom,document.querySelector('input[name="prenom"]'));
    gsm_control(patient_brut.gsm, document.querySelector('input[type="tel"]'));
    email_control(patient_brut.email, document.querySelector('input[type="email"]'));
  };

  //faire un swith case: (nom et prenom), email, tel
  const name_control = function (name, input) {
    let regExpression = /^[a-zA-Z]+$/;
    if (name.length < 2 || !regExpression.test(name)) {
      alert_message(input);
      return false;
    }
    return true;
  };

  const gsm_control = function (number, input) {
    let regExpression = /\+?[0-9#*+]+/;
    if (number.length != 10 || !regExpression.test(number)) {
      alert_message(input);
    }
  };

  const email_control = function (email, input) {
    let regExpression = /[_\-a-zA-Z0-9\.\+]+@[a-zA-Z0-9](\.?[\-a-zA-Z0-9]*[a-zA-Z0-9])*/;
    if (email.length < 8 || !regExpression.test(email)) {
      alert_message(input);
    }
  };

  const alert_message = function (input) {
    input.focus();
    let p = document.createElement("p");
    p.innerText = "Veuillez insérer des données valides.";
    p.classList.add("alert");
    form.appendChild(p);
    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-triangle-exclamation");
    input.parentNode.append(i);
  };
};
