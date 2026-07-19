import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import ScrollReveal from '../common/ScrollReveal';
import { COMPANY_INFO } from '../../constants/socials';

export default function ContactCTA() {
  const contactMethods = [
    {
      icon: FaPhone,
      label: 'Call Us',
      value: COMPANY_INFO.phone,
    },
    {
      icon: FaEnvelope,
      label: 'Email Us',
      value: COMPANY_INFO.email,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Visit Us',
      value: COMPANY_INFO.address,
    },
  ];

  return (
    null
  );
}