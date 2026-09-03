import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { projects } from '../src/data/projectsData.js'

const client = createClient({
  projectId: 'b1shmtql',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN // The CLI will inject this or we can pass it
})

// Sanity CLI `sanity exec` usually does not inject the token as SANITY_API_TOKEN automatically unless specified.
// Actually, `sanity exec` provides a configured client directly via import 'part:@sanity/base/client' (in v2)
// In v3, `sanity exec` provides `getCliClient`.
import { getCliClient } from 'sanity/cli'
const cliClient = getCliClient()

async function uploadImage(imagePath) {
  if (!imagePath || imagePath === '#') return undefined;
  
  // The images in projectsData.js are like "/wiring.jpg", they are in "public" folder.
  const fullPath = path.join(process.cwd(), '../public', imagePath)
  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: Image not found at ${fullPath}`)
    return undefined
  }

  console.log(`Uploading ${imagePath}...`)
  const asset = await cliClient.assets.upload('image', fs.createReadStream(fullPath), {
    filename: path.basename(fullPath)
  })
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id
    }
  }
}

async function migrate() {
  console.log('Starting migration...')
  
  for (const project of projects) {
    console.log(`Migrating project: ${project.title}`)
    
    const mainImage = await uploadImage(project.img)
    
    let collages = []
    if (project.collages && project.collages.length > 0) {
      for (const img of project.collages) {
        const uploaded = await uploadImage(img)
        if (uploaded) collages.push(uploaded)
      }
    }

    const doc = {
      _type: 'project',
      title: project.title,
      desc: project.desc,
      tags: project.tags || [],
      img: mainImage,
      github: project.github !== '#' ? project.github : undefined,
      demo: project.demo !== '#' ? project.demo : undefined,
      longDesc: project.longDesc,
      collages: collages.length > 0 ? collages : undefined,
      features: project.features || []
    }

    const result = await cliClient.create(doc)
    console.log(`Created document ${result._id}`)
  }
  
  console.log('Migration complete!')
}

migrate().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
