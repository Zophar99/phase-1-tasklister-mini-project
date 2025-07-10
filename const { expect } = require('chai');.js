const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// src/index.test.js

describe('Tasklister Mini Project', () => {
  let window, document;

  beforeEach(() => {
    const html = `
      <form id="create-task-form">
        <input id="new-task-description" />
        <select id="priority-level">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input id="due-date" type="date" />
        <input id="task-user" />
        <button type="submit">Add Task</button>
      </form>
      <ul id="tasks"></ul>
      <button id="sort-date-btn"></button>
      <button id="sort-btn"></button>
    `;
    window = new JSDOM(html, { runScripts: "dangerously" }).window;
    document = window.document;

    // Load the user's JS code into the JSDOM window
    const scriptContent = fs.readFileSync(path.resolve(__dirname, 'index.js'), 'utf-8');
    const scriptEl = document.createElement('script');
    scriptEl.textContent = scriptContent;
    document.body.appendChild(scriptEl);
  });

  it('should add an event to the form and add input to webpage', (done) => {
    // Fill out the form
    document.getElementById('new-task-description').value = 'Wash the dishes';
    document.getElementById('priority-level').value = 'high';
    document.getElementById('due-date').value = '2024-06-01';
    document.getElementById('task-user').value = 'Alice';

    // Submit the form
    document.getElementById('create-task-form').dispatchEvent(new window.Event('submit', { bubbles: true }));

    // Wait for event loop
    setTimeout(() => {
      const tasks = document.getElementById('tasks').innerHTML;
      expect(tasks).to.include('Wash the dishes');
      expect(tasks).to.include('2024-06-01');
      expect(tasks).to.include('Assigned to: Alice');
      // Check color for priority
      const li = document.querySelector('#tasks li');
      expect(li.style.color).to.equal('red');
      // Check checkbox exists
      expect(li.querySelector('input[type="checkbox"]')).to.exist;
      // Check delete button exists
      expect(Array.from(li.querySelectorAll('button')).some(btn => btn.textContent === 'x')).to.be.true;
      // Check edit button exists
      expect(Array.from(li.querySelectorAll('button')).some(btn => btn.textContent === 'Edit')).to.be.true;
      // Check form cleared
      expect(document.getElementById('new-task-description').value).to.equal('');
      expect(document.getElementById('priority-level').value).to.equal('');
      expect(document.getElementById('due-date').value).to.equal('');
      expect(document.getElementById('task-user').value).to.equal('');
      done();
    }, 10);
  });
});