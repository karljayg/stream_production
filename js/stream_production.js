const playerList = [
	['Alisaunder', 'Alisaunder.mp4', 'Alisaunder.wav'],
	['Archnog', 'Archnog.mp4', 'Archnog.wav'],
	['Artanis_ph', 'PSL_Artanis_ph.mp4', 'cloak.wav'],
	['Asero2', 'PSL_Asero2.mp4', 'freeden.wav'],
	['Astrea', 'PSL_Astrea.mp4', ''],
	['AxD', 'AxD.mp4', 'axd1987.wav'],
	['Azure', 'Azure.mp4', ''],
	['Azzin', 'PSL_Azzin.mp4', 'freeden.wav'],
	['BENZEL', 'BENZEL_logo.mp4', 'benzel.wav'],
	['Bayagster', 'PSL_Bayagster.mp4', 'freeden.wav'],
	['Bistork', 'Bistork.mp4', ''],
	['CYAN', 'CYAN.mp4', 'CYAN.wav'],
	['CaptBritain', 'PSL_CaptBritain.mp4', 'freeden.wav'],
	['Casper631', 'Casper631.mp4', 'Casper631.wav'],
	['Cham', 'PSL_Cham.mp4', ''],
	['ChienPwn', 'ChienPwn.mp4', 'ChienPwn.wav'],
	['Cloak', 'LuckyTiger.mp4', 'cloak.wav'],
	['Coheeder', 'PSL_Coheeder.mp4', ''],
	['Cypem', 'PSL_Cypem.mp4', 'freeden.wav'],
	['DB', 'DB_20200820_191155_1.mp4', 'db.wav'],
	['DLSMIZEL', 'DLSMIZEL2.mp4', 'DLSMIZEL.wav'],
	['DarkMenace', 'DarkMenaceNew.mp4', 'darkmenace.wav'],
	['DavidBane', 'PSL_DavidBane.mp4', 'freeden.wav'],
	['Deneb', 'PSL_Deneb.mp4', 'cloak.wav'],
	['EnDerr', 'PSL_EnDerr2.mp4', ''],
	['ExoDash', 'PSL_ExoDash.mp4', ''],
	['Exoblazer', 'PSL_Exoblazer.mp4', 'freeden.wav'],
	['FSL intro', 'FSL-logo_FINAL.mp4', 'FSL_s6.wav', 'noTitle'],
	['Floki', 'PSL_Floki.mp4', 'freeden.wav'],
	['ForJumy', 'ForJumy.mp4', ''],
	['GG', 'transparent_greenscreen.mp4', 'FSL_GG.mp3', 'noTitle'],
	['GG_Izzy', 'GG_Izzy.mp4', 'gg_izzy.wav'],
	['HighCommand', 'HighCommand2.mp4', 'HighCommand.wav'],
	['Hiro', 'PSL_Hiro.mp4', ''],
	['Holden', 'Holden.mp4', ''],
	['HurtnTime', 'PSL_hurtntime.mp4', 'HurtnTime.wav'],
	['HyperTurtle', 'HyperTurtle.mp4', 'HyperTurtle.wav'],
	['Imburnal', 'PSL_Imburnal.mp4', 'freeden.wav'],
	['Instability', 'Instability.mp4', 'Instability.wav'],
	['JDR', 'PSL_JDR.mp4', 'cloak.wav'],
	['Kas', 'PSL_Kas.mp4', ''],
	['KittyCatGamer', 'kittycatgamer.mp4', 'kittycatgamer.wav'],
	['Klaw', 'PSL_Klaw.mp4', 'freeden.wav'],
	['Kriminal', 'Kriminal_FSL.mp4', 'Kriminal.wav'],
	['LAS_logo', 'LAS_logo.mp4', 'LAS.wav'],
	['LittleReaper', 'littlereaper2.mp4', 'littlereaper.wav'],
	['Match GG', 'transparent_greenscreen.mp4', 'PSL_GG.mp3', 'gifPlayer'],
	['Meomaika2', 'Meomaika2.mp4', ''],
	['Migu3la', 'migu3la_2023_final.mp4', 'migu3la.wav'],
	['MrLasti', 'PSL_MrLasti.mp4', 'freeden.wav'],
	['MrsUberXL', 'mrsuberxl.mp4', 'mrsuberxl.wav'],
	['NeO', 'NeO.mp4', ''],
	['Neutrophil', 'edmund_IMG_2967.mp4', 'neutrophil.wav'],
	['Nightmare', 'PSL_Nightmare.mp4', ''],
	['Nooblord', 'nooblord.mp4', 'nooblord.wav'],
	['Nuks2', 'PSL_Nuks2.mp4', 'db.wav'],
	['Pangz', 'PSL_Pangz.mp4', 'cloak.wav'],
	['PanicSwitch', 'PanicSwitch.mp4', 'PanicSwitch.wav'],
	['PhyNixSonski2', 'PSL_PhyNixSonski2.mp4', 'freeden.wav'],
	['PlantQueen', 'FSL_PlantQueen.mp4', 'PlantQueen.wav'],
	['Pobbes', 'PSL_Pobbes.mp4', 'cloak.wav'],
	['Portrial', 'PSL_Portrial.mp4', 'freeden.wav'],
	['PvP', 'PvP.webm', ''],
	['Random Music', 'transparent_greenscreen.mp4', '', 'randomAudio'],
	['Ranger', 'PSL_Ranger.mp4', ''],
	['Rixilius', 'PSL_Rixilius.mp4', 'freeden.wav'],
	['SEMPER', 'PSL_SEMPER.mp4', 'sef.wav'],
	['Sef', 'sef.mp4', 'sef.wav'],
	['Shadow', 'PSL_Shadow.mp4', ''],
	['SirMalagant', 'sirmalagant.mp4', 'sirmalagant.wav'],
	['SouLeer', 'PSL_SouLeer.mp4', ''],
	['SpeCial', 'PSL_SpeCial.mp4', ''],
	['SteelHeart', 'PSL_SteelHeart.mp4', 'freeden.wav'],
	['Toirtoise&Hare', 'toirtoiseandhare.mp4', 'tortoiseandhare.wav'],
	['TyphoonFusion', 'typhoonfusion.mp4', 'typhoonfusion.wav'],
	['Uriel', 'PSL_Uriel.mp4', 'freeden.wav'],
	['Vales', 'vales.mp4', 'vales.wav'],
	['VeryCool', 'VeryCool2.mp4', 'verycool.wav'],
	['Viole', 'PSL_Viole.mp4', 'freeden.wav'],
	['Warbunnies', 'Warbunnies.mp4', 'warbunnies.wav'],
	['Wheva', 'Wheva.mp4', 'wheva.wav'],
	['Xenos', 'PSL_Xenos.mp4', 'freeden.wav'],
	['XtinC', 'PSL_XtinC.mp4', 'mightyant.wav'],
	['ZvZ', 'ZvZ.webm', 'ZvZ.wav'],
	['caliberC', 'caliberC.mp4', 'caliberc.wav'],
	['chumly', 'FSL_chumly.mp4', 'chumly.wav'],
	['dpoo', 'spaghettio.mp4', 'dpoo.wav'],
	['fenrir', 'FSL_fenrir.mp4', 'fenrir.wav'],
	['fluffy', 'fluffy.mp4', 'fluffy.wav'],
	['freeden', 'freeden.mp4', 'freeden.wav'],
	['freeedom', 'freeedom.mp4', 'kjfreeedom.wav'],
	['ghostchant', 'FSL_ghostchant.mp4', 'ghostchant.wav'],
	['goblin', 'PSL_goblin.mp4', ''],
	['gogojoey', 'PSL_gogojoey.mp4', ''],
	['grey', 'grey.mp4', 'grey.wav'],
	['intro_sloza2', 'intro_sloza2.mp4', 'mightyant.wav'],
	['jacob', 'jacob_VID_20200820_214139.mp4', 'thearchaic.wav'],
	['jmpz', 'jmpz.mp4', 'jmpz.wav'],
	['meme - No GG', 'transparent_greenscreen.mp4', 'PARTING- No GG (TRAP MIX) - short.mp3', 'gifPlayer-1'],
	['meme - Titanic', 'transparent_greenscreen.mp4', '40secs_My Heart Will Go On (Love Theme from Titanic).mp3'],
	['meme - Victory', 'transparent_greenscreen.mp4', 'paula_white_victory_short.mp3', 'gifPlayer-26'],
	['meme - all I do is Win', 'transparent_greenscreen.mp4', '15sec_DJ Khaled All I Do Is Win feat. Ludacris, Rick Ross, T-Pain & Snoop Dogg Victory In Stores N.mp3', 'gifPlayer-4'],
	['meme - braveheart', 'transparent_greenscreen.mp4', 'short_Braveheart (39) Movie CLIP - They Will Never Take Our Freedom (1995) HD.mp3', 'gifPlayer-7'],
	['meme - coffin dance', 'transparent_greenscreen.mp4', 'short_Coffin Dance (Official Music Video HD).mp3', 'gifPlayer-3'],
	['meme - high ground', 'transparent_greenscreen.mp4', '10sec_Highground_Obi-Wan vs Anakin - Duel on Mustafar (Part 2) Star Wars Revenge of the Sith (2005) Movie Clip.mp3', 'gifPlayer-2'],
	['meme - rocky', 'transparent_greenscreen.mp4', 'short_1.15pct_speed_The Mandalorian Theme X Rocky Theme (EPIC HIP HOP REMIX).mp3', 'gifPlayer-6'],
	['nice', 'PSL_nice.mp4', ''],
	['regret', 'regret2b.mp4', 'regret.wav'],
	['rex', 'FSL_rex.mp4', 'rex.wav'],
	['ronan', 'ronan.mp4', 'tlmnronan.wav'],
	['ruff', 'PSL_ruff.mp4', ''],
	['stublu88', 'stublu88.mp4', 'stublu88.wav'],
	['zzzzzz - last placeholder', '', '']
];

