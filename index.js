fetch('./bands.json')
  .then(function(response) {
  return response.json();
})
.then(whenJSONLoaded)
.catch(function(err) {
  throw err;
});

function whenJSONLoaded(bands) {
  var bandslist = bands.map(function(band){
    var memberslist = renderMembers(band.members);
    var albumslist = renderAlbums(band.albums);
    return `<section>
      <header>
        <h1>${band.name}</h1>
        <h2>${band.genre}</h2>
      </header>

      <div class="members">
          ${memberslist}
      </div>

      <div class="albums">
        ${albumslist}
      </div>
    </section>`
  }).join('');
  
  mainElement.innerHTML = bandslist;
}

var mainElement = document.querySelector("#main");


function renderMembers(members) {
  var  htmlString = "<h4>Members</h4><ul>";
  members.sort(sortByName).forEach(function(member){
    htmlString += `
        
          <li>
            <span class="member-name">${member.name}</span>
            <span class="member-instrument">${member.instrument}</span>
          </li>`
  });
  return htmlString + "</ul>";
}

function renderAlbums(albums) {
  var htmlString = "<h4>Albums</h4><ul>";
  albums.sort(sortByNumber).forEach(function(album) {
    
    htmlString += `
          
          <li>
            <span class="album-name">${album.title}</span>
            <span class="album-release-year">${album.releaseYear}</span>
          </li>`
  });
  return htmlString + "</ul>";
}

function sortByName(a,b) {
  if (a.name < b.name)
     return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function sortByNumber(a,b) {
  return a.releaseYear - b.releaseYear;
}







