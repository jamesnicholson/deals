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
 export interface ICountry{
    id: string
    gloalId: string
    name: string
 }
 export interface ICountryActionSheet{
   id: string
   text: string
}
 export interface CountryState {
   country: ICountry;
   setCountry: React.Dispatch<React.SetStateAction<ICountry>>;
 }
 export interface ICountries {
   countries: ICountry[];
  }