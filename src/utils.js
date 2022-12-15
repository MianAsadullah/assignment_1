export const checkValidations = (
  formData,
  setFormError,
  setFormData,
  formError
) => {
  let submit = true
  if (formData.name === "") {
    setFormError({ ...formError, name: true })
    submit = false
  } else if (!formData.sectors.length) {
    setFormError({ ...formError, sectors: true })
    submit = false
  } else {
    submit = true
  }
  console.log("submit", submit)
  return submit
}
