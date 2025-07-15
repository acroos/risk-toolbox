import { promises as fs } from "fs"
import MapInfo from "./ui/MapInfo"
import MapPage from "./ui/MapPage"
import { Suspense } from "react"

export default async function Home() {
  const mapsFile = await fs.readFile(
    process.cwd() + "/src/data/maps.json",
    "utf8"
  )
  const mapInfos: MapInfo[] = JSON.parse(mapsFile)

  return (
    <Suspense>
      <MapPage mapInfos={mapInfos} />
    </Suspense>
  )
}
