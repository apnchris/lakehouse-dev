import { ControlsIcon, DocumentIcon, MenuIcon, TagsIcon, RobotIcon, TagIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) => [
  S.listItem()
    .title('Settings')
    .icon(ControlsIcon)
    .child(
      S.list()
        .title('Settings')
        .items([
          // S.listItem()
          //   .title('Meta')
          //   .icon(RobotIcon)
          //   .child(S.document().schemaType('meta').documentId('meta').title('Meta')),
          // S.listItem()
          //   .title('Navigation')
          //   .icon(MenuIcon)
          //   .child(
          //     S.document().schemaType('navigation').documentId('navigation').title('Navigation')
          //   ),
        ])
    )
]
