export type word = {
  words: string[];
  current: string;
  quantity: number;
};

export class Word {
  private words: string[];
  private index: number = 0;
  private currentWord: string;
  private quantityWords: number;

  public constructor(words: string[]) {
    this.words = words;
    this.quantityWords = this.words.length;
    this.currentWord = this.words[this.index];
  }

  public compare(word: string): boolean {
    if (this.currentWord !== word) {
      return false;
    }

    this.quantityWords--;
    this.index++;

    return true;
  }

  public next(): void {
    this.currentWord = this.words[this.index];
  }

  public details(): word {
    return {
      words: this.words,
      current: this.currentWord,
      quantity: this.quantityWords,
    };
  }
}
