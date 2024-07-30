
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
let Array3 = [
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ce/11/ce11d8e525bf546ca5ba1979ef1d9cc0/ce11d8e525bf546ca5ba1979ef1d9cc0.jpg", name: "young woman and the sea", minute: "2024 - 129min", star: "7.6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f0/9f/f09f4c080ab03ff6fa91fbed97f8a942/f09f4c080ab03ff6fa91fbed97f8a942.jpg", name: "skywalkers: a love story", minute: "2024 - 100min", star: "7" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/98/5a/985ace9b81b391daa88e54591960d985/985ace9b81b391daa88e54591960d985.jpg", name: "polarized", minute: "2023 - 104min", star: "6.7" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/3c/66/3c66739b5c688a6391560840a8743061/3c66739b5c688a6391560840a8743061.jpg", name: "guys at parties like it", minute: "2024 - 79min", star: "5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/3e/1c/3e1c92a8cc97c5df7682b8c4cc0045a0/3e1c92a8cc97c5df7682b8c4cc0045a0.jpg", name: "find me falling", minute: "2024 - 93min", star: "6.5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ec/90/ec908bc07af389cc3ac53dac14946ff3/ec908bc07af389cc3ac53dac14946ff3.jpg", name: "the sleeping woman", minute: "2024 - 110min", star:"5.5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/99/95/9995c7e04944f2ad96035f4e72121afe/9995c7e04944f2ad96035f4e72121afe.jpg", name: "terrestrail verses", minute: "2023 - 77min", star: "7.4" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c1/ee/c1ee2894f6f4f725101d0811d88b7d31/c1ee2894f6f4f725101d0811d88b7d31.jpg", name: "adam the first", minute: "2024 - 103min", star:"6.2" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a5/49/a54985b49994b2d278df74e4a5aff4e0/a54985b49994b2d278df74e4a5aff4e0.jpg", name: "my spy: the eternal cty", minute: "2024 - 111min", star: "5.6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/3b/19/3b19939b73037a5e90bfbd9e205ba64a/3b19939b73037a5e90bfbd9e205ba64a.jpg", name: "the blue rose", minute: "2024 - 103min", star: "4.1" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/0f/3a/0f3adaac24a867c9c7f6e73e070007e5/0f3adaac24a867c9c7f6e73e070007e5.jpg", name: "Signed, Sealed, Delivered: A Tale of Three Letters", minute: "2024 - 84min", star: "7.4" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/5d/d4/5dd4270b59a67eda903569df0cbb7f2d/5dd4270b59a67eda903569df0cbb7f2d.jpg", name: "rule of thirds", minute: "2024 - 108min", star: "4.5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/15/47/15476a3517e95ff4859b752f5aecc48c/15476a3517e95ff4859b752f5aecc48c.jpg", name: "ocean resue", minute: "2023 - 94min", star: "6.5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/20/92/2092508ca9fea3095adf3fdcc1912c3d/2092508ca9fea3095adf3fdcc1912c3d.jpg", name: "Justice League: Crisis on Infinite Earths Part Three", minute: "2024 - 98min", star: "6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a4/f4/a4f48c3285cff8f842a3b41eff430ba1/a4f48c3285cff8f842a3b41eff430ba1.jpg", name: "lowlifes", minute: "2024 - 90min", star:"6.3" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a8/4d/a84db83d3052cf867a2a6b25b46a74d8/a84db83d3052cf867a2a6b25b46a74d8.jpg", name: "faye", minute: "2024 - 94min", star: "7.2" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/84/e5/84e512574254a6855b3f4b181623552d/84e512574254a6855b3f4b181623552d.jpg", name: "wildcat", minute: "2024 - 105min", star:"6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/3a/6d/3a6da456951c8fef71d896bd7bb7a00b/3a6da456951c8fef71d896bd7bb7a00b.jpg", name: "the inheritance", minute: "2024 - 64min", star: "4.6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/4a/05/4a0549123fd8e3aeedc2f81709d3b7de/4a0549123fd8e3aeedc2f81709d3b7de.jpg", name: "the convert", minute: "2024 - 119min", star: "6.5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/89/6b/896b67e37874f05a34fc0ffd25c6be51/896b67e37874f05a34fc0ffd25c6be51.jpg", name: "mind body spirit", minute: "2023 - 88min", star: "5.5" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/b3/58/b358f7faf6d7e70c3ff5615eb7c3f792/b358f7faf6d7e70c3ff5615eb7c3f792.jpg", name: "free time", minute: "2024 - 78min", star: "6.2" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/91/b6/91b68b274e5870eec0fe12a8b77af17a/91b68b274e5870eec0fe12a8b77af17a.jpg", name: "darkness of lies", minute: "2023 - 116min", star: "5.8" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c3/b3/c3b32bbb078123fff5fa005e7b6527a1/c3b32bbb078123fff5fa005e7b6527a1.jpg", name: "bye bye tiberias", minute: "2024 - 83min", star: "7.3" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/56/2b/562b62c7c21ada577402c8d20c4a172a/562b62c7c21ada577402c8d20c4a172a.jpg", name: "a song form the dark", minute: "2023 - 105min", star: "2.4" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/18/59/1859188b3fddcd1438dc065f383d0103/1859188b3fddcd1438dc065f383d0103.jpg", name: "quad gods", minute: "2024 - 90min", star: "7.1" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/b9/87/b9879fcc063c04555257f8b8c245c5d3/b9879fcc063c04555257f8b8c245c5d3.jpg", name: "descendants: the rise of red", minute: "2024 - 94min", star: "4.6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/48/38/483805ecfb57cd77c728ec3140276fc7/483805ecfb57cd77c728ec3140276fc7.jpg", name: "blame the game", minute: "2024 - 91min", star: "5.4" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/03/a2/03a238ceac19eca8c426653fa80987c6/03a238ceac19eca8c426653fa80987c6.jpg", name: "vanished into the night", minute: "2024 - 92min", star: "5.2" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c0/71/c071fa9094e6d5397a2d0edbbd49a49e/c071fa9094e6d5397a2d0edbbd49a49e.jpg", name: "Tyler Perry's Divorce in the Black", minute: "2024 - 121min", star: "4.4" },
    {img:"https://img.novatotelevision.tv/xxrz/250x400/862/0c/08/0c08d8b26632846d6316f41a9b4a23ce/0c08d8b26632846d6316f41a9b4a23ce.jpg", name:"kuyang",minute:"2024 - 98min",star:"5.6"},
    {img:"https://img.novatotelevision.tv/xxrz/250x400/862/bd/5b/bd5bfed7c3d39974e505de8c309536e3/bd5bfed7c3d39974e505de8c309536e3.jpg", name:"something useful",minute:"2017 - 107min",star:"7.6"},
    {img:"https://img.novatotelevision.tv/xxrz/250x400/862/b2/ee/b2ee977da0d1bd2a6e0ec94d3d853aad/b2ee977da0d1bd2a6e0ec94d3d853aad.jpg", name:"isa pa. wih=th feelings",minute:"2019 - 102min",star:"7.8"},
    {img:"https://img.novatotelevision.tv/xxrz/250x400/862/d0/4a/d04a2b25363f42f119b156f7cb4915b9/d04a2b25363f42f119b156f7cb4915b9.jpg", name:"the cigarette",minute:"2024 - 82min",star:"?"},
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/36/f1/36f112d2a1b8620a61c165cd5cee83f5/36f112d2a1b8620a61c165cd5cee83f5.jpg", name: "the garfield movie", minute: "2024 - 104min", star: "6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/7f/f8/7ff8d94760003c702741026ae7b40696/7ff8d94760003c702741026ae7b40696.jpg", name: "dragondeeper", minute: "2024 - 99min", star: "5.6" },
    { img: "https://img.novatotelevision.tv/xxrz/250x400/862/bb/52/bb5258e8b3760d3ef603c66dcb64a198/bb5258e8b3760d3ef603c66dcb64a198.jpg", name: "space cadet", minute: "2024 - 110min", star: "4.9" }
  ];
  
  let Latest = document.querySelector(".late-movie");
  var Data = "";
  
  for (i in Array3) {
    Data += `
      <div class="col-lg-2 col-md-3 col-sm-4">
        <div class="box-img mt-4" id="late">
          <img src="${Array3[i].img}" alt="">
          <h5>${Array3[i].name}</h5>
          <div class="d-flex justify-content-between">
            <p>${Array3[i].minute}</p>
            <p><i class="fa-solid fa-star"></i> ${Array3[i].star}</p>
          </div>
          <div class="overlay">
            <button class="overlay-button bg-warning"><i class="fa-solid fa-play text-dark"></i></button>
            <button class="overlay-button bg-light"><i class="fa-solid fa-plus text-dark"></i></button>
          </div>
        </div>
      </div>
    `;
  }
  
  Latest.innerHTML = Data;