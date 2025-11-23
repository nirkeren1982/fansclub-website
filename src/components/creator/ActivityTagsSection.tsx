import { Link } from 'react-router-dom';
import { getActivityIcon, getActivityColor, activityToSlug } from '@/utils/activityExtractor';

interface ActivityTagsSectionProps {
  activities: string[];
  creatorName?: string;
}

export function ActivityTagsSection({ activities, creatorName }: ActivityTagsSectionProps) {
  if (!activities || activities.length === 0) return null;
  
  return (
    <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-4">
        {creatorName ? `${creatorName}'s Services` : 'Content & Services'}
      </h3>
      <p className="text-muted-foreground mb-6">
        Click any tag to find similar creators:
      </p>
      
      <div className="flex flex-wrap gap-3">
        {activities.map((activity) => {
          const icon = getActivityIcon(activity);
          const colorClasses = getActivityColor(activity);
          const slug = activityToSlug(activity);
          
          return (
            <Link
              key={activity}
              to={`/search?activity=${encodeURIComponent(slug)}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 font-medium text-sm transition-all hover:scale-105 hover:shadow-md ${colorClasses}`}
            >
              <span className="text-lg" aria-hidden="true">{icon}</span>
              <span>{activity}</span>
            </Link>
          );
        })}
      </div>
      
      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          💡 <strong>Tip:</strong> These tags are automatically detected from the creator's profile. 
          Click any tag to discover more creators offering similar content.
        </p>
      </div>
    </div>
  );
}

