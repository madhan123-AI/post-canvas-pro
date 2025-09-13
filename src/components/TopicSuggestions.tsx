import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TopicSuggestionsProps {
  onTopicSelect: (topic: string) => void;
}

const topics = [
  "Share a recent professional achievement or milestone",
  "Discuss industry trends and insights",
  "Offer career advice or lessons learned",
  "Highlight a team success or collaboration",
  "Share thoughts on professional development",
  "Comment on workplace culture and values",
  "Discuss new skills or certifications gained",
  "Share insights from a conference or event",
];

export const TopicSuggestions = ({ onTopicSelect }: TopicSuggestionsProps) => {
  return (
    <Card className="w-full max-w-2xl bg-card shadow-card border-0 p-6 mb-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-card-foreground mb-2">
            Topic Suggestions
          </h2>
          <p className="text-muted-foreground text-sm">
            Choose a topic to get started or write your own
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {topics.map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-left h-auto p-3 justify-start text-sm hover:bg-muted transition-colors"
              onClick={() => onTopicSelect(topic)}
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};