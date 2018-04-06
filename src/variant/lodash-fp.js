import { compose, sortBy, map, entries } from 'lodash/fp'

export const method = compose(
    sortBy('value'),
    map((entry) => ((id, value) => ({ id: parseInt(id), value: value * (-1)**id }))(...entry)),
    entries
)
