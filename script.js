let form = document.getElementById("task-form")

form.addEventListener("submit", function (e) {
    //empêcher le rechargement de la page
    e.preventDefault();
    //récupérer les éléments textes
    let task = document.getElementById("task-input");
    let taskInput = task.value;
    //création d'un élément liste
    let li = document.createElement("li");
    li.textContent = taskInput;
    //envoyer le li du js vers le ul html
    //récupérer le ul
    let taskList = document.getElementById("task-list");  
    taskList.appendChild(li);


    // Ajouter le bouton Supprimer
    //Créer le bouton supprimer
    let deleteButton = document.createElement("button");
    //Appliquer le texte "Supprimer"     
    deleteButton.textContent = "Supprimer";
    li.appendChild(deleteButton);
    //addEventListener > au click > fonction >
    // dans l'addEventListener: removeChild le li du ul.
    //appenChild le bouton dans le li
    deleteButton.addEventListener("click", function () {
    taskList.removeChild(li)
    })
   // Ajouter le bouton Modifier 
   //Créer le bouton modifier
    let editButton = document.createElement("button");
   
    //Appliquer le texte "Modifier"
    editButton.textContent = "Modifier";
    li.appendChild(editButton);
    //addEventListener > au click > fonction >
    editButton.addEventListener("click", function () {
    taskList.removeChild(li)
})         
            //Céer un nouvel input
            //Ajouter le type 'text' à l'input
            //Ajouter en valeur de l'input le contenu textuel du premier élément enfant (firstChild) du li
            
            //Créer un bouton avec le texte Sauvegarder
    let saveButton = document.createElement("button");
    saveButton.textContent = "Sauvegarder";
    li.appendChild(saveButton);
    saveButton.addEventListener("click", function () {
    taskList.removeChild(li)
            //addEventListener > au click > fonction >
                //Remplacer le texte du premier élément enfant(firstChild) du li par la valeur du nouvel input
                //Supprimer le nouvel input et le bouton sauvegarder
    })
})
