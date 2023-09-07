import { SignUp } from "@clerk/nextjs";
function page() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}

export default page;
