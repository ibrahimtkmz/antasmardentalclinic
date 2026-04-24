export const treatments = [
  {
    slug: 'hollywood-smile',
    title: 'Hollywood Smile',
    teaser: 'A whiter, more symmetrical, and natural smile with digital smile design.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Hollywood Smile is a comprehensive aesthetic smile design that evaluates tooth shape, shade, gum symmetry, and lip line together.',
    includes: ['Digital analysis and mock-up', 'Lamina veneer / zirconium options', 'Gum aesthetics adjustments'],
    duration: '4-7 days',
  },
  {
    slug: 'dental-implant',
    title: 'Dental Implant',
    teaser: 'Long-lasting, functional, and aesthetic implant solutions for missing teeth.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Dental implant treatment provides natural-looking fixed restorations by placing titanium roots into the jawbone to replace missing teeth.',
    includes: ['Planning with 3D tomography', 'Single or multiple implant applications', 'Temporary and permanent restoration protocol'],
    duration: '1-day operation + 3-4 months healing',
  },
  {
    slug: 'veneers',
    title: 'Veneers',
    teaser: 'Natural, bright, and aesthetic front-tooth appearance with minimal reduction.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Porcelain veneers correct color, shape, and size irregularities with thin ceramic layers applied to the front surface of the teeth.',
    includes: ['Digital impressions and design', 'Color and shape personalization', 'Minimally invasive application'],
    duration: '5-6 days',
  },
  {
    slug: 'dental-crowns',
    title: 'Dental Crowns',
    teaser: 'Durable and aesthetic full-coverage solutions for damaged teeth.',
    image:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Zirconium and E-max crowns deliver strong functional and aesthetic results for teeth with significant structural loss.',
    includes: ['Functional bite analysis', 'Zirconium / E-max options', 'Custom laboratory production'],
    duration: '5-7 days',
  },
  {
    slug: 'dental-bone-graft',
    title: 'Dental Bone Graft',
    teaser: 'Safe grafting procedures to increase bone volume before implants.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Bone grafting is a preparatory surgical procedure used to support bone volume in patients with insufficient jawbone for implants.',
    includes: ['Bone density evaluation', 'Autograft / synthetic graft options', 'Integrated planning with implants'],
    duration: '1-day operation',
  },
  {
    slug: 'sinus-lift',
    title: 'Sinus Lift',
    teaser: 'Advanced surgery that increases bone height needed for implants in the upper jaw.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1500&q=80',
    overview:
      'Sinus lifting is a procedure that elevates the sinus floor to create bone support for implant placement in the upper posterior jaw.',
    includes: ['Open or closed sinus lift', 'Support with bone grafting', 'Combined treatment options with implants'],
    duration: '1-day operation + healing period',
  },
];

export function getTreatmentBySlug(slug) {
  return treatments.find((item) => item.slug === slug);
}
