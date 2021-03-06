import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import '../css/Footer.css';
import Contatcs from './Contacts';

export default function Footer() {
  return (
    <Box>
      <Contatcs/>
      <Card className='bgGrayTertiary borderNone'>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box>
                <Typography variant='body2' className='colorGreen fontText'>
                  Brenno.(Dev);&copy;
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>

  );
}
