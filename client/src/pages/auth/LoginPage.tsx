import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/Card";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4 font-sans text-white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl">NovaUI Studio</CardTitle>
          <CardDescription>
            Premium UI Foundation Demonstration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Input
              label="Email Address"
              placeholder="admin@novaui.studio"
              type="email"
            />
            <Input
              label="Password"
              placeholder="••••••••"
              type="password"
              error="Password must be at least 8 characters"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" variant="primary">
            Sign In
          </Button>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
            <Button variant="outline" size="sm">
              Outline
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="w-full text-zinc-400">
            Forgot Password?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
