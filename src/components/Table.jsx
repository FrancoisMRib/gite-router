import React from "react";
import "./Table.css"

export function ReactTable() {
    const data=[
      {
        fname:"aaa",
        lname:"bbb"
      },
      {
        fname:"ccc",
        lname:"ddd"
      },
      {
        fname:"eee",
        lname:"fff"
      },
    ]

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">First Name</th>
              <th className="th">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val,i)=>
                <tr>
                  <td className="td">{val.fname}</td>
                  <td className="td">{val.lname}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )

  }
