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
  'Maxi Dress', 'Midi Dress', 'Mini Dress', 'Jumpsuit', 'Sheath Dress', 
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
const colors = [
  'Black', 'Blue', 'Brown', 'Gray', 'Green', 
  'Orange', 'Pink', 'Purple', 'Red', 'White', 
  'Yellow'
]
const colorImages = [
  'BlackURL', 'BlueURL', 'BrownURL', 'GrayURL', 'GreenURL', 
  'OrangeURL', 'PinkURL', 'PurpleURL', 'RedURL', 'WhiteURL', 
  'YellowURL'
]
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
  pantsSubcategory,
  pantsAdjectives,
  pantsSize,
  fit,
  beddingSubcategory,
  beddingSize,
  beddingAdjectives
}