import { useState } from "react";
import { PostForm } from "@/components/PostForm";
import { LinkedInCard } from "@/components/LinkedInCard";

const Index = () => {
  const [content, setContent] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!content.trim()) return;
    
    setIsGenerating(true);
    
    try {
      // TODO: Replace with actual backend API call
      // Simulating API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock generated content - replace with actual API response
      const mockGenerated = `🚀 Excited to share some insights!\n\n${content}\n\n#LinkedIn #Professional #Growth`;
      
      setGeneratedPost(mockGenerated);
      setShowPreview(true);
    } catch (error) {
      console.error('Error generating post:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            LinkedIn Post Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate professional LinkedIn posts with AI
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <PostForm
              content={content}
              onContentChange={setContent}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>

          {/* Preview */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-8">
              {showPreview ? (
                <>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Generated Post Preview
                  </h3>
                  <LinkedInCard
                    authorName="Your Name"
                    jobTitle="Your Professional Title"
                    content={generatedPost}
                  />
                </>
              ) : (
                <div className="text-center p-8">
                  <div className="text-muted-foreground">
                    <p className="text-lg mb-2">🎯</p>
                    <p>Enter your ideas and click generate to see your LinkedIn post preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
