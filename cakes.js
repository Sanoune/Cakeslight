// Assurez-vous de remplacer 'chemin-vers-votre-fichier-json.json' par le chemin réel de votre fichier JSON.
fetch("cakes.json")
  .then(response => response.json())
  .then(data => {
    const galerie = document.getElementById('galerie');

    // Parcourir les données JSON pour créer les images.
    data.forEach(gateau => {
      const image = document.createElement('img');
      image.className = 'img-acceuil';
      image.src = gateau.image;
      image.alt = gateau.nom;

      galerie.appendChild(image);
    });
  })
  .catch(error => console.error('Une erreur s\'est produite lors de la récupération du fichier JSON :', error));
