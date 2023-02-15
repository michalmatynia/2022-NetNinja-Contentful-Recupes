import { createClient } from "contentful"
import { useEffect } from "react"
import RecipeCard from "../components/RecipeCard"

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({
    content_type: 'recipe' // identifier for content type
  })

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 10000,
  }
}

export default function Recipes({recipes}) {

useEffect(()=>{
  console.log('er');
},[])

  return (
    <div className="recipe-list">
      {/* {recipes.map(recipe => (
        <RecipeCard
          key={recipe.sys.id}
          recipe={recipe}/> 
      ))} */}
      <style jsx>{`
      .recipe-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 20px 60px;
      }
      `}</style>
    </div>
  )
}