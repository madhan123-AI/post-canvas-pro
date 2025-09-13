import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PostFormProps {
  authorName: string;
  jobTitle: string;
  content: string;
  onAuthorNameChange: (value: string) => void;
  onJobTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
}

export const PostForm = ({
  authorName,
  jobTitle,
  content,
  onAuthorNameChange,
  onJobTitleChange,
  onContentChange,
}: PostFormProps) => {
  return (
    <Card className="w-full max-w-2xl bg-card shadow-card border-0 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            Create Your LinkedIn Post
          </h2>
          <p className="text-muted-foreground text-sm">
            Fill in your details and see a live preview of your LinkedIn post
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="author-name" className="text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="author-name"
                placeholder="e.g. John Smith"
                value={authorName}
                onChange={(e) => onAuthorNameChange(e.target.value)}
                className="transition-all duration-200 focus:shadow-card"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-title" className="text-sm font-medium">
                Job Title
              </Label>
              <Input
                id="job-title"
                placeholder="e.g. Software Engineer at Google"
                value={jobTitle}
                onChange={(e) => onJobTitleChange(e.target.value)}
                className="transition-all duration-200 focus:shadow-card"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="post-content" className="text-sm font-medium">
              Post Content
            </Label>
            <Textarea
              id="post-content"
              placeholder="What's on your mind? Share your thoughts, insights, or achievements..."
              value={content}
              onChange={(e) => onContentChange(e.target.value)}
              className="min-h-[120px] resize-none transition-all duration-200 focus:shadow-card"
            />
            <p className="text-xs text-muted-foreground">
              {content.length} characters
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};