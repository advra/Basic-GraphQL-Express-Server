import logo from '../assets/logo.png';

export default function Header() {
  return (
    <nav className='w-screen bg-slate-800 mb-4 p-0'>
      <div className='container'>
        <div className='flex'>
          <img src={logo} alt='logo' className='mr-2 w-[30px] h-[30px] m-3 ml-[50px]' />
          <div className='text-white align-middle my-4 font-semibold'>Collection View</div>
        </div>
      </div>
    </nav>
  );
}