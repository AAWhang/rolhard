import Grid from '@mui/material/Grid';

export function Contactus() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item xs={4}>
            <div className="MeetourTeam">
              <h1>OFFICE</h1>
              <p> 1822 E Route 66 #262</p>
              <p>Glendora CA 91740</p>
              <br/>
              <p> 800-393-1642</p>
              <br/>
              <p> sales@rolhardinc.com</p>
            </div>
          </Grid>


          <Grid item xs={3}>
            <div className="ourclients">
                <h3>BUSINESS HOURS</h3>
                <ul>
                  <li>Monday- 6:00 am - 6:00 pm</li>
                  <li>Tuesday-6:00 am - 6:00 pm</li>
                  <li>Re-Wednesday-6:00 am - 6:00 pm</li>
                  <li>Thursday-6:00 am - 6:00 pm</li>
                  <li>Friday-6:00 am - 6:00 pm</li>
                  <li>Saturday and Sunday - Available by appointment</li>
                </ul>
              </div>
          </Grid>
        </Grid>
    )


  }
  