export default function Trendig() {
  return (
    <section className="px-10">
      <h2 className="text-4xl font-bold mb-10">Trending Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition">
            <div className="h-40 bg-gray-200 rounded-xl mb-4" />
            <h3 className="font-semibold text-lg">Product {i + 1}</h3>
            <p className="text-sm text-gray-500">$99.99</p>
          </div>
        ))}
      </div>
    </section>
  );
}
