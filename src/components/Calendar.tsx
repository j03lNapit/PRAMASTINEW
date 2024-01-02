'use client';

import { add, format } from 'date-fns';
import { useState } from 'react';
import ReactCalendar from 'react-calendar';

import Button from '@/components/buttons/Button';

import {
  INTERVAL,
  STORE_CLOSING_TIME,
  STORE_OPENING_TIME,
} from '@/constant/config';

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

export default function Calendar() {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  // eslint-disable-next-line no-console
  console.log(date.dateTime);

  const handleDateClick = (date: Date) => {
    // console.log(date);
    setDate((prev) => ({ ...prev, justDate: date }));
  };

  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;

    const beginning = add(justDate, { hours: STORE_OPENING_TIME });

    const end = add(justDate, { hours: STORE_CLOSING_TIME });

    const interval = INTERVAL; //in mins

    const times = [];

    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className='bg-darkGrey-800  flex h-full w-full flex-col justify-start text-orange-600'>
      {/* {date.justDate ? (
        <div className='flex flex-col items-center justify-center'>
          <ReactCalendar
            minDate={new Date()}
            className='REACT-CALENDAR p-2'
            view='month'
            onClickDay={handleDateClick}
          />
          <div className='flex gap-4'>
            {times?.map((time, i) => (
              <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
                <button
                  type='button'
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: time }))
                  }
                >
                  {format(time, 'kk:mm')}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex flex-col p-2'>
          <ReactCalendar
            minDate={new Date()}
            className='REACT-CALENDAR p-2'
            view='month'
            onClickDay={handleDateClick}
          />
        </div>
      )} */}

      <div className='flex w-[80%] flex-col items-start justify-center gap-6'>
        <ReactCalendar
          minDate={new Date()}
          className='REACT-CALENDAR p-2'
          view='month'
          onClickDay={handleDateClick}
        />

        <div className='flex w-full flex-col justify-center gap-4'>
          <h3>Waktu</h3>
          <span className='bg-lightGrey-600 h-1.5 w-20 rounded-full'></span>

          <div className='flex flex-col  items-end gap-4'>
            <div className='flex w-full flex-row justify-start gap-4'>
              {times?.map((time, i) => (
                // <div
                //   // key={`time-${i}`}
                //   className='rounded-xl bg-black px-8 py-2 hover:bg-slate-600'
                // >
                <button
                  key={`time-${i}`}
                  className='rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                  type='button'
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: time }))
                  }
                >
                  {format(time, 'kk:mm')}
                </button>
                // </div>
              ))}
            </div>

            <Button
              type='submit'
              className=' w-fit items-center rounded-xl border-none bg-black px-8 py-2 text-center font-bold text-yellow-600'
            >
              Ambil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { add, format } from 'date-fns';
// import { useState } from 'react';
// import ReactCalendar from 'react-calendar';

// import {
//   INTERVAL,
//   STORE_CLOSING_TIME,
//   STORE_OPENING_TIME,
// } from '@/constant/config';

// interface DateType {
//   justDate: Date | null;
//   dateTime: Date | null;
// }

// export default function Calendar() {
//   const [date, setDate] = useState<DateType>({
//     justDate: null,
//     dateTime: null,
//   });

//   const [timesVisible, setTimesVisible] = useState(false);

//   console.log(date.dateTime);

//   const handleDateClick = (selectedDate: Date) => {
//     setDate((prev) => ({ justDate: selectedDate, dateTime: null }));
//     setTimesVisible(true);
//   };

//   const getTimes = () => {
//     if (!date.justDate) return [];
//     const { justDate } = date;

//     const beginning = add(justDate, { hours: STORE_OPENING_TIME });
//     const end = add(justDate, { hours: STORE_CLOSING_TIME });
//     const interval = INTERVAL; // in mins

//     const times = [];

//     for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
//       times.push(i);
//     }
//     return times;
//   };

//   const times = getTimes();

//   return (
//     <div className='flex h-fit w-fit flex-col items-center justify-center bg-black text-orange-600'>
//       <div className='flex flex-col items-center justify-center'>
//         <ReactCalendar
//           minDate={new Date()}
//           className='REACT-CALENDAR p-2'
//           view='month'
//           onClickDay={handleDateClick}
//         />
//         {timesVisible && (
//           <div className='flex gap-4'>
//             {times?.map((time, i) => (
//               <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
//                 <button
//                   type='button'
//                   onClick={() =>
//                     setDate((prev) => ({ ...prev, dateTime: time }))
//                   }
//                 >
//                   {format(time, 'kk:mm')}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
