import { SiteNav } from "@/components/site-nav"
import { VideoIntro } from "@/components/video-intro"
import { PortfolioSections } from "@/components/portfolio-sections"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <VideoIntro />
        <PortfolioSections />
      </main>
    </>
  )
}
