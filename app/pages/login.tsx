import { Logo } from "@/components/Logo";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { useLoginUserMutation } from "@/generated/graphql";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type LoginData = {
  username: string;
  password: string;
};

function IndexPage(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<LoginData>();
  const [submitLogin, { loading }] = useLoginUserMutation();
  const onSubmit = handleSubmit(async (data) => {
    const { username, password } = data;
    try {
      const res = await submitLogin({ variables: { username, password } });
      if (!res.data) throw new Error("Something weird happened");
      const { error } = res.data.login;
      if (error) throw new Error(error);
      console.log(res.data.login);
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  });
  return (
    <article
      style={{
        background: "url(/assets/background.png)",
      }}
      className="h-screen grid grid-cols-2 bg-auto bg-no-repeat text-white overflow-hidden"
    >
      <div className="grid col-start-2">
        <div className="place-self-center">
          <header>
            <Logo />
            <h3 className="text-3xl font-thin my-3">Login | Register</h3>
          </header>
          <form onSubmit={onSubmit} className="grid grid-cols-3 gap-6">
            <Input
              errors={errors.username}
              className="col-span-3"
              required
              placeholder="username"
              name="username"
              register={register}
            />
            <Input
              errors={errors.password}
              className="col-span-3"
              required
              placeholder="password"
              name="password"
              type="password"
              register={register}
            />
            <div className="col-span-3 grid grid-cols-2">
              <Button type="submit" className="col-span-1">
                {loading ? "loggin in..." : "connect"}
              </Button>
              {/* TODO: Make this spawn a forgot password modal */}
              <p role="button" className="underline place-self-end font-thin">
                forget password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}

export default IndexPage;
