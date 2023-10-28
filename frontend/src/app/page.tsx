import FeedbackCard from '@/components/cards/feedback_card/feedback_card';
import ProjectCard from '@/components/cards/project_card/project_card';
import FeedbackPage from '@/components/feedbacks/feedback';
import FooterPage from '@/components/footer/footer';
import MainHeader from '@/components/headers/main_header'
import ProjectHeader from '@/components/headers/project_header';
import SimpleHeader from '@/components/headers/simple_header';
import HomePage from '@/components/home/home';
import ProjectPage from '@/components/project/project';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <main>
      <MainHeader />
      <HomePage />
      <ProjectPage />
      <FeedbackPage />
      <FooterPage />
    </main>
  )
};