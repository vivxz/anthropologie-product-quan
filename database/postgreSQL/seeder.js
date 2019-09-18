const Product = require('./model.js');
const imageData = require('../imageData.js');
const fs = require('fs');
const colorImageLinks = require('../colorImageLinks.js');

//product categories
const productCategories = [
  'Dress', 'Skirt', 'Pants', 'Bedding'
]
const productBrandName = [
  'Troubadour', 'Calypso', 'Luciana', 'Circe', 'Persephone',
  'Selene', 'Astraea', 'Gaia'
]
//product subcategories
const subcategory = [
  'Maxi Dress', 'Midi Dress', 'Mini Dress', 'Maxi Jumpsuit', 'Sheath Dress',
  'Pleated Dress',

  'Midi Skirt', 'Maxi Skirt', 'Pencil Skirt', 'Mini Skirt', 'Wrap Skirt',

  'Pants', 'Trousers', 'Joggers', 'Jeans', 'Jumpsuit',
  'Overalls', 'Leggings',

  'Quilt', 'Cover'
]
const adjectives = [
  'Floral', 'Embroidered', 'Watercolor', 'Knit',

  'Printed', 'Wide-Leg', 'Flare', 'Cropped', 'Slim',

  'Makers', 'Tufted', 'Velvet', 'Embellished', 'Silk',
  'Textured', 'Woven', 'Washed', 'Embroidered', 'Linen',
  'Relaxed'
]
const dressSkirtSize = [
  'XXS', 'XS', 'S', 'M', 'L', 'XL'
]
const dressSkirtSizePetite = [
  'XXS Petite', 'XS Petite', 'S Petite',
  'M Petite', 'L Petite', 'XL Petite'
]
const dressSkirtSizePlus = [
  '1x', '2x', '3x'
]

const pantsSize = [
  '00', '0', '2', '4', '6', '8', '10', '12', '14', '16'
]
const pantsSizePetite = [
  '00 P', '0 P', '2 P', '4 P', '6 P',
  '8 P', '10 P', '12 P', '14 P', '16 P'
]
const pantsSizePlus = [
  '16 W', '18 W', '20 W', '22 W', '24 W', '26 W'
]
const reviewStarImages = [
  '5 Star Image', '4.5 Star Image', '4 Star Image', '3.5 Star Image',
  '3 Star Image', '2.5 Star Image', '2 Star Image', '1.5 Star Image',
  '1 Star Image', '0.5 Star Image', '0 Star Image'
]
const colors = [
  'black', 'blue', 'brown', 'gray', 'green',
  'orange', 'pink', 'purple', 'red', 'white',
  'yellow'
]
const fit = [
  'Petite', 'Standard', 'Plus'
]
const beddingSize = [
  'Twin', 'Full', 'King', 'Queen', 'California King'
]
const designers = [
  'VeeVee', 'Emilio', 'Pacho', 'Farm Bill', 'Mike & Ike',
  'JiJi', 'Denisse'
]

// -------------------------------------------------------------------------------------------------------------------

const generateProductNames = (brandNames, adjectives, subcategory, min, max) => {
  let storage = [];
  var newBrandName;
  var newAdjective;
  var newSubcategory;
  for (var i = min; i < max; i++) {
    newBrandName = brandNames[Math.floor(Math.random() * brandNames.length)] + ' ';
    newAdjective = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ';
    newSubcategory = subcategory[Math.floor(Math.random() * subcategory.length)];
    storage.push(newBrandName.concat(newAdjective, newSubcategory));
  }
  return storage;
}
//will generate random for online exclusive (or other arrays inputted in function)
const generateRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
//random price generator/review count
const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
//random star count
const getRandomArbitraryStarCount = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(1);
}
const assignCorrectImageLinks = (object, index) => {
  var idx1 = imageData[Math.floor(Math.random() * imageData.length)];
  var idx2 = imageData[Math.floor(Math.random() * imageData.length)];
  var idx3 = imageData[Math.floor(Math.random() * imageData.length)];
  var idx4 = imageData[Math.floor(Math.random() * imageData.length)];
  return [idx1, idx2, idx3, idx4]
}
const colorGrabber = (array, colorArray) => {
  //grab first from array
  var firstLink = array[0];

  var currentColor;

  for (var i = 0; i < colorArray.length; i++) {
    if (firstLink.indexOf(colorArray[i]) !== -1) {
      currentColor = colorArray[i]
    }
  }
  return currentColor;
  //split it and find the colors
}

// -------------------------------------------------------------------------------------------------------------------

let productArr = generateProductNames(productBrandName, adjectives, subcategory, 0, 26)

let counter = 0;
const createProducts = () => {
  // let storage = [];
  let document = {};

  // for (var i = 1; i <= 5; i++) {
  // document.count = counter++;
  // console.log(counter);
  document.productCategoryId = counter++;
  document.productCategory = productCategories[0];
  document.productName = productArr[generateRandomNumber(1, 8)];
  document.price = generateRandomNumber(100, 399);
  document.brandName = generateRandomValue(designers);
  document.onlineExclusive = generateRandomValue([true, false]);
  document.reviewStarCount = getRandomArbitraryStarCount(1, 5);
  document.reviewCount = generateRandomNumber(5, 40);
  document.fit = fit;
  document.sizeStandard = dressSkirtSize;
  document.sizePetite = dressSkirtSizePetite;
  document.sizePlus = dressSkirtSizePlus;
  document.sizesUnavailable = generateRandomValue(dressSkirtSize);
  document.sizePetiteUnavailable = generateRandomValue(dressSkirtSizePetite);
  document.sizePlusUnavailable = generateRandomValue(dressSkirtSizePlus);
  document.image = assignCorrectImageLinks(imageData, generateRandomNumber(1, 30));
  document.colors = colorGrabber(document.image, colors);
  document.colorImages = colorImageLinks;
  // storage.push(document);
  // document = {};
  // }
  // console.log(counter);
  // console.log(storage)
  return document;
}

// createProducts()


var file = fs.createWriteStream('test.csv');

file.write('productCategoryId | productCategory | productName | price | brandName | onlineExclusive | reviewStarCount | reviewCount | fit | sizeStandard | sizePetite | sizePlus | sizesUnavailable | sizePetiteUnavailable | sizePlusUnavailable | image | colors | colorImages' + '\n')
for (var i = 0; i < 100; i++) {
  for (var j = 0; j < 100000; j++) {
    var product = createProducts();
    // file.write('{' + product.sizePetite + '}')
    file.write(product.productCategoryId + '|' + product.productCategory + '|' + product.productName + '|' + product.price + '|' + product.brandName + '|' + product.onlineExclusive + '|' + product.reviewStarCount + '|' + product.reviewCount + '|"{' + product.fit + '}"|"{' + product.sizeStandard + '}"|"{' + product.sizePetite + '}"|"{' + product.sizePlus + '}"|' + product.sizesUnavailable + '|' + product.sizePetiteUnavailable + '|' + product.sizePlusUnavailable + '|"{' + product.image + '}"|"{' + product.colors + '}"|"{' + product.colorImages + '}"');
    file.write('\n', 'utf8');
    // file.write('{' + product.colors + '}')
  }
}
// }

file.on('finish' , () => {
  console.log('wrote all data to file');
});

// close the stream
file.end();


// ProductDetail.insertMany(storage)
//   .then((data) => console.log('insert many worked!', data))
//   .catch((err) => console.log('Bulk insert failed', err))
// })

