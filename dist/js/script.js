// #region Modal
const detailButtons = document.querySelectorAll("#detail-button");

// Modal
const modal = document.querySelector("#detail-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalContent = document.querySelector("#modal-content");
const closeModalButton = document.querySelector("#close-modal-button");

// Modal Content
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalPrice = document.querySelector("#modal-price");
const modalDescription = document.querySelector("#modal-description");
const modalReviews = document.querySelector("#modal-reviews");

const modalData = [
  {
    img: "./dist/img/square/dead cells.jpg",
    title: "Dead Cells",
    description:
      "Dead Cells is a rogue-lite, metroidvania action-platformer. You'll explore a sprawling, ever-changing castle… assuming you're able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.",
    price: "19.99",
    review: "200.000",
  },
  {
    img: "./dist/img/square/for the king.jpg",
    title: "For the King",
    description:
      "For the King is a strategic RPG that blends tabletop and roguelike elements in a challenging adventure that spans the realms.",
    price: "24.99",
    review: "100.000",
  },
  {
    img: "./dist/img/square/honey.jpg",
    title: "Honey, I Joined a Cult",
    description:
      "Honey, I Joined a Cult is a satirical, turn-based, tactical RPG about a group of friends who accidentally join a cult.",
    price: "8.99",
    review: "50.000",
  },
  {
    img: "./dist/img/square/kt racing.jpg",
    title: "KT Racing",
    description:
      "KT Racing is a racing game with a unique gameplay. You can play with your friends in a local multiplayer mode or play alone in a single player mode.",
    price: "9.99",
    review: "10.000",
  },
  {
    img: "./dist/img/square/space engineers.jpg",
    title: "Space Engineers",
    description:
      "Space Engineers is a sandbox game about engineering, construction, exploration and survival in space and on planets.",
    price: "19.99",
    review: "100.000",
  },
  {
    img: "./dist/img/square/way of the hunter.jpg",
    title: "Way of the Hunter",
    description:
      "Way of the Hunter is a 2D action game with a unique gameplay. You can play with your friends in a local multiplayer mode or play alone in a single player mode.",
    price: "9.99",
    review: "10.000",
  },
];

detailButtons.forEach((button, i) => {
  button.addEventListener("click", function () {
    modal.classList.remove("hidden");

    modalBackdrop.classList.add("backdrop-active");
    modalContent.classList.add("modal-active");

    modalImage.attributes.src.value = modalData[i].img;
    modalTitle.innerHTML = modalData[i].title;
    modalPrice.innerHTML = "$" + modalData[i].price;
    modalDescription.innerHTML = modalData[i].description;
    modalReviews.innerHTML = modalData[i].review + " reviews";
  });
});

closeModalButton.addEventListener("click", function () {
  modalBackdrop.classList.remove("backdrop-active");
  modalContent.classList.remove("modal-active");

  modalBackdrop.classList.add("backdrop-inactive");
  modalContent.classList.add("modal-inactive");

  setTimeout(() => {
    modalBackdrop.classList.remove("backdrop-inactive");
    modalContent.classList.remove("modal-inactive");

    modal.classList.add("hidden");
  }, 200);
});
// #endregion Modal

// #region Profile
const profileButton = document.querySelector("#profile-button");
const profileModal = document.querySelector("#profile-modal");

profileButton.addEventListener("click", function () {
  profileModal.classList.remove("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != profileButton && e.target != profileModal) {
    profileModal.classList.add("hidden");
  }
});
// #endregion Profile
