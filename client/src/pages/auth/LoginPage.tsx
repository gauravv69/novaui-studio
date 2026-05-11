import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Checkbox } from "../../components/ui/Checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/Card";

import { loginSchema, type LoginSchema } from "../../validations/auth.schema";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);
    // Simulate API call
    console.log("Submitting login:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <Card className="w-full animate-in fade-in zoom-in duration-500">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold tracking-tight">
          NovaUI Studio
        </CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-5">
          <div className="space-y-4">
            <Input
              label="Email Address"
              placeholder="admin@novaui.studio"
              type="email"
              autoComplete="email"
              {...register("email")}
              error={errors.email?.message}
              disabled={isLoading}
            />
            <div className="relative">
              <Input
                label="Password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                {...register("password")}
                error={errors.password?.message}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-50"
                disabled={isLoading}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              label="Remember me"
              id="rememberMe"
              {...register("rememberMe")}
              disabled={isLoading}
            />
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-5 pt-2">
          <Button
            className="w-full text-base font-semibold transition-all duration-300"
            variant="primary"
            type="submit"
            isLoading={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="text-sm text-center text-zinc-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-zinc-100 hover:underline underline-offset-4"
            >
              Create an account
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginPage;
