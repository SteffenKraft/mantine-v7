import { Title, Text, Grid } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Grid>
        <Grid.Col span={3}>
          <div className={classes.error}>Test</div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className={classes.success}>Test</div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className={classes.info}>Test</div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className={classes.warning}>Test</div>
        </Grid.Col>
      </Grid>
    </>
  );
}
