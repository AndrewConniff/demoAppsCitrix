import request from 'supertest'
import app from './app.js'
import { describe, expect, it } from 'vitest'

describe('GET /', () => {
  it('returns a running status message', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Task Management API is running!' })
  })
})
