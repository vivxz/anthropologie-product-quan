//product category ids
//1 - 25 Dresses
//26-50 Pants
//51-75 Skirts
//76-100 Bedding

//product categories
const productCategories = [
  'Dress', 'Skirt', 'Pants', 'Bedding'
]
const productBrandName = [
  'Troubadour', 'Calypso', 'Luciana', 'Circe', 'Persephone', 
  'Selene', 'Astraea', 'Gaia'
]
//product subcategories
const dressSubcategory = [
  'Maxi Dress', 'Midi Dress', 'Mini Dress', 'Maxi Jumpsuit', 'Sheath Dress', 
  'Pleated Dress'
]
const dressAdjectives = [
  'Floral', 'Embroidered', 'Watercolor', 'Knit'
]
const skirtSubcategory = [
  'Midi Skirt', 'Maxi Skirt', 'Pencil Skirt', 'Mini Skirt', 'Wrap Skirt'
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
const pantsSubcategory = [
  'Pants', 'Trousers', 'Joggers', 'Jeans', 'Jumpsuit', 
  'Overalls', 'Leggings'
]
const pantsAdjectives = [
  'Printed', 'Wide-Leg', 'Flare', 'Cropped', 'Slim'
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
// const colorImages = [
//   'BlackURL', 'BlueURL', 'BrownURL', 'GrayURL', 'GreenURL', 
//   'OrangeURL', 'PinkURL', 'PurpleURL', 'RedURL', 'WhiteURL', 
//   'YellowURL'
// ]
const fit = [
  'Petite', 'Standard', 'Plus'
]
const beddingSubcategory = [
  'Quilt', 'Cover'
]
const beddingSize = [
  'Twin', 'Full', 'King', 'Queen', 'California King'
]
const beddingAdjectives = [
  'Makers', 'Tufted', 'Velvet', 'Embellished', 'Silk',
  'Textured', 'Woven', 'Washed', 'Embroidered', 'Linen',
  'Relaxed'
]
const designers = [
  'VeeVee', 'Emilio', 'Pacho', 'Farm Bill', 'Mike & Ike', 
  'JiJi', 'Denisse'
]
module.exports = { 
  productCategories, 
  productBrandName, 
  dressSubcategory, 
  dressAdjectives,
  skirtSubcategory,
  dressSkirtSize,
  dressSkirtSizePetite,
  dressSkirtSizePlus,
  pantsSubcategory,
  pantsAdjectives,
  pantsSize,
  pantsSizePetite,
  pantsSizePlus,
  reviewStarImages,
  colors,
  // colorImages,
  fit,
  beddingSubcategory,
  beddingSize,
  beddingAdjectives,
  designers
}