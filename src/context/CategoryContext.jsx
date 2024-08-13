import { useState, createContext } from 'react'

const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('initial')

  const changeCategory = (category) => {
    setActiveCategory(category)
  }

  const data = {
    activeCategory,
    changeCategory
  }

  return (
    <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>
  )
}

export { CategoryContext, CategoryProvider }
