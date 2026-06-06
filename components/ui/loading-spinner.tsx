'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
    className?: string;
    text?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function LoadingSpinner({
    className,
    text = 'Processing...',
    size = 'md'
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
    };

    return (
        <div className={cn("flex flex-col items-center justify-center gap-3 p-4", className)}>
            <div className="relative">
                {/* Outer Ring Glow */}
                <div 
                    className={cn(
                        "rounded-full border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin absolute inset-0 opacity-40 blur-xs",
                        sizeClasses[size]
                    )}
                />
                {/* Active Spinner */}
                <div 
                    className={cn(
                        "rounded-full border-solid border-muted/20 border-t-primary animate-spin",
                        sizeClasses[size]
                    )}
                />
            </div>
            {text && (
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/80 animate-pulse">
                    {text}
                </span>
            )}
        </div>
    );
}
