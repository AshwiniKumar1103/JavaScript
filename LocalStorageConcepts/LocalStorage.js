let GetItem = document.getElementById("GetData");
let SetData = document.getElementById("AddData");
let Form = document.getElementById("form");
let setDataInList = document.getElementById("data");
let data = {};
let DeleteDataAll=document.getElementById('DeleteDataAll');
const GetDataInLocalHost = () => {
  return localStorage.getItem("ToDoList");
};
let localStorageData = JSON.parse(GetDataInLocalHost()) || [];

const DataWhenPageLoadsFirst = () => {
  if (localStorageData) {
    console.log(typeof localStorageData);
    setDataInList.innerHTML = localStorageData.map((x, index) => {
      console.log(x);
      return `<li id=${index}><span>${x.name}\</span> <span>${x.PhNumber}</span> <span>${x.ID}</span> <button id="DeleteData"onclick="DeleteDataInTable(${index})">Delete</button></li>`;
    });
  }
};

const setData = () => {
  if (
    (data.name !== undefined || !null) &&
    (data.PhNumber !== undefined || !null) &&
    (data.ID !== undefined || !null)
  ) {
    if (data) {
      localStorageData.push(data);
      localStorageData = [...new Set(localStorageData)];
      localStorage.setItem("ToDoList", JSON.stringify(localStorageData));
      console.log(localStorageData);
      DataWhenPageLoadsFirst();
    }
  } else {
    alert("you missed input boxes");
  }
};

const formChange = (e) => {
  if (e.target.name === "name") {
    data = { ...data, name: e.target.value };
  } else if (e.target.name === "PhNumber") {
    data = { ...data, PhNumber: e.target.value };
  } else if (e.target.name === "ID") {
    data = { ...data, ID: e.target.value };
  }
  console.log(data);
};

const DeleteDataInTable = (e) => {
  console.log(e);
  localStorageData = localStorageData.filter((item, index) => {
    console.log(`${index}  ${e}`);
    if (e !== 0) {
      if (index !== e) {
        return item;
      }
    } else {
      if (index !== 0) {
        return item;
      }
    }
  });
  console.log(localStorageData);
  localStorage.setItem("ToDoList", JSON.stringify(localStorageData));
  DataWhenPageLoadsFirst();
};

const clearAll=()=>{
    let counter=0;
    alert(" Your will no longer be able to access your data");
    counter++;
    console.log(counter);
    localStorage.clear();
}

(() => {
  GetDataInLocalHost();
  console.log(localStorageData);
  DataWhenPageLoadsFirst();
})();

DeleteDataAll.addEventListener("click",clearAll)
Form.addEventListener("change", formChange);
SetData.addEventListener("click", setData);
