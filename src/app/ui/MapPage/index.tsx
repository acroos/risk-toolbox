"use client"

import { useState } from "react"
import SeventyCalculator from "../SeventyCalculator"
import { useSearchParams } from "next/navigation"
import { MapInfo } from "@/types"
import MapInfoSection from "../MapInfoSection"
import MapList from "../MapList"

export default function MapPage(props: { mapInfos: MapInfo[] }) {
  const { mapInfos } = props

  const searchParams = useSearchParams()

  const searchParamsMap = searchParams.get("map")
  const preSelectedMap = mapInfos.find((mi) => mi.slug === searchParamsMap)

  const [selectedMap, setSelectedMap] = useState<MapInfo | undefined>(
    preSelectedMap
  )

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">
          <MapList mapInfos={mapInfos} onMapSelected={setSelectedMap} />
        </div>
        <div className="column is-three-quarters">
          {selectedMap !== undefined && (
            <>
              <div className="block">
                <p className="is-size-2 has-text-centered">
                  {selectedMap.name}
                </p>
              </div>
              <div className="block">
                <MapInfoSection mapInfo={selectedMap} />
              </div>
              <div className="block">
                <h2 className="is-size-4 has-text-centered">70% Calculator</h2>
              </div>
              <div className="block">
                <SeventyCalculator mapInfo={selectedMap} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
