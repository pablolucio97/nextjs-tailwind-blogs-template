"use client";

import { useEffect, useState } from "react";
import CommentaryCard from "@/components/cards/CommentaryCard";
import ArticleResumeCard from "@/components/cards/ArticleResumeCard";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import HTMLRender from "@/components/elements/HTMLRender";
import CommentaryForm from "@/components/forms/forms/CommentaryForm";
import Switcher from "@/components/miscellaneous/Switcher";
import ArticleImage from "@/components/media/ArticleImage";
import ArticlesGrid from "@/components/media/ArticlesGrid";
import MainArticleImage from "@/components/media/MainArticleImage";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  articleHero,
  articleMetadata,
  articleSections,
  commentaryList,
  galleryImages,
  introHighlights,
  recentArticles,
  relatedArticlesGrid,
} from "@/mocks/article-details";
import { footerColumns, footerSocialItems, navigationLinks } from "@/mocks/home";
import logo from "@/assets/logo.svg";

export default function ArticleDetailsPage() {
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
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.4fr)]">
            <article className="flex flex-col gap-10">
              <div className="space-y-4">
                <Subtitle
                  content={articleHero.category}
                  element="h2"
                  weight="semibold"
                  className="text-xs uppercase tracking-[0.35em] text-primary-300"
                />
                <Title
                  content={articleHero.title}
                  element="h1"
                  weight="bold"
                  className="text-3xl sm:text-4xl md:text-5xl"
                />
                <div className="flex flex-col gap-2 text-foreground/70 sm:flex-row sm:items-center sm:gap-6">
                  <Paragraph
                    content={`${articleMetadata.author} • ${articleMetadata.role}`}
                    className="text-sm font-medium text-foreground/80"
                  />
                  <Paragraph
                    content={articleMetadata.publishLabel}
                    className="text-xs sm:text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {introHighlights.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center rounded-full border border-border-card bg-bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70"
                    >
                      {item.label}: {item.value}
                    </span>
                  ))}
                </div>
              </div>

              <MainArticleImage
                imgUrl={articleHero.imgUrl}
                title={articleHero.title}
                category={articleHero.category}
                titleClassName="sr-only"
                badgeClassName="sr-only"
                className="shadow-xl"
              />

              {articleSections.map((section) => (
                <section key={section.id} className="space-y-5">
                  <Subtitle
                    content={section.title}
                    element="h2"
                    weight="semibold"
                    className="text-xl text-foreground"
                  />
                  <HTMLRender
                    html={section.html}
                    containerClassName="flex flex-col gap-4 text-sm sm:text-base text-foreground/80 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:marker:text-primary-400"
                  />
                </section>
              ))}

              <div className="grid gap-6 md:grid-cols-2">
                {galleryImages.map((image) => (
                  <ArticleImage
                    key={image.id}
                    imgUrl={image.imgUrl}
                    title={image.title}
                    publishedAt={articleHero.publishedAt}
                    className="h-full"
                    overlayClassName="bg-gradient-to-t from-black/60 via-black/30 to-black/0"
                    titleClassName="text-lg"
                  />
                ))}
              </div>

              <section className="space-y-6">
                <Subtitle
                  content="O que a comunidade está dizendo"
                  element="h2"
                  weight="semibold"
                  className="text-xl"
                />
                <div className="grid gap-4">
                  {commentaryList.map((comment) => (
                    <CommentaryCard key={`${comment.author}-${comment.publishDate}`} {...comment} />
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <Subtitle
                  content="Deixe seu comentário"
                  element="h2"
                  weight="semibold"
                  className="text-xl"
                />
                <CommentaryForm
                  containerClassName="max-w-3xl"
                  textAreaClassName="min-h-[10rem]"
                  buttonClassName="sm:absolute sm:right-4 sm:bottom-4 sm:w-auto"
                />
              </section>

              <section className="space-y-6">
                <Title
                  content="Artigos relacionados"
                  element="h2"
                  weight="bold"
                  className="text-2xl"
                />
                <ArticlesGrid
                  mainArticleId={relatedArticlesGrid.mainArticleId}
                  articles={relatedArticlesGrid.articles}
                />
              </section>
            </article>

            <aside className="space-y-8">
              <section className="rounded-3xl border border-border-card/70 bg-bg-card/60 p-6 shadow-lg backdrop-blur">
                <Subtitle
                  content="Resumo do artigo"
                  element="h3"
                  weight="semibold"
                  className="text-lg"
                />
                <HTMLRender
                  html={articleSections[0]?.html ?? ""}
                  containerClassName="mt-3 text-sm text-foreground/70 [&_p]:mb-2"
                />
              </section>

              <section className="space-y-5">
                <Subtitle
                  content="Artigos recentes"
                  element="h3"
                  weight="semibold"
                  className="text-lg"
                />
                <div className="space-y-3">
                  {recentArticles.map((article) => (
                    <ArticleResumeCard
                      key={article.title}
                      {...article}
                      containerClassName="w-full rounded-2xl border border-transparent hover:border-border-card/80"
                      badgeClassName="bg-primary-500 text-white"
                    />
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
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
              content="© 2024 Clube do Software. Conteúdo selecionado pela comunidade para evoluir seu repertório."
              className="text-foreground/60"
            />
            <Paragraph
              content="Fale com a redação: revista@clubedosoftware.com"
              className="text-foreground/60"
            />
          </div>
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
