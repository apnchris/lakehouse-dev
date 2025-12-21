import { AddUserIcon, HomeIcon, UsersIcon, CaseIcon, EarthGlobeIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) => [
  S.documentTypeListItem('company').title('Companies').icon(EarthGlobeIcon),
  S.documentTypeListItem('member').title('Members').icon(AddUserIcon),
  S.divider(),
  S.listItem()
    .title('Homepage')
    .icon(HomeIcon)
    .child(S.document().schemaType('homepage').documentId('homepage').title('Homepage')),
  S.listItem()
    .title('Team')
    .icon(UsersIcon)
    .child(S.document().schemaType('team').documentId('team').title('Team')),
  S.listItem()
    .title('Portfolio')
    .icon(CaseIcon)
    .child(S.document().schemaType('portfolio').documentId('portfolio').title('Portfolio')),
]
