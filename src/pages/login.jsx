import React from 'react'
import { AuthCheck } from 'reactfire'
import { Redirect } from '@reach/router'
import { Paper, Container, Typography } from '@material-ui/core'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FirebaseUI from '../components/FirebaseUI'
const IndexPage = () => (
  <Layout>
    <SEO title="Iniciar Sesión" />
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ marginTop: '5rem', padding: '1rem' }}>
        <Typography variant="h5">Iniciar Sesión</Typography>

        <AuthCheck fallback={<FirebaseUI />}>
          <Redirect to="/app/page-2/" noThrow />
        </AuthCheck>
      </Paper>
    </Container>
  </Layout>
)

export default IndexPage
