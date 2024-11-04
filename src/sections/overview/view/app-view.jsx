import { faker } from '@faker-js/faker';

import { useGetUsersQuery } from 'src/features/app/userSlide';

import { useGetCirclesQuery } from 'src/features/app/circleslide';

import Grid from '@mui/material/Unstable_Grid2';

import { Container, Typography } from '@mui/material';


import AppTasks from '../app-tasks';

import AppNewsUpdate from '../app-news-update';

import AppOrderTimeline from '../app-order-timeline';

import AppCurrentVisits from '../app-current-visits';

import AppWebsiteVisits from '../app-website-visits';

import AppWidgetSummary from '../app-widget-summary';

import AppCurrentSubject from '../app-current-subject';

import AppConversionRates from '../app-conversion-rates';





export default function AppView() {




  const { data: Users, isLoadind: userLoading, isError: userError } = useGetUsersQuery()
  const { data: Circle, isLoadind: circleLoading, isError: circleError } = useGetCirclesQuery()






  if (userLoading || circleLoading) return <Typography>Loading....</Typography>
  if (userError || circleError) return <Typography>Error with the endpoint....</Typography>


  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Welcome Edmund 👋 <br />
        <span style={{ fontSize: "16px", fontWeight: 500, color: "#4E5A66" }}>super admin</span>
      </Typography>





      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Registered Users"
            total={Users?.data?.totalUsers}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Safety Circles"
            total={Circle?.data?.totalCircles}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Sub Admins"
            total={12}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Situational Reports"
            total={943245}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="SOS Prompts"
            total={1245}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Safety Org. Accounts"
            total={5}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>





        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Statistical Chart - Situational Report "
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Transaction History"
            chart={{
              series: [
                { label: 'Email Verified', value: 4344 },
                { label: 'Phone Verified', value: 2435 },
                { label: 'Fully Verified', value: 1443 },
                { label: 'Not Verified', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Top states"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Nassawarra', value: 400 },
                { label: 'Rivers', value: 430 },
                { label: 'Jos', value: 448 },
                { label: 'Delta', value: 470 },
                { label: 'Osun', value: 540 },
                { label: 'Port Harcot', value: 580 },
                { label: 'Edo', value: 690 },
                { label: 'Abuja', value: 1100 },
                { label: 'Oyo', value: 1200 },
                { label: 'Lagos', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Top report Category"
            chart={{
              categories: ['Fire', 'Robbery', 'Kidnapping', 'Natural Disaster', 'Terrorism', 'Road Accident'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Recent Activity"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Recent Broadcasts"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Everyone stay home, Lagos',
                'Fire Outbreak, Kaduna',
                'Bandits attack, Kastina',
                'Cholera Outbreak, Lagos',
                'Kidnapping, Jos',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>



        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Assign Responder to report' },
              { id: '2', name: 'Create a state Broadcast' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Meeting with Yawa Team' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
