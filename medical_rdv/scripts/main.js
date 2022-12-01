window.onload = function () {
  let form = document.querySelector("form");
  const input_civilite = document.querySelector("select");
  const input_nom = document.querySelector('input[name="nom"]');
  const input_prenom = document.querySelector('input[name="prenom"]');
  const input_gsm = document.querySelector('input[type="tel"]');
  const input_email = document.querySelector('input[type="email"]');
  const input_date = document.querySelector('input[type="date"]');
  const input_time = document.querySelector('input[type="time"]');
  const table = document.querySelector("table");
  
  // encadrement de l'input date avec des dates min et max en fonction de la date d'aujourd'hui
  const set_date = function() {
    let input_date = document.querySelector('input[type="date"]');
    let today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    today = `${year}-${month}-${day}`;
    input_date.setAttribute("min",today);
    input_date.setAttribute("max",`${year+1}-${month}-${day}`);
  }
  set_date();

  // gestion de l'envoie du formulaire - désactivation du submit
  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault;
    const alert = document.querySelector('p.alert');
    const icons = document.querySelectorAll('i');
    if (alert && icons) {
      form.removeChild(p);
      icons.forEach(icon => {
        let icon_parent = icon.parentNode;
        icon_parent.removeChild(icon);
      });
    }
    const patient = get_data();
    afficher_data(patient);
  });

  // fonction qui récupère et valide les données du formulaire
  const get_data = function () {
    patient = {
      civilite: input_civilite.value,
      nom: input_nom.value,
      prenom: input_prenom.value,
      gsm: input_gsm.value,
      email: input_email.value,
      date: input_date.value,
      time: input_time.value,
    };
    console.log(patient);
    
    // amélioration: une fonction qui boucle et vérifie chaque clé
    // si toutes les fonctions ci-dessous retournent true (les datas sont validées et on peut afficher)
    if (name_control(patient.nom, input_nom) 
        && name_control(patient.prenom, input_prenom) 
        && gsm_control(patient.gsm, input_gsm) 
        && email_control(patient.email, input_email)
        && date_control(patient.date, input_date) 
        && time_control(patient.time, input_time))  // time_control("25:00", input_time);
        {
          afficher_data(patient);
        }
  };

  /* TENTATIVE: FACTORISATION des différentes fonctions de control. Mais quid des opérateurs < ou !=: les passer en parèmetres et utiliser une ternaire
  const validate = function (value, input, regEx, min_length) {
    if (!value || value.length < min_length || !regEx.test(value)) {
      alert_message(input);
      return false;
    }
    return true;
  };
  */

  const name_control = function (name, input) {
    let regExpression = /^[a-zA-Z]+$/;
    if (!name || name.length < 2 || !regExpression.test(name)) {
      alert_message(input);
      return false;
    }
    return true;
  };

  const gsm_control = function (number, input) {
    let regExpression = /\+?[0-9#*+]+/;
    if (!number || number.length != 10 || !regExpression.test(number)) {
      alert_message(input);
      return false;
    }
    return true;
  };

  const email_control = function (email, input) {
    let regExpression = /[_\-a-zA-Z0-9\.\+]+@[a-zA-Z0-9](\.?[\-a-zA-Z0-9]*[a-zA-Z0-9])*/;
    if (!email || email.length < 8 || !regExpression.test(email)) {
      alert_message(input);
      return false;
    }
    return true;
  };

  const date_control = function (date, input) {
    let regExpression = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    if (!date || date.length != 10 || !regExpression.test(date)) {
      alert_message(input);
      return false;
    }
    return true;
  };

  const time_control = function (time, input) {
    let regExpression = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!time || time.length != 5 || !regExpression.test(time)) {
      alert_message(input);
      return false;
    }
    return true;
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

  const afficher_data = function (patient) {
    let tbody = document.createElement('tbody');
    for (const key in patient) {
      console.log(`${key}: ${patient[key]}`);
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerText = key;
      tr.appendChild(td);
      td = document.createElement('td');
      td.innerText = patient[key];
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  };
};
