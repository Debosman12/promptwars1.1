import { electionData } from '../data/electionData.js';

export function renderTimeline(container) {
  const track = document.createElement('div');
  track.className = 'timeline-track';

  const line = document.createElement('div');
  line.className = 'timeline-line';
  track.appendChild(line);

  electionData.timeline.forEach((item, index) => {
    const node = document.createElement('div');
    node.className = 'timeline-node';

    const dot = document.createElement('div');
    dot.className = 'node-dot';

    const content = document.createElement('div');
    content.className = 'node-content';

    const title = document.createElement('h3');
    title.className = 'node-title';
    title.textContent = `${index + 1}. ${item.title}`;

    const desc = document.createElement('p');
    desc.className = 'node-desc';
    desc.textContent = item.desc;

    content.appendChild(title);
    content.appendChild(desc);

    node.appendChild(dot);
    node.appendChild(content);
    track.appendChild(node);
  });

  container.appendChild(track);
}
