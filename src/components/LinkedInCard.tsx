import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send } from "lucide-react";

interface LinkedInCardProps {
  authorName: string;
  jobTitle: string;
  content: string;
  image?: string;
  timeAgo?: string;
}

export const LinkedInCard = ({ 
  authorName, 
  jobTitle, 
  content, 
  image,
  timeAgo = "1m" 
}: LinkedInCardProps) => {
  const authorInitials = authorName
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card className="w-full max-w-2xl bg-card shadow-card border-0 p-0 overflow-hidden">
      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="" />
              <AvatarFallback className="bg-linkedin text-white font-semibold">
                {authorInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-card-foreground text-sm leading-tight">
                {authorName || "Your Name"}
              </h3>
              <p className="text-muted-foreground text-xs leading-tight">
                {jobTitle || "Your Job Title"}
              </p>
              <p className="text-muted-foreground text-xs leading-tight">
                {timeAgo} • 🌐
              </p>
            </div>
          </div>
          <MoreHorizontal className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <div className="text-card-foreground text-sm leading-relaxed whitespace-pre-wrap">
          {content || "Start typing your LinkedIn post content here..."}
        </div>
        
        {/* Image */}
        {image && (
          <div className="mt-3">
            <img
              src={image}
              alt="Post image"
              className="w-full rounded-lg object-cover max-h-96"
            />
          </div>
        )}
      </div>

      {/* Engagement bar */}
      <div className="px-4 py-2 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-linkedin rounded-full flex items-center justify-center">
                <ThumbsUp className="w-2.5 h-2.5 text-white fill-current" />
              </div>
              <span className="ml-1">You and 42 others</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span>8 comments</span>
            <span>2 reposts</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 py-3 border-t border-border">
        <div className="flex items-center justify-around">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-muted transition-colors group">
            <ThumbsUp className="w-5 h-5 text-muted-foreground group-hover:text-linkedin transition-colors" />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-linkedin transition-colors">
              Like
            </span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-muted transition-colors group">
            <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-linkedin transition-colors" />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-linkedin transition-colors">
              Comment
            </span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-muted transition-colors group">
            <Repeat2 className="w-5 h-5 text-muted-foreground group-hover:text-linkedin transition-colors" />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-linkedin transition-colors">
              Repost
            </span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-muted transition-colors group">
            <Send className="w-5 h-5 text-muted-foreground group-hover:text-linkedin transition-colors" />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-linkedin transition-colors">
              Send
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};