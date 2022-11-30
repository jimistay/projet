function connexion(){
var id = prompt("Donnez votre nom d'utilisateur");
var mdp = prompt("Entrez votre mot de passe");
if (id == "admin" && mdp =="admin")
{
    document.write("Bienvenue:    "+ id);
}
else {
    alert ("Accès refusé");
}
}

function chaine_caractere(){
    var chaine=prompt("Donnez un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient    " + chaine.length+"      caracteres     " + "<br>");
    document.write("la premire lettre est     " +chaine.substr(0,1)+"<br>");
    
}


function affichage_tableau1(){
    
document.write("<table border=2 width=50%;>");
    for (i=0; i <=10; i++)
    {
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
            
    }
    document.write("</table>");
}


function affichage_tableau2(){

var id = prompt("Donnez le nombre de lignes");
document.write("<table border=2 width=50%;>");
        for (i=1; i <=id; i++)
        {
            document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>")       
        }
        document.write("</table>");
}
 