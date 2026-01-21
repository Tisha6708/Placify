import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Crack Placements with Smart Preparation
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Practice aptitude, master DSA, prepare company-wise and track your
          progress — all in one place.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/aptitude"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Start Aptitude
          </Link>

          <Link
            to="/dsa"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition"
          >
            Practice DSA
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {features.map((f, i) => (
          <Link
            to={f.link}
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </Link>
        ))}
      </div>

      {/* CTA STRIP */}
      <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Start Preparing Seriously from Today
        </h2>
        <p className="mb-6">
          Consistency beats last-minute panic. Track your progress and improve
          daily.
        </p>

        <Link
          to="/progress"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
        >
          View My Progress
        </Link>
      </div>
    </PageWrapper>
  );
}

const features = [
  {
    title: "Aptitude Practice",
    desc: "Topic-wise MCQs with instant feedback.",
    link: "/aptitude"
  },
  {
    title: "DSA Problems",
    desc: "Curated coding problems with company tags.",
    link: "/dsa"
  },
  {
    title: "Mock Tests",
    desc: "Timed tests to simulate real exams.",
    link: "/mock-test"
  },
  {
    title: "Tier Roadmaps",
    desc: "Preparation strategy for different company levels.",
    link: "/roadmaps"
  },
  {
    title: "Company Prep",
    desc: "Know what each company actually asks.",
    link: "/companies"
  },
  {
    title: "Resume Tips",
    desc: "Build a resume that gets shortlisted.",
    link: "/resume"
  }
];

export default Home;
