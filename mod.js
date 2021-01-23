"use strict"

export default async function importFromGist (gistURL) {
  try {
    const text = await fetch(gistURL).then(res => res.text())
    let blob = new Blob([ text ], { type: "application/javascript" })
    let url  = globalThis.URL.createObjectURL(blob)

    return await import(url)
  }
  catch (e) {
    console.error(e)
  }
}
