import { Logo } from "@/components/Logo";
import { Notice } from "@/components/UI/Notice";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { useLoginUserMutation } from "@/generated/graphql";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type LoginData = {
  username: string;
  password: string;
};

function IndexPage(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<LoginData>();
  const [submitLogin, { loading }] = useLoginUserMutation();
  const [loginError, setLoginError] = useState<string | null>(null);
  const onSubmit = handleSubmit(async (data) => {
    const { username, password } = data;
    try {
      const res = await submitLogin({ variables: { username, password } });
      if (!res.data) throw new Error("Something weird happened");
      const { error } = res.data.login;
      if (error) throw new Error(error);
      Router.push("/");
    } catch (err) {
      setLoginError(err.message);
      console.log(err.message);
    }
  });
  return (
    <article className="h-screen grid grid-cols-2">
      <div className="grid col-start-2">
        <div className="place-self-center grid w-2/5">
          <header>
            <Logo />
            <h3 className="text-3xl font-thin my-3">Login | Register</h3>
          </header>
          <form onSubmit={onSubmit} className="grid gap-6">
            <Input
              errors={errors.username}
              className="w-full"
              required
              placeholder="username"
              name="username"
              register={register}
            />
            <Input
              errors={errors.password}
              className="w-full"
              required
              placeholder="password"
              name="password"
              type="password"
              register={register}
            />
            {loginError && (
              <Notice className="bg-red-500" icon={faExclamationCircle}>
                {loginError}
              </Notice>
            )}
            <div className="grid grid-cols-2">
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
