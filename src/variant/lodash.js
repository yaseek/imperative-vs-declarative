import _ from 'lodash'

export const method = (data) =>
    _(data)
    .map((value, id) => ({ id, value: value * (-1)**id }))
    .sort((a, b) => a < b ? -1 : 1)
    .value()
