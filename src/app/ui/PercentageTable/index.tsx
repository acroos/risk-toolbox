"use client"

import { MapInfo } from "@/types"
import { useState } from "react"

export default function PercentageTable(props: {
  mapInfo: MapInfo
  blizzards: boolean
}) {
  const { mapInfo, blizzards } = props
  const [isCollapsed, setIsCollapsed] = useState(true)

  // Calculate total territories based on blizzards setting
  const totalTerritories = blizzards
    ? mapInfo.territoryCount - mapInfo.blizzardCount
    : mapInfo.territoryCount

  // Generate array from 1 to total territories
  const territoryNumbers = Array.from(
    { length: totalTerritories },
    (_, i) => i + 1
  )

  // Calculate percentage for each territory count
  const getPercentage = (territories: number) => {
    return Math.floor((territories / totalTerritories) * 100)
  }

  return (
    <div className="box">
      <div
        className="is-flex is-justify-content-space-between is-align-items-center is-clickable"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3 className="title is-5 mb-0">Territory Counts</h3>
        <span className="icon">
          <i
            className={`fas ${
              isCollapsed ? "fa-chevron-down" : "fa-chevron-up"
            }`}
          ></i>
        </span>
      </div>

      {!isCollapsed && (
        <div className="mt-4">
          <div
            className="table-container"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <table className="table is-fullwidth is-striped is-hoverable is-narrow">
              <thead>
                <tr>
                  <th>Territories Owned</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {territoryNumbers.map((territories) => {
                  const percentage = getPercentage(territories)

                  return (
                    <tr key={territories}>
                      <td className="has-text-weight-medium">{territories}</td>
                      <td>{percentage}%</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
