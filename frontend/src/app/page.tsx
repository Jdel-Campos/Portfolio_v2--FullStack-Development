import FeedbackPage from '@/components/feedbacks/feedback';
import FooterPage from '@/components/footer/footer';
import MainHeader from '@/components/headers/main_header'
import HomePage from '@/components/home/home';
import ProjectPage from '@/components/project/project';
import ServicePage from '@/components/services/service_provider';
import SkillPage from '@/components/skills/skill';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <main>
      <MainHeader />
      <HomePage />
      <ProjectPage />
      <SkillPage />
      <ServicePage />
      <FeedbackPage />
      <FooterPage />
    </main>
  )
};