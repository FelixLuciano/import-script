export default async function importScript (scriptURL:string):Promise<Response> {
  try {
    const text = await fetch(scriptURL as RequestInfo).then(res => res.text())
    let blob = new Blob([ text as BlobPart ], { type: "application/javascript" })
    let objURL = globalThis.URL.createObjectURL(blob)

    return await import(objURL)
  }
  catch (e) {
    console.error(e)
  }
}
