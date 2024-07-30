
  // Header Scrolling
  let lastScrollTop = 0;
  const header = document.getElementById('mainHeader');

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scroll Down
      header.style.top = '-100px'; // Adjust this value to hide the header completely
    } else {
      // Scroll Up
      header.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });



// 
document.querySelectorAll('.dropbtn').forEach((button) => {
  button.addEventListener('click', function() {
      // Close any open dropdowns first
      document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
          if (dropdown !== this.nextElementSibling) {
              dropdown.classList.remove('show');
          }
      });

      // Toggle the clicked dropdown
      this.nextElementSibling.classList.toggle('show');
  });
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
      document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
          dropdown.classList.remove('show');
      });
  }
});

document.querySelector('.filter-button').addEventListener('click', function() {
  let selectedTypes = [];
  let selectedGenres = [];
  let selectedCountries = [];
  let selectedYears = [];
  let selectedSorts = [];

  document.querySelectorAll('.dropdown-content input:checked').forEach((checkedBox) => {
      let parentDropdown = checkedBox.closest('.dropdown-content');
      if (parentDropdown.previousElementSibling.textContent.includes('Type')) {
          selectedTypes.push(checkedBox.value);
      } else if (parentDropdown.previousElementSibling.textContent.includes('Genre')) {
          selectedGenres.push(checkedBox.value);
      } else if (parentDropdown.previousElementSibling.textContent.includes('Country')) {
          selectedCountries.push(checkedBox.value);
      } else if (parentDropdown.previousElementSibling.textContent.includes('Year')) {
          selectedYears.push(checkedBox.value);
      } else if (parentDropdown.previousElementSibling.textContent.includes('Sort')) {
          selectedSorts.push(checkedBox.value);
      }
  });

  // Display the selected filters and apply filtering logic
  let resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
      <p>Selected types: ${selectedTypes.join(', ')}</p>
      <p>Selected genres: ${selectedGenres.join(', ')}</p>
      <p>Selected countries: ${selectedCountries.join(', ')}</p>
      <p>Selected years: ${selectedYears.join(', ')}</p>
      <p>Selected sorts: ${selectedSorts.join(', ')}</p>
  `;

  console.log('Selected types:', selectedTypes);
  console.log('Selected genres:', selectedGenres);
  console.log('Selected countries:', selectedCountries);
  console.log('Selected years:', selectedYears);
  console.log('Selected sorts:', selectedSorts);
  // Add your filtering logic here
});

// 
let Array4 = [
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c6/7d/c67d86ebbe68f9adbac3e564416f5e29/c67d86ebbe68f9adbac3e564416f5e29.jpg", name: "bluey", minute: "SS 3 / EPS 50", star: "9.7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f2/c0/f2c05454b6e53053d5ec7b0f2813a18c/f2c05454b6e53053d5ec7b0f2813a18c.jpg", name: "hope on the street", minute: "SS 1 / EPS 6", star: "9.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/55/1a/551a2220eec1c999ada9177854c579ba/551a2220eec1c999ada9177854c579ba.jpg", name: "Jimmie & Stevie Ray Vaughan: Brothers in Blues", minute: " - 107min", star: "9.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/04/60/0460b5c4615b4109396d7b02a19e27f2/0460b5c4615b4109396d7b02a19e27f2.jpg", name: "chasing the sun", minute: "SS 2 / EPS 5", star: "9.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f7/01/f701ed97357b1d0a76ae8a7e7bbe9c35/f701ed97357b1d0a76ae8a7e7bbe9c35.jpg", name: "The Last Drive-in With Joe Bob Briggs", minute: "SS 3 / EPS 4", star: "9.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/5a/4e/5a4e0707e532c3cc0899f5ca5a39080f/5a4e0707e532c3cc0899f5ca5a39080f.jpg", name: "planet earth II", minute: "SS 3 / EPS 4", star:"9.5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/7a/78/7a78d2a44e33d64d6c35e1a2c1e2cdc9/7a78d2a44e33d64d6c35e1a2c1e2cdc9.jpg", name: "breaking bad", minute: "SS 5 / EPS 16", star: "9.5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/42/bd/42bdbffdaf218c8014ff6490a06c019a/42bdbffdaf218c8014ff6490a06c019a.jpg", name: "planet earth", minute: "SS 1 / EPS 11", star:"9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/2f/0c/2f0ce329abcdcaff3b5d38d5cece2dfb/2f0ce329abcdcaff3b5d38d5cece2dfb.png", name: "trading Up with Mandy Rennehan", minute: "SS 1 / EPS 10", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/04/dd/04dd69b6b07cbb2294e2db94b5722134/04dd69b6b07cbb2294e2db94b5722134.jpg", name: "the chosen", minute: "SS 4 / EPS 8", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/9b/7e/9b7ec2f851ff5c59c5dff8d3935cc92d/9b7ec2f851ff5c59c5dff8d3935cc92d.jpg", name: "rock solid builds", minute: "SS 2 / EPS 10", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/14/c4/14c4e9e007141a3ee74cfea5a5024e02/14c4e9e007141a3ee74cfea5a5024e02.jpg", name: "meeting of minds", minute: "SS 1 / EPS 5", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a7/fc/a7fca6a36c98856de5e71d120a16e521/a7fca6a36c98856de5e71d120a16e521.jpg", name: "shogun", minute: "SS 1 / EPS 10", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/1c/f3/1cf36569d58de7d6e17f1a5cec166046/1cf36569d58de7d6e17f1a5cec166046.jpg", name: "band of brothers", minute: "SS 1 / EPS 10", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/1b/00/1b000d41bc6b9236c2195acb68301dc8/1b000d41bc6b9236c2195acb68301dc8.jpg", name: "dance of life", minute: "SS 1 / EPS 5", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/5d/81/5d81607a837a2f2658c0c4c2aafe0fc1/5d81607a837a2f2658c0c4c2aafe0fc1.jpg", name: "chernobyl", minute: "SS 1 / EPS 5", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/98/8b/988bf8e9e621556a3af9b03a3ca16128/988bf8e9e621556a3af9b03a3ca16128.jpg", name: "blue planet", minute: "SS 1 / EPS 7", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/28/90/289012ffa8a21c555b9fbba8bd57625b/289012ffa8a21c555b9fbba8bd57625b.jpg", name: "9/11: one day in america", minute: "SS 1 / EPS 6", star:"9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/cf/13/cf13dafa0ebb528401256e901fb4df8b/cf13dafa0ebb528401256e901fb4df8b.jpg", name: "seven worlds. one planer", minute: "SS 1 / EPS 7", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a9/fa/a9fa827bede30279b7fc5797a78c3f9a/a9fa827bede30279b7fc5797a78c3f9a.jpg", name: "cosmos", minute: "SS 1 / EPS 13", star:"9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/88/9c/889c90a976e9157790f616d306d4e5e2/889c90a976e9157790f616d306d4e5e2.jpg", name: "slumberkins", minute: "SS 1 / EPS 8", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/34/e5/34e53ee9fdf6d8904e4bc180a3990372/34e53ee9fdf6d8904e4bc180a3990372.jpg", name: "matador", minute: "SS / EPS", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/0b/4f/0b4f694b650aad2017b8385df8bbbc6b/0b4f694b650aad2017b8385df8bbbc6b.jpg", name: "the last of us", minute: "SS 1 / EPS 9", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/33/a6/33a6547695e73499889f8c1577e02ae3/33a6547695e73499889f8c1577e02ae3.jpg", name: "the wire", minute: "SS 5 / EPS 10", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/8a/56/8a5655e08d0ba8b9c43f3d6ca01663d2/8a5655e08d0ba8b9c43f3d6ca01663d2.jpg", name: "my magic", minute: "SS 1 / EPS 10", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/50/51/50518645202e916241e3ec5a26a52405/50518645202e916241e3ec5a26a52405.jpg", name: "jinny's kichen", minute: "SS 2 / EPS 4", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/0b/8c/0b8c097a412960670694249a6bd690de/0b8c097a412960670694249a6bd690de.jpg", name: "the express way with dule hill", minute: "SS 1 / EPS 4", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/bf/8e/bf8eaf9423a6302ab536d4beb739d1ac/bf8eaf9423a6302ab536d4beb739d1ac.jpg", name: "hollywood", minute: "SS / EPS", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/b0/9b/b09be6b575666365861dfee23a983729/b09be6b575666365861dfee23a983729.jpg", name: "Scam 1992 - The Harshad Mehta Story", minute: "SS 1 / eps 10", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/7e/79/7e7972070a826d0a82c88015816b319a/7e7972070a826d0a82c88015816b319a.jpg", name: "planet earth III", minute: "SS 1 / EPS 7", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/6b/95/6b951a77aac3167b9b1b783fa0bbaebb/6b951a77aac3167b9b1b783fa0bbaebb.jpg", name: "avatar: the last airbender", minute: "SS 3 / EPS 21", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/0b/38/0b38d448780f094625af83466712af68/0b38d448780f094625af83466712af68.jpg", name: "Australia's Ocean Odyssey: A journey down the East Australian Current", minute: "SS 1 / EPS 3", star: "9.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/b1/d2/b1d2e52a612cae26e446bd48d0b8dfe1/b1d2e52a612cae26e446bd48d0b8dfe1.jpg", name: "rick and morty", minute: "SS 7 / EPS 10", star: "9.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/66/ba/66ba9bd1da36a777565d4929db0d5adf/66ba9bd1da36a777565d4929db0d5adf.jpg", name: "baseball", minute: "SS / EPS", star: "9.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/00/37/0037c13ac54eab43c64421a89250ba50/0037c13ac54eab43c64421a89250ba50.jpg", name: "frozen planet II", minute: "SS 1 / EPS 6", star: "9.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/91/84/91843d208f93100f7cce2792a6525131/91843d208f93100f7cce2792a6525131.jpg", name: "blue flame assault", minute: "SS 1 / EPS 33", star: "9.2" }
];

let Latest2 = document.querySelector(".late-tv");
var Data = "";

for (i in Array4) {
  Data += `
    <div class="col-lg-2 col-md-3 col-sm-4">
      <div class="box-img mt-4" id="late">
        <img src="${Array4[i].img}" alt="">
        <h5>${Array4[i].name}</h5>
        <div class="d-flex justify-content-between">
          <p><strong style="border: 1px solid white; padding: 5px;border-radius: 5px;">TV</strong> ${Array4[i].minute}</p>
          <p><i class="fa-solid fa-star"></i> ${Array4[i].star}</p>
        </div>
        <div class="overlay">
          <button class="overlay-button bg-warning"><i class="fa-solid fa-play text-dark"></i></button>
          <button class="overlay-button bg-light"><i class="fa-solid fa-plus text-dark"></i></button>
        </div>
      </div>
    </div>
  `;
}

Latest2.innerHTML = Data;