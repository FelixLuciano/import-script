/**
 * @param scriptURL URL of the script to import.
 * @returns  Script's `exports` as `object`.
 * @example const { myScript } = await importScript("https://example.com/.../script.js")
 */
export default async function importScript (scriptURL:string):Promise<object> {
  try {
    const text = await fetch(scriptURL as RequestInfo).then(res => res.text())
    let blob = new Blob([ text as BlobPart ], { type: "application/javascript" })
    let objURL = globalThis.URL.createObjectURL(blob)

    return import(objURL)
  }
  catch (e) {
    console.error(e)
  }
}
