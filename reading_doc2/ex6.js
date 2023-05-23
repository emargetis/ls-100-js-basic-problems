let today = new Date();

today.getYear(); 
/*Deprecated - returns the year for this date according to local time. 
**Because getYear() does not return full years ("year 2000 problem"), it is deprecated and has been replaced by the getFullYear() method. 
**The year 2000 problem means that it returns 1XX for any years greater than 2000 because it returns a two-three digit year representing the current year minus 1900 (1995 =-> 95 and 2005 => 105)
*/
today.getFullYear(); // This replaced getYear and it returns the year for this date according to local time (2014 => 2014)