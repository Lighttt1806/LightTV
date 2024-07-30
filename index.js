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
let Array = [
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f0/af/f0afd035a72c07ecb73b304711538906/f0afd035a72c07ecb73b304711538906.jpg", name: "Horizon: An American Saga - Chapter 1", minute: "2024 - 181min", star: "7.1" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/20/92/2092508ca9fea3095adf3fdcc1912c3d/2092508ca9fea3095adf3fdcc1912c3d.jpg", name: "Justice League: Crisis on Infinite Earths Part Three", minute: "2024 - 98min", star: "5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/36/71/36715832e4e5f73eeebb56a122cdaed6/36715832e4e5f73eeebb56a122cdaed6.jpg", name: "Twisters", minute: "2024 - 122min", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/17/48/174861588d88bdff39ce52ed13c1dc4c/174861588d88bdff39ce52ed13c1dc4c.jpg", name: "Kingdom of the Planet of the Apes", minute: "2024 - 145min", star: "7.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/2e/fd/2efd41b3984aab7f30367e59bbcbde45/2efd41b3984aab7f30367e59bbcbde45.jpg", name: "Longlegs", minute: "2024 - 101min", star: "7.3" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/90/7a/907ae195a4b401a27fe3288bf18178bf/907ae195a4b401a27fe3288bf18178bf.jpg", name: "the dead don't hurt", minute: "2024 - 129min", star: "6.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/93/02/930252333380d1876be10fe6d4963412/930252333380d1876be10fe6d4963412.jpg", name: "inside out 2", minute: "2024 - 97min", star: "8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/b9/87/b9879fcc063c04555257f8b8c245c5d3/b9879fcc063c04555257f8b8c245c5d3.jpg", name: "descendants: the rise of red", minute: "2024 - 94min", star:"4.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/36/f1/36f112d2a1b8620a61c165cd5cee83f5/36f112d2a1b8620a61c165cd5cee83f5.jpg", name: "the garfield movie", minute: "2024 - 101min", star: "6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/c4/33/c4331df0660bc6e832452094a36c5d53/c4331df0660bc6e832452094a36c5d53.jpg", name: "furiosa: a mad max saga", minute: "2024 - 148min", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/cd/d9/cdd9b388a3b29b5be01d7ca4d7b81ae7/cdd9b388a3b29b5be01d7ca4d7b81ae7.jpg", name: "despicable me 4", minute: "2024 - 95min", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/1b/2e/1b2e7f907e0eabd02ddca00c9a3ca2a4/1b2e7f907e0eabd02ddca00c9a3ca2a4.jpg", name: "dune: part two", minute: "2024 - 167min", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ee/68/ee684b0d95199c3339042481307386c9/ee684b0d95199c3339042481307386c9.jpg", name: "the fall guys", minute: "2024 - 126min", star: "7.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/4c/d0/4cd074e97252950bed3a3c9a3fdfc0f9/4cd074e97252950bed3a3c9a3fdfc0f9.jpg", name: "the bikeriders", minute: "2024 - 116min", star: "7.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/b7/6f/b76f329d22cd9f93d287872ac58ec447/b76f329d22cd9f93d287872ac58ec447.jpg", name: "kelly's heroes", minute: "2024 - 144min", star: "7.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/3e/af/3eaf8fe7e63ab70ee1ae9a50d149b947/3eaf8fe7e63ab70ee1ae9a50d149b947.jpg", name: "the strangers: chapter 1", minute: "2024 - 91min", star: "5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/5b/15/5b1530ce125fee2b02c8b962bb7da5a6/5b1530ce125fee2b02c8b962bb7da5a6.jpg", name: "beverly hills cop: axel f", minute: "2024 - 115min", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ae/4b/ae4b046be9f2a861bad0712ec3250456/ae4b046be9f2a861bad0712ec3250456.jpg", name: "maXXXine", minute: "2024 - 104min", star: "6.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/4a/05/4a0549123fd8e3aeedc2f81709d3b7de/4a0549123fd8e3aeedc2f81709d3b7de.jpg", name: "the convert", minute: "2024 - 119min", star: "6.5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/9f/1d/9f1dfb93e7125a2826e6da34668be7e7/9f1dfb93e7125a2826e6da34668be7e7.jpg", name: "twister", minute: "1996 - 113min", star: "6.4" }
];

let Trending = document.querySelector(".mmovie");
var Data = "";

for (i in Array) {
  Data += `
    <div class="col-lg-2 col-md-3 col-sm-4">
      <div class="box-img mt-4">
        <img src="${Array[i].img}" alt="">
        <h5>${Array[i].name}</h5>
        <div class="d-flex justify-content-between">
          <p>${Array[i].minute}</p>
          <p><i class="fa-solid fa-star"></i> ${Array[i].star}</p>
        </div>
        <div class="overlay">
          <button class="overlay-button bg-warning"><i class="fa-solid fa-play text-dark"></i></button>
          <button class="overlay-button bg-light"><i class="fa-solid fa-plus text-dark"></i></button>
        </div>
      </div>
    </div>
  `;
}

Trending.innerHTML = Data;

