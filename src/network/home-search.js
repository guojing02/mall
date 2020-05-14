import {search} from './search'
export function getHomeTaoBao(){
  return search({
  url:'/sug?code=utf-8&callback=axios392&k=1&area=c2c&bucketid=20'
  })
}