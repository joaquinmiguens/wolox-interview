import { SearchPipe } from './search.pipe';
import { CountPipe } from './search.pipe';
import { Candidate } from '../models/candidate.model';

describe('pipes', () => {
  let searchPipe: SearchPipe;
  let countPipe: CountPipe;
  const emptyArray: Candidate[] = [];
  const testArray: Candidate[] = [
    {
      tech: 'Node',
      year: '2009',
      author: 'Ryan Dahl',
      license: 'MIT',
      language: 'JavaScript',
      type: 'Back-End',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
    },
    {
      tech: 'React',
      year: '2013',
      author: 'Jordan Walke',
      license: 'MIT',
      language: 'JavaScript',
      type: 'Front-End',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
    },
  ];
  beforeEach(() => {
    searchPipe = new SearchPipe();
    countPipe = new CountPipe();
  });
  describe('SearchPipePipe', () => {
    it('create an instance', () => {
      expect(searchPipe).toBeTruthy();
    });
    it('should return empty if no items are provided', () => {
      expect(searchPipe.transform([], '', '')).toEqual([]);
    });
    it('should return all list sorted if no text is provided', () => {
      const expectedResponse: Candidate[] = [
        {
          tech: 'React',
          year: '2013',
          author: 'Jordan Walke',
          license: 'MIT',
          language: 'JavaScript',
          type: 'Front-End',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
        },
        {
          tech: 'Node',
          year: '2009',
          author: 'Ryan Dahl',
          license: 'MIT',
          language: 'JavaScript',
          type: 'Back-End',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
        },
      ];
      expect(searchPipe.transform(testArray, '', 'Ascendente')).toEqual(
        expectedResponse
      );
    });
    it('should return just the candidate who match with the input text', () => {
      const expectedResponse: Candidate[] = [
        {
          tech: 'Node',
          year: '2009',
          author: 'Ryan Dahl',
          license: 'MIT',
          language: 'JavaScript',
          type: 'Back-End',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
        },
      ];
      expect(searchPipe.transform(testArray, 'ry', 'Ascendente')).toEqual(
        expectedResponse
      );
    });
  });
  describe('CountPipe', () => {
    it('create an instance', () => {
      expect(countPipe).toBeTruthy();
    });
    it('should return empty if no items are provided', () => {
      expect(countPipe.transform([], '')).toEqual([]);
    });
    it('should return all list sorted if no text is provided', () => {
      const expectedResponse: string[] = ['React', 'Node'];
      expect(countPipe.transform(testArray, '')).toEqual(expectedResponse);
    });
    it('should return just the technology who match with the input text', () => {
      const expectedResponse: string[] = ['Node'];
      expect(countPipe.transform(testArray, 'ry')).toEqual(expectedResponse);
    });
  });
});
