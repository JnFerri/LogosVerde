import React from 'react';
import YardIcon from '@mui/icons-material/Yard';
import ForestIcon from '@mui/icons-material/Forest';
import PestControlIcon from '@mui/icons-material/PestControl';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const NAVIGATION_ITEMS = [
    {
        index: 0,
        text: 'Projetos',
        icon: React.createElement(YardIcon),
        link: '/projects'    
    },
    { 
        index: 1,
        text: 'Plantas',
        icon: React.createElement(ForestIcon),
        link: '/plants'
    },
    { 
        index: 2,
        text: 'Pestes e Doenças',
        icon: React.createElement(PestControlIcon),
        link: '/pests-diseases'
    },
    { 
        index: 3,
        text: 'Configurações', 
        icon: React.createElement(EngineeringIcon),
        link: '/settings'
    },
    ]