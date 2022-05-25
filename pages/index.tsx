import { GetServerSideProps, NextPage, InferGetServerSidePropsType} from 'next';

interface HomeProps {
  A: string;
}

const Home: NextPage<HomeProps> = ({ A }) => {
  return (
      <div>{A}</div>
  )
}

export const getServerSideProps = async () => {
  const A = process.env.A
  
  return {
    props: {
      A
    }
  }
}

export default Home
