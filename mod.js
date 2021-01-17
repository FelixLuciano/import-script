"use strict"

export default async function importFromGist (gistURL) {
  let text
  
  try {
    text = await fetch(gistURL).then(res => res.text())
  }
  catch (e) {
    console.error(e)
  }
  finally {
    let blob = new Blob([ text ], { type: "application/javascript" })
    let url  = globalThis.URL.createObjectURL(blob)

    return await import(url)
  }
}
