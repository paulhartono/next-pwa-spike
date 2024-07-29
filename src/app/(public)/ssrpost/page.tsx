import { submitForm } from '@/actions/submit-form'

export default function TimePage() {
  return (
    <div>
      <h1 className=" font-bold text-2xl">SSR-POST Page (with server action)</h1>

      <div>
        <form action={submitForm}>
          <button type="submit" className="border-2 border-gray-700 p-2">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  )
}
