import request from './request'

export function fetchReviews (state, city) {
  return request({
    url: `/plugin/nearbyserviceareareviewcombo?storefronttoken=${process.env.REACT_APP_SECRET_CODE}&state=${state}&city=${city}`,
    method: 'get',

  })
}
