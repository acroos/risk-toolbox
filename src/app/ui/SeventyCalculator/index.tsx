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

export default function SeventyCalculator(props: { 
  mapInfo: MapInfo
  blizzards: boolean
  setBlizzards: (blizzards: boolean) => void
}) {
  const { mapInfo, blizzards, setBlizzards } = props
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
  const totalTerritories = blizzards ? mapInfo.territoryCount - mapInfo.blizzardCount : mapInfo.territoryCount
  const progressPercentage = Math.min((currentTerritories / seventyCount) * 100, 100)

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-5 is-flex is-align-items-center">
          <div className="box" style={{ width: '100%' }}>
            <div className="field">
              <label className="label">Current Percentage</label>
              <div className="control">
                <input
                  className="input is-large"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Enter percentage..."
                  onChange={(e) =>
                    handleCurrentPercentInputChange(e.target.valueAsNumber)
                  }
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={blizzards}
                        onChange={() => setBlizzards(!blizzards)}
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="ml-3 has-text-weight-medium">
                      {blizzards ? 'Excluding blizzards' : 'Including blizzards'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-7">
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="box has-text-centered">
                <p className="heading">Total Territories</p>
                <p className="title is-2 has-text-info">{totalTerritories}</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box has-text-centered">
                <p className="heading">70% Territories Needed</p>
                <p className="title is-3 has-text-warning">{seventyCount}</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box has-text-centered">
                <p className="heading">Current Territories</p>
                <p className="title is-2 has-text-success">{currentTerritories}</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box has-text-centered">
                <p className="heading">Remaining Needed</p>
                <p className="title is-2 has-text-primary">{Math.max(0, seventyCount - currentTerritories)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
