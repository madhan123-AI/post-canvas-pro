import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";
import { useRef } from "react";

interface PostFormProps {
  content: string;
  image: File | null;
  onContentChange: (value: string) => void;
  onImageChange: (file: File | null) => void;
  onGenerate: () => void;
  isGenerating?: boolean;
}

export const PostForm = ({
  content,
  image,
  onContentChange,
  onImageChange,
  onGenerate,
  isGenerating = false,
}: PostFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  const removeImage = () => {
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="w-full max-w-2xl bg-card shadow-card border-0 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            Generate LinkedIn Post
          </h2>
          <p className="text-muted-foreground text-sm">
            Enter your ideas and optionally add an image to generate a professional LinkedIn post
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

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Add Image (Optional)
            </Label>
            {!image ? (
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload an image
                </p>
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose Image
                </Button>
              </div>
            ) : (
              <div className="relative border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="h-12 w-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">{image.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(image.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
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