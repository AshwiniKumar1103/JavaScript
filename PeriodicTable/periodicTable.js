let responseData;
let elementProperties = [];
let outterDiv=document.getElementById('elementPropertyBox');
(async () => {
  try {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON`;
    const response = await fetch(url);
    if (response.status == 200) {
      responseData = response.json();
      console.log(await responseData);
    } else {
      throw new Error(error);
    }
    displayElements(await responseData);
  } catch (error) {
    console.log(error);
  }
})();

const displayElements = (responseData) => {
  let Index = 0;
  let periodictableDiv = document.getElementById("periodicTable");
  for (const element of responseData.Table.Row) {
    let props = {
      AtomicNumber: element.Cell[0],
      Symbol: element.Cell[1],
      Name: element.Cell[2],
      AtomicMass: element.Cell[3],
      CPKHexColor: element.Cell[4],
      ElectronConfiguration: element.Cell[5],
      Electronegativity: element.Cell[6],
      AtomicRadius: element.Cell[7],
      IonizationEnergy: element.Cell[8],
      ElectronAffinity: element.Cell[9],
      OxidationStates: element.Cell[10],
      StandardState: element.Cell[11],
      MeltingPoint: element.Cell[12],
      BoilingPoint: element.Cell[13],
      Density: element.Cell[14],
      GroupBlocky: element.Cell[15],
      YearDiscovered: element.Cell[16],
    };

    elementProperties.push(props);

    Index++;
    periodictableDiv.innerHTML =
      periodictableDiv.innerHTML +
      `<span class="elements" id=${Index}>${element.Cell[2]}<span/>`;
  }
  const circles = document.querySelectorAll(".elements");

  circles.forEach((circle) => {
    const randomDuration = Math.random() * 10 + 2;
    const randomDelay = Math.random() * 20;

    circle.style.animationDuration = `${randomDuration}s`;
    circle.style.animationDelay = `${randomDelay}s`;
  });
};

// close function to close the property div
const displayProperties=()=>{
    outterDiv.style.display='none';
}


const properties = (e) => {
    let key=e.target.id-1;
    let elementPropertiesTag=document.createElement('div');
  if (e.target.querySelectorAll("span").length == 1) {
    if ( outterDiv.innerHTML) {
        outterDiv.innerHTML=``;
    }
    elementPropertiesTag.className='elementProperty';
        Object.keys(elementProperties[key]).forEach(insideKey=>{
            elementPropertiesTag=`<div>${insideKey}: ${elementProperties[key][insideKey]}</div>`;
            outterDiv.innerHTML= outterDiv.innerHTML+elementPropertiesTag;
            console.log(elementPropertiesTag);
        })
        outterDiv.innerHTML= outterDiv.innerHTML+`<button id="close" onclick='displayProperties()'>close</button>`
  }
  outterDiv.style.display='flex';
};


document.getElementById("periodicTable").addEventListener("click", properties);
