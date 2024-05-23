import { QuartzFilterPlugin } from "../types"

const explorerFilterFn = (node: FileNode) => {
  return !["tags", "noindex"].some((path) => node.name.includes(path))
}
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.Meta({ enableSearch: false, enableDarkMode: false }),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ filterFn: explorerFilterFn })),
  ],
  right: [],
}