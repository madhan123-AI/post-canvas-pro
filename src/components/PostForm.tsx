import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PostFormProps {
  content: string;
  onContentChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating?: boolean;
}

export const PostForm = ({
  content,
  onContentChange,
  onGenerate,
  isGenerating = false,
}: PostFormProps) => {
  return (
    <Card className="w-full max-w-2xl bg-card shadow-card border-0 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            Generate LinkedIn Post
          </h2>
          <p className="text-muted-foreground text-sm">
            Enter your ideas and generate a professional LinkedIn post
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="post-content" className="text-sm font-medium">
              Post Ideas / Content
            </Label>
            <Textarea
              id="post-content"
              placeholder="Describe what you want to share - achievements, insights, thoughts, or any topic you'd like to post about..."
              value={content}
              onChange={(e) => onContentChange(e.target.value)}
              className="min-h-[120px] resize-none transition-all duration-200 focus:shadow-card"
            />
            <p className="text-xs text-muted-foreground">
              {content.length} characters
            </p>
          </div>

          <Button 
            onClick={onGenerate}
            disabled={!content.trim() || isGenerating}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
          >
            {isGenerating ? "Generating..." : "Generate LinkedIn Post"}
          </Button>
        </div>
      </div>
    </Card>
  );
};