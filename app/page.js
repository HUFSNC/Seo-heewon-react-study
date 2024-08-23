'use client'
import './page.css'

function Calc() {
  function calc() {
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    const result = document.getElementById('result')

    result.value = Number(x) + Number(y)
  }
  return (
    <div class="calc">
      <input id="x" />
      <input id="y" />
      <input id="button" type="button" value="계산" onClick={calc} />
      <input id="result" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <h1>계산기 프로그램</h1>
      <Calc></Calc>
    </>
  )
}
