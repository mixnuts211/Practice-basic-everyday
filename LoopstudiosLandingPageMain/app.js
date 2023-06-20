const getData = async () => {
  const res = await fetch("./MockData/listData.json");
  const getData = await res.json();
  paintList(getData.listData);
};

const paintList = (data) => {
  const listUl = document.querySelector(".list-cont");
  data.map((item) => {
    const listLi = document.createElement("li");
    const listLink = document.createElement("a");
    const listTitle = document.createElement("h3");
    listLi.appendChild(listLink);
    listLink.appendChild(listTitle);

    listLi.classList.add("list-item");
    listLink.classList.add("img-cover");
    listTitle.classList.add("list-item-title");

    if (window.innerWidth >= 870) {
      listLi.style.backgroundImage = `url(${item.img})`;
    } else if (window.innerWidth < 870) {
      listLi.style.backgroundImage = `url(${item.mImg})`;
    }

    listLink.setAttribute("href", "#");
    const listTitleText = document.createTextNode(item.title);
    listTitle.appendChild(listTitleText);

    listUl.append(listLi);
  });
};

getData();
