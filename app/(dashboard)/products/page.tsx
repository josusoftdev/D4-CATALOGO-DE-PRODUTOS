// app/page.tsx
import Link from 'next/link'

export default function Home() {
  const products = [
    { id: '1', name: 'Produto 1' },
    { id: '2', name: 'Produto 2' },
    { id: '3', name: 'Produto 3' },
  ]

  return (
    <div>
      <h1>Home</h1>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
