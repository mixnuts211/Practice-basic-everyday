const getWorkListData = async () => {
  const res = await fetch("listData.json");
  const getListData = await res.json();
  return getListData;
};

const paintWorkDataList = async () => {
  const workDataList = await getWorkListData();
  console.log(workDataList);
  document.querySelector(".work-list").innerHTML = workDataList.newbie
    .map(
      (workData) => `
    <li>
        <a href="${workData.link}">
            <div class="work-list-img-wrap">
                <img src="${workData.img}" alt="${workData.title}" />
            </div>
            <span class="work-list-txt">${workData.title}</span>
        </a>
    </li>
  `
    )
    .join("");
};

paintWorkDataList();
