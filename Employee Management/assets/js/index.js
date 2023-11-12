const container = document.querySelector(".container");

async function getFetch1() {
  const res = await fetch("http://localhost:3000/employee");
  const data = await res.json();
  data.forEach((element) => {
    getData1(element.image,element.name,element.job)
  });
  console.log(data);
}
getFetch1();
function getData1(image, name, job) {
  container.innerHTML += `
    <div class="card">
      <div id="image">
        <img
          src=${image}
          alt="" />
      </div>
      <span id="name">${name}</span>
      <span id="job">${job}</span>
    </div>
  </div>
    `;
}
