import { FaPen } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';
export default function AmbilJadwalAsistensi() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Asistensi Rangkaian Digital'
    >
      <section className='bg-darkGrey-800 relative flex h-full w-screen'>
        <div className='mx-16 w-screen pt-28'>
          <table className='mb-10 mt-6 w-full table-auto text-orange-600'>
            <tbody className='border'>
              <tr className=''>
                <td className='border text-center' rowSpan={6000}>
                  <h2> Rangkaian Digital</h2>
                </td>

                <td className='border text-center' rowSpan={6000}>
                  <h4>P1: Lorem Ipsum</h4>
                </td>

                <td className='border text-center' rowSpan={6000}>
                  <h4>18:00</h4>
                </td>

                <td className='border text-center' rowSpan={6000}>
                  <h4>15 September 2023</h4>
                </td>
              </tr>

              <tr className=''>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  Desiana Fitria Nurjannah
                  <Button
                    rightIcon={IoCloseSharp}
                    className='text-darkGrey-900 bg-lightGrey-500 w-fit  rounded-full border-black'
                  >
                    Batalkan
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=' '>
                <td className='flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  <Button
                    variant='outline'
                    className='rounded-lg border border-orange-600 px-8 py-4 text-orange-600'
                  >
                    <FaPen />
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=' '>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  <Button
                    variant='outline'
                    className='rounded-lg border border-orange-600 px-8 py-4 text-orange-600'
                  >
                    <FaPen />
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=' '>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  <Button
                    variant='outline'
                    className='rounded-lg border border-orange-600 px-8 py-4 text-orange-600'
                  >
                    <FaPen />
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=''>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  Desiana Fitria Nurjannah
                  <Button
                    rightIcon={IoCloseSharp}
                    className='text-darkGrey-900 bg-lightGrey-500 w-fit  rounded-full border-black'
                  >
                    Batalkan
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>
            </tbody>
            <tbody className='border'>
              <tr className=''>
                <td className='border text-center' rowSpan={6000}>
                  <h2> Rangkaian Digital</h2>
                </td>

                <td className='border text-center' rowSpan={6000}>
                  <h4>P1: Lorem Ipsum</h4>
                </td>

                <td className='border text-center' rowSpan={6000}>
                  <h4>18:00</h4>
                </td>

                <td className='border text-center' rowSpan={6000}>
                  <h4>15 September 2023</h4>
                </td>
              </tr>

              <tr className=''>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  Desiana Fitria Nurjannah
                  <Button
                    rightIcon={IoCloseSharp}
                    className='text-darkGrey-900 bg-lightGrey-500 w-fit  rounded-full border-black'
                  >
                    Batalkan
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=' '>
                <td className='flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  <Button
                    variant='outline'
                    className='rounded-lg border border-orange-600 px-8 py-4 text-orange-600'
                  >
                    <FaPen />
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=' '>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  <Button
                    variant='outline'
                    className='rounded-lg border border-orange-600 px-8 py-4 text-orange-600'
                  >
                    <FaPen />
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=' '>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  <Button
                    variant='outline'
                    className='rounded-lg border border-orange-600 px-8 py-4 text-orange-600'
                  >
                    <FaPen />
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>

              <tr className=''>
                <td className=' flex flex-col items-center gap-1 border-r  p-4 font-bold'>
                  Desiana Fitria Nurjannah
                  <Button
                    rightIcon={IoCloseSharp}
                    className='text-darkGrey-900 bg-lightGrey-500 w-fit  rounded-full border-black'
                  >
                    Batalkan
                  </Button>
                </td>
                <td className='p-4 font-bold'>Kelompok 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
}
