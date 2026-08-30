import { ArrowUpRight } from 'lucide-react';

const bookingUrl = 'https://calendar.app.google/kMgMeeiYA9ZdVd4f9';

export const BookingButton = () => {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start a project with Anest Petollari on Google Calendar"
      className="group inline-flex min-h-10 items-center gap-1.5 py-2 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 outline-none transition-colors hover:text-gray-600 hover:decoration-gray-500 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:text-white dark:decoration-gray-700 dark:hover:text-gray-300 dark:hover:decoration-gray-500 dark:focus-visible:ring-offset-black"
    >
      Start a project
      <ArrowUpRight
        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
};
