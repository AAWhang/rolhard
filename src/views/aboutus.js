
import Grid from '@mui/material/Grid';

export function Aboutus() {
    return (
      <div>
        <Grid container direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item xs={9}>
            <div className="MeetourTeam">
                <h1>Meet Our Team</h1>
                <p>Rolhard Inc. is a truncated domes sales and installation specialist.</p>
                <p>In 2010, two business partners in Southern California came together to create Rolhard Inc. Since then, Rolhard Inc. has risen to become one of California’s top competitive truncated dome companies in the industry.</p>
                <p>Though based in Glendora, Rolhard Inc. has branches all over California to reach out and deliver what the customer needs when and where they need it.</p>
                <p>For a free consultation and quote on your next project, call us at (800) 393-1642.</p>
              </div>
          </Grid>

          <Grid item xs={3}>
            <div className="ourclients">
                <h3>Some of our Clients include:</h3>
                <ul>
                  <li>Home Depot</li>
                  <li>Costco</li>
                  <li>Shopping Centers</li>
                  <li>Municipalities</li>
                  <li>McDonald’s</li>
                  <li>Office/Medical Buildings</li>
                  <li>Parking Structures</li>
                  <li>Many More!!!</li>
                </ul>
              </div>
          </Grid>
        </Grid>
      </div>
    )

  }
  