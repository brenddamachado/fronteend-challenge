import {Route, Routes} from 'react-router-dom'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile/:user' element={<Profile/>}/>
        </Routes>
    )
}