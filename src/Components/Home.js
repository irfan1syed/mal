import React from 'react'
import '../App.css'
export default function Home() {
  return (
    <div class="nap">
    <div class="fac">
        <h1>Upload the PDF File!</h1>
        <div id="wer">
        <input type='file' accept='.pdf'/>
        <br/>
        <button class="lok">Submit<span class="material-symbols-outlined">
find_in_page
</span></button>
        
        </div>
    </div>
    </div>
  )
}
