import type { Meta, StoryObj } from '@storybook/react';
import { CreativeButton } from './CreativeButton';

const meta = {
    title: 'Atoms/Button/CreativeButton',
    component: CreativeButton,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="dark p-4">
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'magnetic', 'glow', 'cyber', 'shimmer', 'threeD',
                'delete-expand', 'arrow-slide',
                'pushable', 'retro-shadow'
            ],
        },
        clickAnimation: {
            control: 'select',
            options: ['burst', 'ring', 'pulse', 'none'],
        },
        primaryColor: { control: 'color', description: 'Fallback color' },
        customColor: { control: 'color', description: 'Background override' },
        animationColor: { control: 'color', description: 'Click animation color' },
        darkPrimaryColor: { control: 'color', description: 'Fallback color (Dark Mode)' },
        darkCustomColor: { control: 'color', description: 'Background override (Dark Mode)' },
        darkAnimationColor: {
            control: 'color',
            description: 'The animation/secondary color in dark mode'
        },
        textColor: {
            control: 'color',
            description: 'Custom text color for Light Mode'
        },
        darkTextColor: {
            control: 'color',
            description: 'Custom text color for Dark Mode'
        },
    },
} satisfies Meta<typeof CreativeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Magnetic: Story = {
    args: {
        label: 'Magnetic Button',
        variant: 'magnetic',
        clickAnimation: 'ring',
        customColor: '#171717',
    },

};

export const Glow: Story = {
    args: {
        label: 'Glowing Button',
        variant: 'glow',
        primaryColor: '#8b5cf6', // violet-500
        clickAnimation: 'pulse',
    },

};

export const Cyber: Story = {
    args: {
        label: 'Cyber Punk',
        variant: 'cyber',
        primaryColor: '#00ff9d',
        clickAnimation: 'burst',
    },

};

export const ThreeD: Story = {
    args: {
        label: '3D Action',
        variant: 'threeD',
        primaryColor: '#6366f1',
        clickAnimation: 'burst',
    }
};


export const DeleteExpand: Story = {
    args: {
        label: 'Delete',
        variant: 'delete-expand',
        clickAnimation: 'burst',
        primaryColor: '#ff4545'
    }
};

export const AddToCart: Story = {
    args: {
        label: 'Add to Cart',
        variant: 'delete-expand',
        clickAnimation: 'ring',
        customColor: '#005c22ff', // Green-600
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M2.084 2.751a.75.75 0 0 1 .957-.459l.3.106c.616.217 1.14.401 1.553.603.44.216.818.483 1.103.899.28.412.397.865.45 1.36.025.223.038.469.045.74h10.64c1.685 0 3.201 0 3.645.577.444.578.27 1.447-.077 3.186l-.5 2.425c-.315 1.529-.473 2.293-1.025 2.743-.551.449-1.332.449-2.893.449H10.98c-2.79 0-4.184 0-5.05-.914-.867-.913-.93-1.884-.93-4.825V7.038c0-.74-.001-1.235-.042-1.615-.04-.364-.109-.545-.2-.677a1.26 1.26 0 0 0-.525-.398c-.322-.16-.76-.316-1.428-.55l-.261-.092a.75.75 0 0 1-.46-.956ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        )
    }
};

export const ArrowSlide: Story = {
    args: {
        label: 'Shop Now',
        variant: 'arrow-slide',
        clickAnimation: 'none',
    }
};

export const Pushable: Story = {
    args: {
        label: 'Push Me',
        variant: 'pushable',
        primaryColor: 'hsl(248, 53%, 58%)',
        clickAnimation: 'none',
    }
};

export const RetroShadow: Story = {
    args: {
        label: 'Hover Me :)',
        variant: 'retro-shadow',
        clickAnimation: 'burst',
    }
};
