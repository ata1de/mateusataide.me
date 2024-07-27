'use client';

import { ProjectHomeModel } from '@/config/projects';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitFork } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

interface ArticleNewCardsProps {
    project: ProjectHomeModel
}

export default function ArticleNewsCard({ project }: ArticleNewCardsProps) {
  const [hovered, setHovered] = useState(false);

  const t = useTranslations(`Home.Projects.${project.id}`);
  const buttons = useTranslations(`Home.Projects.buttons`);

  const isLinkVisitEmpty = project.link_visit.length === 0;

  return (
      <div className="column w-[400px] px-6 float-left">
        <div className="demo-title mb-4 text-gray-500 text-lg font-bold uppercase">Normal</div>

        {/* Post */}
        <div 
          className="post-module relative bg-white h-[470px] shadow-lg transition-shadow hover:shadow-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Thumbnail */}
          <div className="thumbnail bg-black h-[400px] overflow-hidden relative">
            <div className="date absolute top-5 right-5 z-10 bg-Green w-14 h-14 rounded-full text-center text-white font-bold">
              <div className="day text-lg">27</div>
              <div className="month text-xs uppercase">Mar</div>
            </div>
            <motion.img 
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" 
              className="block w-full h-full object-cover transition-transform transform"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={hovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              alt="Thumbnail" 
            />
          </div>

          {/* Post Content */}
          <div className="post-content absolute bottom-0 bg-white w-full p-8">
            <div className="category absolute top-[-34px] left-0 bg-Green px-4 py-2 text-white text-xs font-semibold uppercase">Photos</div>
            <h1 className="title text-2xl font-bold text-gray-800 mb-2">{}</h1>
            <h2 className="sub_title text-xl font-light text-Green mb-5">{t('title')}</h2>
            <motion.p 
              className="description text-gray-500 text-sm leading-6 py-4"
              initial={{ opacity: 0, height: 0, display: 'none' }}
              animate={hovered ? { opacity: 1, height: 'auto', display: 'block' } : { opacity: 0, height: 0, display: 'none' }}
              transition={{ duration: 0.3 }}
            >
              {t('description')}
            </motion.p>
            <div className="flex items-center gap-3">
                    {!isLinkVisitEmpty ? 
                        <Link href={project.link_visit} target="_blank">
                        <Button 
                            className={`bg-Green border-white text-yellow-50  `} 
                            variant='link' 
                        >
                            <ArrowUpRight className="w-4 h-4 mr-2"/>{buttons('button_visit')}
                        </Button>
                        </Link>
                        : 
                        <Button 
                            className={`bg-Green border-white text-yellow-50`} 
                            variant='link' 
                            disabled={isLinkVisitEmpty}
                        >
                            <ArrowUpRight className="w-4 h-4 mr-2"/>{buttons('button_visit')}
                        </Button>
                    }

                    <Link href={project.link_source} target="_blank">
                        <Button className="bg-Brown border-Black text-yellow-50" variant='link'>
                            <GitFork className="h-4 w-4 mr-2"/>{buttons('button_source')}
                        </Button>
                    </Link>
                </div>
          </div>
        </div>
      </div>
  );
};

