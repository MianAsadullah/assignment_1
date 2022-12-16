import React from "react"
import { Plus, Edit } from "react-feather"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handleSingleRecord } from "./tableStore"

function Table() {
  const { records } = useSelector(store => store.tableStore)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const renderBadges = (dataArr = []) => {
    let dataArrCopy = [...dataArr]
    const removedFirstThree = dataArrCopy?.splice(0, 2)

    return (
      <>
        {removedFirstThree.map(item => (
          <span
            key={item.value}
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {item.label}
          </span>
        ))}
        {dataArrCopy?.length > 2 ? (
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            + {dataArrCopy?.length}
          </span>
        ) : null}
      </>
    )
  }

  const handleEdit = item => {
    dispatch(handleSingleRecord(item))
    navigate("/sectorForm")
  }

  return (
    <div class="container pt-12 px-12 md:mx-auto">
      <div className="bg-white p-6  flex justify-between	">
        <h1 className="text-xl font-semibold">Table</h1>
        <button
          onClick={() => {
            dispatch(handleSingleRecord({}))
            navigate("/sectorForm")
          }}
          className="px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <Plus size={16} />
          Create
        </button>
      </div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>

              <th scope="col" className="py-3 px-6">
                Sectors
              </th>
              <th scope="col" className="py-3 px-6">
                Agree to terms
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map(item => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="py-4 px-6">{renderBadges(item?.sectors)}</td>

                <td className="py-4 px-6">
                  {item.agreeToTerms ? "Yes" : "No"}
                </td>
                <td className="py-4 px-6">
                  <Edit onClick={() => handleEdit(item)} size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
