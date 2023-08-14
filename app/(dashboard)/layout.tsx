import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <section className='relative h-full'>
    <div className='hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
      <Sidebar />
    </div>
    <div className='md:pl-72'>
      <Navbar />
      {children}
    </div>
  </section>
);

export default DashboardLayout;
