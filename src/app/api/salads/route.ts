import { NextResponse } from 'next/server'

// Mock data for salads
const mockSalads = [
  {
    id: '1',
    name: 'Mediterranean Delight',
    description: 'Fresh tomatoes, cucumbers, olives, and feta cheese with olive oil dressing',
    price: 12.99,
    image: '/images/mediterranean-salad.jpg',
    category: 'Mediterranean',
    ingredients: ['Mixed greens', 'Tomatoes', 'Cucumbers', 'Olives', 'Feta cheese', 'Olive oil dressing'],
    macros: {
      calories: 280,
      protein: 8,
      carbs: 15,
      fat: 22
    },
    allergens: ['Dairy'],
    vegan: false,
    glutenFree: true,
    availability: true
  },
  {
    id: '2',
    name: 'Caesar Supreme',
    description: 'Crispy romaine lettuce with parmesan cheese, croutons, and classic Caesar dressing',
    price: 11.99,
    image: '/images/caesar-salad.jpg',
    category: 'Classic',
    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Croutons', 'Caesar dressing'],
    macros: {
      calories: 320,
      protein: 10,
      carbs: 18,
      fat: 24
    },
    allergens: ['Dairy', 'Gluten'],
    vegan: false,
    glutenFree: false,
    availability: true
  },
  {
    id: '3',
    name: 'Green Goddess',
    description: 'Spinach, avocado, cucumber, and mixed herbs with green goddess dressing',
    price: 13.99,
    image: '/images/green-goddess-salad.jpg',
    category: 'Healthy',
    ingredients: ['Spinach', 'Avocado', 'Cucumber', 'Mixed herbs', 'Green goddess dressing'],
    macros: {
      calories: 250,
      protein: 6,
      carbs: 12,
      fat: 20
    },
    allergens: [],
    vegan: true,
    glutenFree: true,
    availability: true
  },
  {
    id: '4',
    name: 'Protein Power',
    description: 'Grilled chicken, quinoa, chickpeas, and mixed vegetables with tahini dressing',
    price: 15.99,
    image: '/images/protein-power-salad.jpg',
    category: 'Protein',
    ingredients: ['Grilled chicken', 'Quinoa', 'Chickpeas', 'Mixed vegetables', 'Tahini dressing'],
    macros: {
      calories: 380,
      protein: 28,
      carbs: 25,
      fat: 18
    },
    allergens: ['Sesame'],
    vegan: false,
    glutenFree: true,
    availability: true
  },
  {
    id: '5',
    name: 'Rainbow Crunch',
    description: 'Colorful mix of bell peppers, carrots, purple cabbage, and sunflower seeds',
    price: 10.99,
    image: '/images/rainbow-crunch-salad.jpg',
    category: 'Colorful',
    ingredients: ['Bell peppers', 'Carrots', 'Purple cabbage', 'Sunflower seeds', 'Balsamic vinaigrette'],
    macros: {
      calories: 220,
      protein: 5,
      carbs: 18,
      fat: 14
    },
    allergens: [],
    vegan: true,
    glutenFree: true,
    availability: true
  },
  {
    id: '6',
    name: 'Tropical Paradise',
    description: 'Mixed greens with mango, pineapple, coconut flakes, and citrus dressing',
    price: 14.99,
    image: '/images/tropical-paradise-salad.jpg',
    category: 'Tropical',
    ingredients: ['Mixed greens', 'Mango', 'Pineapple', 'Coconut flakes', 'Citrus dressing'],
    macros: {
      calories: 290,
      protein: 4,
      carbs: 22,
      fat: 16
    },
    allergens: [],
    vegan: true,
    glutenFree: true,
    availability: true
  }
]

export async function GET() {
  return NextResponse.json({ salads: mockSalads })
}
