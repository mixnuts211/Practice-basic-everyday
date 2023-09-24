const getWorkListData = async () => {
  const res = await fetch("listData.json");
  const getListData = await res.json();
  return getListData;
};

const paintNewbieWorkDataList = async () => {
  const workDataList = await getWorkListData();
  document.querySelector("#newbieList").innerHTML = workDataList.newbie
    .reverse()
    .map(
      (workData) => `
    <li>
        <a href="${workData.link}">
            <div class="work-list-img-wrap">
                <img src="${workData.img}" alt="${workData.title} 구현 화면 이미지"/>
            </div>
            <p class="work-list-txt">${workData.title}</p>
            <span class="work-list-txt-sm">작업 날짜 : ${workData.day}</span>
            <span class="work-list-txt-sm">소요 시간 : ${workData.time}</span>
        </a>
    </li>
  `
    )
    .join("");
};

const paintJuniorWorkDataList = async () => {
  const workDataList = await getWorkListData();
  document.querySelector("#juniorList").innerHTML = workDataList.junior
    .reverse()
    .map(
      (workData) => `
    <li>
        <a href="${workData.link}">
            <div class="work-list-img-wrap">
                <img src="${workData.img}" alt="${workData.title} 구현 화면 이미지"/>
            </div>
            <p class="work-list-txt">${workData.title}</p>
            <span class="work-list-txt-sm">작업 날짜 : ${workData.day}</span>
            <span class="work-list-txt-sm">소요 시간 : ${workData.time}</span>
        </a>
    </li>
  `
    )
    .join("");
};

paintNewbieWorkDataList();
paintJuniorWorkDataList();
