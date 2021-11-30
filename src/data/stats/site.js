import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://github.com/aksajja/aksajja.github.io
 */
const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://api.github.com/repos/aksajja/aksajja.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://github.com/aksajja/aksajja.github.io/graphs/contributors',
  },
];

export default data;
