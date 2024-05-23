const noindexFlag: boolean = vfile.data?.frontmatter?.hidden ?? false
 
const explorerFilterFn = (node: FileNode) => {
  return ![noindexFlag].some((path) => node.name.includes(path))
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