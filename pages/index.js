import Link from 'next/link';
import LayoutMain from '../components/LayoutMain';

export default function Home() {
  return (
    <LayoutMain>
      <Link href={'/example'}><a>example</a></Link>
    </LayoutMain>
  )
}
