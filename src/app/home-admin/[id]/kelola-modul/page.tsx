'use client';

import Link from 'next/link';
import React from 'react';
import { FaPlus, FaRegClock, FaTrashAlt } from 'react-icons/fa';

import api from '@/lib/api';
import { getAccessToken } from '@/lib/cookies';

import IconButton from '@/components/buttons/IconButton';
import withAuth from '@/components/hoc/withAuth';
import Loading from '@/components/Loading';

import MainLayout from '@/layouts/MainLayout';

import { ApiReturn } from '@/types/api';

export default withAuth(KelolaModul, ['admin']);

export type ModulType = {
  id_modul: number;
  judul_modul: string;
};

function KelolaModul({ params }: { params: { id: string } }) {
  const [loading, setLoading] = React.useState(true);
  const token = getAccessToken();

  const [dataModul, setDataModul] = React.useState<ModulType[]>([]);
  const LoadModul = React.useCallback(async () => {
    const res = await api.get<ApiReturn<ModulType[]>>(
      `/praktikum/${params.id}/modul`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (!res.data.data) {
      return;
    }
    setLoading(false);
    return setDataModul(res.data.data);
  }, [params.id, token]);

  const handleDeleteButtonClick = async (id_modul: number | undefined) => {
    try {
      await api.delete<ApiReturn<ModulType[]>>(
        `/praktikum/${params.id}/modul/${id_modul}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      LoadModul();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  React.useEffect(() => {
    LoadModul();
  }, [LoadModul]);

  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Modul Praktikum'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto mt-8 flex w-screen flex-col gap-6 rounded-3xl border-none'>
            {loading && <Loading />}
            {!loading && dataModul === undefined ? (
              <p className='flex items-center justify-center font-semibold text-orange-600'>
                Tidak ada praktikum yang tersedia
              </p>
            ) : (
              dataModul.map((modul) => (
                <div
                  key={modul.id_modul}
                  className=' flex w-full flex-col gap-4'
                >
                  <div className='flex w-full flex-row justify-between rounded-full border border-orange-600 bg-transparent px-4 py-2  font-bold'>
                    <h3>{modul.judul_modul}</h3>
                    <div className='flex flex-row gap-1'>
                      <IconButton
                        variant='ghost'
                        className='text-orange-600'
                        icon={FaRegClock}
                      />

                      <IconButton
                        onClick={() => handleDeleteButtonClick(modul.id_modul)}
                        variant='ghost'
                        className='text-orange-600'
                        icon={FaTrashAlt}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className='flex justify-end'>
              <Link href={`/home-admin/${params.id}/kelola-modul/tambah`}>
                <IconButton
                  variant='dark'
                  className='h-[40px] w-[100px] rounded-full border-none text-orange-600'
                  icon={FaPlus}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
