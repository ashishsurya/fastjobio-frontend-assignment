'use client';
export const ApiButton = () => {
  const callApi = async () => {
    const res = await fetch('/api/data', { credentials: 'include' });
    const body = await res.json();
    console.log(body);
  };

  return (
    <button onClick={callApi} className='border-2'>
      Make API call
    </button>
  );
};
