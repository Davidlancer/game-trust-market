
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard would happen here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gt-background flex">
      {/* Left Column - Brand & Benefits */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gt-primary/5 to-gt-secondary/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gt-primary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <Shield className="w-10 h-10 text-gt-primary mr-3" />
            <span className="text-3xl font-heading font-bold text-gt-text">GameTrust</span>
          </div>
          <h1 className="text-4xl font-heading font-bold text-gt-text mb-6">
            Welcome back to your
            <span className="block bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text text-transparent">
              digital vault
            </span>
          </h1>
          <div className="space-y-4 text-gt-text/70">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gt-primary rounded-full mr-3"></div>
              <span>Escrow-backed transactions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gt-secondary rounded-full mr-3"></div>
              <span>Verified seller network</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gt-primary rounded-full mr-3"></div>
              <span>24/7 dispute resolution</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <Card className="w-full max-w-md gt-card animate-fade-in-up">
          <CardHeader className="text-center">
            <div className="lg:hidden flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-gt-primary mr-2" />
              <span className="text-2xl font-heading font-bold text-gt-text">GameTrust</span>
            </div>
            <CardTitle className="text-2xl font-heading text-gt-text">Sign In</CardTitle>
            <CardDescription className="text-gt-text/60">
              Access your secure gaming vault
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gt-text/80">Email or Username</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gt-text/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="gt-input pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gt-text/80">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gt-text/50" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="gt-input pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gt-text/50 hover:text-gt-text"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gt-text/70">
                  <input type="checkbox" className="mr-2 rounded border-gt-border" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-sm text-gt-secondary hover:text-gt-secondary/80 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full gt-button-primary text-base py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gt-background/30 border-t-gt-background rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gt-text/60">Don't have an account? </span>
              <Link to="/register" className="text-gt-secondary hover:text-gt-secondary/80 font-medium transition-colors">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
