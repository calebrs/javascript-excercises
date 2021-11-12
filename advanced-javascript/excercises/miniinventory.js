"use strict";
// NOTES
// item creator
// items manager
//reports manager


// CODE
let ItemManager = {
  items: [],

  isValidItemName(name) {
    let nameCombined = name.split(' ').join('');
    return nameCombined.length >= 5;
  },

  isValidCatagoryName(name) {
    let words = name.split(' ');
    return words.length === 1 && name.length >= 5;
  },

  createSKU(item, catagory) {
    let itemCombined = item.split(' ').join('');
    return itemCombined.slice(0, 3) + catagory.slice(0, 2);
  },

  isValidItem(item, catagory, quantity) {
    return this.isValidItemName(item) && this.isValidCatagoryName(catagory) && quantity !== undefined;
  },

  filter(callback) {
    return this.items.filter(callback);
  },

  forEach(callback) {
    this.items.forEach(callback);
  },

  create(item, catagory, quantity) {
    if (this.isValidItem(item, catagory, quantity)) {
      let newObj = {
        sku: this.createSKU(item, catagory).toUpperCase(),
        item,
        catagory,
        quantity,
      }
  
      this.items.push(newObj);
      return newObj;
    }
    
    return false;
  },

  update(sku, obj) {
    let filtered = this.filter(item => item.sku === sku)[0];
    Object.assign(filtered, obj);
  },

  delete(sku) {
    this.forEach((item, indx) => {
      if (item.sku === sku) {
        this.items.splice(indx, 1);
        // console.log(this.items);
      }
    })
  },

  inStock() {
    this.forEach(item => {
      if (item.quantity > 0) {
        console.log(item);
      }
    })
  },

  itemsInCategory(catagory) {
    this.forEach(item => {
      if (item.catagory === catagory) {
        console.log(item);
      }
    })
  },

}

let ReportManager = {
  init(itemmanager) {
    this.items = itemmanager;
  },

  createReporter(sku) {
    return (function() {
      let item = this.items.filter(item => item.sku === sku)[0];
      return {
        itemInfo() {
          for (let key in item) {
            console.log(`${key}: ${item[key]}`);
          }
        }
      }
    }).bind(this)();
  },

  reportInStock() {
    this.items.forEach(item => {
      if (item.quantity > 0) {
        console.log(item.item);
      }
    })
  }
}





// TESTS
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10