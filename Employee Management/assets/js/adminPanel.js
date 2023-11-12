const goHome = document.querySelector(".buttons .goHome");
const addUser = document.querySelector(".buttons .addUser");
const table = document.querySelector("table");
const getUrl = document.getElementById("image");
const getName = document.getElementById("name");
const getJob = document.getElementById("job");
const addUser1 = document.querySelector("#addUser");
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector("form");

async function getFetch() {
  const res = await fetch("http://localhost:3000/employee");
  const data = await res.json();
  data.forEach((element) => {
    getData(element.id, element.image, element.name, element.job);
  });
  del();
  update();
}
getFetch();                     



async function getFetch1() {
  const res = await fetch("http://localhost:3000/employee", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image: getUrl.value,
      name: getName.value,
      job: getJob.value,
    }),
  });
}

function getData(id, image, name, job) {
  const tr = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdImg = document.createElement("td");
  const tdName = document.createElement("td");
  const tdJob = document.createElement("td");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const tdUpdate = document.createElement("td");
  const tdDelete = document.createElement("td");
  const buttonUpdate = document.createElement("button");
  const buttonDelete = document.createElement("button");
  buttonUpdate.classList.add("updateBtn");
  buttonDelete.classList.add("deleteBtn");
  buttonUpdate.setAttribute("data-id", id);
  buttonUpdate.textContent = "Update";
  buttonDelete.textContent = "Delete";
  tdId.textContent = id;
  tdName.textContent = name;
  tdJob.textContent = job;
  divImg.classList.add("panelImg");
  tdImg.classList.add("tdImg");

  img.setAttribute("src", image);

  divImg.appendChild(img);
  tdImg.append(divImg);
  tdDelete.appendChild(buttonDelete);
  tdUpdate.appendChild(buttonUpdate);

  tr.append(tdId, tdImg, tdName, tdJob, tdUpdate, tdDelete);
  table.appendChild(tr);
}
addUser1.addEventListener("click",function () {
  getFetch1();
  
})
function del() {
  const deleteButtons = document.querySelectorAll(".deleteBtn");

  deleteUser = async (id) => {
    let url = `http://localhost:3000/employee/${id}`;
    let resp = await fetch(url, { method: "DELETE" });
    this.getFetch();
  };

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.parentElement.parentElement;
      const id = row.firstChild.textContent;
      deleteUser(id);
    });
  });
}
//update calisdim alinmadi
// function update() {
//   const updateButtons = document.querySelectorAll(".updateBtn");
//   updateButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       addBtn.click();
//       let hash = window.location.hash;
//       hash.substring(1);
//       console.log(hash);
//       fetch(`http://localhost:3000/employee/${hash}`)
//         .then((res) => res.json())
//         .then((data) => {
//           getUserData(data.image, data.name, data.job);
//         });

//       function getUserData(img, name, job) {
//         getUrl.value = img;
//         getName.value = name;
//         getJob.value = job;
//       }
//       addUser1.addEventListener("click", search);
//       function search(e) {
//         e.preventDefault();
//         getFetch2();
//         location.href = "./adminPanel.html";
//       }
//       async function getFetch2() {
//         try {
//           const res = await fetch(`http://localhost:3000/employee/${hash}`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               name: getName.value,
//               job: getJob.value,
//               image: getUrl.value,
//             }),
//           });
//           const data = await res.json();
//           return data;
//         } catch (error) {
//           console.log(error.message);
//         }
//       }
//     });
//   });
// }
