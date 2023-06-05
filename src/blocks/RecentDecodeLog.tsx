import formatDistance from "date-fns/formatDistance"
import format from "date-fns/format"
import { v4 as uuid } from "uuid"
import BaseButton from "components/forms/BaseButton"
import { useEffect, useState } from "react"
import { useActionData } from "react-router-dom"

const now = new Date()
const initialLocalStorage = typeof document !== 'undefined' ? localStorage.getItem("log") : "[]"
const initialState = initialLocalStorage ? JSON.parse(initialLocalStorage) as StoredOperation[] : []


const RecentDecodeLog = () => {
  const actionData = useActionData() as Person | undefined
  const [search, setSearch] = useState("")
  const [log, setLog] = useState<Operation[]>(
    initialState.map(operation => {
      return {
        value: operation.value,
        timestamp: new Date(operation.timestamp),
      }
    }
  ))

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleClearClick = () => {
    if(typeof document !== 'undefined') {
      localStorage.setItem("log", JSON.stringify([]))
      setLog([])
    }
  }

  useEffect(() => {
    if (actionData) {
      setLog((prevLog) => {
        const newLog = [
          {
            value: `${actionData.first_name}000${actionData.last_name}000${actionData.id}`,
            timestamp: new Date(),
          },
          ...prevLog,
        ]

        if (prevLog.length < 20) {
          return newLog
        }

        return prevLog
      })
    }
  }, [actionData])

  useEffect(() => {
    const saveLog = () => {
      localStorage.setItem("log", JSON.stringify(log.map(operation => ({
        value: operation.value,
        timestamp: format(operation.timestamp, 'yyyy-MM-dd HH:mm:ss'),
      }))))
    }

    if(typeof document !== 'undefined') {
      window.addEventListener("beforeunload", saveLog)
    }

    return () => {
      if(typeof document !== 'undefined') {
        saveLog()
        window.removeEventListener("beforeunload", saveLog)
      }
    }
  }, [log])

  const results = log.filter(recent => recent.value.includes(search))

  return (
    <aside className="text-gray-700 h-screen w-80 fixed top-0 right-0 border-l-gray-300 border overflow-y-auto">
      <div className="sticky top-0 bg-slate-50 p-8 border-b-gray-300 shadow-xl">
        <h1>Recents</h1>
        <input
          aria-label="Search for a decoding log"
          value={search}
          onChange={handleSearchChange}
          className="mt-4 w-full rounded-sm p-2 shadow-xl"
          type="text"
          placeholder="Filter out"
        />
        <BaseButton className="mt-4 w-full" onClick={handleClearClick}>Clear</BaseButton>
        <p className="text-right mt-4">{log.length}/20 log events</p>
        { search.length > 0 && results.length > 0 ? <p className="text-sm text-right mt-4">Showing: {results.length}</p>: null }
      </div>
      <ul className="flex bg-slate-50 flex-col gap-y-2 my-4 px-8">
        {results
          .map((recent) => {
            const key = uuid()
            const timestamp = new Date(recent.timestamp)

            return (
              <li className="text-white shadow-xl px-2 py-4 rounded-sm bg-blue-400" key={key}>
                <p className="text-sm">{recent.value}</p>
                <time dateTime={format(timestamp, 'yyyy-MM-dd HH:mm:ss')} className="text-xs text-right">{formatDistance(timestamp, now)}</time>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default RecentDecodeLog