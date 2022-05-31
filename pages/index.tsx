
// index.tsx
import {GetServerSideProps, NextPage} from 'next';

interface HomeProps {
  A: string;
}

const Home: NextPage<HomeProps> = ({ A }) => {
  return (
      <div>{A}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const A = process.env.Aㅇ
  return {
    props: {
      A
    }
  }
}

export default Home

