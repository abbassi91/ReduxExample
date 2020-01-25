import React from 'react'
import { connect } from 'react-redux'

 function DatatableUtilisateur({
     utilisateurs
 }) {
    return (
        <div>

        <ul>
        {
                    utilisateurs.map((user,index)=>
                    <li>
                        {user.name}
                    </li>
                    )}
        </ul>
            <form>
                <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
                <tbody>
                {
                    utilisateurs.map((user,index)=>
                    <tr key={index}>
                        <td>
                            {user.name}
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            </form>
            
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        utilisateurs:state
    }
}
export default connect(mapStateToProps)(DatatableUtilisateur)