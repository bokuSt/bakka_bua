import HeroSlider from "@/components/HeroSlider";
import SlideShow from "@/components/slideShow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gamepad2, GraduationCap, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="advert"> 
          <HeroSlider /> 
          </div>


         {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to BakkaBua</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your ultimate destination for shopping, gaming, and learning - all in one place
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" variant="secondary">
            <Link href="/ecommerce">Start Shopping</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            <Link href="/gaming">Play Games</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-purple-600"
          >
            <Link href="/education">Learn Now</Link>
          </Button>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Wide product selection</li>
              <li>• Secure payment processing</li>
              <li>• Order tracking</li>
              <li>• Customer reviews</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/ecommerce">
                Explore Store <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Gaming Platform</CardTitle>
            <CardDescription>Play exciting games, compete with friends, and climb the leaderboards</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Multiple game genres</li>
              <li>• Global leaderboards</li>
              <li>• Achievement system</li>
              <li>• Social features</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/gaming">
                Start Gaming <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle>Education Hub</CardTitle>
            <CardDescription>Learn new skills with interactive courses and expert instructors</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Expert-led courses</li>
              <li>• Interactive lessons</li>
              <li>• Progress tracking</li>
              <li>• Certificates</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/education">
                Start Learning <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="bg-muted rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose BakkaBua?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold mb-2">Secure & Safe</h3>
            <p className="text-sm text-muted-foreground">
              Your data and transactions are protected with enterprise-grade security
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Optimized performance for the best user experience</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="font-semibold mb-2">Global Access</h3>
            <p className="text-sm text-muted-foreground">Available worldwide with multi-language support</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold mb-2">All-in-One</h3>
            <p className="text-sm text-muted-foreground">Everything you need in a single, unified platform</p>
          </div>
        </div>
      </section>
    
      </main>
    </div>
  );
}
