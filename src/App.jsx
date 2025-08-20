import React, { useState } from 'react'

export default function App() {
  const [limit, setLimit] = useState(1000)
  const [spent, setSpent] = useState(0)
  const [lang, setLang] = useState('de')

  const remaining = limit - spent

  const handleAddSpent = () => {
    const value = parseFloat(prompt(lang === 'de' ? "Wie viel hast du ausgegeben?" : "How much did you spend?"))
    if (!isNaN(value)) setSpent(spent + value)
  }

  const handleSetLimit = () => {
    const value = parseFloat(prompt(lang === 'de' ? "Monatslimit setzen:" : "Set monthly limit:"))
    if (!isNaN(value)) setLimit(value)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">{lang === 'de' ? 'Money Wise' : 'Money Wise'}</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <p className="mb-2">{lang === 'de' ? 'Monatslimit:' : 'Monthly limit:'} {limit}€</p>
        <p className="mb-4">{lang === 'de' ? 'Bisher ausgegeben:' : 'Spent so far:'} {spent}€</p>
        <p className="mb-4 font-bold">{lang === 'de' ? 'Verbleibend:' : 'Remaining:'} {remaining}€</p>

        <button onClick={handleAddSpent} className="w-full mb-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          {lang === 'de' ? 'Ausgabe hinzufügen' : 'Add expense'}
        </button>

        <button onClick={handleSetLimit} className="w-full mb-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded">
          {lang === 'de' ? 'Limit setzen' : 'Set limit'}
        </button>

        <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded">
          {lang === 'de' ? 'Sprache wechseln' : 'Switch language'}
        </button>
      </div>
    </div>
  )
}