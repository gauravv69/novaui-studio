import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 selection:bg-zinc-100 selection:text-zinc-900 overflow-x-hidden relative">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(24,24,27,1)_0%,_rgba(9,9,11,1)_100%)] pointer-events-none" />
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      
      <div className="w-full relative z-10 flex flex-col items-center justify-center">
        <Outlet />
      </div>

      <footer className="relative z-10 mt-8 text-center">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} NovaUI Studio
        </p>
      </footer>
    </main>
  );
};

export default AuthLayout;
