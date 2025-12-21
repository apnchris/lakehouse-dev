import { VersionsIcon, VideoIcon, RetrieveIcon, HomeIcon, UsersIcon, ComposeSparklesIcon, EarthGlobeIcon, MobileDeviceIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) => [
  S.documentTypeListItem('post').title('Posts').icon(RetrieveIcon),
  S.divider(),
  S.listItem()
    .title('Video')
    .icon(VideoIcon)
    .child(S.document().schemaType('video').documentId('video').title('Video')),
  // S.listItem()
  //   .title('Tastes Selector')
  //   .icon(VersionsIcon)
  //   .child(S.document().schemaType('tastesSelector').documentId('tastesSelector').title('Tastes')),
]
