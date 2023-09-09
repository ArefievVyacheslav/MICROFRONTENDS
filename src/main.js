import { registerApplication, start } from 'single-spa'
import { createStore } from './store/index.js'

window.store = createStore()

registerApplication(
  'general',
  () => import('./general/src/main.js'),
  () => location.pathname.startsWith('/')
)

registerApplication(
  'dashboard',
  () => import('./dashboard/src/main.js'),
  () => location.pathname.startsWith('/')
)

registerApplication(
  'crm',
  () => import('./crm/src/main.js'),
  () => location.pathname.startsWith('/') || location.pathname.startsWith('/crm')
)

start()
