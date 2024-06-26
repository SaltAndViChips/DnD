import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
  filterFn: (node) => {
    if (!node.file) {
      // the current node is a folder
      let indexFile = node.children.find((node) => node.name === "index")
      if (indexFile) {
        // a child node named index exists
        return indexFile?.file?.frontmatter?.tags?.includes("excluded") !== true
      }
    }

    return true
  },
})),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
  filterFn: (node) => {
    if (!node.file) {
      // the current node is a folder
      let indexFile = node.children.find((node) => node.name === "index")
      if (indexFile) {
        // a child node named index exists
        return indexFile?.file?.frontmatter?.tags?.includes("excluded") !== true
      }
    }

    return true
  },
})),
  ],
  right: [],
}


