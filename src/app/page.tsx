import { promises as fs } from "fs";
import MapInfo from "./ui/MapInfo"
import MapPage from "./ui/MapPage"

export default async function Home() {
  const mapsFile = await fs.readFile(process.cwd() + "/src/data/maps.json", "utf8")
  const mapInfos: MapInfo[] = JSON.parse(mapsFile)

  return <MapPage mapInfos={mapInfos} />
}
