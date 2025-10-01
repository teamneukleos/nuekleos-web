import LoginForm from "@/components/login/login-form";

export default async function LoginPage () {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-80 p-3 rounded border shadow">
        <LoginForm />
      </div>
    </div>
  );
}
