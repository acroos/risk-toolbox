import { MapInfo } from "@/types"
import { useState, useMemo } from "react"

export default function MapList(props: {
  mapInfos: MapInfo[]
  onMapSelected: (mapInfo: MapInfo) => void
}) {
  const { mapInfos, onMapSelected } = props
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMapSlug, setSelectedMapSlug] = useState<string | null>(null)

  const filteredMaps = useMemo(() => {
    if (!searchTerm.trim()) return mapInfos

    return mapInfos.filter((mapInfo) =>
      mapInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [mapInfos, searchTerm])

  const handleMapSelect = (mapInfo: MapInfo) => {
    setSelectedMapSlug(mapInfo.slug)
    onMapSelected(mapInfo)
  }

  const clearSearch = () => {
    setSearchTerm("")
  }

  return (
    <article
      className="panel is-link"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: 0,
      }}
    >
      {/* Fixed Header */}
      <div className="panel-heading is-flex is-justify-content-space-between is-align-items-center">
        <span>Maps ({filteredMaps.length})</span>
        {searchTerm && (
          <button
            className="delete is-small"
            onClick={clearSearch}
            title="Clear search"
          ></button>
        )}
      </div>

      {/* Fixed Search Bar */}
      <div className="panel-block">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-link"
            type="text"
            placeholder="Search maps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="icon is-left">
            <i className="fa-solid fa-search" aria-hidden="true"></i>
          </span>
          {searchTerm && (
            <span className="icon is-right is-clickable" onClick={clearSearch}>
              <i className="fa-solid fa-times" aria-hidden="true"></i>
            </span>
          )}
        </p>
      </div>

      {/* Scrollable Map List */}
      <div style={{ flex: "1", overflowY: "auto" }}>
        {filteredMaps.length === 0 ? (
          <div className="panel-block has-text-centered has-text-grey">
            <div>
              <p className="mb-2">
                <i className="fa-solid fa-search fa-2x"></i>
              </p>
              <p>No maps found</p>
              {searchTerm && (
                <p className="is-size-7">Try a different search term</p>
              )}
            </div>
          </div>
        ) : (
          filteredMaps.map((mapInfo) => {
            const isSelected = selectedMapSlug === mapInfo.slug
            return (
              <a
                onClick={() => handleMapSelect(mapInfo)}
                key={mapInfo.slug}
                className={`panel-block ${
                  isSelected ? "is-active has-background-link-light" : ""
                }`}
                style={{
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span className="panel-icon">
                  <i className="fa-solid fa-map" aria-hidden="true"></i>
                </span>
                <div className="is-flex-grow-1">
                  <div className="has-text-weight-medium">{mapInfo.name}</div>
                  <div className="is-size-7 has-text-grey">
                    {mapInfo.territoryCount} territories •{" "}
                    {mapInfo.blizzardCount} blizzards • {mapInfo.portalCount}{" "}
                    portals
                  </div>
                </div>
              </a>
            )
          })
        )}
      </div>
    </article>
  )
}
