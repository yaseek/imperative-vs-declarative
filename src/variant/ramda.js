import { compose, sort, ascend, prop, map, toPairs, mapObjIndexed } from 'ramda'

export const method = compose(
    sort(ascend(prop('value'))),
    map((pair) => ({ id: parseInt(pair[0]), value: pair[1] })),
    toPairs,
    mapObjIndexed((value, id) => value * (-1)**id)
)
