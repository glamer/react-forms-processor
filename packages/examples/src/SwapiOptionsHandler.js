// @flow
import type { Options } from "react-forms-processor";

export const getOptions: () => Promise<Options> = () => {
  return fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(json => {
      const items = json.results.map(character => character.name);
      const options = [
        {
          items
        }
      ];
      return options;
    });
};
