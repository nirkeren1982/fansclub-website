import type { Creator } from '@/lib/api';
import { 
  generateCreatorOverview,
  generateContentStyleDescription,
  generateSubscriptionGuide,
  generateFAQs,
  generateWhySubscribe,
  type FAQ
} from '@/utils/contentTemplates';
import { extractActivitiesFromBio, getActivityDescription } from '@/utils/activityExtractor';
import { useEffect, useState } from 'react';

interface CreatorContentSectionProps {
  creator: Creator;
}

export function CreatorContentSection({ creator }: CreatorContentSectionProps) {
  const [activities, setActivities] = useState<string[]>(creator.activities || []);
  
  // Extract activities from bio if not already extracted
  useEffect(() => {
    if (!creator.activities || creator.activities.length === 0) {
      const extracted = extractActivitiesFromBio(creator.bio);
      setActivities(extracted);
    }
  }, [creator.bio, creator.activities]);
  
  const overview = generateCreatorOverview({ ...creator, activities });
  const reasons = generateWhySubscribe({ ...creator, activities });
  const faqs = generateFAQs({ ...creator, activities });
  const name = creator.display_name || creator.username;
  const displayName = creator.display_name || creator.username;
  
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Creator Overview */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">About {displayName}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </section>

      {/* Content & Services Details */}
      {activities.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Main content</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 border border-border">
            <p className="text-muted-foreground mb-6">
              {name} provides a variety of content and services for subscribers:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {activities.slice(0, 8).map((activity) => (
                <div key={activity} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{activity}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getActivityDescription(activity).charAt(0).toUpperCase() + getActivityDescription(activity).slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {activities.length > 8 && (
              <p className="mt-6 text-sm text-muted-foreground text-center">
                + {activities.length - 8} more services available
              </p>
            )}
          </div>
        </section>
      )}

      {/* Why Subscribe */}
      {reasons.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Why Subscribe to {name}?</h2>
          <div className="bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 rounded-lg p-6 md:p-8 border border-primary/20">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-foreground text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Subscription Guide - Hidden */}
      {/* <section>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 border-2 border-primary/30">
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ 
              __html: generateSubscriptionGuide({ ...creator, activities })
                .replace(/\n/g, '<br>')
                .replace(/###\s/g, '<h3 class="text-xl font-bold mt-6 mb-3">')
                .replace(/<h3/g, '</p><h3')
                .replace(/##\s/g, '<h2 class="text-2xl font-bold mb-4">')
                .replace(/✓/g, '<span class="text-green-500">✓</span>')
                .replace(/•/g, '<span class="text-primary">•</span>')
            }}
          />
        </div>
      </section> */}

      {/* Content Style Description - Hidden */}
      {/* <section>
        <div className="bg-secondary/10 rounded-lg p-6 md:p-8">
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ 
              __html: generateContentStyleDescription({ ...creator, activities })
                .replace(/\n/g, '<br>')
                .replace(/###\s/g, '<h3 class="text-xl font-bold mt-4 mb-2">')
                .replace(/##\s/g, '<h2 class="text-2xl font-bold mb-4">')
                .replace(/•\s\*\*(.+?)\*\*:/g, '<li><strong>$1:</strong>')
                .replace(/<li>/g, '</p><li class="ml-4">')
            }}
          />
        </div>
      </section> */}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq: FAQ, index: number) => (
              <details 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Subscribe?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of fans and get exclusive access to {name}'s content
          </p>
          {creator.onlyfans_url && (
            <a
              href={creator.onlyfans_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Subscribe on OnlyFans →
            </a>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="text-center text-sm text-muted-foreground">
        <p>
          FansClubOnly is an independent directory. We are not affiliated with OnlyFans.
          All trademarks belong to their respective owners.
        </p>
      </section>
    </div>
  );
}



