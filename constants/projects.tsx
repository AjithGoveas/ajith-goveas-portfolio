import {ProjectType} from "@/types";
import {JSX} from "react";
import {
    IconArrowsCross,
    IconBrain,
    IconBrandAndroid,
    IconCodeCircle,
    IconDatabase,
    IconDeviceDesktop,
    IconDeviceLaptop,
    IconServer,
    IconSparkles,
    IconStack2,
    IconWorld
} from "@tabler/icons-react";

export const ICON_MAP: Record<ProjectType, JSX.Element> = {
    Android: <IconBrandAndroid className="w-5 h-5 text-green-400"/>,
    Web: <IconWorld className="w-5 h-5 text-cyan-400"/>,
    CrossPlatform: <IconArrowsCross className="w-5 h-5 text-purple-400"/>,
    Frontend: <IconDeviceDesktop className="w-5 h-5 text-orange-400"/>,
    FullStack: <IconStack2 className="w-5 h-5 text-blue-400"/>,
    Backend: <IconServer className="w-5 h-5 text-rose-400"/>,
    Desktop: <IconDeviceLaptop className="w-5 h-5 text-lime-400"/>,
    DataScience: <IconDatabase className="w-5 h-5 text-fuchsia-400"/>,
    MachineLearning: <IconBrain className="w-5 h-5 text-indigo-400"/>,
    AI: <IconSparkles className="w-5 h-5 text-pink-400"/>,
};

export const COLOR_MAP: Record<ProjectType, { bg: string; text: string; border: string }> = {
    Android: {
        bg: "bg-green-100 dark:bg-green-950/30",
        text: "text-green-400",
        border: "border-green-400/20"
    },
    Web: {
        bg: "bg-cyan-100 dark:bg-cyan-950/30",
        text: "text-cyan-400",
        border: "border-cyan-400/20"
    },
    CrossPlatform: {
        bg: "bg-purple-100 dark:bg-purple-950/30",
        text: "text-purple-400",
        border: "border-purple-400/20"
    },
    Frontend: {
        bg: "bg-orange-100 dark:bg-orange-950/30",
        text: "text-orange-400",
        border: "border-orange-400/20"
    },
    FullStack: {
        bg: "bg-blue-100 dark:bg-blue-950/30",
        text: "text-blue-400",
        border: "border-blue-400/20"
    },
    Backend: {
        bg: "bg-rose-100 dark:bg-rose-950/30",
        text: "text-rose-400",
        border: "border-rose-400/20"
    },
    Desktop: {
        bg: "bg-lime-100 dark:bg-lime-950/30",
        text: "text-lime-400",
        border: "border-lime-400/20"
    },
    DataScience: {
        bg: "bg-fuchsia-100 dark:bg-fuchsia-950/30",
        text: "text-fuchsia-400",
        border: "border-fuchsia-400/20"
    },
    MachineLearning: {
        bg: "bg-indigo-100 dark:bg-indigo-950/30",
        text: "text-indigo-400",
        border: "border-indigo-400/20"
    },
    AI: {
        bg: "bg-pink-100 dark:bg-pink-950/30",
        text: "text-pink-400",
        border: "border-pink-400/20"
    },
};

export const filters = [
    {id: 'all', label: 'All Projects', icon: <IconCodeCircle className="w-4 h-4 mr-2"/>},
    {id: 'android', label: 'Android', icon: <IconBrandAndroid className="w-4 h-4 mr-2"/>},
    {id: 'web', label: 'Web', icon: <IconWorld className="w-4 h-4 mr-2"/>},
    {id: 'crossplatform', label: 'Cross Platform', icon: <IconArrowsCross className="w-4 h-4 mr-2"/>},
    {id: 'frontend', label: 'Frontend', icon: <IconDeviceDesktop className="w-4 h-4 mr-2"/>},
    {id: 'fullstack', label: 'FullStack', icon: <IconStack2 className="w-4 h-4 mr-2"/>},
    {id: 'backend', label: 'Backend', icon: <IconServer className="w-4 h-4 mr-2"/>},
    {id: 'desktop', label: 'Desktop', icon: <IconDeviceLaptop className="w-4 h-4 mr-2"/>},
    {id: 'datascience', label: 'Data Science', icon: <IconDatabase className="w-4 h-4 mr-2"/>},
    {id: 'machinelearning', label: 'Machine Learning', icon: <IconBrain className="w-4 h-4 mr-2"/>},
    {id: 'ai', label: 'AI', icon: <IconSparkles className="w-4 h-4 mr-2"/>},
];