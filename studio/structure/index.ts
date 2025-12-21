import type { StructureResolver } from 'sanity/structure'
import settings from './settings'
import pages from './pages'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([...settings(S), ...pages(S)])
}
