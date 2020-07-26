export default interface Deal {
    itemId: string
    title: string
    url: string
    endsAt: string
    image225: string
    currency: string
    price: string
    originalPrice: string
    discountPercentage: string
    quantity: string
    shippingCost: string
    dealUrl: string
 }
 export interface Country{
    id: string
    gloalId: string
    name: string
 }
 export interface Countries {
    country: Country[];
  }