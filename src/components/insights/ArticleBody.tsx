import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function ArticleBody({ content }: { content: string }) {
  return (
    <Section>
      <Container>
        <div
          className={cn(
            "prose mx-auto max-w-[68ch]",
            "prose-headings:font-display prose-headings:text-ink",
            "prose-h2:mt-16 prose-h2:text-heading",
            "prose-h3:mt-10 prose-h3:text-heading",
            "prose-p:text-body prose-p:leading-[1.75]",
            "prose-strong:text-ink",
            "prose-a:border-b prose-a:border-brass/40 prose-a:text-brass prose-a:no-underline hover:prose-a:border-brass",
            "prose-blockquote:border-brass-dim prose-blockquote:font-normal prose-blockquote:not-italic",
            "prose-code:rounded prose-code:bg-ink-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-paper prose-code:before:content-none prose-code:after:content-none",
            "prose-pre:bg-ink-soft prose-pre:text-paper",
          )}
        >
          <MDXRemote source={content} />
        </div>
      </Container>
    </Section>
  );
}
