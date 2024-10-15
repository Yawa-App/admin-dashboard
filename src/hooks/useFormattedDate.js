import { useCallback } from 'react';

const useFormattedDate = () => {
  const formatDate = useCallback((isoDateString) => {
    if (!isoDateString) return '';

    const date = new Date(isoDateString);

    // Format the date as DD/MM/YY
    const formattedDatePart = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });

    // Format the time as HH:MM
    const formattedTimePart = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${formattedDatePart}, ${formattedTimePart}`;
  }, []);

  return formatDate;
};

export default useFormattedDate;
