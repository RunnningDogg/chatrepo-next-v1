import { SignIn } from "@clerk/nextjs";
function page() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}

export default page;
