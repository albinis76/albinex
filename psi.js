const url = 'https://ramanutencaodesacadas.com.br/';
const buildUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=accessibility&category=best-practices&category=performance&category=seo`;

fetch(buildUrl)
  .then(res => res.json())
  .then(data => {
      if(data.error) {
          console.error(data.error);
          return;
      }
      console.log('Performance:', data.lighthouseResult.categories.performance.score);
      console.log('Accessibility:', data.lighthouseResult.categories.accessibility.score);
      console.log('Best Practices:', data.lighthouseResult.categories['best-practices'].score);
      console.log('SEO:', data.lighthouseResult.categories.seo.score);
      
      const audits = data.lighthouseResult.audits;
      for (const key in audits) {
          const audit = audits[key];
          if (audit.score !== null && audit.score < 1 && audit.details && audit.details.type === 'opportunity') {
              console.log('OPPORTUNITY:', audit.title, audit.displayValue);
          }
           if (audit.score !== null && audit.score < 1 && audit.scoreDisplayMode === 'binary') {
               console.log('FAILED:', audit.title);
               if(audit.details && audit.details.items) {
                   console.log(audit.details.items)
               }
          }
      }
  }).catch(e => console.error(e));
