/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {AuthPage} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {MasterInit} from '../../_metronic/layout/MasterInit'
import useAuth from '../modules/auth/useAuth';

const Routes: FC = () => {
  const auth = useAuth()
  return (
    <>
      <Switch>
        {!auth.userAuth.isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route>
            <AuthPage />
          </Route>
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <Redirect from='/auth' to='/' />
        )}

        <Route path='/error' component={ErrorsPage} />

        {!auth.userAuth.isAuthorized  ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to='/auth/login' />
        ) : (
          <>
            <MasterLayout>
              <PrivateRoutes />
            </MasterLayout>
          </>
        )}
      </Switch>
      <MasterInit />
    </>
  )
}

export {Routes}
