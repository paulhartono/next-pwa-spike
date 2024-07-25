export default async function DashboardPage() {
  return (
    <div>
      <h1 className=" font-bold text-2xl">Dashboard Page</h1>
      <div className="py-4">
        SSR-Get: Test making GET Request in an SSR Page
        <br />
        CSR-Get: Test making GET Request in an CSR Page
        <br />
        CSR-POST: Test making POST Request in an CSR Page
      </div>
    </div>
  )
}
