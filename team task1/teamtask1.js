
      let prices = [15.99, 125.5, 8.75, 200.0, 35.2];
      let expensive = [];

      for (let i = 0; i < prices.length; i++) {
        if (prices[i] > 100) {
          expensive.push(prices[i]);
        }
      }

      console.log(expensive);
