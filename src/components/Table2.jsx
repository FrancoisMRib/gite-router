import React from "react";
import "./Table.css"

export function ReactTablette() {
    //Rajouter {data} au-dessus si besoin
  //En suspens
    const data=[
      {
        type:"1/3/2025 au 5/4/2025",
        forfait:"Basse saison"
      },
      {
        type:"5/4/2025 au 12/7/2025",
        forfait:"Moyenne saison"
      },
      {
        type:"12/7/2025 au 30/8/2025",
        forfait:"Haute saison"
      },
      {
        type:"30/8/2025 au 27/9/2025",
        forfait:"Moyenne saison"
      },
      {
        type:"27/9/2025 au 30/11/2025",
        forfait:"Basse saison"
      },
    ]

    return (
      <div className="persevy">
        <table className="tablette">
          <thead>
            <tr>
              <th className="ther">Période</th>
              <th className="ther">Type de forfait</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val,i)=>
                <tr>
                  <td className="tder">{val.type}</td>
                  <td className="tder">{val.forfait}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )

  }
