// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Content Types
import category from './types/category'
import country from './types/country'
import tag from './types/tags'
import listing from './types/listing'
import manufacturer from './types/manufacturer'

// Tabs
import categoryContent from './tabs/categoryContent'
import manufacturerContent from './tabs/manufacturerContent'
import listingContent from './tabs/listingContent'

// Modules
import metaCard from './modules/metaCard'
import categoryModule from './modules/categoryModule'
import manufacturerModule from './modules/manufacturerModule'
import listingModule from './modules/listingModule'
// import linkedProjects from './modules/linkedProjects'
// import singleProject from './modules/singleProject'
import location from './modules/location'
import material from './modules/fields/material'

// Fields
import origin from './modules/fields/origin'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    manufacturer,
    listing,
    category,
    country,
    tag,
    // Tabs
    categoryContent,
    manufacturerContent,
    listingContent,
    // Modules
    metaCard,
    categoryModule,
    manufacturerModule,
    listingModule,
    location,
    material,
    // Fields
    origin
  ])
})
