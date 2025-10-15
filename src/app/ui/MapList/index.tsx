import { MapInfo } from "@/types"
import { useState } from "react"

export default function MapList(props: {
  mapInfos: MapInfo[]
  onMapSelected: (mapInfo: MapInfo) => void
}) {
  const { mapInfos, onMapSelected } = props
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMaps = mapInfos.filter((mapInfo) =>
    mapInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <article
      className="panel is-link"
      style={{
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        marginBottom: 0,
      }}
    >
      {/* Fixed Header */}
      <p className="panel-heading">Maps</p>

      {/* Fixed Search Bar */}
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

      {/* Scrollable Map List */}
      <div style={{ flex: "1", overflowY: "auto" }}>
        {filteredMaps.map((mapInfo) => {
          return (
            <a
              onClick={() => onMapSelected(mapInfo)}
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
      </div>
    </article>
  )
}
