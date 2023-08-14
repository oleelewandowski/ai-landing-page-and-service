interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <section className='flex items-center justify-center h-full'>
    {children}
  </section>
);

export default AuthLayout;
