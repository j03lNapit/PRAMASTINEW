import { Metadata } from 'next';
import NextImage from 'next/image';
import * as React from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function DaftarPeserta() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={true}
      withBackButton={true}
      title='Daftar Peserta'
    >
      <section className='bg-darkGrey-800 relative flex h-full w-screen'>
        <div className='mx-16 h-full w-screen pt-28'>
          <div className='flex flex-row items-center justify-between'>
            <div className='bg-darkGrey-800 flex  h-fit w-auto flex-row items-center justify-between rounded-full border border-orange-600 px-4  text-orange-600 placeholder:text-orange-600 placeholder:opacity-60'>
              <NextImage
                src='/images/mix/search.png'
                width={30}
                height={30}
                alt='search'
                className='h-auto w-auto'
              />

              <input
                type='text'
                name='search'
                id='search'
                className='border-none bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-0 '
                placeholder='Search'
              />
            </div>

            <div className='flex flex-row gap-10'>
              <div className='flex flex-col font-bold text-orange-600'>
                <h4>Semester</h4>
                <Button
                  rightIcon={VscTriangleDown}
                  variant='outline'
                  className='flex flex-row justify-between gap-4 rounded-full border border-orange-600 font-bold  text-orange-600'
                >
                  Genap
                </Button>
              </div>

              <div className='flex flex-col font-bold text-orange-600'>
                <h4>Tahun Akdemik</h4>
                <Button
                  rightIcon={VscTriangleDown}
                  variant='outline'
                  className='flex flex-row justify-between gap-4 rounded-full border-orange-600 font-bold  text-orange-600'
                >
                  2023-2024
                </Button>
              </div>
            </div>
          </div>

          <table className='mb-10 mt-6 w-full table-auto text-orange-600'>
            <thead>
              <tr>
                <th className='text-start'>No</th>
                <th className='text-start'>Nama</th>
                <th className='text-start'>NRP</th>
                <th className='text-start'>Departemen</th>
                <th className='text-start'>Nilai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>2</td>
                <td>The Eagle Spirit</td>
                <td>5024201060</td>
                <td>Sistem Informasi</td>
                <td>Nilai</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bambang Soesatyo</td>
                <td>5024201070</td>
                <td>Teknik Informatika</td>
                <td>ICON</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>5024201085</td>
                <td>Teknik Komputer</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
}
