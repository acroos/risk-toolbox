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

  // Collapsible section states
  const [isStatsCollapsed, setIsStatsCollapsed] = useState(false)
  const [isCalculatorCollapsed, setIsCalculatorCollapsed] = useState(false)

  return (
    <div className="container">
      <div
        className="columns"
        style={{ minHeight: "100vh", alignItems: "stretch" }}
      >
        <div
          className="column is-one-quarter"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <MapList mapInfos={mapInfos} onMapSelected={setSelectedMap} />
        </div>
        <div className="column is-three-quarters">
          {selectedMap === undefined ? (
            <div className="hero is-medium">
              <div className="hero-body has-text-centered">
                <h1 className="title is-3 has-text-grey-light">Select a Map</h1>
                <p className="subtitle has-text-grey">
                  Choose a map from the list to view details and use the 70%
                  calculator
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
                  <div className="box">
                    <div
                      className="is-flex is-justify-content-space-between is-align-items-center is-clickable"
                      onClick={() => setIsStatsCollapsed(!isStatsCollapsed)}
                    >
                      <h2 className="title is-4 mb-0">Map Statistics</h2>
                      <span className="icon">
                        <i
                          className={`fas ${
                            isStatsCollapsed
                              ? "fa-chevron-down"
                              : "fa-chevron-up"
                          }`}
                        ></i>
                      </span>
                    </div>

                    {!isStatsCollapsed && (
                      <div className="mt-4">
                        <MapInfoSection mapInfo={selectedMap} />
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Calculator Section */}
              <section className="section pt-2">
                <div className="container">
                  <div className="box">
                    <div
                      className="is-flex is-justify-content-space-between is-align-items-center is-clickable"
                      onClick={() =>
                        setIsCalculatorCollapsed(!isCalculatorCollapsed)
                      }
                    >
                      <h2 className="title is-4 mb-0">70% Calculator</h2>
                      <span className="icon">
                        <i
                          className={`fas ${
                            isCalculatorCollapsed
                              ? "fa-chevron-down"
                              : "fa-chevron-up"
                          }`}
                        ></i>
                      </span>
                    </div>

                    {!isCalculatorCollapsed && (
                      <div className="mt-4">
                        <SeventyCalculator
                          mapInfo={selectedMap}
                          blizzards={blizzards}
                          setBlizzards={setBlizzards}
                        />
                      </div>
                    )}
                  </div>
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
