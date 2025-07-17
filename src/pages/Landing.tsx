import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, TrendingUp, Users, Star, CheckCircle, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">RiwiFit</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
              Precios
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              Nosotros
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Iniciar Sesión
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">
              Registrarse
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,255,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm mb-8 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              RiwiFit está en versión beta
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tu Compañero de Fitness
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              La plataforma completa para transformar tu estilo de vida. Entrena inteligente, 
              come mejor y alcanza tus objetivos de fitness.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 bg-white text-black hover:bg-white/90">
              Comenzar Gratis
            </Button>
            <Button variant="ghost" size="lg" className="text-lg px-8 text-white border border-white/20 hover:bg-white/10">
              <Sparkles className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          </div>

          {/* Hero Image/Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">500+</h3>
                <p className="text-muted-foreground">Ejercicios disponibles</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">10K+</h3>
                <p className="text-muted-foreground">Usuarios activos</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">4.9</h3>
                <p className="text-muted-foreground">Calificación promedio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir RiwiFit?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos todas las herramientas que necesitas para transformar tu estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Dumbbell className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Entrenamientos Personalizados</CardTitle>
                <CardDescription>
                  Rutinas adaptadas a tu nivel y objetivos específicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Seguimiento de Progreso</CardTitle>
                <CardDescription>
                  Monitorea tu evolución con gráficas detalladas y estadísticas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Planes Nutricionales</CardTitle>
                <CardDescription>
                  Recetas y planes alimentarios diseñados por nutricionistas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Entrenadores Virtuales</CardTitle>
                <CardDescription>
                  Asistentes AI especializados en diferentes disciplinas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Metas Semanales</CardTitle>
                <CardDescription>
                  Sistema de objetivos que te mantiene motivado cada día
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Comunidad Activa</CardTitle>
                <CardDescription>
                  Conéctate con otros usuarios y comparte tu progreso
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes para todos
            </h2>
            <p className="text-xl text-muted-foreground">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Plan Gratuito</CardTitle>
                <CardDescription>Perfecto para comenzar tu journey fitness</CardDescription>
                <div className="text-3xl font-bold text-foreground mt-4">
                  $0<span className="text-lg text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Ejercicios básicos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Seguimiento básico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Recetas limitadas</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Plan Premium</CardTitle>
                <CardDescription>Acceso completo a todas las funcionalidades</CardDescription>
                <div className="text-3xl font-bold text-foreground mt-4">
                  $9.99<span className="text-lg text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Todos los ejercicios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Entrenadores AI personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Planes nutricionales completos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Análisis avanzado de progreso</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Obtener Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de usuarios que ya están alcanzando sus objetivos con RiwiFit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Crear Cuenta Gratis
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}