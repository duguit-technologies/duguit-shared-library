// Composants .vue avec export par défaut
export { default as Toast } from './components/Toast.vue'
export { default as Spinner } from './components/Spinner.vue'

// Composables 
export * from './composables/useToast'

// JSON (ré-export propre)
import role from './json/role.json'
export { role }

// Stores
export * from './stores/auth'
export * from './stores/color'
export * from './stores/dateFormatter'
export * from './stores/spinnerStore'

// Types
export * from './types/type'

// Utils
export * from './utils/role'

// Axios
export { api, setApiBaseURL } from './axios'
