"use client";

import { useEffect, useState } from "react";
import ArticleResumeCard from "@/components/cards/ArticleResumeCard";
import LandingHeader from "@/components/elements/LandingHeader";
import Footer from "@/components/elements/Footer";
import ArticlesGrid from "@/components/media/ArticlesGrid";
import Switcher from "@/components/miscellaneous/Switcher";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  entertainmentArticles,
  footerColumns,
  footerSocialItems,
  heroArticles,
  navigationLinks,
  technologyArticles,
  trendingArticles,
  wellbeingArticles,
} from "@/mocks/home";
import logo from "@/assets/logo.svg";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <LandingHeader.Root
        bordered={false}
        className="bg-background/80 backdrop-blur-md border-b border-border-card/50"
      >
        <LandingHeader.Left className="gap-3">
          <LandingHeader.Logo src={logo.src} alt="Logotipo do Clube do Software" />
          <Title
            content="Clube do Software"
            element="h1"
            weight="semibold"
            className="hidden text-xl sm:block"
          />
        </LandingHeader.Left>

        <LandingHeader.Center>
          <LandingHeader.Nav>
            {navigationLinks.map((link) => (
              <LandingHeader.Nav.Item
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>

        <LandingHeader.Right className="gap-3">
          <Switcher
            label="Tema escuro"
            checked={isDarkTheme}
            onChange={(checked) => {
              setIsDarkTheme(checked);
            }}
            containerClassName="hidden text-xs font-medium text-foreground/80 md:flex md:flex-col md:items-end"
          />
          <LandingHeader.CTA
            label="Assine a newsletter"
            className="hidden bg-primary-500 text-white md:inline-flex"
          />
          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={setMobileMenuOpen as never}
          />
          <LandingHeader.MobileMenuPanel
            open={mobileMenuOpen}
            cta={
              <div className="flex flex-col gap-3">
                <LandingHeader.CTA
                  label="Assine a newsletter"
                  className="w-full justify-center bg-primary-500 text-white"
                />
                <Switcher
                  label="Tema escuro"
                  checked={isDarkTheme}
                  onChange={(checked) => {
                    setIsDarkTheme(checked);
                  }}
                  containerClassName="w-full text-xs font-medium text-foreground"
                />
              </div>
            }
          >
            {navigationLinks.map((link) => (
              <LandingHeader.Nav.Item
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex-1">
        <section
          id="novidades"
          className="mx-auto w-full max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col gap-6">
              <Subtitle
                content="Novidades do Clube"
                element="h2"
                weight="medium"
                className="text-xs uppercase tracking-[0.35em] text-primary-300"
              />
              <Title
                content="Tecnologia que aproxima histórias"
                element="h2"
                weight="bold"
                className="text-3xl sm:text-4xl"
              />
              <Paragraph
                content="Insights selecionados pela comunidade para transformar o jeito de estudar, trabalhar e se conectar com tecnologia."
                className="max-w-2xl text-foreground/70"
              />
              <ArticlesGrid
                mainArticleId={heroArticles.mainArticleId}
                articles={heroArticles.articles}
                className="mt-2"
              />
            </div>

            <aside className="rounded-3xl border border-border-card/60 bg-bg-card/70 p-6 shadow-lg backdrop-blur">
              <Subtitle
                content="Mais lidos da semana"
                element="h3"
                weight="semibold"
                className="text-lg"
              />
              <Paragraph
                content="Os conteúdos favoritos da comunidade Clube do Software nesta semana."
                className="mt-2 text-foreground/70"
              />
              <div className="mt-6 space-y-4">
                {trendingArticles.map((article) => (
                  <ArticleResumeCard
                    key={article.title}
                    {...article}
                    containerClassName="w-full rounded-2xl bg-transparent hover:bg-foreground/10"
                  />
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section
          id="tecnologia"
          className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"
        >
          <Subtitle
            content="Tecnologia"
            element="h2"
            weight="semibold"
            className="text-xl text-primary-200"
          />
          <Paragraph
            content="Tutoriais, tendências e ferramentas que impactam diretamente o dia a dia de quem programa."
            className="mt-2 text-foreground/70"
          />
          <div className="mt-8">
            <ArticlesGrid
              mainArticleId={technologyArticles.mainArticleId}
              articles={technologyArticles.articles}
            />
          </div>
        </section>

        <section
          id="novidades-midias"
          className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"
        >
          <Subtitle
            content="Filmes, séries e livros"
            element="h2"
            weight="semibold"
            className="text-xl text-primary-200"
          />
          <Paragraph
            content="Histórias que inspiram a comunidade tech dentro e fora da tela."
            className="mt-2 text-foreground/70"
          />
          <div className="mt-8">
            <ArticlesGrid
              mainArticleId={entertainmentArticles.mainArticleId}
              articles={entertainmentArticles.articles}
            />
          </div>
        </section>

        <section
          id="bem-estar"
          className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        >
          <Subtitle
            content="Saúde e bem-estar"
            element="h2"
            weight="semibold"
            className="text-xl text-primary-200"
          />
          <Paragraph
            content="Equilíbrio entre corpo e mente para sustentar jornadas criativas em tecnologia."
            className="mt-2 text-foreground/70"
          />
          <div className="mt-8">
            <ArticlesGrid
              mainArticleId={wellbeingArticles.mainArticleId}
              articles={wellbeingArticles.articles}
            />
          </div>
        </section>
      </main>

      <Footer.Root id="contato" className="mt-auto">
        <Footer.Top columns={4}>
          {footerColumns.map((column) => (
            <Footer.Column key={column.title} title={column.title} items={column.items} />
          ))}
        </Footer.Top>
        <Footer.SocialRow
          items={footerSocialItems}
          title="Siga o Clube nas redes"
          iconsClassName="text-primary-400"
        />
        <Footer.Bottom bordered>
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
            <Paragraph
              content="© 2024 Clube do Software. Criado por apaixonados por tecnologia no Brasil."
              className="text-foreground/60"
            />
            <Paragraph
              content="Fale com a gente: contato@clubedosoftware.com"
              className="text-foreground/60"
            />
          </div>
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
