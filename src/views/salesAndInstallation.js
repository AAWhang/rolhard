import Grid from '@mui/material/Grid';

export function SalesAndInstallation() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item xs={10}>
            <div className="MeetourTeam">
              <h1>Sales and Installation</h1>
            </div>
          </Grid>

          <Grid item xs={10}>
            <div className="ourclients">
                <p>Rolhard Inc. is a truncated domes sales and installation specialist, based in Southern California. We will get you what you need, where and when you need it. That’s the Rolhard guarantee.</p>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="ourclients">
                <h3>Repair/Maintenance Solutions For :</h3>
                <ol>
                  <li>Chipped</li>
                  <li>Faded</li>
                  <li>Re-Paint</li>
                  <li>Re-Seal</li>
                  <li>Pressure Wash</li>
                  <li>Missing Domes</li>
                  <li>Re-Caulking</li>
                  <li>Lifting/Warping</li>
                </ol>
              </div>
          </Grid>
          <Grid item xs={3}>
            <div className="ourclients">
                <h3>New Install Solutions For :</h3>
                <ul>
                  <li>Asphalt</li>
                  <li>Radius</li>
                  <li>Curb Ramps</li>
                  <li>Around Bollards</li>
                  <li>Store Fronts</li>
                  <li>Parking Structures</li>
                </ul>
              </div>
          </Grid>
          <Grid item xs={10}>
            <div className="ourclients">
                <p>In 2010, two business partners in Southern California partnered to create Rolhard Inc. In just a few short years, Rolhard Inc. has risen to become one of California's top competitive construction supplies company in the industry.</p>
                <p>Based in Glendora, Rolhard Inc. has branches all over California to reach out and deliver what the customer needs when and where they need it.</p>
                <p>Call us at (800) 393-1642 for a free quote!</p>
            </div>
          </Grid>
        </Grid>
    )
  }
  