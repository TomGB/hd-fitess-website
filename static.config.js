import path from 'path'

const contentful = require('contentful')

const client = contentful.createClient({
  space: '49gia0cc0i4z',
  accessToken: '7F9-A175O49Y757b4rMJaP77a4hdKhpQXAhKvzgprj8'
})

const getRecipes = async () => {
  const response = await (new Promise((resolve) => client.getEntries().then(resolve)))
  return response.items
}

const toUrl = input => input.replace(/\s+/g, '-').replace(/[^0-9a-z-]/gi, '')

export default {
  getRoutes: async () => {
    const rawRecipes = await getRecipes()

    const recipes = rawRecipes.map(item => {
      const { recipeName, category, mainRecipePicture, ingredients, method } = item.fields
      const mainImageUrl = mainRecipePicture.fields.file.url
      return {
          url: toUrl(recipeName),
          recipeName,
          category,
          mainImageUrl,
          ingredients,
          method,
      }
    })

    return [
      {
        path: '/recipes',
        getData: () => ({
          recipes,
        }),
        children: recipes.map(recipe => ({
          path: `/${recipe.url}/`,
          template: 'src/containers/Recipe',
          getData: () => ({
            recipe,
          }),
        })),
      },
      {
        path: '/',
        getData: () => ({
          recipes,
        }),
        children: recipes.map(recipe => ({
          path: `recipes/${recipe.url}/`,
          template: 'src/containers/Recipe',
          getData: () => ({
            recipe,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
