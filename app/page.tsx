import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 
import { Check } from "lucide-react";

import logo from "./assets/Logo.svg"
import woman from "./assets/woman.svg"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-2 md:px-0">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} alt="Livro SaaS" />
          <div className="items-center gap-2 hidden md:flex">
            <Button variant="link">Funcionamento</Button>
            <Button variant="link">Preço</Button>
            <Button variant="bg-white">Login</Button>
          </div>
        </nav>
        <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">Simplifique Seus Estudos</h1>
        <p className="text-gray-500 mt-4 md:text-xl text-sm max-w-3xl mx-auto">Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
        <form className="mt-10 md:mt-16">
          <div className="flex justify-center gap-2">
            <Input type="email" placeholder="Digite seu e-mail" className="max-w-sm border-gray-300" />
            <Button variant="bg-black">Assine Agora</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        </form>
      </section>
      <section>
        <div>
          <h1>Como funciona?</h1>
          <div>
            <Image src={woman} alt="Moça com livros" />
            <ul>
              <li>
                Acesso a 1 ebook por mês
                <Check size={24} />
              </li>
              <li>
                Curadoria especial
                <Check size={24} />  
              </li>
              <li>
                Cancele quando quiser
                <Check size={24} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Preço Simples e Transparente</h2>
        <p>Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.</p>
        <Card>
          <CardHeader>
            <CardTitle>Plano Pro Premium VIP</CardTitle>
            <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>R$29 <span>/mês</span></p>
            <ul>
              <li>
                <Check/> 
                1 ebook por mês
              </li>
              <li>
                <Check/>
                Curadoria especial
              </li>
              <li>
                <Check/>
                Acesso ilimitado
              </li>
              <li>
                <Check/>
                Cancele a qualquer momento
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="bg-black">Assine Agora</Button>
          </CardFooter>
        </Card>
      </section>
      <section>
        <h2>Pronto Para Mudar Sua Vida?</h2>
        <p>Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos.</p>
        <Button variant="bg-black">Assine Agora</Button>
        <p>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        <footer>
          <Image src={logo} alt="Livro SaaS" />
          <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  );
}
