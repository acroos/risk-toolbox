import { MapInfo } from "@/types"

export default function MapInfoSection(props: { mapInfo: MapInfo }) {
  const { mapInfo } = props

  return (
    <div className="columns is-mobile">
      <div className="column has-text-centered">
        <div className="box">
          <div className="block">
            <span className="icon is-large has-text-primary">
              <i className="fas fa-globe fa-2x"></i>
            </span>
          </div>
          <p className="heading">Territories</p>
          <p className="title is-3 has-text-primary">
            {mapInfo.territoryCount}
          </p>
        </div>
      </div>
      <div className="column has-text-centered">
        <div className="box">
          <div className="block">
            <span className="icon is-large has-text-info">
              <i className="fas fa-snowflake fa-2x"></i>
            </span>
          </div>
          <p className="heading">Blizzards</p>
          <p className="title is-3 has-text-info">{mapInfo.blizzardCount}</p>
        </div>
      </div>
      <div className="column has-text-centered">
        <div className="box">
          <div className="block">
            <span className="icon is-large has-text-warning">
              <i className="fas fa-door-open fa-2x"></i>
            </span>
          </div>
          <p className="heading">Portals</p>
          <p className="title is-3 has-text-warning">{mapInfo.portalCount}</p>
        </div>
      </div>
    </div>
  )
}
