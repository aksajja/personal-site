import React from 'react';

// TODO Add a couple lines about each project
const data = [
  {
    title: '\'Just because you are right, doesn’t mean I am wrong\': Overcoming a Bottleneck in the Development and Evaluation of Open-Ended Visual Question Answering (VQA) Tasks',
    subtitle: 'Published in EACL 2021 Main Proceedings. ',
    link: 'https://aclanthology.org/2021.eacl-main.240.pdf',
    image: '',
    date: '2020-05-20',
    desc:
      'Proposed a new evaluation metric for visual question answering tasks.'
      + 'Worked with the GQA and VQA datasets to establish an argument advocating'
      + 'the need for new metrics in the Visual Question Answering regime.'
      + 'Trained and tested VilBERT and LXMERT models with the proposed ‘Alternative Answer Set’ as a metric.',
  },
  {
    title: 'Understanding the Spatial Patchwork of Predictive Modeling of First Wave Pandemic Decisions by US Governors',
    subtitle: 'Published in Geographic Review, Volume 111, 2021 - Issue 4',
    link: 'https://www.tandfonline.com/doi/abs/10.1080/00167428.2021.1947139?journalCode=utgr20',
    image: '',
    date: '2020-11-04',
    desc:
  <>
    Performed experiments using random forest and VARIMA models
    to support the proposed patchwork-y nature of the pandemic. <a color="blue" href="https://github.com/aksajja/GeographicReview">Git</a>
  </>,
  },
  {
    title: 'Optimizing hyperparameter search in SIR Models',
    subtitle: 'CSE 598 - Data Driven Optimization',
    image: '', // '/images/projects/ddo-sir.png',
    date: '2021-11-20',
    desc:
  <>
    Applied a variant of steepest descent to fine tune hyper parameter selection
    in the SIR model proposed by <a color="blue" href="https://arxiv.org/abs/2003.14391">Calafiore et al.</a>
  </>,
  },
  {
    title: 'High speed autonomous drifting using deep Reinforcement learning',
    subtitle: 'CSE 598 - Advances in Robot Learning',
    image: '',
    date: '2020-04-20',
    desc:
  <>
    Used ‘soft actor-critic’, an off-policy actor-critic deep RL algorithm to conduct a simulative
    study in ‘The open source racing car simulator’ (TORCS) to automate the drifting of a car.
    <a href="https://github.com/karthikv792/TORCS_SAC_PYTORCH.git"> Git</a>.
  </>,
  },
  {
    title: 'Computational-statistical tradeoffs in graphical model learning',
    subtitle: 'EEE 598 - Statistical machine learning',
    link: 'https://www.dropbox.com/s/ubyaxxyxdnl3eb0/SML_Project_Paper.pdf?dl=0',
    image: '',
    date: '2020-11-20',
    desc:
  <>
    Comparative studies of Gaussian Graphical Model and Ising model learning algorithms.
    <a href="https://github.com/swish-coder/SML_Project"> Git</a>.
  </>,
  },
  {
    title: 'A unified framework for structured graph learning via spectral constraints (paper presentation)',
    subtitle: 'MAT 598 - Algebraic graph theory',
    link: 'https://jmlr.org/papers/v21/19-276.html',
    image: '',
    date: '2021-04-20',
    desc:
  <>
    <a href="https://www.dropbox.com/sh/rcf0z11c9nxf123/AAChNHo_nisJSpOCPuWrtFrVa?dl=0">Presentation Video</a>.
  </>,
  },
  {
    title: 'Graph Neural Tangent Kernels (paper presentation)',
    subtitle: 'EEE 598 - Machine Learning in High Dimensions',
    link: 'https://arxiv.org/pdf/1905.13192.pdf',
    image: '',
    date: '2021-04-30',
    desc:
  <>
    <a href="https://www.dropbox.com/s/hroflz9vp3dyx2a/Proposal.pdf?dl=0"> Proposed extensions</a>.
  </>,
  },
];

export default data;
