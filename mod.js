/**
 * @param {String} scriptURL URL of the script to import.
 * @returns {Promise<object>} Script's `exports` as `object`.
 * @example const { myScript } = await importScript("https://example.com/.../script.js")
 */
export default async function importScript (scriptURL) {
  try {
    const text = await fetch(scriptURL).then(res => res.text())
    let blob = new Blob([ text ], { type: "application/javascript" })
    let objURL = URL.createObjectURL(blob)

    return import(objURL)
  }
  catch (error) {
    throw(error)
  }
}
