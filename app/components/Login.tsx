import React from "react";
import { useForm } from "react-hook-form";
import { Logo } from "./Logo";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

type LoginData = {
  username: string;
  password: string;
};

export function Login(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<LoginData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
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
          <Button type="submit" className="col-span-1 justify-self-start">
            connect
          </Button>
        </form>
      </div>
    </div>
  );
}
