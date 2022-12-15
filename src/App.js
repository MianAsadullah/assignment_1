import { useState } from "react"
import Select from "react-select"
import { options } from "./data"
import { checkValidations } from "./utils"

function App() {
  const [formData, setFormData] = useState({ name: "", sectors: [] })
  const [formError, setFormError] = useState({})

  return (
    <section className="h-screen bg-gray-200">
      <div className="container px-6  py-12 h-full">
        <div className="flex justify-center  h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 bg-white py-6 rounded px-6 lg:ml-20">
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  if (
                    checkValidations(
                      formData,
                      setFormError,
                      setFormData,
                      formError
                    ) === true
                  ) {
                    console.log("onSubmit")
                  }
                }}
              >
                <h1 className="font-medium leading-tight text-xl mb-6">
                  Please enter your name and pick the Sectors you are currently
                  involved in.
                </h1>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/5">
                    <label
                      className="block text-gray-500 w-full font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </div>
                  <div className="md:w-4/5">
                    <input
                      autoFocus={formError.name}
                      value={formData.name}
                      id="name"
                      onChange={e => {
                        setFormError({
                          ...formError,
                          name: e.target.value !== "" ? false : true
                        })
                        setFormData({
                          ...formData,
                          [e.target.id]: e.target.value
                        })
                      }}
                      className=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700   focus:bg-white focus:border-purple-500"
                      type="text"
                    />
                    <div>
                      {formError.name && (
                        <p className="text-rose-600">
                          Please fill out of this Field
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/5">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Sectors:
                    </label>
                  </div>

                  <div className="md:w-4/5">
                    <Select
                      options={options}
                      value={formData.sectors}
                      onChange={data => {
                        setFormData({ ...formData, sectors: data })
                        setFormError({
                          ...formError,
                          sectors: !data.length ? true : false
                        })
                      }}
                      isMulti
                    />
                    <div>
                      {formError.sectors && (
                        <p className="text-rose-600">
                          Please Select at least one
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/5" />
                  <div className="md:w-4/5">
                    <label className=" block text-gray-500 font-bold">
                      <input
                        className="mr-2 leading-tight"
                        value={formData.agreeToTerms}
                        onChange={e => {
                          setFormData({
                            ...formData,
                            agreeToTerms: e.target.checked
                          })
                          setFormError({
                            ...formError,
                            agreeToTerms: e.target.checked ? false : true
                          })
                        }}
                        type="checkbox"
                      />
                      <span className="text-sm">Agree to terms</span>
                    </label>
                    <div>
                      {formError.agreeToTerms && (
                        <p className="text-rose-600 md:w-4/5">
                          Please Agree to terms
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:flex md:items-center bottom-0">
                  <div className="md:w-1/5" />
                  <div className="md:w-4/5">
                    <button
                      type="submit"
                      className="px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
