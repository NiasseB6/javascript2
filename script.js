alert('Bienvenu cher tous')
                                                      //fonction qui inverse une chaine donnee
function InverserChaine(str) {
  return str.split("").reverse().join("");
}
console.log(InverserChaine("je m'appelle Barra Niasse"));

                                                        //Fonction qui compte les caracters dans une chaine
function CompteCaracteres(str) {
  return str.length;
}
console.log(CompteCaracteres("viens par la vite"));
//ou
function ComptesansEspace(str) {
  return str.replace(/\s/g, "").length;
}
console.log(ComptesansEspace("Merci de votre comprehension Monsieur"));

                                                    // Mettre en majuscule la premiere lettre de chaque mots d'une pharse
function EnMaj(str) {
  return str
    .split(" ")
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase())
    .join(" ");
}
console.log(EnMaj("vient a la maison le jeudi matin"));

                                                    // Fonction pour trouver la valeur maximale ou minimale dans un tableau de nombres
function MinMax(tableau) {
  if (!tableau || tableau.length === 0) {
    return { min: null, max: null };
  }
  const min = Math.min(...tableau);
  const max = Math.max(...tableau);
  return { min, max };
}
console.log(MinMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

                                                     // fonction pour calculer la somme de tous les elements d'un tableau
function Somme(tableau2) {
  if (!tableau2 || tableau2.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < tableau2.length; i++) {
    sum += tableau2[i];
  }
  return sum;
}
console.log(Somme([1, 2, 3, 4, 5, 6, 7, 8, 9]));

                                                  //Fonction qui filtre les elements d'un tableau en fonction d'une condition donnee
function FiltreElemet(tableau3, condition) {
  if (!tableau3 || Array.isArray(tableau3)) {
    return tableau3.filter(condition);
  }
}
const nombres = [1, 2, 3, 4, 5, 6, 7, 8];
const Pairs = FiltreElemet(nombres, (x) => x % 2 === 0);
console.log(Pairs);

                                                    // filtre de chaine
const Mots = ["apple", "banana", "avocadot", "cherry"];
const commenceParA = FiltreElemet(Mots, (mot) => mot.startsWith("a"));
console.log(commenceParA);

                                                  // calcul de la factorielle d'un nombre donne
function calculFactoriel(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "le nombre doit etre un entier positif";
  }
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
const nbre = 9;
const factorielle = calculFactoriel(nbre);
console.log(`la factorielle de ${nbre} est ${factorielle}`);


                                                // Verification si un nmbre est premier
function estpremier(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(estpremier(3));

                                              // fonction pour générer la suite Fibonacci 
function SuiteFib(n) {
  if (!Number.isInteger || n < 0) {
    return "le nombre doit etre un entier positif";
  }
  const Suite = [0, 1];
  if (n === 0) return [0];
  if (n === 1) return Suite;
  for (let i = 2; i <= n; i++) {
    Suite.push(Suite[i - 1] + Suite[i - 2]);
  }
  return Suite;
}
console.log(SuiteFib(5));
