export default async function importScript (scriptURL) {
  try {
    const text = await fetch(scriptURL).then(res => res.text())
    let blob = new Blob([ text ], { type: "application/javascript" })
    let objURL = globalThis.URL.createObjectURL(blob)

    return await import(objURL)
  }
  catch (e) {
    console.error(e)
  }
}
