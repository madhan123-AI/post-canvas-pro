import { useState } from "react";
import { PostForm } from "@/components/PostForm";
import { LinkedInCard } from "@/components/LinkedInCard";

const Index = () => {
  const [authorName, setAuthorName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            LinkedIn Post Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Create professional LinkedIn posts with live preview
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <PostForm
              authorName={authorName}
              jobTitle={jobTitle}
              content={content}
              onAuthorNameChange={setAuthorName}
              onJobTitleChange={setJobTitle}
              onContentChange={setContent}
            />
          </div>

          {/* Preview */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Live Preview
              </h3>
              <LinkedInCard
                authorName={authorName}
                jobTitle={jobTitle}
                content={content}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
