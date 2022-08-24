// NOMENCLATURE
// snake_case : des underscore entre les mots (norme pour les languages web: Javascript)
// lowerPascalCase : utilisation de majuscule pour chaque mots sauf le premier (Généralement pour les variables ex: c#)
// UpperPascalCase ou PascalCase: utilisation de majuscule pour chaque mots (Généralement pour la programmation avancée: objet, classe, méthode)
// kebap-case : utilisation de tiret entre chaque mots (Généralement pour la gestion de fichier)
// UPPERCASE : tout en majuscule (Pour les constantes) 

//Déclaration de variable:

let ma_variable = 42; 
let ma_seconde_variable = "Javascript";
let ma_derniere_variable;

// Type de variable:

//NUMBER
console.log("Nous avons la varible varNumber");
let varNumber = 42;
console.log(`varNumber est de type${typeof(varNumber)} et a pour valeur ${varNumber}`); //'number'

varNumber = 3.1415;
console.log(`varNumber est de type${typeof(varNumber)} et a pour valeur ${varNumber}`); //'number'

varNumber = Number("42");
console.log(`varNumber est de type${typeof(varNumber)} et a pour valeur ${varNumber}`); //'number'

varNumber = Number("Salut");
console.log(`varNumber est de type${typeof(varNumber)} et a pour valeur ${varNumber}`); //'number'


//Le type Number peut valoir des entiers, des décimals mais aussi des: 
// NaN
console.log("Quand on analyse une variable possiblement NaN, on utilise isNaN(...)");
console.log(isNaN(varNumber));
// Infinity qui représente la valeur infinie
console.log(`5 / 0 = ${5/0}`);

//STRING
let varString = "La valeur de la variable varString est défini entre des \"\", je suis obligé d'utiliser les \\ pour afficher les \"...";
console.log(varString);

//BOOLEAN
let varBoolean = true;
console.log(`Les variables boolean n'ont que deux valeurs: ${varBoolean}`);
varBoolean = false; 
console.log(`ou ${varBoolean}`);

//NULL vs Undifinied ! 
let varUndifined;
console.log(`Si une variable n'a pas encore reçu de valeurs, elle est par défaut de type ${typeof(varUndifined)}`);
varUndifined = null;
console.log(`Pour obtenir le type ${typeof(varUndifined)} il nous fait soit la déclarer nous même soit pas une fonction`);
console.log(`Le type de null est un ${typeof(varNull)}!`);

//CONSTANTE

const PI = 3.1415;

console.log(`La constante PI, contient ${PI}, et ne peut changer de valeur...`);
// PI = 3; // crée une erreur: main.js:60 Uncaught TypeError: Assignment to constant variable.

// L'objet Math: permet d'obtenir les fonctionnalités mathématiques

console.log(`La racine carré de 36 est ${Math.sqrt(36)}`);
console.log(`La racine carré de 2 est ${Math.SQRT2}`);
console.log(`La constante de PI de Math est plus précise que ma constante à moi \n ${Math.PI} vs. ${PI}`);
console.log(`La racine carré de 0.5 est ${Math.SQRT1_2}`);

console.log(`La valeur max d'un type Number est : ${Number.MAX_VALUE}`);


