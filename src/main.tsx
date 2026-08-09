import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n'
import { UnitProvider } from './units'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <UnitProvider>
        <App />
      </UnitProvider>
    </LanguageProvider>
  </StrictMode>,
)
