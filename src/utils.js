export const checkValidations = (
  formData,
  setFormError,
  setFormData,
  formError
) => {
  let submit = true
  console.log("formData", formData)
  if (formData.name === "") {
    setFormError({ ...formError, name: true })
    submit = false
  } else if (!formData.sectors.length) {
    setFormError({ ...formError, sectors: true })
    submit = false
  } else if (formData.agreeToTerms === false) {
    setFormError({ ...formError, agreeToTerms: true })
    submit = false
  } else {
    submit = true
  }
  return submit
}
