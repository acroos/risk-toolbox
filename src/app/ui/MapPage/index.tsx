"use client"

import { useState } from "react"
import MapInfo from "../MapInfo"
import SeventyCalculator from "../SeventyCalculator"
import { useSearchParams } from "next/navigation"

export default function MapPage(props: { mapInfos: MapInfo[] }) {
  const { mapInfos } = props

  const searchParams = useSearchParams()

  const searchParamsMap = searchParams.get("map")
  const preSelectedMap = mapInfos.find((mi) => mi.slug === searchParamsMap)

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMap, setSelectedMap] = useState<MapInfo | undefined>(
    preSelectedMap
  )

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">
          <article className="panel is-link">
            <p className="panel-heading">Maps</p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input is-link"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="icon is-left">
                  <i className="fa-solid fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            {mapInfos
              .filter((mapInfo) =>
                mapInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((mapInfo) => {
                return (
                  <a
                    onClick={() => setSelectedMap(mapInfo)}
                    key={mapInfo.slug}
                    className="panel-block is-active"
                  >
                    <span className="panel-icon">
                      <i className="fa-solid fa-map" aria-hidden="true"></i>
                    </span>
                    {mapInfo.name}
                  </a>
                )
              })}
          </article>
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
                <MapInfo mapInfo={selectedMap} />
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
