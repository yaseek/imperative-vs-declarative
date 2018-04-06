//import { method } from './variant/native'
//import { method } from './variant/lodash'
//import { method } from './variant/lodash-fp'
import { method } from './variant/ramda'

const DATA_VOLUME = 1000
const REPEAT_COUNT = 1000

const getData = (volume) => Array(volume).fill(0).map((a, i) => i + 3)

//console.log('RESULT:', method(getData(10)))

const beginTime = Date.now()
console.log('start at', beginTime)
Array(REPEAT_COUNT).fill(0).map(method.bind(null, getData(DATA_VOLUME)))
console.log('end with', Date.now() - beginTime)
