import Profile from './components/Profile';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <Profile />
        <Skills />
      </div>
    </div>
  );
}
