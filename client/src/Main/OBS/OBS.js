import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './OBS.css';
import Sidedrawer_OBS from "./Sidedrawer_OBS";
import Backdrop from "./Backdrop";
class OBS extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

	render(){
		let sideDrawer;
		let backdrop;
		if (this.state.sideDrawerOpen){
			sideDrawer = <Sidedrawer_OBS className="side"/>;
			backdrop = <Backdrop/>;

		}
	return(
		<div>
		<Row className="stretch">
			<Col className = "left" xs = "9" >
				<h2 className="Title_OBS">Getting Started with OBS</h2>
				<p>You can get OBS <a href="https://obsproject.com/" target="_blank">here.</a></p>
				<div className = "OBS_Why" id="OBS_Why">
					<h4><strong>Quick Start to Streaming!</strong></h4>
					<br/>
					<p>OBS, aka Open Broadcaster Software, is a free and open source software for video recording and live streaming.
					 	OBS is jam pack with numerous features and an amazing amount of customization that dwarfs most other similar services. 
					 	BS also works with all major streaming platforms with relative ease.</p>
					<br/>
					<p>In order to get started lets download OBS for your respective platforms.
					   OBS supports Linux, Mac, and Windows!</p>
					<br/>
					<p>Once OBS is download a popup will ask you if you want to use the autowizard to calibrate your settings to match your current internet speed so just say yes to this.
					   If for some reason you closed this pop up you can select the tools tab in the top banner of the application and you should see the auto configuration again.
					   If for some reason this doesn’t work don't worry I will go over where and how we can set out streaming settings. Lets navigate to the control panel on the right side of the window and click on settings.
					   Next, Click on the streaming option and you will see an option named service.
					   This allows you to select which streaming service you use. If you don’t see your streaming service simply check the show all services option and you should get more options.
					   You can also select which server you want to use but it is recommended to just use the auto setting since this will choose the best server for you. </p>
					<br/>
					<p>The last thing in this tab is the stream key. This is the most important item in this whole tab. We need this in order to be able to stream on our desired platform.
					 	For this guide I will be using twitch as the example service.</p>
					<br/>
					<p>Let's head over to twitch to obtain our streaming key.
						Sign-in or sign-up for the service and then click on the top right where your username is.
						Find the dashboard option and select that. On the left side of the window you should see your dashboard navigation.
						In this section scroll down to the settings section and click on the channel option. 
						Congratulations you have now found you twitch streaming key and can now officially start streaming! 
						Just make sure you copy this code into OBS and make sure never show or share this code with anyone else. 
						This code in unique to you and only allows you to stream to your channel.
						Should you accidentally show it just head on over to twitch again and navigate to where you found the key.
						Just simply press the reset key and it will reset your twitch streaming key.</p>
					<br/>
					<p>Now that you have all that initially setup lets double check some settings. From the main screen click on the "Settings" button under the Controls section on the right side of OBS.</p>
					<br/>
					<p>When this window opens go to the Video option. Here we are going to set our recording screen area and the resolution of our stream or video recording output.
					</p>
					<br/>
					<p>The "Base Resolution" should be set to your recording screen size. This is so that your video output is the correct size and captures everything its supposed to without black bars appearing or it being oversized.
						Next, lets set the desired output for your stream or recording. If you are only planning to stream then set this to 1280x720. The reason you should have your stream set to this instead of a higher quality is because of your audience.
						You want to make sure everyone has the opportunity to watch you stream and if you stream at too high of a quality people who have slower internet speeds can't watch without  buffering issues. 
						"But what about the gear icon that lets you change you resolution? I've seen it on a ton of my streamers that I watch" you might say. Well, Twitch only allows this feature to be enabled when you become a Twitch Affiliate.
						So before we become affiliate we should record at a quality that allows most details through while minimizing the amount of buffering experienced by the viewer.
					</p>
					<br/>
					<p>If for some reason you are having issues with your stream or recording one quick fix would be to reduce the number of frames you are recording at.
					</p>
					<br/>
					<p> For those who want to record and stream their game play or what have you. You should set this to the quality you want to record your videos at so for me that is 1920x1080.
						OBS has a cool feature where you can stream and record at different qualities. So having the source be high quality allows me to record at said high quality but still stream at 1280x720.
						This should only be done on a strong computer because your computer will take a beating each recording session. </p>
					<br/>
					<p>As noted above recording and stream is very taxing on your system so you should distribute the work done by you computer. To do this lets go to the "Output" area in settings.
						Here you can see a tab for "Streaming" and "Recording". We are going to start with the "Streaming" tab and change the encoder to x264. This basically means we 
						want OBS to use are CPU to process the video for our stream. The reason we would want x264 to do this is because we want the higher quality video produced by it. 
						The other encoder, NVENC, only exists with NVIDIA graphics cards. It allows us to use move the processing load to our graphics card but produces a lower quality video. 
						Don't worry you gaming graphics should not be affected by using this because the GPU has a special dedicated area to process the video. If you have a weaker processer then use the NVENC option.
					</p>
					<br/>
					<p>Once you have settled on the encoder you want to use lets move on to the quality you want to stream at. As you can see we can also change our video quality here. I would suggest changing this value to 1280x720 for the same reasons as stated above.
						Lets now dive into the other settings below. Twitch requires us to set the "Rate Control" to the "CBR", which stands for constant bit rate, we also need to set the "Keyframe Interval" to 2. 
						All other options we have the freedom to customize them. The "Bitrate" is the amount of information recorded per second for your video. The recommended settings for a resolution of 720 is 2000-3000 bits. 
						If you are streaming at a higher quality go with a higher value but be warned it is limited by yout internets upload speed. However, if you are streaming at a lower quality go with a lower bitrate.
						We then have the option to change the CPU usage, if we used thew x264 encoder option. Basically, change this value to reduce or increase the load on your CPU. The slower it is the higher quality your stream will be but the faster it is the stress experienced by the CPU will be reduced. 
						For the audio track I use 1 for reason stated in the audio section below.
					</p>
					<br/>
					<p>If you chose the other encoder then there will be some differences in the settings area. You will have to set the "B-frames" option to 2 and the "Keyframes" to 2. The "Rate Control" should be the same as the x264 encoder or you can set it to a higher value if you want to make up for the reduced quality. 
						The options you can mess around with are the "Preset", "Profile", and "Level". I recommend leaving them as "Default", "Main", and "Auto". Feel free to mess with them to see which gives you better quality for your setup. 
					</p>
					<br/>
					<p>Lets move on to the "Recoding" tab. As you can see its very similar to the streaming tab with a few differences. The "Recording Format" should be set to .mkv as this allows us to record at a high quality, protect against corrupted videos if computer crashes, and allows us to save multiple audio tracks. 
						Just be warned most video players can't play this file format so we will have to transform it using the built in tool called "Remux Recordings". It is located under the "File" tab on the main screen and will covert the recording to an .mp4 and still keeps the audio tracks seperate.
						Depending on what audio tracks you have included on you will select which ones you want. I simply have all 6 checked. Then you have the encoder which I use "NVENC" for recording my youtube videos. 
						Since you are not limited by your upload internet speed you can record at a higher bitrate and video quality. I record at 1920x1080 with a bitrate of 10000. This allows me to have high quality videos to edit and upload to youtube. The rest of the settings were dicussed above but feel free to change them and see whasts better for your system.
					</p>
					<br/>
					<p>The next tab is the "Audio" tab. Here we are simply going to change the "Audio bitrates" for all our tracks. The first track is going to be used by our stream so we want to set it at 160. This is so we maintain a good audio quality but keeping it low enough that it doesn't affect our stream's behaviour.
						All the others we want to set at the highest quality since we will be use them for recording videos, if you choose to do that.\</p>
					<br/>
					<p>Speaking of Audio lets head on over to the Audio section. Click on the audio I con on the left side of the settings window. The first setting we want to change is the "Sample Rate". We want this to be 48khz as we want to capture the most from our audio devices. Then we want to setup the audio devices that we want OBS to detect everytime we open it.
						"Desktop Audio Device" is the device we want to record the sounds of. I have this set to my headphones because I want my views to hear everything I hear. Next, we want connect our Microphone which we can enable in "Mic/Auxilary Audio Device". If you want to setup more devices you can but this is all we need for a quick start. 
					 </p>
					 <br/>
					 <p>We are now done with the underlying work we need to have before we setup our first stream. Lets setup our first "Scene". Basically a "Scene" allows us have a container for all the sources we want for our stream. So if we want to have a Face cam, notifications, overlays, etc, we have to put them in a "Scene".
					 	To add a "Scene" simply press the + symbol under scenes and name it what you want. All you need now is to add what you want to record and this can be done under the "Sources"  section. 
						Do the same as we did in the "Scene" section and press the + button to choose your desired source. We want to record a full screen game so we will choose the "Game Capture" option. This should open
						a new window where we have a "Mode" setting. We want to choose the "Capture Specific Window" option. A new bar under "Mode" should appear called "Window". Now, we can choose which window we want to capture and you should choose the one that has the name of your specific game. One this is done
						just press OK and you should now see your game on the preview sceen in OBS. Note: Your game must be open when you first choose it. Once you do it will remain chosen as the window even if the game is closed. If for some reason this source doesn't work change it to "Display Capture".
						As the name indicates, it will capture everything on your display. Anoter source you could choose is the "Window Capture" option and jsut choose which window you want to capture.    
					 </p>
					 <br/>
					 <p>Thats basically all you need to start your first stream so go on, get started, have fun, and good luck to you! </p>
					 <br/>
					 <p>If you want to know more about OBS and what other settings you can use just keep on reading.</p>
					 
					 <br/>
					 <h3 id="OBS_Advanced_Settings"><strong>Advanced Settings</strong></h3>
					
					<br/>
					<p>We are going to start with the "Settings" option for OBS and talk about what each option does and what it offers.</p>
					<h4 id="Settings_Advanced"><strong>Settings</strong></h4>
					<br/>
					<h5 id= "Output_Advanced"><strong>Output</strong></h5>
					<br/>
					<h6 id="Streaming_Advanced"><strong>Streaming</strong></h6>
					<br/>
					<p>Lets open the settings tab again and mosey on over to the Output option. Here we can customize quite a few things. First we want to be able to control a bit more settings so change the output mode at the top of this section to Advanced.
					 Now we can see what customization OBS has to offer to us.
					 Starting with the streaming tab we lets begin with the first setting, Audio Track.
					 We can use the audio track to select what audio we want to share with our stream. Later on I will show you where we can select what devices go to which track for audio recording.
					 For me, I usually leave the Audio Track on 1 since that's where I output my mic and desktop audio to. 
					</p>
					<br/>
					<p>Next up we have the encoder.
					This is an extremely important setting because it tells OBS where we want to encode our stream or video.
					 The x264 is an encoder that mainly uses the CPU of your computer and provides the highest quality video but at a cost.
					 The cost is that it will put a lot of strain on your CPU which can lead to poor video quality, reduce performance on your Computer, or force you to reduce game quality.
					 It's usually recommended to only use this option if you have no other choice, have an extremely powerful CPU, or a dedicated stream recording computer.
					 However, for those who have a Nvidia graphics card there is another option called Nvenc. This encoder does most of the encoding on the GPU and reduces the strain on our CPU.
					 It also isn’t as taxing on the GPU either.
					 This means we can play our games and record them on a higher quality.
					 One downside of using this encoder is that the video quality will suffer a bit, I haven’t noticed it in my experience but others might have.
					 Depending on your GPU you might have to reduce your game graphics as well to prevent overheating.
					 You also want to check the “Enforce streaming service encoder settings” to make sure that your stream is following the specific requirements set by the streaming service used.
					 With all that being said I would recommend using the NVENC setting because you can play games at the highest setting while still keeping cpu load low.
					 </p>
					 <br/>
					 <p>Following the Encoder is the Rescale output option.
					 This option is used to rescale the output of your current capture resolution.
					 The capture resolution is set in the Video tab that will be discussed later on.
					 One important thing to note is that Twitch doesn’t offer non-partners the option to have their videos transcoded.
					 This means that a viewer can’t change their video setting from whatever you stream at.
					 So to combat this until we get that option we can use the rescale output or just set our base capture resolution to a lower quality.
					 It is usually recommended to stream at 720p because it offers HD quality but doesn’t require as fast of an internet speed to watch without experiencing buffering.
					 You of course can stream at a higher quality but be warned that those who have a slower internet connection won’t be able to watch you.
					 </p>
					 <br/>
					 <p>The rate control manages the behavior of the bitrate you are streaming at.
					 I’m just going to go over two of the options it offers beacause Twitch has a set requirement on which one to use.
					 The first option is CBR, aka Constant Bitrate, and this just says that no matter what is going on in your stream the bitrate will stay the same.
					 While VBR, or Variable Bitrate, changes depending on what is happening in the game.
					 So if there is more battles or graphics happening in game then you would get a higher bitrate to help preserve most of the quality.
					 When nothing exciting is happening then the bitrate will lower it self. 
					 For Twitch users the required setting is CBR so choose that. 
					</p>
					<br/>
					<p>The Bitrate is another very important setting as this dictates how much information or bits you are sending per second. 
					The supposed maximum number of bits that you can send over twitch is 6000 kbps or 6 mbps but some streamers are able to stream more without twitch changing there settings. 
					You should first learn what your internet upload speed is because if its less than 6 mbps then you cannot upload at that speed. 
					Even if you are above it you still be careful because if you don’t leave enough room in you upload your game may lag if you are playing online or if any other web asset starts using the internet your stream may start lagging as well. 
					So a good rule of thumb is make sure you only use about 70-75% of you upload speed for the bitrate. 
					The number of bits also affects the video quality of your stream. 
					You can see some of the recommended settings from twitch here <a href="https://stream.twitch.tv/">https://stream.twitch.tv/</a>.
					</p>
					<br/>
					<p>Keyframe interval minimum is 2 and provides the highest quality stream. If stream at low quality such as 480p or bellow it is recommended to increase the keyframe interval between 8-10.
					 You can also see the recommended settings in this link <a href="https://stream.twitch.tv/">https://stream.twitch.tv/</a>.
					</p>
					 <br/>
					 <p>If you chose NVENC as your encoder you have a few different settings in this area. These settings are Preset, Profile, and level.
					  For the preset I have it set to Default and then the Profile is set to main and level set to auto. 
					  I have not noticed any performance issues and it still has pretty good video quality. 
					  Feel free to change these settings if you want to increase quality and maximize performance without degrading video quality. 
					  You also have the GPU option which just lets you select which gpu you want to use for your encoder. 
					  The B-frames is just another setting that allows for better quality video but requires a lot more performance from the GPU. 
					  I would suggest just leaving it as the default 2 but Twitch does support up to 4 for this setting.
					  </p>
					  <br/>
					  <p>For the x264 encoder you now have CPU usage preset, Profile, and Tune as x264. 
					  I recommend to start on Very Fast CPU usage preset since encoding is very taking on your cpu. 
					  Once you confirm it works without issue you can slow it down to increase quality but your CPU will work harder and could affect performance. 
					  The profile should be set to main because it allows most decoders to work and allow people to see your stream. 
					  Twitch recommends using this settings. Using the higher option may prevent some devices from being able to watch your stream depending on if it has the tools needed to decode your stream with the higher settings. 
					  Then just set Tune to none, its just another setting for the x264 encoder if you want to know more about it here is a link to see what it does <a href="https://superuser.com/questions/564402/explanation-of-x264-tune">https://superuser.com/questions/564402/explanation-of-x264-tune</a>.
					  </p>
					  <br/>
					  <h6 id="Recording_Advanced"><strong>Recording</strong></h6>
					  <br/>
					  <p>For those that want to record their streams for uploading to services like youtube or just so they can have it they can setup this option in this tab.
					  </p>
					  <br/>
					  <p>The type gives you two options standard and custom. 
					  I would just use the standard option since the custom has a lot more advanced function that we don’t need unless you want to dive into it and see what happens. 
					  So let's just set it to Standard for our case. 
					  Next is the recording path, this lets you set where you want you videos to be save to. 
					  Next up is recording format, I would use the mkv option as it allows you to record multiple audio tracks so you could have one for your mic, your desktop, sound board, a combination of all the above. 
					  One thing to note about using this format is that most editors don’t like it. 
					  However, OBS thought of that and allows you to fix that. 
					  If you exit settings and click on File on the top of the video you have a remux recordings option. 
					  This allows you to change the mkv to mp4 but still allows you to keep all you separate audio tracks. 
					  If you don’t need to separate audio you can just choose mp4 instead. 
					  </p>
					  <br/>
					  <p>Under this you can choose which audio tracks you want to save on your recordings. Later on I will discuss where we can setup the audio tracks and what devices go to them.
					  </p>
					  <br/>
					  <p>Again you see you have an option to choose which encoder to use for recording so you can pick. Just be careful because if you perform both streaming and recording on the same encoder your quality might suffer or your computer might crash. 
					  </p>
					  <br/>
					  <p>You also get the option to rescale the output of your recording. 
					  If you game a higher quality and capture it you can choose to lower the resolution and that should reduce the strain on your encoder while still preserving a lot of the quality. 
					  Just be warned that the higher quality you have the larger you video files will be. 
					</p>
					<br/>
					<p>Then you run into the same thing we saw for streaming where you can customize the encoder settings. 
					There are two things I have changed and that the Bitrate I have increase it to 10000 so to have a super high quality video and you can increase it more if you want depending on how high of a quality you are aiming for. 
					However, this will also cause your files to become massive so be prepared to lower it. 
					I also enable the two-passing encoding to ensure quality is preserved this is only for the NVENC encoder.
					</p>
					<br/>
					<p>If you are streaming and Recording be prepared to sacrifice some of your resolution because this cause a lot of strain on your encoder if your using the same for both. I am using the NVENC encoder for this as well.
					</p>
					<br/>
					<h6 id ="Audio_Advanced"><strong>Audio</strong></h6>
					<br/>
					<p>This is the tab where you can name your audio tracks and set the quality. I usually have all audio set to max quality except for the one that I am using to stream. I use 160 for the streaming track to ensure a lean stream that doesn’t buffer or have issues.
					</p>
					<br/>
					<h6 id = "Reply_Buffer_Advanced"><strong>Replay Buffer</strong></h6>
					<br/>
					<p>This feature allows you to record the last x amount of seconds of your stream. So if you made a sick head shot you can save that as a clip and it will store it on your hard drive. 
					I don't use this I just record instead so I can capture every moment good and bad. 
					</p>
					<br/>
					<h5 id="Audio_Tab"><strong>Audio</strong></h5>
					<br/>
					<p>Sample rate just lets you set what kind of quality you want your sound to be I have it set at 48khz.</p>
					<br/>
					<p>We then have the number of channels and I have it set as stereo as most gaming headsets don't have anything higher than that and most computer speakers are stereo. 
					You can change it to something else but I recommend stereo.
					</p>
					<br/>
					<p>Desktop audio device is the device you want OBS to take as an input. I have it set as my headphones because I game with headphones so anything I hear OBS hears. 
					You can also add another audio device if you want right below it as well.
					</p>
					<br/>
					<p>Up next are the mics and you get the option to add 3 mics or auxiliary devices. 
					I have it set to my microphone the AT2020USB+ but you can change it to your headphones, the built in mic in your computer, or anything along those lines. 
					It can even add you sound boars if you have some or a mixer or basically anything that registers in that field.
					</p>
					<br/>
					<p>That's all I have set up you can dive deeper into the push-to-mute and push-to-talk settings but they basically speak for themselves. 
					I will go into how to bind the controls for them in a later section.
					</p>
					<br/>
					<h6 id="Video_Tab"><strong>Video</strong></h6>
					<br/>
					<p>This area sets up the video we see on OBS so you want to set Base Resolution and Output Resolution to the size of the monitor you are using. My monitor is 2560x1440 and I have that in both fields. 
					I left the downscale filter as bicubic but I did change the FPS values to 60.
					</p>
					<br/>
					<h6 id="Hotkeys_Tab"><strong>Hotkeys</strong></h6>
					<br/>
					<p>As the name suggest this is where we can set out hotkeys or the keys we can press to control OBS. 
					This controls a lot of things so go through it and bind your keys to however you want them.
					</p>
					<br/>
					<h6 id = "Advanced_Tab"><strong>Advanced</strong></h6>
					<br/>
					<p>You can add stream delay if you experience stream snipers or you have a competition that requires a delay. 
					Also, you can enable auto reconnect incase your internet drops and you want OBS to connect on its own when it can.
					</p>
					<br/>
					<h5 id="Scenes_Section"><strong>Scenes</strong></h5>
					<br/>
					<p>Scenes are used to store all the sources you used during a particular part of you broadcast. 
					Usually you have one for BRB, Stream Starting, waiting, IRL., and of course for your game.
					</p>
					<br/>
					<p>To setup a scene all you need to do is click on the plus sign under scenes and give it a name that describes what you are doing in that scene.</p>
					<br/>
					<h5 id="Sources_Section"><strong>Sources</strong></h5>
					<br/>
					<p>Sources are what makes up your particular scene. 
					So for a gaming stream we might need several different sources in order to achieve the effect we want. 
					To add a source simply press on the plus symbol under the sources section. 
					For a basic gaming stream where we want a facecam, game capture, and maybe a border that surrounds your stream. 
					We can do this by adding a Game Capture, Video Capture Device, and an Image. 
					You can add additional sources if you want for your desired effects. 
					There are 14 different options you can choose from and I will go through each so you can choose what you need for your stream or recording. 
					</p>
					<br/>
					<h6 id= "Audio_Input_Capture"><strong>Audio Input Capture</strong></h6>
					<br/>
					<p>You can choose a specific audio devices and have OBS record it. 
					This is usually used for devices that you haven’t already selected as the default inputs for OBS. This is where you would put your sound board, another mic, game console and much more. 
					</p>
					<br/>
					<h6 id="Browser"><strong>Browser</strong></h6>
					<br/>
					<p>This option allows you to add a browser to you stream. 
					Why would you want to do this? Well, it gives you numerous ways to add tons of custom effects. 
					This effects could be for audio, video, images, or even just the layout. 
					You create a web page on your computer and use that, or you can take in web address from 3rd party applications that can give you cool features such as alerts. 
					You can also control the width, height, FPS, CSS, shutdown source, refresh browser, refresh cache.
					</p>
					<br/>
					<h6 id="Color_Sources"><strong>Color Source</strong></h6>
					<br/>
					<p>This gives you the ability to add solid colors to your scene which you can then use for backgrounds or infoboxes. 
					You can also use it to add a tint to your stream using the alpha channel.
					</p>
					<br/>
					<h6 id="Display_Capture"><strong>Display Capture</strong></h6>
					<br/>
					<p>As this name implies, you can use this source to capture everything that appears on your display. 
					This comes with two options, the first allows you to select which display you want to capture and the second lets you choose whether to show your cursor or not. 
					Be sure to remember that you can only have one display capture source per display. 
					If you want to add your display to multiple scenes be sure to add the existing source.
					</p>
					<br/>
					<h6 id= "Game_Capture"><strong>Game Capture</strong></h6>
					<br/>
					<p>This is probably the main source you will use as it is intended to only capture your desired source like your open video game. 
					This will only work if the game is DirectX or OpenGL. 
					You can then choose to either capture any fullscreen application, capture a specific window, or capture a foreground window with hotkey. 
					This source has several other options such as Multi-adapter Compatibility, used for systems that have multiple GPUs and changes the capture mode to one that is not that efficient. 
					Then you have force scaling which allows you to change the recording resolution. 
					Next up, you have the limit capture framerate and does exactly as it says and limits the capture framerate. 
					We also have a capture cursor option so if you want to have OBS capture your cursor enable this. 
					Lastly, you have the capture third-part overlays so if you have steam you can see the overlay when you use the ctrl+tab option or if you want your stream to see you discord overlay then you can enable this feature.
					</p>
					<br/>
					<h6 id="Image"><strong>Image</strong></h6>
					<br/>
					<p>Just lets you add an image to your stream and accepts these image formats: .bmp, .tga, .png, .jpeg, .jpg, and .gif. 
					It also has the option to unload images when not in use so it helps free some system resources when you aren’t showing the image. 
					</p>
					<br/>
					<h6 id="Image_Silde_Show"><strong>Image Slide Show</strong></h6>
					<br/>
					<p>Image slideshow accepts multiple images which you can combine into a slideshow. 
					The options you can control are the way it transitions to a new image, time between slides (milliseconds), transition speed (milliseconds), and randomize playback.
					</p>
					<br/>
					<h6 id="Media_Source"><strong>Media Source</strong></h6>
					<br/>
					<p>This option gives you the power to add different types of media to your stream such as:
					<ul>Video: .mp4, .ts, .mov, .flv, .mkv, .avi, .gif, .webm</ul>
					<ul>Audio: .mp3, .aac, .ogg, .wav</ul>
					</p>
					<p>You can add local files and ones that you found on the internet. 
					If you want a looping gif enable the loop option which will make the gif loopback when its done. 
					There is a restart playback when source becomes active so when you make your source visible in you stream it will make sure it starts from the beginning. 
					There is an enable hardware decoding option if it's available. 
					You can then hide a source once it is done playing by enabling the “Hide source when playback ends”.
					</p>
					<h6 id="Scenes_sources"><strong>Scenes</strong></h6>
					<br/>
					<p>You can add scenes as sources! 
					This is used for scenes that share a static overlay so if you make any changes to the source scene it applies to all other sources that were using that scene. 
					</p>
					<br/>
					<h6 id="Text_GDI"><strong>Text (GDI+)</strong></h6>
					<br/>
					<p>This source allows you to add text to your stream. 
					You can also load text from a text file and will be reloaded each time it is saved so it will automatically update on stream. 
					This is used by many stream for displaying what music they are currently listening to on stream. 
					There are multiple ways to customize the text such as changing the foreground color, changing the background color, add a gradient, adjust the opacity, horizontal and vertical align, add an outline, add custom text extents for the size of the source and if the text should wrap if width is exceeded.
					</p>
					<br/>
					<h6 id="VLC"><strong>VLC Video Source</strong></h6>
					<br/>
					<p>This is similar to media source but will use the VLC libraries for extended media support. You must have VLC INstalled and the application must use the same bit as your OBS, If OBS is 64-bit VLC must be 64-bit.
					</p>
					<br/>
					<h6 id="Video_Capture_Device"><strong>Video Caputre Device</strong></h6>
					<br/>
					<p>Use this option to capture the a variety of video devices. 
					Such as web cameras and capture cards but not limited to just those. 
					This option comes with a done of settings that you can choose from. 
					There is a Deactivate/Active (Button) and this will either turn on or off the device. 
					The Configure Video option will open any driver configuration utilities needed by the video source. 
					You can also open the device Crossbar configuration if available. 
					There is the Resolution/FPS Type where you can customize the Resolution, FPS, and Video Format of the device. 
					Next, the YUV Color space allows you to set the color space the device will output in. The YUV Color range will set the color range the device will output in. 
					There is also a buffering option that you can either enable, disable, or auto-detect. 
					This option helps eliminate stutter during playback if enabled, reduce delay if disabled, or choose the devices preference using the auto-detect option. 
					There is also a Flip vertically option where you can flip the video if you wanted to. 
					The audio output mode where you can choose to hear or not hear the audio of that device. 
					Lastly, you have the custom audio device which will separate the audio device linked to your camera.
					</p>
					<br/>
					<h6 id="Window_Capture"><strong>Window Capture</strong></h6>
					<br/>
					<p>Window capture allows you to capture a specific window. 
					This differs from display capture because it will only capture the desired window so if there is something in front of it no one else will see it. 
					</p>
					<br/>
					<h5 id="Mixer"><strong>Mixer</strong></h5>
					<br/>
					<p>The mixer allows you to see the current audio being applied to your stream/recording. 
					To control what appears here you can open the settings and go to audio. 
					You can select which devices are enabled and they will show up under mixer. 
					However, this isn’t the only way for audio to appear here. Depending on which source you are using an audio option will appear and can’t be removed unless you delete the source. 
					The mixer is an excellent visual cue for making sure that your audio is working and that it isn’t too loud. 
					You can also customize the audio source by reducing the volume of it using the slider below it. 
					More customization is available when you click on the gear icon. 
					You can Hide, rename, unhide all, add filters, access its properties, and some advanced audio preferences. 
					</p>
					<br/>
					<h6 id="Filters"><strong>Filters</strong></h6>
					<br/>
					<p>You have 5 audio filters that you can apply to you audio source for sound management or effects.</p>
					<br/>
					<ul>Compressor is used for reducing the volume of a very loud sound. This is used when a person is yelling a lot and just reduces their voice to a level where the audience can handle it.</ul>
					<ul>The Gain is used to turn up or down a sources volume.</ul>
					<ul>The noise gate is used to allow only certain sounds over a defined threshold.
					 Basically it turns off your mic when the sound dip belows the threshold and turns it back on when it crosses over it.
					 This is used to eliminate background sound when you are not talking.
					 </ul>
					 <ul>Noise suppression suppresses the background sound but leaves your mic on the whole time.</ul>
					 <ul>VST 2.x Plug-in is an option that runs plug ins that you can download. 
					 They are then used to apply certain effects to your audio.
					 </ul>
					 <br/>
					 <h6 id="Properties"><strong>Properties</strong></h6>
					 <br/>
					 <p>You can see what the audio devices properties are and the options that come with them.</p>
					<br/>
					<h6 id="Advanced_Audio_Properties"><strong>Advanced Audio Properties</strong></h6>
					<br/>
					<ul>You can control the audio sources volume</ul>
					<ul>Make it a mono source</ul>
					<ul>Pan the source to the right or left</ul>
					<ul>Offset the audio</ul>
					<ul>Change the audio monitoring so that only you can hear the audio source, you can hear it and it outputs to the stream, or it is disabled.</ul>
					<br/>
					<h5 id="Transitions"><strong>Transitions</strong></h5>
						<p>When changing scenes you can add a transition as an effect. When first selecting the dropdown menu you have a cut or fade option. You can add more transitions by pressing the "+" icon below the dropdown. 
						Your options and customizations for each are now:
						</p>
						<ul>Cut</ul>
						<ul>Fade
							<div className="Indents">Has only one setting called duration. You can determine how long the effect lasts for in milliseconds.</div>
						</ul>
						<ul>Swipe
							<div className="Indents">The Swipe has several conditions that you can control. You can determine the length of the effect in milliseconds.
							Another property you can manipulate is the direction of the swipe. Lastly, you can also decide whether the effect occurs as a Swipe In or Swipe Out by simply clicking on a check box.</div>
						</ul>
						<ul>Slide
							<div className="Indents">The slide option has two properties: Duration, where you can control the length of the effect in milliseconds, and Direction, where you can determine which direction the effect occurs in.</div>
						</ul>
						<ul>Stinger</ul>
							<div className="Indents">The Stinger transition allows you to use a small clip or video to create a tansition.
								
								In the poperties section of this transition you can select which video file you want to use.
								You can also determine where you want the transition to occur in the small video by uing milliseconds or by number of frames.
								The audio can also be slightly controlled in this panel such as choosing if you want to hear the tranisiton between the two different sources.
								There is also an option to control the Audio Fade Style. This allows you to either have a crossfade effect for your transition between the sources or you can select the fade out to transition point then fade in.
							 </div>
						<ul>Fade to Color

							<div className="Indents">The Fade to color effect does exactly as it says. The transition fades to a color and then fades from the color to the next scene. 
							The properties you can adjust for this is the color and the peak color point. This allows you set the location of where the peak color will occur. You can also set the duration of the effect in milliseconds.</div>
						</ul>
						<ul>Luma Wipe

							<div className="Indents">
								The Luma Wipe effect allows you to add cool effects such as blinds, bubbles, tiles, spiral, and much more. You can choose how soft the effect is and whether or not the effect is inverted.  
							</div>
						</ul>
						
						
					<br/>
					<h5 id="Controls"><strong>Controls</strong></h5>
						<div className="Indents">
							The Controls panel is used to start your stream and recording. You can also change the view of you OBS to Studio mode which brings up 2 screens. One for setting up a scene before anyone can see it and another that shows what is currently being recorded.
							You can simply click on the center transisiton button to make the scene you have been setting up the new live image which everyone can see. Then you have the Settings button that allows you to access the OBS settings.
							Lastly, the exit button is used to exit the application. 
						
						</div>
					<br/>
					<h5 id="Profile"><strong>Profile</strong></h5>
						<div className="Indents">
							The profile option in the tool bar at the top of OBS allows you to create profiles. Profiles are used to store different settings like if you have 2 Twitch channels you would have 2 profiles. 
							Each profile saves the OBS settings but does not include the scenes or sources. 
						
						</div>
					<br/>

				</div>
			</Col>
			<Col className = "col-info right" xs = "3" >
			<Sidedrawer_OBS className="side"/>
			</Col>
			<Button color="primary btn-class" onClick={ this.drawerToggleClickHandler}>p</Button>{' '}
		
		</Row>
		{sideDrawer}
		{backdrop}
		</div>
		);
};
}
export default OBS;