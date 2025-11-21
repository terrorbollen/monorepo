import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Edit, Eye } from "lucide-react";

const Blog = () => {
  const [markdownContent, setMarkdownContent] = useState(`# Welcome to My Blog 🚧

> **Work in Progress** - This blog is currently under development. More content and features coming soon!

## About Me

Hi there! I'm a passionate developer who loves creating beautiful and functional web applications. This blog is where I'll be sharing my thoughts, experiences, and learnings from the world of software development.

### What You Can Expect

- **Technical tutorials** and coding tips
- **Project showcases** and case studies  
- **Industry insights** and trends
- **Personal experiences** in development
- **Tool reviews** and recommendations

### My Tech Stack

I work with modern technologies including:

- **Frontend**: React, TypeScript, Tailwind CSS, Next.js
- **Backend**: Django, FastAPI, Node.js, Python
- **Tools**: Docker, Kubernetes, AWS, Git
- **Databases**: PostgreSQL, MongoDB, Redis

## Current Status

This markdown editor allows me to write and preview blog posts in real-time. I'm still working on:

- [ ] Adding a blog post management system
- [ ] Implementing categories and tags
- [ ] Adding search functionality
- [ ] Creating an RSS feed
- [ ] Adding comment system

### Get in Touch

While the blog is still evolving, feel free to reach out if you'd like to discuss development, share ideas, or just say hello!

---

*Last updated: ${new Date().toLocaleDateString()}*

## How to Use This Editor

This is a **markdown editor** where you can write and preview blog posts in real-time.

### Features

- Write in markdown syntax
- Live preview with beautiful styling
- Code highlighting support
- Responsive design

### Example Code Block

\`\`\`javascript
function createBlogPost(title, content) {
  return {
    title,
    content,
    createdAt: new Date(),
    published: false
  };
}
\`\`\`

> Feel free to edit this content and experiment with the markdown editor!
`);

  return (
    <div className="bg-portfolio-background min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-lightestSlate mb-4">
              <span className="text-portfolio-accent">06.</span> Blog
            </h1>
            <p className="text-portfolio-slate text-lg max-w-2xl mx-auto">
              Write and preview markdown content with live rendering
            </p>
          </div>

          <Card className="bg-portfolio-lightNavy border-portfolio-orange/20">
            <CardHeader>
              <CardTitle className="text-portfolio-lightestSlate flex items-center gap-2">
                <Edit className="w-5 h-5 text-portfolio-orange" />
                Markdown Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="edit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-portfolio-background">
                  <TabsTrigger 
                    value="edit" 
                    className="flex items-center gap-2 data-[state=active]:bg-portfolio-orange data-[state=active]:text-portfolio-background"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </TabsTrigger>
                  <TabsTrigger 
                    value="preview"
                    className="flex items-center gap-2 data-[state=active]:bg-portfolio-orange data-[state=active]:text-portfolio-background"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="edit" className="mt-4">
                  <Textarea
                    value={markdownContent}
                    onChange={(e) => setMarkdownContent(e.target.value)}
                    placeholder="Write your markdown content here..."
                    className="min-h-[500px] bg-portfolio-background border-portfolio-orange/20 text-portfolio-lightSlate resize-none font-mono"
                  />
                  <div className="mt-4 flex gap-2">
                    <Button 
                      onClick={() => setMarkdownContent("")}
                      variant="outline"
                      className="border-portfolio-orange/20 text-portfolio-lightSlate hover:bg-portfolio-orange/10"
                    >
                      Clear
                    </Button>
                    <Button 
                      onClick={() => {
                        navigator.clipboard.writeText(markdownContent);
                      }}
                      className="bg-portfolio-orange hover:bg-portfolio-orange/90"
                    >
                      Copy Markdown
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="preview" className="mt-4">
                  <div className="bg-portfolio-background border border-portfolio-orange/20 rounded-lg p-6 min-h-[500px]">
                    <div className="prose prose-invert max-w-none text-portfolio-lightSlate">
                      <ReactMarkdown
                        components={{
                          h1: ({children}) => <h1 className="text-3xl font-bold text-portfolio-lightestSlate mb-6 pb-2 border-b border-portfolio-orange/20">{children}</h1>,
                          h2: ({children}) => <h2 className="text-2xl font-semibold text-portfolio-lightestSlate mb-4 mt-8">{children}</h2>,
                          h3: ({children}) => <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-3 mt-6">{children}</h3>,
                          p: ({children}) => <p className="text-portfolio-lightSlate mb-4 leading-relaxed">{children}</p>,
                          ul: ({children}) => <ul className="list-disc list-inside text-portfolio-lightSlate mb-4 space-y-2 ml-4">{children}</ul>,
                          ol: ({children}) => <ol className="list-decimal list-inside text-portfolio-lightSlate mb-4 space-y-2 ml-4">{children}</ol>,
                          li: ({children}) => <li className="text-portfolio-lightSlate">{children}</li>,
                          blockquote: ({children}) => <blockquote className="border-l-4 border-portfolio-orange pl-4 py-2 bg-portfolio-lightNavy/50 rounded-r text-portfolio-lightSlate italic mb-4">{children}</blockquote>,
                          code: ({children, className}) => {
                            const isInline = !className;
                            return isInline ? (
                              <code className="bg-portfolio-lightNavy text-portfolio-orange px-2 py-1 rounded text-sm font-mono">{children}</code>
                            ) : (
                              <code className="block bg-portfolio-lightNavy text-portfolio-lightSlate p-4 rounded overflow-x-auto font-mono text-sm whitespace-pre">{children}</code>
                            );
                          },
                          pre: ({children}) => <pre className="bg-portfolio-lightNavy rounded mb-4 overflow-hidden">{children}</pre>,
                          a: ({children, href}) => <a href={href} className="text-portfolio-orange hover:text-portfolio-orange/80 underline transition-colors">{children}</a>,
                          strong: ({children}) => <strong className="text-portfolio-lightestSlate font-semibold">{children}</strong>,
                          em: ({children}) => <em className="text-portfolio-accent italic">{children}</em>,
                        }}
                      >
                        {markdownContent}
                      </ReactMarkdown>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;