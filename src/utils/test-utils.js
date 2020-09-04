import { queryHelpers, buildQueries } from '@testing-library/react'

const queryAllByDataIcon = (...args) =>
  queryHelpers.queryAllByAttribute('data-icon', ...args)

export function getAllByDataIcon(container, id, ...rest) {
  const els = queryAllByDataIcon(container, id, ...rest)
  return els
}


const queryAllByClass = (...args) =>
  queryHelpers.queryAllByAttribute('class', ...args)

export function getAllByClass(container, id, ...rest) {
  const els = queryAllByClass(container, id, ...rest)
  return els
}