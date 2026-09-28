import { useState } from 'react'
import {
  Alert,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

import { createProduct } from '../api/productApi'
import type { CreateProductRequest } from '../models/CreateProductRequest'

function AddProduct() {
  const [formData, setFormData] = useState<CreateProductRequest>({
    sku: '',
    name: '',
    description: '',
    category: '',
    price: 0,
    currency: 'INR',
  })

  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: name === 'price' ? Number(value) : value,
    })
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    try {
      setSuccess('')
      setError('')

      const product = await createProduct(formData)

      setSuccess(
        `Product "${product.name}" created successfully.`
      )

      setFormData({
        sku: '',
        name: '',
        description: '',
        category: '',
        price: 0,
        currency: 'INR',
      })
    } catch (error) {
      console.error('Failed to create product:', error)

      setError('Failed to create product. Please check your input.')
    }
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Add Product
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="SKU"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Currency"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
        >
          Create Product
        </Button>
      </form>
    </Paper>
  )
}

export default AddProduct