function lettersSCalc(weight) {

    var result;
    switch(weight)
    {
        case(weight <= 1):
            return result = 0.49;
            break;
        case(weight <= 2):
            return result = 0.91;
            break;
        case(weight <= 3):
            return result = 1.12;
            break;
        case(weight <= 3.5):
            return result = 1.12;
            break;

        default:
           return result = -1;

    }

  }
  
  function lettersMCalc(weight) {
  
    var result;

    switch(weight)
    {
        case(weight <= 1):
            return result = 0.46;
            break;
        case(weight <= 2):
            return result = 0.67;
            break;
        case(weight <= 3):
            return result = 0.88;
            break;
        case(weight <= 3.5):
            return result = 1.09;
            break;

        default:
            return result = -1;

    }
  
  }
  
  function envelopesCalc(weight) {
  
    var result;

    switch(weight)
    {
        case(weight <= 1):
            return result = 0.98;
            break;
        case(weight <= 2):
            return result = 1.19;
            break;
        case(weight <= 3):
            return result = 1.40;
            break;
        case(weight <= 4):
            return result = 1.61;
            break;
        case(weight <= 5):
            return result = 1.82;
            break;
        case(weight <= 6):
            return result = 2.03;
            break;
        case(weight <= 7):
            return result = 2.24;
            break;
        case(weight <= 8):
            return result = 2.45;
            break;
        case(weight <= 9):
            return result = 2.66;
            break;
        case(weight <= 10):
            return result = 2.87;
            break;
        case(weight <= 11):
            return result = 3.08;
            break;
        case(weight <= 12):
            return result = 3.29;
            break;
        case(weight <= 13):
            return result = 3.50;
            break;

        default:
            return result = -1;

    }
  
    
  }
  
  function parcelsCalc(weight) {
  
    var result;

      switch(weight)
      {
            case(weight <= 4):
              return result = 2.67;
              break;
            case(weight <= 5):
              return result = 2.85;
              break;
            case(weight <= 6):
              return result = 3.03;
              break;
            case(weight <= 7):
              return result = 3.21;
              break;
            case(weight <= 8):
              return result = 3.39;
              break;
            case(weight <= 9):
              return result = 3.57;
              break;
            case(weight <= 10):
              return result = 3.75;
              break;
            case(weight <= 11):
              return result = 3.93;
              break;
            case(weight <= 12):
              return result = 4.11;
              break;
            case(weight <= 13):
              return result = 4.29;
              break;
  
            default:
              return result = -1;
  
        }
  
     
  }