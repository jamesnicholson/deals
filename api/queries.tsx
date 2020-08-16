import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
    query {
        countries {
            id,
            gloalId,
            name
        }
    }
`
export const GET_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`
export const GET_DEALS_BY_CATEGORY = gql`
 query deals($country: String!, $category: String, $limit: Int, $offset: Int) {
    deals(country: $country, category:$category, limit:$limit, offset: $offset) {
        itemId,
        title,
        url,
        endsAt,
        image225,
        currency,
        price,
        originalPrice,
        discountPercentage,
        quantity,
        shippingCost,
        dealUrl
    }
  }
`
export const GET_DEALS = gql`
 query deals($country: String!, $limit: Int, $offset: Int) {
    deals(country: $country, limit:$limit, offset: $offset) {
        itemId,
        title,
        url,
        endsAt,
        image225,
        currency,
        price,
        originalPrice,
        discountPercentage,
        quantity,
        shippingCost,
        dealUrl
    }
  }
`



export default GET_DEALS