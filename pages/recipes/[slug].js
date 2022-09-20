import { createClient } from "contentful"
import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Skeleton from "../../components/Skeleton"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export const getStaticPaths = async () => {

  const res = await client.getEntries({
    content_type: 'recipe'
  })

  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const res = await client.getEntries({
    content_type:'recipe',
    'fields.slug': context.params.slug
  })

  if (!res.items.length) {
    return { 
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: { recipe: res.items[0]},
    revalidate: 10000
  }
}

export default function RecipeDetails({ recipe}) {

if (!recipe) return <div><Skeleton /></div>

const { featuredImage, title, cookingTime, ingridients, method} = recipe.fields

  return (
    <div>
      <div className="banner">
        <Image 
        src={'https:' + featuredImage.fields.file.url }
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>Take about {cookingTime}</p>
        <h3>ingredients</h3>
        {ingridients.map(ing => (
          <span key={ing}>{ ing}</span>
        ))}
      </div>
      <div className="method">
        <h3>
          Method:
        </h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}