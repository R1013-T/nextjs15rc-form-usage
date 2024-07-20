import { LoginForm } from "./_components/form";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        <h1>Next.js@15RC Form Usage</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LoginForm />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://github.com/edmundhung/conform/tree/main/examples/shadcn-ui">
          Conform shadcn/ui Example
        </a>
      </footer>
    </div>
  );
}
