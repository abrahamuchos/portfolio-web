export default function Footer() {

  return (
    <footer className='relative'>
      <div className="absolute line left-1/2 transform -translate-x-1/2"></div>
      <div className="h-2"></div>
      <div className="flex justify-center">
        <p className='text-light-white text-xs text-center'>
          &copy; {new Date().getFullYear()} Jhonwil Abraham González - Abrahamuchos - FullStack Developer
        </p>
      </div>
    </footer>
  );
}



