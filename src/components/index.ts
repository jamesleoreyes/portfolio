// Navigation Components
export { default as NavBar } from './navbar/navbar';
export { default as MobileNav } from './navbar/mobile-nav';
export { default as Footer } from './footer';
export { ThemeToggle } from './theme/theme-toggle';

// shadcn/ui
export { Alert, AlertTitle, AlertDescription } from './ui/alert';
export { Button } from './ui/button';
export { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
export type { CarouselApi } from './ui/carousel';
export { Drawer, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from './ui/drawer';
export { Progress } from './ui/progress';
export { Input } from './ui/input';
export { Label } from './ui/label';
export { Skeleton } from './ui/skeleton';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
export { Textarea } from './ui/textarea';
export { Toaster } from './ui/sonner';
export { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

// UI Components
export { SocialLinks } from './social-links';
export { WordRotate } from './magicui/word-rotate';

// Utility Components
export { AnalyticsClient } from './analytics-client';
export { DynamicThemeColor } from './theme/dynamic-theme-color';
export { DynamicViewport } from './dynamic-viewport';
export { DynamicFavicon } from './theme/dynamic-favicon';
export { default as ProfileImage } from './profile-image';
export { default as PlaceholderScreenshot } from './placeholder-screenshot';
export { default as LiveTimeDisplay } from './live-time-display';

// Easter Eggs
export { ImpossibleDeviceEasterEgg } from './easter-eggs'