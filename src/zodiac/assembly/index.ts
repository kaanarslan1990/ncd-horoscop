import { storage, Context, context, u128, logging } from "near-sdk-as"
import {Zodiac, zodiacs} from "./model"

// --------------------------------------------------------------------------
// Public VIEW methods
// --------------------------------------------------------------------------

/**
 *
 * @param id
 * @returns
 */

 export function viewZodiac(id: u32): Zodiac {
    return zodiacs.getSome(id);
  }
  
 export function viewAllZodiacs(): Array<Zodiac> {
    return zodiacs.values();
  }
  

// --------------------------------------------------------------------------
// Public CREATE methods
// --------------------------------------------------------------------------

export function createZodiac(brtDay: u8, brtMonth: string): Zodiac {
    // attach exactly 1 NEAR to find your zodiac
    assert(context.attachedDeposit == u128.fromString('1000000000000000000000000'), 'Please deposit exactly 1 NEAR to find your zodiac');
    assert(brtDay > 0, 'brtDay should be greater than zero');
    assert(brtDay <= 31, 'brtDay should be equal or lower than 31');
    assert(isString(brtMonth) ? brtMonth : 'brtDay should string and correct month');
    const zodiac = new Zodiac(brtDay, brtMonth, zodiacSign(brtDay, brtMonth));
    zodiacs.set(zodiac.id, zodiac);
  
    return zodiac;
  }

export function zodiacSign(brtDay: u8, brtMonth:string): string {
    assert(context.attachedDeposit == u128.fromString('1000000000000000000000000'), 'Please deposit exactly 1 NEAR to find your zodiac');  
        let yourZodiac: string ="";
        logging.log(`Your zodiac sign is: ${yourZodiac}`)

        // checks month and date within the
        // valid range of a specified zodiac
        if (brtMonth == "december"){

            if (brtDay < 22)
            yourZodiac = "Sagittarius";
            else
            yourZodiac ="capricorn";
        }

        else if (brtMonth == "january"){
            if (brtDay < 20)
            yourZodiac = "Capricorn";
            else
            yourZodiac = "aquarius";
        }

        else if (brtMonth == "february"){
            if (brtDay < 19)
            yourZodiac = "Aquarius";
            else
            yourZodiac = "pisces";
        }

        else if(brtMonth == "march"){
            if (brtDay < 21)
            yourZodiac = "Pisces";
            else
            yourZodiac = "aries";
        }
        else if (brtMonth == "april"){
            if (brtDay < 20)
            yourZodiac = "Aries";
            else
            yourZodiac = "taurus";
        }

        else if (brtMonth == "may"){
            if (brtDay < 21)
            yourZodiac = "Taurus";
            else
            yourZodiac = "gemini";
        }

        else if( brtMonth == "june"){
            if (brtDay < 21)
            yourZodiac = "Gemini";
            else
            yourZodiac = "cancer";
        }

        else if (brtMonth == "july"){
            if (brtDay < 23)
            yourZodiac = "Cancer";
            else
            yourZodiac = "leo";
        }

        else if( brtMonth == "august"){
            if (brtDay < 23)
            yourZodiac = "Leo";
            else
            yourZodiac = "virgo";
        }

        else if (brtMonth == "september"){
            if (brtDay < 23)
            yourZodiac = "Virgo";
            else
            yourZodiac = "libra";
        }

        else if (brtMonth == "october"){
            if (brtDay < 23)
            yourZodiac = "Libra";
            else
            yourZodiac = "scorpio";
        }

        else if (brtMonth == "november"){
            if (brtDay < 22)
            yourZodiac = "scorpio";
            else
            yourZodiac = "sagittarius";
        }
        else  (assert(`Your ${brtMonth} is not true. `))

        
        
        // return yourZodiac; 
        return `Your Zodiac sign is : ${yourZodiac}`; 
      
    }
    






