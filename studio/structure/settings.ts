import { ControlsIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) => [
  S.listItem()
    .title('Settings')
    .icon(ControlsIcon)
    .child(
      S.document()
        .schemaType('siteSettings')
        .documentId('siteSettings')
        .title('Settings')
    ),
]
