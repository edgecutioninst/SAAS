import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        // This wrapper forces it to the center
        <div className="flex justify-center items-center min-h-screen">
            <SignIn />
        </div>
    )
}