import { MapInfo } from "@/types"
import { useState } from "react"

export default function MapList(props: {
  mapInfos: MapInfo[]
  onMapSelected: (mapInfo: MapInfo) => void
}) {
  const { mapInfos, onMapSelected } = props
  const [searchTerm, setSearchTerm] = useState("")
  
  return (
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
    </article>
  )
}
