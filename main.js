//! שאלה ראשונה:

let arrayNumber = [];

function recursionFunction() {
  if (arrayNumber.length >= 3) return arrayNumber; // stop condition if array length is smaller then 3;
  let number = Number(prompt("Enter number:")); // get number from User;
  if (number) arrayNumber.push(number); // condition if number is really number and not string;
  recursionFunction(); // recursion - call the same function all over;
}

// recursionFunction();
// console.log(arrayNumber);

//!נתון עץ משפחתי של 5 דורות כל אחד יש לו רק ילד אחד:
//!הדפס את השם של כולם.

const familyTree = {
  nameFamily: "first Family",
  child: {
    nameFamily: "Second Family",
    child: {
      nameFamily: "Third Family",
      child: {
        nameFamily: "Forth Family",
        child: {
          nameFamily: "Fifth Family",
        },
      },
    },
  },
};

// console.log(familyTree.name);

function printingNames(node) {
  if (node != undefined) {
    console.log(node.nameFamily);
    printingNames(node.child);
  }
}

// printingNames(familyTree);

const FAMILY_TREE = {
  name: "generation1",
  children: [
    {
      name: "generation2",
      children: [
        {
          name: "generation3",
          children: [
            {
              name: "generation4",
              children: [
                {
                  name: "generation5",
                },
              ],
            },
            {
              name: "generation6",
            },
            {
              name: "generation7",
            },
          ],
        },
      ],
    },
  ],
};



function printingChildren(node) {

    console.log(node.name);
  firstDiv.innerHTML += `<p>${node.name}</p>`;
  // print the coming object- first time is  the root node name;
  if (node.children) {
    // if exist object node name children get into loops
    for (const child of node.children) {
      // for of loops that run fer object in array of node.children object
      printingChildren(child); //recursion function that can be as while loop
    }
  }
}


const linuxTreeStructure = {
  name: "root",
  children: [
    { name: "bin" },
    { name: "var", children: [{ name: "log" }] },
    { name: "etc" },
    {
      name: "home",
      children: [
        {
          name: "json",
          children: [
            { name: "document" },
            { name: "download" },
            { name: "music" },
          ],
        },
        { name: "pat" },
      ],
    },
    { name: "user", children: [{ name: "bin" }, { name: "lib" }] },
    { name: "tmp" },
    { name: "opt" },
  ],
};



function printingChildrenOne(node) {
    console.log(node.name);
  firstDiv.innerHTML += `<p>${node.name}</p>`;
  // print the coming object- first time is  the root node name;
  if (node.children) {
    // if exist object node name children get into loops
    for (const child of node.children) {
      // for of loops that run fer object in array of node.children object
      printingChildren(child); //recursion function that can be as while loop
    }
  }
}  


printingChildrenOne(linuxTreeStructure);
