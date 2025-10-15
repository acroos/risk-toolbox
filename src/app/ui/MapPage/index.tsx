"use client"

import { useState } from "react"
import SeventyCalculator from "../SeventyCalculator"
import { useSearchParams } from "next/navigation"
import { MapInfo } from "@/types"
import MapInfoSection from "../MapInfoSection"
import MapList from "../MapList"
import PercentageTable from "../PercentageTable"

export default function MapPage(props: { mapInfos: MapInfo[] }) {
  const { mapInfos } = props

  const searchParams = useSearchParams()

  const searchParamsMap = searchParams.get("map")
  const preSelectedMap = mapInfos.find((mi) => mi.slug === searchParamsMap)

  const [selectedMap, setSelectedMap] = useState<MapInfo | undefined>(
    preSelectedMap
  )
  const [blizzards, setBlizzards] = useState(false)

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">
          <MapList mapInfos={mapInfos} onMapSelected={setSelectedMap} />
        </div>
        <div className="column is-three-quarters">
          {selectedMap === undefined ? (
            <div className="hero is-medium">
              <div className="hero-body has-text-centered">
                <h1 className="title is-3 has-text-grey-light">
                  Select a Map
                </h1>
                <p className="subtitle has-text-grey">
                  Choose a map from the list to view details and use the 70% calculator
                </p>
              </div>
            </div>
          ) : (
            <div className="content">
              {/* Map Header */}
              <header className="hero is-small">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title is-2 has-text-centered">
                      {selectedMap.name}
                    </h1>
                  </div>
                </div>
              </header>

              {/* Map Statistics */}
              <section className="section">
                <div className="container">
                  <h2 className="title is-4 mb-4">Map Statistics</h2>
                  <MapInfoSection mapInfo={selectedMap} />
                </div>
              </section>

              {/* Calculator Section */}
              <section className="section pt-2">
                <div className="container">
                  <h2 className="title is-4 mb-4">70% Calculator</h2>
                  <SeventyCalculator 
                    mapInfo={selectedMap} 
                    blizzards={blizzards}
                    setBlizzards={setBlizzards}
                  />
                </div>
              </section>

              {/* Percentage Table Section */}
              <section className="section pt-2">
                <div className="container">
                  <PercentageTable 
                    mapInfo={selectedMap} 
                    blizzards={blizzards}
                  />
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
