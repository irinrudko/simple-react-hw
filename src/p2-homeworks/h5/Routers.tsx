import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import PreJunior from './pages/PreJunior'

export const PATH = {
    PRE_JUNIOR: 'pre-junior',
    JUNIOR: 'junior',
    JUNIOR_PLUS: 'junior-plus'
    // add paths
}

function Routers() {
    return (
        <div>
            {/* Routes выбирает первый подходящий роут */}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path='/' element={<Navigate to={PATH.PRE_JUNIOR} />} />

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
                <Route path={PATH.JUNIOR} element={<Junior />} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
                {/* // add routes  джун, джун+ */}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path='*' element={<Error404 />} />

            </Routes>
        </div>
    )
}

export default Routers
