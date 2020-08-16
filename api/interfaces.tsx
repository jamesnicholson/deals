export default interface IDeal {
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
 export interface IDeals {
  deals: IDeal[];
 }
 export interface IDealsVars {
  country: string;
  limit: Number;
  offset: Number;
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