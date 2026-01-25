---
slug: brakes-on-proveb-daily
title: SI Built the App. Then the Play Store Built the Wall.
authors: [raghavendra]
tags: [android app, play store]
---

# I Built the App. Then the Play Store Built the Wall.

I didn’t start this app to “build a startup.”
I started it because I wanted to **finish something small, clean, and complete**—_and ship it._

<!-- truncate -->

The app itself was simple by design: one proverb a day, offline-first, no accounts, no feeds, no gamification. You open it, you read, you move on with your life. That constraint wasn’t accidental; it was survival. I’ve learned the hard way that solo developers don’t fail because they can’t code—they fail because scope quietly eats them alive.

So I drew a line early.

No backend.
No user data.
No social features.
No “maybe later.”

Just a proverb, once a day.

## Putting the Code Together

From a technical standpoint, this was one of the most disciplined project I’ve done.

I used Expo with React Native and Expo Router, kept the architecture boring, and forced myself to ship functionality before polish. Local storage only. Notifications capped at one per day. Favorites persisted locally, with no illusions of sync or recovery.

Even monetization was intentionally unambitious: non-blocking banner ads only. No interstitials. No “watch this to continue.” If ads failed to load, the app still worked. The user’s time mattered more than my hypothetical revenue.

I tested edge cases manually: airplane mode, force-closes, denied permissions, dark mode quirks. I broke things, fixed them, and resisted the urge to refactor code that was already “good enough.”

At some point, the app stopped feeling like a project and started feeling like a product. That’s a subtle but important shift. When you open it and nothing surprises you anymore—no crashes, no weird state, no awkward transitions—you know you’re close.

That’s when I turned to the Play Console.

## The Assumption I Didn’t Question Enough

In my head, the flow was straightforward:

1. Upload internal build
2. Do some testing myself
3. Move to closed testing
4. Release

What I underestimated wasn’t technical complexity—it was **process friction**.

Google Play now requires **a minimum of 12 testers for closed testing, active for 14 consecutive days**, before you’re allowed to promote the app toward production.

Not “recommended.”
Not “if applicable.”
Required.

I stared at that requirement longer than I’d like to admit.

Twelve testers.
Fourteen days.
Consistent activity.

I’m a solo developer. This isn’t a company app, a client project, or something with a built-in audience. It’s a quiet utility. The kind of app people don’t talk about—but might use every morning.

And suddenly, shipping wasn’t about code quality or policy compliance. It was about **people**.

## Where Solo Development Actually Hurts

There’s a particular kind of frustration that only shows up at the end.

Not when things are broken.
Not when you’re debugging.
But when the app is done—and you’re blocked anyway.

I had followed the rules.
I had limited scope.
I had respected user privacy.
I had built something intentionally small and honest.

And still, the final gate wasn’t technical—it was social.

“How do solo devs even do this?” became a real question, not a rhetorical one. You can’t fake testers. You can’t automate them. You can’t replace them with discipline or skill.

You need humans who are willing to install an unfinished app and keep it installed for two weeks.

That requirement makes sense at scale. It protects users from broken apps. But at the solo level, it creates a quiet cliff that no tutorial warns you about.

## Sitting With the Reality

I won’t pretend this didn’t knock the wind out of me for a bit. There’s a moment where you ask yourself whether the effort was worth it—whether finishing the app just to stall at distribution counts as failure.

I don’t think it does -- or maybe _it does_.

What I shipped matters more than whether it clears every gate immediately. I now have:

- A complete app I understand end to end
- A release-ready codebase
- Real experience with Play Console’s modern policies
- A sharper sense of where solo dev bottlenecks actually are

That’s not nothing.

If anything, this experience forced a reframing: **shipping isn’t a single act**. It’s a sequence of different skills—technical, procedural, and social. I had prepared well for two of them. I learned the third the hard way.

## What I’d Tell Another Solo Dev

If you’re building alone and aiming for Google Play:

- Plan for testers _early_, not at the end
- Assume policy gates are part of the product, not an afterthought
- Don’t tie your self-worth to approval timelines
- Finishing the app is still a win—even if distribution lags

I’m not giving up on this app per-se. But I’m also not pretending the wall isn’t there.

The code is done.
The app works.
Now the challenge is different.

And at least now, I know exactly where it is.

## Choosing to Stop Chasing the Release

After sitting with the 12-testers-for-14-days requirement for a while, I made a decision that surprised me by how calm it felt.

I stopped trying to publish the app.

Not because the app was broken.
Not because I lost interest in building it.
And not because the effort was wasted.

I stopped because, at this point, the remaining work had nothing to do with software craftsmanship—and everything to do with logistics I wasn’t willing to force.

Finding, coordinating, and managing a dozen testers for two weeks isn’t hard in the abstract. But for a quiet, utility-style app with no marketing push and no audience, it turns into a different kind of project entirely. One I didn’t sign up for, and one that would have pulled my energy away from the part I actually value: building thoughtful, constrained software.

That distinction mattered.

So instead of dragging the project through a phase I didn’t believe in, I chose a cleaner ending.

## Releasing the Work Without the Store

Rather than letting the app disappear into a private folder on my machine, I’m making the **entire project public**.

The GitHub repository will be opened up, with:

- The full source code
- The complete app architecture
- A **preview APK baked into the root of the repo**, installable directly
- No Play Store listing, no tracking, no funnel

If you want to see the app, use it, inspect it, or learn from it—you can. No gatekeeping, no waitlists, no accounts.

Here is the link to the [GitHub Repo](https://github.com/fluxaine-studios/proverb-daily.git), and here is the [installation APK from a local dev-machine preview build](https://github.com/fluxaine-studios/proverb-daily/releases).

This felt like the right compromise:
the work exists, the app is usable, and the project is complete on _my_ terms.

Publishing to an app store is one form of release.
Open-sourcing a finished product is another.

## What “Giving Up” Actually Means Here

There’s a temptation to frame this kind of decision as failure. I don’t think that’s accurate.

I didn’t give up on building the app.
I gave up on forcing it through a channel that no longer made sense for its scale.

The app does exactly what it set out to do. It respects the user’s time, works offline, collects nothing, and stays out of the way. Those values don’t disappear just because there’s no store badge next to the icon.

If anything, this experience clarified something important for me:

> Shipping is not binary.
> You can finish something without commercializing it.
> You can release something without promoting it.

And you can walk away without burning it down.

## Closing the Loop

This project taught me more than a larger, messier app ever would have—about constraints, discipline, and where solo developers actually hit friction in 2026.

The code is done.
The app works.
The repository will be public.

And that’s enough.

---
