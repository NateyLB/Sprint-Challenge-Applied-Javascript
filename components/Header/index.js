// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(dateParam, h1Param, tempParam) {
    const headerContainer = document.querySelector('.header-container');
    const header = document.createElement('div');
    header.classList.add("header");
    const date = document.createElement('span');
    date.classList.add("date");
    date.textContent = dateParam;
    header.appendChild(date);
    const h1 = document.createElement('h1');
    h1.textContent = h1Param;
    header.appendChild(h1);
    const temp = document.createElement('span');
    temp.classList.add("temp");
    temp.textContent = `${tempParam}\xB0`;
    header.appendChild(temp);
    headerContainer.appendChild(header);
    return header
}

Header("MARCH 28, 2019", "Lambda Times", "98");
