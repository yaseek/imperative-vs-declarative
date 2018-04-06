export const method = (data) =>
    (data || [])
    .map((value, id) => ({ id, value: value * (-1)**id }))
    .sort((a, b) => a < b ? -1 : 1)
