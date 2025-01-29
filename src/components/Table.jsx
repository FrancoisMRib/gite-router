import React from "react";
import "./Table.css"

export function ReactTable() {
    //Rajouter {data} au-dessus si besoin
  //En suspens
    const data=[
      {
        period:"Basse saison",
        week:"390 €",
        day:"51 €"
      },
      {
        period:"Moyenne saison",
        week:"400 €",
        day:"52 €"
      },
      {
        period:"Haute saison",
        week:"490 €",
        day:"63 €"
      },
    ]

    return (
      <div className="positif">
        <table className="table">
          <thead>
            <tr>
              <th className="th">Type de forfait / Durée</th>
              <th className="th">Par semaine</th>
              <th className="th">Par nuit</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val,i)=>
                <tr>
                  <td className="td">{val.period}</td>
                  <td className="td">{val.week}</td>
                  <td className="td">{val.day}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )

  }
