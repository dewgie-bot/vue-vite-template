import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import App from '@/App.vue'

describe('app', () => {
  it('renders the template headline', () => {
    render(App)
    expect(screen.getByText(/Vue \+ Vite \+ TypeScript/i)).toBeTruthy()
  })
})
