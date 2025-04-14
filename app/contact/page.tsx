import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-cyber tracking-tighter sm:text-5xl">Contact</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch for commissions, game development, or just to say hello
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels</p>
              </div>
              <div className="grid gap-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">jx2515@columbia.edu</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Wechat</h3>
                  <p className="text-muted-foreground">JX2089370781</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Instagram</h3>
                  <p className="text-muted-foreground">@jezzaxu</p>
                </div>
                {/* <div className="space-y-1">
                  <h3 className="font-medium">Studio Address</h3>
                  <p className="text-muted-foreground">
                    123 Art Studio Lane
                    <br />
                    New York, NY 10001
                  </p>
                </div> */}
                {/* <div className="space-y-1">
                  <h3 className="font-medium">Wechat</h3>
                  <p className="text-muted-foreground">
                    Gallery 23
                    <br />
                    456 Gallery Row
                    <br />
                    New York, NY 10002
                  </p>
                </div> */}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
