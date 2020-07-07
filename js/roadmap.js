



var options = {
				 series: [
				 {
					 name: 'Reports Interface Revamp',
					 data: [
						 {
							 x: 'Catalyst',
							 y: [
								 new Date('2019-03-05').getTime(),
								 new Date('2019-03-08').getTime()
							 ]
						 },
						 {
							 x: 'Exploration',
							 y: [
								 new Date('2019-03-02').getTime(),
								 new Date('2019-03-05').getTime()
							 ]
						 },
						 {
							 x: 'Tinkering',
							 y: [
								 new Date('2019-03-05').getTime(),
								 new Date('2019-03-07').getTime()
							 ]
						 },
						 {
							 x: 'Architecting',
							 y: [
								 new Date('2019-03-03').getTime(),
								 new Date('2019-03-09').getTime()
							 ]
						 },
						 {
							 x: 'Executing',
							 y: [
								 new Date('2019-03-08').getTime(),
								 new Date('2019-03-11').getTime()
							 ]
						 },
						 {
							 x: 'Feedback',
							 y: [
								 new Date('2019-03-11').getTime(),
								 new Date('2019-03-16').getTime()
							 ]
						 },
						 {
							 x: 'Debugging',
							 y: [
								 new Date('2019-03-01').getTime(),
								 new Date('2019-03-03').getTime()
							 ]
						 }
					 ]
				 },
				 {
					 name: 'OR Tools MVP',
					 data: [
						 {
							 x: 'Catalyst',
							 y: [
								 new Date('2019-03-02').getTime(),
								 new Date('2019-03-05').getTime()
							 ]
						 },
						 {
							 x: 'Exploration',
							 y: [
								 new Date('2019-03-06').getTime(),
								 new Date('2019-03-16').getTime()
							 ]
						 },
						 {
							 x: 'Tinkering',
							 y: [
								 new Date('2019-03-03').getTime(),
								 new Date('2019-03-07').getTime()
							 ]
						 },
						 {
							 x: 'Architecting',
							 y: [
								 new Date('2019-03-20').getTime(),
								 new Date('2019-03-22').getTime()
							 ]
						 },
						 {
							 x: 'Executing',
							 y: [
								 new Date('2019-03-10').getTime(),
								 new Date('2019-03-16').getTime()
							 ]
						 }
					 ]
				 },
				 {
					 name: 'Internal Tools',
					 data: [
						 {
							 x: 'Catalyst',
							 y: [
								 new Date('2019-03-10').getTime(),
								 new Date('2019-03-17').getTime()
							 ]
						 },
						 {
							 x: 'Exploration',
							 y: [
								 new Date('2019-03-05').getTime(),
								 new Date('2019-03-09').getTime()
							 ]
						 },
					 ]
				 }
			 ],
				 chart: {
				 height: 450,
				 type: 'rangeBar'
			 },
			 plotOptions: {
				 bar: {
					 horizontal: true,
					 barHeight: '80%'
				 }
			 },
			 xaxis: {
				 type: 'datetime',
				 min: new Date('2019-03-01').getTime(),
				 max: new Date('2019-04-01').getTime()
			 },
			 stroke: {
				 width: 1
			 },
			 fill: {
				 type: 'solid',
				 opacity: 0.6
			 },
			 legend: {
				 position: 'top',
				 horizontalAlign: 'left'
			 }
			 };

			 var chart = new ApexCharts(document.querySelector("#roadmapchart"), options);
			 chart.render();
