import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PROSE_CLASSNAME } from "@/lib/prose";

export function ArticleBody({ content }: { content: string }) {
  return (
    <Section>
      <Container>
        <div className={PROSE_CLASSNAME}>
          <MDXRemote source={content} />
        </div>
      </Container>
    </Section>
  );
}
