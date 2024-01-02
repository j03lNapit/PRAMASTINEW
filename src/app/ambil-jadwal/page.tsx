'use client';

import * as React from 'react';

import api from '@/lib/api';
import { getAccessToken } from '@/lib/cookies';

import Calendar from '@/components/Calendar';
import Card3 from '@/components/cards/card3';
import withAuth from '@/components/hoc/withAuth';

import { PraktikumType } from '@/app/home/page';
import MainLayout from '@/layouts/MainLayout';

import { ApiReturn } from '@/types/api';

export default withAuth(AmbilJadwalPage, ['praktikan']);
function AmbilJadwalPage() {
  const token = getAccessToken();
  const [queryData, setQueryData] = React.useState<PraktikumType[]>([]);

  const LoadPraktikum = React.useCallback(async () => {
    const res = await api.get<ApiReturn<PraktikumType[]>>('/praktikum', {
      headers: {
        Authorization: token,
      },
    });
    if (!res.data.data) {
      return;
    }
    return setQueryData(res.data.data);
  }, [token]);

  React.useEffect(() => {
    LoadPraktikum();
  }, [LoadPraktikum]);

  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Rangkaian Digital'
    >
      <section className='bg-darkGrey-800 relative flex h-screen w-screen flex-col items-start justify-center '>
        <div className='mx-16 mb-12 mt-28 flex h-full w-screen flex-row gap-8'>
          <div className='flex h-fit w-[35%] flex-col items-start gap-6'>
            {queryData.map((data) => (
              <Card3
                key={data.praktikum_id}
                praktikum_name={data.praktikum_name}
                deskripsi=''
              />
            ))}
          </div>

          <span className='bg-lightGrey-600 h-full w-2 rounded-full'></span>

          <Calendar />
        </div>
      </section>
    </MainLayout>
  );
}
