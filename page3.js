
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
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/52/41/52410095929ed156fc3df16962dc991f/52410095929ed156fc3df16962dc991f.jpg", name: "Mr.Bigstuff", minute: "SS 1 / EPS 6", star: "5.9" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/63/a8/63a81adf1ecdb632314c0df304b6ea27/63a81adf1ecdb632314c0df304b6ea27.jpg", name: "dee & friends in oz", minute: "SS 2 / EPS 16", star: "7.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c9/f8/c9f83e0ca983366b573b997c7203b3d4/c9f83e0ca983366b573b997c7203b3d4.jpg", name: "monet's slumber party", minute: "SS 1 / EPS 1", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/41/11/411170755d25dab9005aa60578fe002a/411170755d25dab9005aa60578fe002a.jpg", name: "LOL: Last One Laughing Philippines", minute: "SS 1 / EPS 6", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/e1/b3/e1b32677832a7072dcbe1362c9dfed1e/e1b32677832a7072dcbe1362c9dfed1e.jpg", name: "LOL: Last One Laughing Indonesian", minute: "SS 1 / EPS 4", star: "8.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/07/68/0768fd5ee5450a60532270c3a2eb06e8/0768fd5ee5450a60532270c3a2eb06e8.jpg", name: "LOL: last one laughing thailad", minute: "SS 1 / EPS 6", star:"?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/3f/75/3f7589a091892efaed2bb4b5a11dbc1a/3f7589a091892efaed2bb4b5a11dbc1a.jpg", name: "temptation island mexico", minute: "SS 1 / EPS 9", star: "6.1" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/0b/2c/0b2cdbad906aef277298af56bf13ab9e/0b2cdbad906aef277298af56bf13ab9e.jpg", name: "sweet home", minute: "SS 3 / EPS 8", star:"7.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f5/08/f5086573e1d63023fd7544b0b987d6d7/f5086573e1d63023fd7544b0b987d6d7.jpg", name: "too hot to handle", minute: "SS 5 / EPS 10", star: "4.7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/6b/03/6b03145011393307ddae0659aad6cc23/6b03145011393307ddae0659aad6cc23.jpg", name: "those about to die", minute: "SS 1 / EPS 10", star: "6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/74/93/74933ee88f5d51f81006a49cadf31655/74933ee88f5d51f81006a49cadf31655.jpg", name: "Betty la Fea, the Story Continues", minute: "SS 1 / EPS 2", star: "8.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/e0/91/e09175277409a6b516a0e9ab81182b2f/e09175277409a6b516a0e9ab81182b2f.jpg", name: "dashing youth", minute: "SS 1 / EPS 6", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/d6/66/d6668997f91aad10da8374ee13709c85/d6668997f91aad10da8374ee13709c85.jpg", name: "love's little delicacies", minute: "SS 1 / EPS 14", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/dc/fe/dcfe078794416b93d57b34c84af5cadc/dcfe078794416b93d57b34c84af5cadc.jpg", name: "snowpiercer", minute: "SS 4 / EPS 1", star: "6.9" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ae/d6/aed67c0f3bb9e2865bb74822584b94b1/aed67c0f3bb9e2865bb74822584b94b1.jpg", name: "the blood of youth", minute: "SS 1 / EPS 40", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/0c/2a/0c2a058db56e46d963d2fa36feb2069a/0c2a058db56e46d963d2fa36feb2069a.jpg", name: "Peter the Great: Greater Than Ever", minute: "SS 1 / EPS 23", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/43/c3/43c3e28a7bb6250a333a82c28068b9e2/43c3e28a7bb6250a333a82c28068b9e2.jpg", name: "the acolyte", minute: "SS 1 / EPS 8", star: "3.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ac/ac/acac6c7849967c200021371b056b2d37/acac6c7849967c200021371b056b2d37.jpg", name: "sunny", minute: "SS 1 / EPS 3", star:"7.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/31/68/3168eaffb077f5c45a6538222ed33436/3168eaffb077f5c45a6538222ed33436.jpg", name: "presumed innocent", minute: "SS 1 / EPS 7", star: "7.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/1c/bb/1cbbd7c2ad57308dac9c126c554a216a/1cbbd7c2ad57308dac9c126c554a216a.jpg", name: "love island US", minute: "SS 6 / EPS 32", star:"5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c1/96/c196984f9c6b65b1e51330e01277b1e9/c196984f9c6b65b1e51330e01277b1e9.jpg", name: "love island", minute: "SS 11 / EPS 45", star: "5.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/fe/ad/fead2985755311a12d9c07286b234e5d/fead2985755311a12d9c07286b234e5d.jpg", name: "all american: homecoming", minute: "SS 3 / EPS 2", star: "6.1" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/84/7f/847f58ea4585cf57042cce178dcb6fb6/847f58ea4585cf57042cce178dcb6fb6.jpg", name: "strange tales of tang dynasty", minute: "SS 1 / EPS 36", star: "7.7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/43/2d/432d6f422c0856e31cb881e828a0ee80/432d6f422c0856e31cb881e828a0ee80.jpg", name: "The Yara Gambirasio Case: Beyond Reasonable Doubt", minute: "SS 1 / EPS 5", star: "8.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/39/e9/39e904b36ff68cc50140d955314b466b/39e904b36ff68cc50140d955314b466b.jpg", name: "exploding kittens", minute: "SS 1 / EPS 9", star: "6.9" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a6/5b/a65ba6b5c5085439dddb71fc9008cdef/a65ba6b5c5085439dddb71fc9008cdef.jpg", name: "LALIGA: all access", minute: "SS 1 / EPS 8", star: "7.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f3/2d/f32d9ac8be667eeaef99cbe866bc24d3/f32d9ac8be667eeaef99cbe866bc24d3.jpg", name: "general well", minute: "SS 1 / EPS 24", star: "8.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/2a/4b/2a4b982a36376b1549ae928dc85c92fc/2a4b982a36376b1549ae928dc85c92fc.jpg", name: "house of the dragon", minute: "SS 2 / EPS 5", star: "8.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f6/7c/f67cd1d069fd2b9067a1da3e46fad2b9/f67cd1d069fd2b9067a1da3e46fad2b9.jpg", name: "doppelganger. the double", minute: "SS 1 / eps 4", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/51/a7/51a7852b6125400d324fb0941a071eee/51a7852b6125400d324fb0941a071eee.jpg", name: "every family", minute: "SS 1 / EPS 7", star: "?" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/8e/d3/8ed3e4bfd54922aff2f3c12629dafd43/8ed3e4bfd54922aff2f3c12629dafd43.jpg", name: "good partner", minute: "SS 1 / EPS 2", star: "7.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/45/3c/453c18a00ca0f7e86ffaea7716986048/453c18a00ca0f7e86ffaea7716986048.jpg", name: "my name is gabriel", minute: "SS 1 / EPS 3", star: "9.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ed/f7/edf760d2680a1cd9bd23b399f76a2cd9/edf760d2680a1cd9bd23b399f76a2cd9.jpg", name: "the kardashians", minute: "SS 5 / EPS 9", star: "4.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/8e/ea/8eeabe49f69f487627575338a47fa3c9/8eeabe49f69f487627575338a47fa3c9.jpg", name: "royal rules of ohio", minute: "SS 5 / EPS 9", star: "8.1" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ff/0e/ff0e819a9f947280fc2f7d7c292a7fdf/ff0e819a9f947280fc2f7d7c292a7fdf.jpg", name: "evil", minute: "SS 4 / EPS 9", star: "7.7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/50/1a/501a63c724654deebe7c71342a980c7d/501a63c724654deebe7c71342a980c7d.jpg", name: "password", minute: "SS 2 / EPS 13", star: "8.3" }
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