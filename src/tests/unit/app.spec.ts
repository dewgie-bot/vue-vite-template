import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import App from '@/App.vue'

describe('App', () => {
  it('renders the template headline', () => {
    render(App)
    expect(screen.getByText(/Vue \+ Vite \+ TypeScript/i)).toBeTruthy()
  })
})
