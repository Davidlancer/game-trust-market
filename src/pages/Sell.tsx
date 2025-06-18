
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Upload, 
  Camera, 
  Video, 
  AlertTriangle, 
  CheckCircle, 
  Lock,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const Sell = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGame, setSelectedGame] = useState('');
  const [platform, setPlatform] = useState('');
  const [linkedAccounts, setLinkedAccounts] = useState<string[]>([]);
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('NGN');

  const games = [
    { id: 'codm', name: 'Call of Duty Mobile', icon: '🛡️' },
    { id: 'pubg', name: 'PUBG Mobile', icon: '🪖' },
    { id: 'freefire', name: 'Free Fire', icon: '🔥' }
  ];

  const platforms = [
    { id: 'android', name: 'Android', safe: true },
    { id: 'ios', name: 'iOS', safe: false },
    { id: 'emulator', name: 'Emulator', safe: true }
  ];

  const linkOptions = [
    { id: 'gmail', name: 'Gmail', safe: true, icon: '✅' },
    { id: 'facebook', name: 'Facebook', safe: false, icon: '🔒' },
    { id: 'apple', name: 'Apple ID', safe: false, icon: '🛑' },
    { id: 'google-play', name: 'Google Play', safe: true, icon: '✅' }
  ];

  const handleLinkedAccountChange = (accountId: string, checked: boolean) => {
    if (checked) {
      setLinkedAccounts([...linkedAccounts, accountId]);
    } else {
      setLinkedAccounts(linkedAccounts.filter(id => id !== accountId));
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Select Game & Platform';
      case 2: return 'Account Details';
      case 3: return 'Upload Proof';
      case 4: return 'Review & Submit';
      default: return 'Step';
    }
  };

  const getRiskWarning = () => {
    const hasRiskyLinks = linkedAccounts.some(id => 
      linkOptions.find(opt => opt.id === id && !opt.safe)
    );
    
    if (linkedAccounts.includes('apple')) {
      return (
        <div className="p-4 bg-gt-danger/20 border border-gt-danger/30 rounded-lg">
          <div className="flex items-center text-gt-danger mb-2">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="font-medium">High Risk - Unlinkable</span>
          </div>
          <p className="text-sm text-gt-text/70">
            Apple ID linked accounts cannot be unlinked and may result in account recovery disputes.
          </p>
        </div>
      );
    }
    
    if (hasRiskyLinks) {
      return (
        <div className="p-4 bg-gt-warning/20 border border-gt-warning/30 rounded-lg">
          <div className="flex items-center text-gt-warning mb-2">
            <Lock className="w-4 h-4 mr-2" />
            <span className="font-medium">Medium Risk - Linked Accounts</span>
          </div>
          <p className="text-sm text-gt-text/70">
            Some linked accounts may require additional verification steps.
          </p>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gt-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold text-gt-text mb-2">
              List Your Account for Sale
            </h1>
            <p className="text-gt-text/70">
              Secure, verified selling with escrow protection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Steps Sidebar */}
            <div className="lg:col-span-1">
              <div className="gt-card p-6 sticky top-24">
                <h3 className="font-heading font-semibold text-gt-text mb-4">Steps</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className={`flex items-center ${
                      currentStep >= step ? 'text-gt-primary' : 'text-gt-text/50'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 transition-all duration-300 ${
                        currentStep >= step 
                          ? 'bg-gt-primary text-gt-background' 
                          : 'border border-gt-border text-gt-text/50'
                      }`}>
                        {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                      </div>
                      <span className="text-sm font-medium">
                        {step === 1 && 'Game Info'}
                        {step === 2 && 'Account Details'}
                        {step === 3 && 'Upload Proof'}
                        {step === 4 && 'Submit'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-3">
              <Card className="gt-card">
                <CardHeader>
                  <CardTitle className="text-gt-text">{getStepTitle()}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Game Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-gt-text/80 mb-3 block">Select Game</Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {games.map((game) => (
                            <div
                              key={game.id}
                              onClick={() => setSelectedGame(game.id)}
                              className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                                selectedGame === game.id
                                  ? 'border-gt-primary bg-gt-primary/10'
                                  : 'border-gt-border hover:border-gt-primary/50'
                              }`}
                            >
                              <div className="text-center">
                                <div className="text-2xl mb-2">{game.icon}</div>
                                <div className="font-medium text-gt-text">{game.name}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-gt-text/80 mb-3 block">Platform</Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {platforms.map((plat) => (
                            <div
                              key={plat.id}
                              onClick={() => setPlatform(plat.id)}
                              className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                                platform === plat.id
                                  ? 'border-gt-primary bg-gt-primary/10'
                                  : 'border-gt-border hover:border-gt-primary/50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gt-text">{plat.name}</span>
                                {plat.safe ? (
                                  <CheckCircle className="w-4 h-4 text-gt-secondary" />
                                ) : (
                                  <AlertTriangle className="w-4 h-4 text-gt-warning" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-gt-text/80 mb-3 block">Linked Accounts</Label>
                        <div className="space-y-3">
                          {linkOptions.map((option) => (
                            <div key={option.id} className="flex items-center space-x-3">
                              <Checkbox
                                id={option.id}
                                checked={linkedAccounts.includes(option.id)}
                                onCheckedChange={(checked) => 
                                  handleLinkedAccountChange(option.id, checked as boolean)
                                }
                              />
                              <Label htmlFor={option.id} className="flex items-center text-gt-text cursor-pointer">
                                <span className="mr-2">{option.icon}</span>
                                {option.name}
                                {!option.safe && (
                                  <Badge className="ml-2 bg-gt-warning/20 text-gt-warning border-gt-warning/30 text-xs">
                                    Risk
                                  </Badge>
                                )}
                              </Label>
                            </div>
                          ))}
                        </div>
                        {getRiskWarning()}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Account Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="level" className="text-gt-text/80">Account Level</Label>
                          <Input id="level" placeholder="e.g., 150" className="gt-input" />
                        </div>
                        <div>
                          <Label htmlFor="rank" className="text-gt-text/80">Current Rank</Label>
                          <Input id="rank" placeholder="e.g., Legendary" className="gt-input" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="features" className="text-gt-text/80">Key Features</Label>
                        <Input id="features" placeholder="e.g., Mythic AK-47, Legendary Character" className="gt-input" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="price" className="text-gt-text/80">Expected Price</Label>
                          <div className="flex">
                            <select 
                              value={currency}
                              onChange={(e) => setCurrency(e.target.value)}
                              className="gt-input rounded-r-none border-r-0 w-20"
                            >
                              <option value="NGN">₦</option>
                              <option value="USD">$</option>
                            </select>
                            <Input 
                              id="price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              placeholder="45,000" 
                              className="gt-input rounded-l-none flex-1" 
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="notes" className="text-gt-text/80">Additional Notes (Optional)</Label>
                        <textarea 
                          id="notes"
                          placeholder="Any special features, achievements, or details buyers should know..."
                          className="gt-input w-full h-24 resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Upload Proof */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-gt-text/80 mb-3 block">Upload Video Proof (Optional)</Label>
                        <div className="border-2 border-dashed border-gt-border rounded-lg p-8 text-center hover:border-gt-primary/50 transition-colors cursor-pointer">
                          <Video className="w-12 h-12 text-gt-text/50 mx-auto mb-4" />
                          <p className="text-gt-text/70 mb-2">Drop your video here or click to browse</p>
                          <p className="text-gt-text/50 text-sm">MP4, max 30 seconds, up to 50MB</p>
                        </div>
                      </div>

                      <div>
                        <Label className="text-gt-text/80 mb-3 block">Upload Screenshots</Label>
                        <div className="border-2 border-dashed border-gt-border rounded-lg p-8 text-center hover:border-gt-primary/50 transition-colors cursor-pointer">
                          <Camera className="w-12 h-12 text-gt-text/50 mx-auto mb-4" />
                          <p className="text-gt-text/70 mb-2">Drop your images here or click to browse</p>
                          <p className="text-gt-text/50 text-sm">PNG, JPG up to 10MB each, max 6 images</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="p-6 bg-gt-secondary/10 border border-gt-secondary/30 rounded-lg">
                        <div className="flex items-center text-gt-secondary mb-4">
                          <Shield className="w-5 h-5 mr-2" />
                          <span className="font-medium">Escrow Protection</span>
                        </div>
                        <p className="text-gt-text/70 text-sm leading-relaxed">
                          Your account details will be held securely until payment is confirmed. 
                          Buyers receive login information only after successful payment verification.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox id="agree-terms" />
                        <Label htmlFor="agree-terms" className="text-sm text-gt-text/80 leading-relaxed">
                          I agree to the <Link to="/terms" className="text-gt-secondary hover:underline">GameTrust Terms of Service</Link> and 
                          confirm that I own this account and have the right to sell it.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox id="agree-escrow" />
                        <Label htmlFor="agree-escrow" className="text-sm text-gt-text/80 leading-relaxed">
                          I understand and agree to the GameTrust Escrow System and fee structure.
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t border-gt-border">
                    {currentStep > 1 && (
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="gt-button-ghost"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                    )}
                    
                    <div className="ml-auto">
                      {currentStep < 4 ? (
                        <Button
                          onClick={() => setCurrentStep(currentStep + 1)}
                          className="gt-button-primary"
                          disabled={currentStep === 1 && (!selectedGame || !platform)}
                        >
                          Next Step
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button className="gt-button-primary px-8">
                          <Upload className="w-4 h-4 mr-2" />
                          Submit Listing
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
