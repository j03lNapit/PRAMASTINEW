'use client';

import * as React from 'react';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';

import MainLayout from '@/layouts/MainLayout';

// eslint-disable-next-line unused-imports/no-unused-vars
type NilaiPraktikan = {
  nama: string;
  nrp: string;
};

export default withAuth(BuatPengumuman, ['admin']);
function BuatPengumuman() {
  // const methods = useForm<NilaiPraktikan>({
  //   mode: 'onTouched',
  // });

  // const { register, handleSubmit } = methods;
  // const router = useRouter();

  // const { mutate: RegistMutation, isPending } = useMutation<
  //   void,
  //   AxiosError<ApiError>,
  //   NilaiPraktikan
  // >({
  //   mutationFn: async (data) => {
  //     const res = await api.put('/pengumuman/add', data, {
  //       toastify: true,
  //     });

  //     if (res.data) {
  //       showToast('Berhasil buat pengumuman!', SUCCESS_TOAST);
  //     } else if (!res.data) {
  //       showToast('Gagal buat pengumuman!', DANGER_TOAST);
  //       throw new Error('Gagal buat pengumuman!');
  //     } else {
  //       showToast('Gagal buat pengumuman!', DANGER_TOAST);
  //       throw new Error('Gagal buat pengumuman!');
  //     }
  //   },
  //   onSuccess: () => {
  //     router.push('/pengumuman-admin');
  //   },
  // });

  // const onSubmit: SubmitHandler<NilaiPraktikann> = (data) =>
  //   RegistMutation({
  //     judul: data.judul,
  //     deskripsi: data.deskripsi,
  //   });

  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Nilai Praktikan'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          {/* <FormProvider {...methods}> */}
          <form
            action='#'
            // onSubmit={handleSubmit(onSubmit)}
            className='bg-darkGrey-800 container mx-auto flex w-screen flex-col gap-6 rounded-3xl border border-orange-600 p-6'
          >
            <div className=' flex w-full flex-col gap-1.5'>
              <h3>Nama</h3>
              <input
                // {...register('nama', {
                //   required: true,
                // })}
                type='text'
                name='nama'
                id='nama'
                className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                placeholder='Masukkan nama...'
                required
              />
            </div>

            <div className=' flex w-full flex-col gap-1.5'>
              <h3>NRP</h3>
              <input
                // {...register('nama', {
                //   required: true,
                // })}
                type='text'
                name='nrp'
                id='nrp'
                className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                placeholder='Masukkan nrp ...'
                required
              />
            </div>

            <div className='mt-2 flex flex-col gap-2'>
              <h3>Nilai</h3>
              <div className=' flex w-full flex-col gap-1.5'>
                <h3>P1: Logika Dasar</h3>
                <input
                  // {...register('nama', {
                  //   required: true,
                  // })}
                  type='number'
                  name='praktikum_1'
                  id='praktikum_1'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='Masukkan nilai ...'
                  required
                />
              </div>

              <div className=' flex w-full flex-col gap-1.5'>
                <h3>P2: Rangkaian Flip Flop</h3>
                <input
                  // {...register('nama', {
                  //   required: true,
                  // })}
                  type='number'
                  name='praktikum_2'
                  id='praktikum_2'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='Masukkan nilai ...'
                  required
                />
              </div>
            </div>

            <div className='flex justify-end'>
              <Button
                // isLoading={isPending}
                type='submit'
                className='w-fit rounded-xl  border-none bg-black px-6 text-orange-600'
              >
                Kirim
              </Button>
            </div>
          </form>
          {/* </FormProvider> */}
        </div>
      </section>
    </MainLayout>
  );
}
