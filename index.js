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
    return `<section>
      <header>
        <h1>${band.name}</h1>
        <h2>${band.genre}</h2>
      </header>

      <div class="members">
        <h4>Members</h4>
        <ul>
          <li>
            <span class="member-name">John Doe</span>
            <span class="member-instrument">Guitar</span>
          </li>
          <li>
            <span class="member-name">John Doe</span>
            <span class="member-instrument">Guitar</span>
          </li>
        </ul>
      </div>

      <div class="albums">
        <h4>Albums</h4>
        <ul>
          <li>
            <span class="album-name">Album Name</span>
            <span class="album-release-year">(2001)</span>
          </li>
          <li>
            <span class="album-name">Album Name</span>
            <span class="album-release-year">(2001)</span>
          </li>
        </ul>
      </div>
    </section>`
  }).join('');
  
  mainElement.innerHTML = bandslist;
}

var mainElement = document.querySelector("#main");