var masterpath = "../Stream_Production";
var production_files = masterpath + "/production_files";
var audiopath = production_files + "/audio/";
var videopath = production_files + "/video/";
var imagepath = production_files + "/images/";
var soundpath_teams = audiopath;

const forms = document.querySelectorAll('.media-form');
const audioPlayer = document.querySelector('#audio-player');

// add an event listener for the "ended" event on the audio player
audioPlayer.addEventListener('ended', function() {
	const audioPlayer = this;
	// play the next audio file in the array
	if (audioFiles.length > 0) {
		const nextAudioPath = audioFiles.shift();
		audioPlayer.setAttribute('src', nextAudioPath);
		audioPlayer.load();
		audioPlayer.play();
	}
});

forms.forEach((form) => {

	// get the player name input and the player name box elements
	const playerNameBox = document.querySelector('.player-name-box');

	const playerNameInput = form.querySelector('.player-name-input');
	const videoPlayer = document.querySelector('#video-player');
	const audioPlayer = document.querySelector('#audio-player');
	const errorMessage = document.querySelector('#error-message');
	const videoContainer = document.querySelector('#video-container');

	// Create an array to store the audio file paths to allow for continuous play of multiple audio after subsequent button presses
	let audioFiles = [];

	form.addEventListener('submit', (event) => {

		event.preventDefault();
		//const playerName = playerNameInput.value.trim().toLowerCase();
		const playerName = playerNameInput.value.trim();
		//const matchingPlayer = playerList.find(p => p[0].toLowerCase() === playerName);
		const matchingPlayer = playerList.find(p => p[0] === playerName);
		playerNameBox.textContent = matchingPlayer[0];

		if (!matchingPlayer) {
			errorMessage.textContent = `Error: Player "${playerName}" not found.`;
			return;
		}
		const videoPath = videopath + matchingPlayer[1];
		const audioPath = audiopath + matchingPlayer[2];

		// Add the audio file path to the array
		audioFiles.push(audioPath);

		// Play the audio files in the array one after the other
		/*

		In this code, we added an array called audioFiles to store the audio file paths. On each button press, we push the new audio file path to the audioFiles array. We also added a playNextAudio function to play the audio files in the array one after the other.

		When the form is submitted, we add the new audio file path to the audioFiles array and check if it is the first audio file in the array. If it is the first audio file, we call the playNextAudio function with an index of 0 to play the first audio file in the array. If there are already audio files in the audioFiles array, we don't call the playNextAudio function again, because it is already playing the previous audio files.

		*/
		const playNextAudio = (index) => {
			if (index < audioFiles.length) {
				const audio = new Audio(audioFiles[index]);
				audio.load();
				audio.play();
				audio.addEventListener('ended', () => {
					playNextAudio(index + 1);
				});
			} else {
				audioFiles = [];
			}
		};

		// Play the first audio file in the array
		if (audioFiles.length === 1) {
			playNextAudio(0);
		}

		videoPlayer.setAttribute('src', videoPath);
		videoPlayer.load();

		//show player name by default
		playerNameBox.style.display = 'block';

		// Check if there is a fourth element in the matchingPlayer array
		if (matchingPlayer.length > 3) {
			switch (matchingPlayer[3]) {
			  case 'noTitle':
				noTitle();
				break;
			  case 'randomAudio':
				playRandomAudio();
				noTitle();
				break;
			  case 'gifPlayer':
				gifPlayer();
				noTitle();
				break;
			  default:
				// Check if the command has a number suffix
				try {
				  if (matchingPlayer[3].match(/-\d+$/)) {
					const gifIndex = parseInt(matchingPlayer[3].split('-')[1]);
					gifPlayer(gifIndex);
					noTitle();
				  } else {
					playerNameBox.textContent = playerName;
					playerNameBox.style.display = 'block';
				  }
				} catch (error) {
				  console.error('Error parsing GIF index:', error);
				  playerNameBox.textContent = playerName;
				  playerNameBox.style.display = 'block';
				}
				break;
			}
		}



		Promise.all([
			videoPlayer.play(),
			audioPlayer.play()
		]).catch((error) => {
			errorMessage.textContent = `Error: ${error.message}`;
			console.error('Error playing video ' + audioPath + ' or audio: ' + videoPath + ' ', error);
		});
		videoContainer.style.display = 'block';
		videoPlayer.addEventListener('ended', () => {
			videoContainer.style.display = 'none';
			playerNameBox.style.display = 'none';
		});
	});

	playerNameInput.addEventListener('input', (event) => {
		const inputValue = event.target.value.trim().toLowerCase();
		if (inputValue.length < 3) {
			clearSuggestions();
			return;
		}
		const matchingPlayers = playerList.filter(p => p[0].toLowerCase().includes(inputValue));
		if (matchingPlayers.length > 0) {
			showSuggestions(matchingPlayers);
		} else {
			clearSuggestions();
		}
	});

	playerNameInput.addEventListener('blur', () => {
		setTimeout(clearSuggestions, 100);
	});

	//CUSTOM 4th parameter functions

	//hide title or player name for certain types
	function noTitle() {
		playerNameBox.style.display = 'none';
	}

	function playRandomAudio() {

		const audioFiles = [
			audiopath + "/PSL_s2_intro.mp3",
			audiopath + "/PSL_s2_intro2.mp3",
			audiopath + "/PSL_s2_intro3.mp3",
			audiopath + "/PSL_s2_intro4.mp3",
			audiopath + "/PSL_s2_intro5.mp3",
			audiopath + "/PSL_s2_intro6.mp3"
		];

		const randomIndex = Math.floor(Math.random() * audioFiles.length);
		const audio = new Audio(audioFiles[randomIndex]);
		audio.play();
	}

	function gifPlayer(gifIndex = 0) {
	  const gifFiles = [
		[0, 'ByuN_GG.gif'],
		[1, 'noGG_Parting.gif'],
		[2, 'highground.gif'],
		[3, 'coffin_dance.gif'],
		[4, 'transparent_greenscreen.gif'],
		[26, 'paula_white_victory.gif'],
		[6, 'rocky.gif'],
		[7, 'braveheart.gif'],
	  ];

	  // Select the GIF file based on the gifIndex parameter
	  const gifFileName = gifFiles.find(file => file[0] === gifIndex)[1];
	  const gifPath = imagepath + gifFileName;

	  const gifContainer = document.querySelector('#gif-container');
	  const gifImage = document.querySelector('#gif-image');
	  const gifTimeout = 8000; // in ms

	  // Set the GIF image source
	  gifImage.src = gifPath;

	  // Show the GIF container and hide it after the timeout
	  gifContainer.style.display = 'block';
	  setTimeout(() => {
		gifContainer.style.display = 'none';
	  }, gifTimeout);
	}


	function showSuggestions(players) {
		const suggestionList = document.createElement('ul');
		suggestionList.classList.add('suggestion-list');
		players.forEach(p => {
			const suggestionItem = document.createElement('li');
			suggestionItem.textContent = p[0];
			suggestionItem.addEventListener('click', () => {
				playerNameInput.value = p[0];
				clearSuggestions();
			});
			suggestionList.appendChild(suggestionItem);
		});
		clearSuggestions();
		playerNameInput.parentNode.appendChild(suggestionList);
	}

	function clearSuggestions() {
		const suggestionList = playerNameInput.parentNode.querySelector('.suggestion-list');
		if (suggestionList) {
			suggestionList.remove();
		}
	}
});