// 
let Array2 = [
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/43/c3/43c3e28a7bb6250a333a82c28068b9e2/43c3e28a7bb6250a333a82c28068b9e2.jpg", name: "the acolyte", minute: "SS 1 / EPS 8", star: "3.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/d7/64/d76490dba9831502963013285425627e/d76490dba9831502963013285425627e.jpg", name: "the boys", minute: "SS 4 / EPS 7", star: "8.7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/2a/4b/2a4b982a36376b1549ae928dc85c92fc/2a4b982a36376b1549ae928dc85c92fc.jpg", name: "Twisters", minute: "SS 2 / EPS 5", star: "8.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/74/df/74dfeabc74159207d3fd34c733caa6ff/74dfeabc74159207d3fd34c733caa6ff.jpg", name: "the bear", minute: "SS 3 / EPS 10", star: "8.5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f2/d6/f2d6ed6d487c8342a30103c9bede5784/f2d6ed6d487c8342a30103c9bede5784.jpg", name: "monogatari", minute: "SS 1 / EPS 15", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ac/ac/acac6c7849967c200021371b056b2d37/acac6c7849967c200021371b056b2d37.jpg", name: "sunny", minute: "SS 1 / EPS 3", star:"7.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/75/e0/75e0bfae315594720f884d77f482e63f/75e0bfae315594720f884d77f482e63f.jpg", name: "one piece", minute: "SS 21 / EPS 111", star: "8.9" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ef/04/ef04017db540a805a3287c669324dcab/ef04017db540a805a3287c669324dcab.jpg", name: "vikings: valhalla", minute: "SS 3 / EPS 8", star:"7.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/ce/a3/cea3f4660ade4cb202bbbb9d06d236ef/cea3f4660ade4cb202bbbb9d06d236ef.jpg", name: "the jetty", minute: "SS 1 / EPS 4", star: "5.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/31/68/3168eaffb077f5c45a6538222ed33436/3168eaffb077f5c45a6538222ed33436.jpg", name: "presumed innocent", minute: "SS 1 / EPS 7", star: "7.6" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/dc/fe/dcfe078794416b93d57b34c84af5cadc/dcfe078794416b93d57b34c84af5cadc.jpg", name: "snowpiecer", minute: "SS 4 / EPS 1", star: "6.9" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/76/68/76689b4daae8b7499a1e0a1231a3980c/76689b4daae8b7499a1e0a1231a3980c.jpg", name: "homicide", minute: "SS 2 / EPS 5", star: "7.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/88/22/8822b3a4f732a28db1d10002e6cecd23/8822b3a4f732a28db1d10002e6cecd23.jpg", name: "game of thrones", minute: "SS 8 / EPS 6", star: "9.2" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/1d/6d/1d6d5abfb6ea7aaea505ff24ea24281a/1d6d5abfb6ea7aaea505ff24ea24281a.jpg", name: "sausage party: foodopia", minute: "SS 1 / EPS 8", star: "5.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/1a/1d/1a1d8ae0e5f6f4ff118c0e5a15a84c1e/1a1d8ae0e5f6f4ff118c0e5a15a84c1e.jpg", name: "marvel's hit-monkey", minute: "SS 2 / EPS 10", star: "7.8" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/7e/df/7edf45ceb2b813cca0d864fa32d24b77/7edf45ceb2b813cca0d864fa32d24b77.jpg", name: "attack on titan", minute: "SS 4 / EPS 30", star: "9" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/f6/d9/f6d90b19342c46950b22c09a23c4bcaf/f6d90b19342c46950b22c09a23c4bcaf.jpg", name: "interlaced scences", minute: "SS 1 / eps 10", star: "7" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/a7/fc/a7fca6a36c98856de5e71d120a16e521/a7fca6a36c98856de5e71d120a16e521.jpg", name: "shogun", minute: "SS 1 / EPS 10", star: "9.4" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/72/ce/72ceab2bf8d5566ce69835063572b76b/72ceab2bf8d5566ce69835063572b76b.jpg", name: "falloutt", minute: "SS 1 / EPS 8", star: "8.5" },
  { img: "https://img.novatotelevision.tv/xxrz/250x400/862/e3/98/e3983c515313fe325a150d39dd6ef12f/e3983c515313fe325a150d39dd6ef12f.jpg", name: "t - p bON", minute: "SS 2 / EPS 12", star: "?" }
];

let Trending2 = document.querySelector(".tvmovie");
var Data = "";

for (i in Array2) {
  Data += `
    <div class="col-lg-2 col-md-3 col-sm-4">
      <div class="box-img mt-4">
        <img src="${Array2[i].img}" alt="">
        <h5>${Array2[i].name}</h5>
        <div class="d-flex justify-content-between">
          <p><strong style="border: 1px solid white; padding: 5px;border-radius: 5px;">TV</strong> ${Array2[i].minute}</p>
          <p><i class="fa-solid fa-star"></i> ${Array2[i].star}</p>
        </div>
        <div class="overlay">
          <button class="overlay-button bg-warning"><i class="fa-solid fa-play text-dark"></i></button>
          <button class="overlay-button bg-light"><i class="fa-solid fa-plus text-dark"></i></button>
        </div>
      </div>
    </div>
  `;
}

Trending2.innerHTML = Data;


// 
let Array3 = [
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
  {img:"https://img.novatotelevision.tv/xxrz/250x400/862/d0/4a/d04a2b25363f42f119b156f7cb4915b9/d04a2b25363f42f119b156f7cb4915b9.jpg", name:"the cigarette",minute:"2024 - 82min",star:"?"}
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

// 
let Array4 = [
  
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