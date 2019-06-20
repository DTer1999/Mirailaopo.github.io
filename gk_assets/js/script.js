var clock;

			$(document).ready(function() {

				// Grab the current date
				var GKDate = new Date(2020,06,07,00);

				// Set some date in the past. In this case, it's always been since Jan 1
				var NOWDate  = new Date();

				// Calculate the difference in seconds between the future and current date
				var diff = GKDate.getTime() / 1000 - NOWDate.getTime() / 1000;

				// Instantiate a coutdown FlipClock
				clock = $('.clock').FlipClock(diff, {
					clockFace: 'DailyCounter'
				});
			});
