/**
 * Organizes an inventory array into a categorized object.
 * Combines items with the same name and category, summing their quantities.
 *
 * @param {{name: string, quantity: number, category: string}[]} inventory - An array of inventory items.
 * @returns {Record<string, Record<string:number>>} - An object where keys are categories and values are arrays of items with names and quantities.
 */
function organizeInventory(inventory) {
  let res = {};
  for (let i = 0; i < inventory.length; i++) {
    const currObj = inventory[i];

    res[currObj.category] = {
      ...res[currObj.category],
      [currObj.name]:
        currObj.quantity + (res[currObj.category]?.[currObj.name] || 0),
    };
  }
  console.log(res);

  return {};
}

function betterOrganizeInventory(inventory) {
  let res = {};
  for (let i = 0; i < inventory.length; i++) {
    const currObj = inventory[i];

    res[currObj.category] = {
      ...res[currObj.category],
      [currObj.name]:
        currObj.quantity + (res[currObj.category]?.[currObj.name] || 0),
    };
  }
  console.log(res);

  return {};
}

function myBestShotOrganizeInventory(inventory) {
  let res = {};
  for (let i = 0; i < inventory.length; i++) {
    const currObj = inventory[i];

    if (!res[currObj.category]) res[currObj.category] = {};

    const newValue =
      currObj.quantity + (res[currObj.category][currObj.name] || 0);
    res[currObj.category][currObj.name] = newValue;
  }

  return res;
}

// bro on discord solution
function organizeInventory(inventory) {
  const organized = {};

  for (const { name, quantity, category } of inventory) {
    if (!organized[category]) {
      organized[category] = {};
    }
    organized[category][name] = (organized[category][name] || 0) + quantity;
  }

  return organized;
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];
console.log(betterOrganizeInventory(inventory));
