
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard would happen here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gt-background flex">
      {/* Left Column - Brand & Benefits */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gt-secondary/5 to-gt-primary/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gt-secondary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <Shield className="w-10 h-10 text-gt-primary mr-3" />
            <span className="text-3xl font-heading font-bold text-gt-text">GameTrust</span>
          </div>
          <h1 className="text-4xl font-heading font-bold text-gt-text mb-6">
            Join the most trusted
            <span className="block bg-gradient-to-r from-gt-secondary to-gt-primary bg-clip-text text-transparent">
              gaming marketplace
            </span>
          </h1>
          <div className="space-y-4 text-gt-text/70">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gt-secondary rounded-full mr-3"></div>
              <span>Zero-risk account trading</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gt-primary rounded-full mr-3"></div>
              <span>Instant verification system</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gt-secondary rounded-full mr-3"></div>
              <span>Trusted by 50K+ gamers</span>
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
            <CardTitle className="text-2xl font-heading text-gt-text">Create Account</CardTitle>
            <CardDescription className="text-gt-text/60">
              Start trading with confidence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gt-text/80">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gt-text/50" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    className="gt-input pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gt-text/80">Email</Label>
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
                    placeholder="Create a strong password"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gt-text/80">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gt-text/50" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="gt-input pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gt-text/50 hover:text-gt-text"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1 rounded border-gt-border" required />
                <label className="text-sm text-gt-text/70">
                  I agree to the{' '}
                  <Link to="/terms" className="text-gt-secondary hover:text-gt-secondary/80 transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-gt-secondary hover:text-gt-secondary/80 transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full gt-button-primary text-base py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gt-background/30 border-t-gt-background rounded-full animate-spin mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gt-text/60">Already have an account? </span>
              <Link to="/login" className="text-gt-secondary hover:text-gt-secondary/80 font-medium transition-colors">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
