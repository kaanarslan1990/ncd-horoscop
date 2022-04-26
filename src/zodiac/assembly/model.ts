import {  
  Context,
  math,
  PersistentUnorderedMap,
  
} from "near-sdk-as";
import { AccountId } from "../../utils";

@nearBindgen
export class Zodiac {
  id: u32;
  name: AccountId;
  brtDay:u8;
  brtMonth: string;
  yourZodiac: string;

  constructor(brtDay: u8, brtMonth: string, yourZodiac: string){ 
    
    this.id = math.hash32<string>(Context.sender); 
    this.name=Context.sender;
    this.brtDay = brtDay;
    this.brtMonth = brtMonth;
    this.yourZodiac = yourZodiac;
  }
} 
export const zodiacs = new PersistentUnorderedMap<u32,Zodiac>('z');

