const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const dropDown = document.querySelector("select");
const imagesContainer = document.querySelector(".images-container");

//fetch images based on input box search
const inputFetch = async () => {
  console.log(imagesContainer.innerHTML == "");

  let inputValue = document.querySelector("input[type='text']").value;
  const res = await fetch(
    `https://pixabay.com/api/?key=17235138-436b0128f23b09ff1e194b188&q=${inputValue}&image_type=photo`
  );
  let data = await res.json();
  imagesContainer.innerHTML = "";
  imagesContainer.innerHTML = "";
  data.hits.forEach((hit) => {
    const { previewURL, downloads, likes, views, user } = hit;

    imagesContainer.innerHTML += `
      <div class="image-box">
        <img src="${previewURL}" alt="an image taken by ${user}" loading="lazy"/>
        <div class="details">
          <p>${downloads} downloads</p>
          <p>${likes} likes</p>
          <p>${views} views</p>
        </div>
      </div>`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputFetch();
  form.reset();
});

dropDown.addEventListener("change", (e) => {
  const selectSearchTerm = dropDown.options[dropDown.selectedIndex].text;

  //fetch imaages based on category
  const categoryFetch = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=17235138-436b0128f23b09ff1e194b188&q=${selectSearchTerm}&image_type=photo`
    );
    let data = await res.json();
    imagesContainer.innerHTML = "";
    data.hits.forEach((hit) => {
      const { previewURL, downloads, likes, views, user } = hit;

      imagesContainer.innerHTML += `
      <div class="image-box">
        <img src="${previewURL}" alt="an image taken by ${user}" loading="lazy"/>
        <div class="details">
          <p>${downloads} downloads</p>
          <p>${likes} likes</p>
          <p>${views} views</p>
        </div>
      </div>`;
    });
  };
  categoryFetch();
});

//2084909387
