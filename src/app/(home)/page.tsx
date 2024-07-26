import Banner from '@/app/(home)/components/Banner'
import ProductList from '@/app/(home)/components/ProductList'
import { Suspense } from 'react';

export default async function Home() {

  return (
    <>
      <Banner/>
      <Suspense fallback={'Loading ...'}>
      <ProductList/>
      </Suspense>
    </>
  );
}
