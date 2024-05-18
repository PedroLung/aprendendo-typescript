// Day 5 - Exercise 1
interface CarItem {
  id: number
  title: string
  variantId?: number // Tornar esta propriedade como opcional
}

function addToCart(item: CarItem) {
  console.log(`Adding "${item.title}" to cart`)
}

addToCart({id: 1, title: 'shoes'})