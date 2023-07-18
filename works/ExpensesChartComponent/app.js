const getExpensesData = async () => {
  const res = await fetch("./data.json");
  const getData = await res.json();
  return getData;
};

const paintExpensesList = async () => {
  const chartData = await getExpensesData();
  const chartListCont = document.querySelector("#chart-list");
  chartListCont.innerHTML = chartData
    .map(
      (chart) => `
    <li class="id-${Math.floor(chart.amount)}">
      <span class="chart-price">$${chart.amount}</span>
      <div class="chart-bar"  data-amount-rate="nomal" style="height:${
        chart.amount * 2
      }px;">
        <span class="sr-only">${chart.amount}달러 사용</span>
      </div>
      <span class="chart-day">${chart.day}</span>
    </li>
  `
    )
    .join("");
};

const totalExpenses = async () => {
  const chartData = await getExpensesData();
  let amountArr = [];
  chartData.forEach((data) => {
    amountArr.push(data.amount);
  });
  const amountSum = amountArr.reduce(
    (initial, current) => initial + current,
    0
  );
  return amountSum;
};

const paintTotalExpenses = async () => {
  const totalNum = await totalExpenses();
  const totalNumDom = document.querySelector(".total-num");
  const totalNumText = document.createTextNode(`$${totalNum}`);
  totalNumDom.appendChild(totalNumText);
};

const selectMostAmount = async () => {
  const chartData = await getExpensesData();
  let mostAmount = 0;
  chartData.forEach((item) => {
    if (item.amount > mostAmount) {
      mostAmount = item.amount;
    }
  });
  const mostAmoutChart = document.querySelector(
    `.id-${Math.floor(mostAmount)}`
  );
  console.log(mostAmoutChart);
  mostAmoutChart.querySelector(".chart-bar").dataset.amountRate = "most";
};

paintExpensesList();
paintTotalExpenses();
selectMostAmount();
