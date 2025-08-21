"use client"

import { MapInfo } from "@/types"
import { useState } from "react"

function territoriesForPercent(
  territoryCount: number,
  blizzardCount: number,
  blizzards: boolean,
  percent: number
) {
  const totalCount = blizzards ? territoryCount - blizzardCount : territoryCount
  return Math.ceil((percent / 100) * totalCount)
}

export default function SeventyCalculator(props: { mapInfo: MapInfo }) {
  const { mapInfo } = props
  const [blizzards, setBlizzards] = useState(false)
  const [currentPercent, setCurrentPercent] = useState(0)

  const handleCurrentPercentInputChange = (newPercentage: number) => {
    if (isNaN(newPercentage)) {
      setCurrentPercent(0)
    } else {
      setCurrentPercent(newPercentage)
    }
  }

  const seventyCount = territoriesForPercent(
    mapInfo.territoryCount,
    mapInfo.blizzardCount,
    blizzards,
    70
  )
  const currentTerritories = territoriesForPercent(
    mapInfo.territoryCount,
    mapInfo.blizzardCount,
    blizzards,
    currentPercent
  )

  return (
    <div className="columns">
      <div className="column has-text-centered">
        <div className="field">
          <label className="label">Current Percentage</label>
          <div className="control">
            <input
              className="input is-rounded"
              type="number"
              onChange={(e) =>
                handleCurrentPercentInputChange(e.target.valueAsNumber)
              }
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Blizzards?</label>
          <div className="control">
            <input
              type="checkbox"
              onChange={() => setBlizzards(!blizzards)}
            ></input>
          </div>
        </div>
      </div>
      <div className="column has-text-centered">
        <div className="block">
          <div>
            <p className="heading">70% Territories Needed</p>
            <p className="title">{seventyCount}</p>
          </div>
        </div>
        <div className="block">
          <div>
            <p className="heading">Current Territories</p>
            <p className="title">{currentTerritories}</p>
          </div>
        </div>
        <div className="block">
          <div>
            <p className="heading has-text-primary">Remaining Territories Needed</p>
            <p className="title has-text-primary">{seventyCount - currentTerritories}</p>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="level">
    //     <div className="level-item has-text-centered">
    //       <div>
    //         <p className="heading">Current Percent</p>
    //         <input
    //           className="input title"
    //           type="number"
    // onChange={(e) => {
    //   if (isNaN(e.target.valueAsNumber)) {
    //     setCurrentPercent(0)
    //   } else {
    //     setCurrentPercent(e.target.valueAsNumber)
    //   }
    //           }}
    //         ></input>
    //       </div>
    //     </div>
    //     <div className="level-item has-text-centered">
    //       <div>
    //         <p className="heading">Blizzards?</p>
    //         <input className="title" type="checkbox" onChange={() => setBlizzards(!blizzards)}></input>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="level">

    //   </div>
    // </>
  )
}
