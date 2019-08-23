const mongoose = require('mongoose');
const ProductDetail = require('./model.js');
const {
  productCategories, 
  productBrandName, 
  dressSubcategory, 
  dressAdjectives,
  skirtSubcategory,
  dressSkirtSize,
  pantsSubcategory,
  pantsAdjectives,
  pantsSize,
  reviewStarImages,
  colors,
  colorImages,
  fit,
  beddingSubcategory,
  beddingSize,
  beddingAdjectives,
  designers
} = require('./seederMockData')
const {
  generateProductNames,
  generateRandomValue,
  generateRandomNumber,
  getRandomArbitraryStarCount
} = require('./seederFunctions.js')
const fs = require('fs');

let dressesArr = generateProductNames(productBrandName, dressAdjectives, dressSubcategory, 0, 26);
let pantsArr = generateProductNames(productBrandName, pantsAdjectives, pantsSubcategory, 0, 26);
let skirtsArr = generateProductNames(productBrandName, dressAdjectives, skirtSubcategory, 0, 26);
let beddingArr = generateProductNames(beddingAdjectives, beddingAdjectives, beddingSubcategory, 0, 26);
let productArr = dressesArr.concat(pantsArr, skirtsArr, beddingArr)

let storage = [];
let fileNames = [];

const createDresses = () => {
  let document = {};
  for (var i = 1; i <= 25; i++){
    document.productCategoryId = i;
    document.productCategory = productCategories[0];
    document.productName = productArr[i];
    document.price = generateRandomNumber(100, 399);
    document.brandName = generateRandomValue(designers);
    document.onlineExclusive = generateRandomValue([true, false]);
    document.reviewStarCount = getRandomArbitraryStarCount(0, 5);
    document.reviewStarImages = reviewStarImages;
    document.colors = colors;
    document.colorImages = colorImages;
    document.fit = fit;
    document.sizes = dressSkirtSize;
    document.sizesUnavailable = generateRandomValue(dressSkirtSize);
    document.image = fileNames;
    storage.push(document);
    document = {};
  }
}
const createPants = () => {
  let document = {};
  for (var i = 26; i <= 50; i++){
    document.productCategoryId = i;
    document.productCategory = productCategories[2];
    document.productName = productArr[i];
    document.price = generateRandomNumber(100, 399);
    document.brandName = generateRandomValue(designers);
    document.onlineExclusive = generateRandomValue([true, false]);
    document.reviewStarCount = getRandomArbitraryStarCount(0, 5);
    document.reviewStarImages = reviewStarImages;
    document.colors = colors;
    document.colorImages = colorImages;
    document.fit = fit;
    document.sizes = pantsSize;
    document.sizesUnavailable = generateRandomValue(pantsSize);
    document.image = fileNames;
    storage.push(document);
    document = {};
  }
}
const createSkirts = () => {
  let document = {};
  for (var i = 51; i <= 75; i++){
    document.productCategoryId = i;
    document.productCategory = productCategories[1];
    document.productName = productArr[i];
    document.price = generateRandomNumber(100, 399);
    document.brandName = generateRandomValue(designers);
    document.onlineExclusive = generateRandomValue([true, false]);
    document.reviewStarCount = getRandomArbitraryStarCount(0, 5);
    document.reviewStarImages = reviewStarImages;
    document.colors = colors;
    document.colorImages = colorImages;
    document.fit = fit;
    document.sizes = dressSkirtSize;
    document.sizesUnavailable = generateRandomValue(dressSkirtSize);
    document.image = '';
    storage.push(document);
    document = {};
  }
}
const createBedding = () => {
  let document = {};
  for (var i = 76; i <= 100; i++){
    document.productCategoryId = i;
    document.productCategory = productCategories[3];
    document.productName = productArr[i];
    document.price = generateRandomNumber(100, 399);
    document.brandName = generateRandomValue(designers);
    document.onlineExclusive = generateRandomValue([true, false]);
    document.reviewStarCount = getRandomArbitraryStarCount(0, 5);
    document.reviewStarImages = reviewStarImages;
    document.colors = colors;
    document.colorImages = colorImages;
    document.fit = fit;
    document.sizes = beddingSize;
    document.sizesUnavailable = generateRandomValue(beddingSize);
    document.image = fileNames;
    storage.push(document);
    document = {};
  }
}

fs.readdir('./productImages', (err, files) => {
  files.forEach(file => {
    fileNames.push(file)
  })
createDresses();
createPants();
createSkirts();
createBedding();
ProductDetail.insertMany(storage)
  .then((data) => console.log('insert many worked!', data))
  .catch((err) => console.log('Bulk insert failed', err))
})

