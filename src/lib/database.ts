// Mock database using JSON files and in-memory storage
// In a real application, you would use a proper database like PostgreSQL, MongoDB, etc.

interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  isVerified: boolean
  createdAt: string
}

interface Salad {
  id: string
  name: string
  price: number
  image: string
  description: string
  macros: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  ingredients: string[]
}

interface Order {
  id: string
  userId: string
  items: any[]
  deliveryInfo: any
  totalAmount: number
  status: string
  createdAt: string
  estimatedDelivery: string
}

// In-memory storage (in production, use a real database)
let users: User[] = []
let orders: Order[] = []
let otps: { [email: string]: { code: string; expiry: number } } = {}

// Mock salads data
const salads: Salad[] = [
  {
    id: '1',
    name: 'Mediterranean Delight',
    price: 299,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Fresh mixed greens with cherry tomatoes, olives, feta cheese, and Mediterranean herbs.',
    macros: {
      calories: 285,
      protein: 12,
      carbs: 18,
      fat: 20
    },
    ingredients: ['Mixed greens', 'Cherry tomatoes', 'Kalamata olives', 'Feta cheese', 'Red onion', 'Cucumber', 'Mediterranean herbs']
  },
  {
    id: '2',
    name: 'Caesar Supreme',
    price: 149,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, and our signature Caesar dressing.',
    macros: {
      calories: 320,
      protein: 25,
      carbs: 15,
      fat: 18
    },
    ingredients: ['Romaine lettuce', 'Grilled chicken breast', 'Parmesan cheese', 'Croutons', 'Caesar dressing']
  },
  {
    id: '3',
    name: 'Protein Power Bowl',
    price: 249,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
    description: 'Quinoa base with grilled salmon, avocado, chickpeas, and mixed vegetables.',
    macros: {
      calories: 420,
      protein: 32,
      carbs: 35,
      fat: 18
    },
    ingredients: ['Quinoa', 'Grilled salmon', 'Avocado', 'Chickpeas', 'Bell peppers', 'Cucumber', 'Lemon vinaigrette']
  },
  {
    id: '4',
    name: 'Garden Fresh Veggie',
    price: 249,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'A colorful mix of seasonal vegetables with hummus and tahini dressing.',
    macros: {
      calories: 245,
      protein: 8,
      carbs: 32,
      fat: 12
    },
    ingredients: ['Mixed greens', 'Carrots', 'Bell peppers', 'Cucumber', 'Cherry tomatoes', 'Hummus', 'Tahini dressing']
  },
  {
    id: '5',
    name: 'Keto Avocado Crunch',
    price: 449,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop',
    description: 'Low-carb salad with avocado, bacon, eggs, and cheese on a bed of spinach.',
    macros: {
      calories: 380,
      protein: 22,
      carbs: 8,
      fat: 30
    },
    ingredients: ['Spinach', 'Avocado', 'Bacon', 'Hard-boiled eggs', 'Cheddar cheese', 'Walnuts', 'Ranch dressing']
  },
  {
    id: '6',
    name: 'Asian Fusion',
    price: 229,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Asian-inspired salad with grilled chicken, mandarin oranges, and sesame ginger dressing.',
    macros: {
      calories: 295,
      protein: 28,
      carbs: 22,
      fat: 12
    },
    ingredients: ['Mixed greens', 'Grilled chicken', 'Mandarin oranges', 'Edamame', 'Carrots', 'Sesame seeds', 'Ginger dressing']
  },
  {
    id: '7',
    name: 'Southwest Fiesta',
    price: 329,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Spicy southwestern salad with black beans, corn, peppers, and chipotle dressing.',
    macros: {
      calories: 315,
      protein: 15,
      carbs: 38,
      fat: 14
    },
    ingredients: ['Romaine lettuce', 'Black beans', 'Corn', 'Bell peppers', 'Cherry tomatoes', 'Avocado', 'Chipotle dressing']
  },
  {
    id: '8',
    name: 'Tropical Paradise',
    price: 319,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Refreshing tropical salad with grilled shrimp, mango, pineapple, and coconut.',
    macros: {
      calories: 275,
      protein: 24,
      carbs: 28,
      fat: 8
    },
    ingredients: ['Mixed greens', 'Grilled shrimp', 'Mango', 'Pineapple', 'Coconut flakes', 'Red onion', 'Lime vinaigrette']
  }
]

// User management
export function getUsers(): User[] {
  return users
}

export function addUser(user: User): void {
  users.push(user)
}

export function updateUser(updatedUser: User): void {
  const index = users.findIndex(u => u.id === updatedUser.id)
  if (index !== -1) {
    users[index] = updatedUser
  }
}

// Salads management
export function getSalads(): Salad[] {
  return salads
}

// Orders management
export function getOrders(): Order[] {
  return orders
}

export function addOrder(order: Order): void {
  orders.push(order)
}

// OTP management
export function addOTP(email: string, code: string): void {
  otps[email] = {
    code,
    expiry: Date.now() + 10 * 60 * 1000 // 10 minutes
  }
}

export function verifyOTP(email: string, code: string): boolean {
  const otp = otps[email]
  if (!otp) return false
  
  if (Date.now() > otp.expiry) {
    delete otps[email]
    return false
  }
  
  if (otp.code === code) {
    delete otps[email]
    return true
  }
  
  return false
}
