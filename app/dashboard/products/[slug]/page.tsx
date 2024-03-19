import { useRouter } from 'next/router';

export default function Page({params}) {

  return <p>Post: {JSON.stringify(params)}</p>;
}
