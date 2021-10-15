import React from 'react'
import {Table} from 'react-bootstrap'

export default function TableUI(props){
    const [col,setCol] = React.useState([])

    const [data,setData] =  React.useState([])

    React.useEffect(_=>{
       
        if(props.data){
            setCol(Object.keys(props.data[0]))
            setData(props.data)
        }
        console.log(props.data)
    },[props.data])

    return (
        <Table responsive>
        <thead class="thead-dark" >
          <tr>
            {col.map(each=><th>{each.charAt(0).toUpperCase()+each.slice(1)}</th>)}
          </tr>
        </thead>
        <tbody>
            {data.map((v,idx)=>{
                return <tr>{col.map(_=>{
                    return <td>{v[_]}</td>
                })}</tr>
            })}
        </tbody>
      </Table>
    )

}