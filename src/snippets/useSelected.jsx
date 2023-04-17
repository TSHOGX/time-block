import { useCallback, useState } from 'react'
import uniq from 'lodash/uniq'
import difference from 'lodash/difference'

export const useSelected = ({initialState}) => {
  const [selected, setSelected] = useState(initialState)

  const add = useCallback(
    (items) => {
      setSelected((oldList) => uniq([...oldList, ...items]))
    },
    [setSelected]
  )

  const remove = useCallback(
    (items) => {
      setSelected((oldList) => difference(oldList, items))
    },
    [setSelected]
  )

  const change = useCallback(
    (addOrRemove, items) => {
      if (addOrRemove) {
        add(items)
      } else {
        remove(items)
      }
    },
    [add, remove]
  )

  const clear = useCallback(() => setSelected([]), [setSelected])

  return { selected, add, remove, clear, change }
}