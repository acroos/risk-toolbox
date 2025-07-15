export default function MapInfo(props: { mapInfo: MapInfo }) {
  const { mapInfo } = props

  return (
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Territories</p>
          <p className="title">{mapInfo.territoryCount}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Blizzards</p>
          <p className="title">{mapInfo.blizzardCount}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Portals</p>
          <p className="title">{mapInfo.portalCount}</p>
        </div>
      </div>
    </div>
  )
}
