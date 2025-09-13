import { useState } from "react";
import { PostForm } from "@/components/PostForm";
import { LinkedInCard } from "@/components/LinkedInCard";
import { TopicSuggestions } from "@/components/TopicSuggestions";

const Index = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [generatedPost, setGeneratedPost] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTopicSelect = (topic: string) => {
    setContent(topic);
  };

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
      console.error("Error generating post:", error);
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
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Topic Suggestions */}
          <div className="flex justify-center">
            <TopicSuggestions onTopicSelect={handleTopicSelect} />
          </div>

          {/* Form */}
          <div className="flex justify-center">
            <PostForm
              content={content}
              image={image}
              onContentChange={setContent}
              onImageChange={setImage}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Generated Post Preview
                </h3>
                <LinkedInCard
                  authorName="Alex Johnson"
                  jobTitle="Senior Software Engineer"
                  content={generatedPost}
                  image={image ? URL.createObjectURL(image) : undefined}
                />
              </div>
            </div>
          )}

          {!showPreview && (
            <div className="text-center p-8">
              <div className="text-muted-foreground">
                <p className="text-lg mb-2">🎯</p>
                <p>Select a topic or enter your ideas, then click generate to see your LinkedIn post preview</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
