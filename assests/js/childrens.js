const childrens_cards = document.querySelector(".childrens-cards");

fetch("http://localhost:5000/itemsData")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cardData(element);
    });
  });

function cardData(data) {
  const children_card = document.createElement("div");
  const card_imgBox = document.createElement("div");
  const card_img = document.createElement("img");
  const card_contentBox = document.createElement("div");
  const card_childrenName = document.createElement("h4");
  const card_children_age = document.createElement("p");

  children_card.classList.add("children-card");
  card_imgBox.classList.add("card-imgBox");
  card_img.classList.add("card-img");
  card_contentBox.classList.add("card-contentBox");
  card_childrenName.classList.add("card-childrenName");
  card_children_age.classList.add("card-children-age");

  card_img.setAttribute("src", data.img);
  card_childrenName.innerText = data.name;
  card_children_age.innerText = data.age;

  card_contentBox.append(card_childrenName, card_children_age);
  card_imgBox.append(card_img);
  children_card.append(card_imgBox, card_contentBox);
  childrens_cards.append(children_card);
}
