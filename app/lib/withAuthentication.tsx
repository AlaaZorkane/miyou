/* eslint-disable react/display-name */
import { Loading } from "@/components/Layout/Loading";
import { useGetMeQuery } from "@/generated/graphql";
import Router from "next/router";

const withAuthentication = (WrappedComponent: any) => (props: unknown) => {
  const { data, loading } = useGetMeQuery();
  if (loading) return <Loading />;
  if (!data?.me) Router.push("/login");
  return <WrappedComponent {...props} />;
};

export default withAuthentication;
