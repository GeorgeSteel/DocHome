import React from 'react'
import {
  Container,
  Paper,
  Grow,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { avatarStyles } from './Material/Material.config'

import moment from 'moment'

export default function ProfileData({ user, children }) {
  const classes = avatarStyles()

  return (
    <Container maxWidth="xs" style={{ marginTop: '5rem' }}>
      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 1000 } : {})}
      >
        <Paper variant="outlined" style={{ padding: '1rem' }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h2 style={{ color: '#163a5f' }}>{user.name}</h2>
            <Avatar
              alt={user.name}
              src={user.avatar}
              className={classes.large}
            />
            <List>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <ListItem button style={{ textAlign: 'center' }}>
                    <ListItemText
                      primary="Nombre"
                      secondary={user ? user.name : null}
                    />
                  </ListItem>
                </Grid>
                {user.type !== 'Admin' && (
                  <Grid item xs={6}>
                    <ListItem button style={{ textAlign: 'center' }}>
                      <ListItemText
                        primary="Edad"
                        secondary={moment().diff(
                          user.birthday.toDate(),
                          'years'
                        )}
                      />
                    </ListItem>
                  </Grid>
                )}
                <Grid item xs={6}>
                  <ListItem button style={{ textAlign: 'center' }}>
                    <ListItemText
                      primary="Tipo de cuenta"
                      secondary={user.type}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem button style={{ textAlign: 'center' }}>
                    <ListItemText
                      primary="Número Celular"
                      secondary={user.phone}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12}>
                  {user.type !== 'Admin' && (
                    <ListItem button style={{ textAlign: 'center' }}>
                      <ListItemText
                        primary={user.type === 'Doctor' ? 'Logros' : 'Hijos'}
                        secondary={
                          user.type === 'Doctor'
                            ? user.features.length
                            : children.map((child, idx) => (
                                <ListItem button key={idx}>
                                  <ListItemText
                                    primary="Nombre"
                                    secondary={child.name}
                                  />
                                  <ListItemText
                                    primary="Edad"
                                    secondary={moment().diff(
                                      child.birthday.toDate(),
                                      'years'
                                    )}
                                  />
                                </ListItem>
                              ))
                        }
                      />
                    </ListItem>
                  )}
                </Grid>
                {user.type === 'Doctor' && (
                  <Grid item xs={12}>
                    <ListItem button style={{ textAlign: 'center' }}>
                      <ListItemText
                        primary="Estado de tu cuenta"
                        secondary={user.status}
                      />
                    </ListItem>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    disabled={user.status === 'PENDIENTE'}
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth={true}
                    href="/app/editar-perfil"
                    startIcon={<Edit />}
                  >
                    Editar Perfil
                  </Button>
                </Grid>
              </Grid>
            </List>
          </Grid>
        </Paper>
      </Grow>
    </Container>
  )
}
