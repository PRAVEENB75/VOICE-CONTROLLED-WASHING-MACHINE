/**
 * Smart Washer IoT Portal - Application Logic
 * Voice-Controlled Washing Machine with Energy & Billing Monitor
 * Featuring Female Voice Synthesis, Full Kannada (ಕನ್ನಡ) Language Support,
 * and Painted Landscape Mural Backdrop Integration
 */

// ==========================================
// TRANSLATION DICTIONARIES (English & Kannada)
// ==========================================
const TRANSLATIONS = {
  en: {
    titlePrefix: "Smart Washer",
    titleYou: "IoT",
    titleSuffix: "Portal",
    subtitle: "Voice-Controlled Washing Machine with Energy & Billing Monitor. Real-time telemetry, automated relay switching, and intelligent tumbler filter maintenance.",
    nodeStatus: "ESP32 NODE // ONLINE",
    tabDashboard: "Live Dashboard",
    tabGallery: "Hardware Components Gallery",
    tabUnits: "8 Units",

    // Hero elements
    btnHeroActionText: "EXPLORE LIVE DASHBOARD",
    heroTariffText: "Tariff Rate: ₹8.50/kWh",
    headingLiveMetrics: "Real-Time Telemetry & Energy",
    subtextLiveMetrics: "High-precision PZEM-004T AC metrics and continuous electricity tariff calculation",

    // Meta labels
    relayLabel: "RELAY LOAD",
    tariffLabel: "TARIFF RATE",
    sensorLabel: "PZEM SENSOR",
    voiceLabel: "VOICE ENGINE",
    voiceEngineVal: "Female Voice (Active)",
    offline: "OFFLINE",
    energized: "ENERGIZED",
    active: "ACTIVE",

    // Alert Banner
    alertTitle: "CRITICAL MAINTENANCE: TUMBLER FILTER ALERT ACTIVE",
    alertDesc: "Washing cycle finished. Lint & debris detected in drum tumbler filter. DFPlayer female voice alert triggered. Micro limit switch or voice command required to clear.",
    clearAlertBtn: "Clear Alert Now",

    // Metric 1: Power
    catPower: "REAL-TIME DEMAND",
    titlePower: "Active Power",
    labelMains: "AC Mains",
    labelCurrent: "Current",
    labelPF: "Power Factor",
    gaugeMaxPower: "Max: 2200 W",

    // Metric 2: Energy
    catEnergy: "CUMULATIVE CONSUMPTION",
    titleEnergy: "Total Energy",
    labelEeprom: "PZEM Internal EEPROM Log",
    labelWashUnits: "Wash Units",
    labelCo2: "Est. CO₂",
    labelEff: "Efficiency",
    valEff: "Grade A+",

    // Metric 3: Bill
    catBill: "REAL-TIME TARIFF ACCRUAL",
    titleBill: "Calculated Bill",
    labelFormula: "Formula: ",
    labelCycleCost: "Cycle Cost",
    labelHourlyBurn: "Hourly Burn",
    labelBillingCycle: "Billing Cycle",
    valBillingCycle: "Real-time",

    // Washer Center Stage
    headingDrumTelemetry: "Washing Drum & Motor Telemetry",
    subheadingDrumTelemetry: "Optocoupled 5V Relay State & Load Dynamics",
    statusIdle: "IDLE // STANDBY",
    statusRunning: "RUNNING // WASH CYCLE",
    statusAlert: "TUMBLER FILTER ALERT",
    labelFilterCompartment: "TUMBLER FILTER COMPARTMENT",

    // Timeline Steps
    step1Name: "Standby",
    step1Desc: "Relay De-energized",
    step2Name: "Wash Cycle",
    step2Desc: "Relay Active (450W - 1200W)",
    step3Name: "Rinse & Spin",
    step3Desc: "High RPM Load (1600W)",
    step4Name: "Tumbler Alert",
    step4Desc: "DFPlayer Voice Prompt",

    // LCD
    lcdBadgeTitle: "PHYSICAL 16x2 LCD (I2C: 0x27) DIRECT MIRROR",
    lcdBacklightLabel: "Backlight ON",
    lcdCaption: "Direct telemetry rendered on the real-world onboard I2C 1602 LCD module.",

    // DFPlayer Audio
    audioBroadcastTitle: "DFPlayer Mini Audio & Speaker Broadcast",
    audioWaitingText: "Waiting for wash completion trigger. Speaker: 8Ω 2W connected. (Female Voice)",

    // Voice Stream
    streamTitle: "Web Speech API Live Transcript",
    heardLabel: "HEARD PHRASE:",
    transcriptPlaceholder: "Microphone listening or standby. Recognized commands (\"Start Wash\", \"Stop Wash\", \"Tumbler Cleaned\") appear here in real-time.",

    // Controls Deck
    deckMainTitle: "Command & Control Interface",
    deckSubtitle: "Multimodal interface: Real-time female voice speech input or zero-latency tactile hardware triggers",
    chipsHint: "Simulate Voice Phrase:",
    voiceBtnMain: "Speak Command",
    voiceBtnSub: "Tap to activate microphone (Female Voice)",
    voiceBtnListening: "Listening...",
    voiceBtnListeningSub: "Say: \"Start Wash\", \"Stop Wash\", \"Tumbler Cleaned\"",

    // Manual Buttons
    btnStartWashTitle: "START WASH",
    btnStartWashDesc: "Energize 5V Relay Module",
    btnStopWashTitle: "STOP WASH",
    btnStopWashDesc: "Isolate 230V AC Load",
    btnClearTumblerTitle: "CLEAR TUMBLER ALERT",
    clearTumblerInactive: "Maintenance Alert Inactive",
    clearTumblerActive: "Tumbler Filter Needs Cleaning!",

    // Gallery Hero
    hwSectionTag: "HARDWARE ARCHITECTURE",
    hwGalleryHeading: "Core Embedded System Components",
    hwGalleryIntro: "Comprehensive breakdown of the 8 physical hardware modules engineered into this voice-controlled, energy-monitored smart appliance IoT system.",
    statLabelModules: "Hardware Modules",
    statLabelVoltage: "Mains Rating",
    statLabelEsp: "Dual-Core ESP32",

    // Hardware Cards Descriptions & Usages (Exact User Text)
    hw: {
      descLabel: "DESCRIPTION",
      usageLabel: "PROJECT USAGE",
      1: {
        title: "ESP32 NodeMCU Board",
        badge: "Core Controller",
        desc: "A powerful 32-bit microcontroller with built-in Wi-Fi, Bluetooth, and standard pin headers. It serves as the main brain for processing data and hosting the web server.",
        usage: "Runs the web server, processes voice commands, reads PZEM-004T data, and triggers the relay and speaker alerts."
      },
      2: {
        title: "PZEM-004T V3.0 Energy Meter (with CT Coil)",
        badge: "Sensor Module",
        desc: "A high-precision electrical sensor module designed to measure AC voltage, current, active power, and energy. Uses a split-core current transformer for non-invasive AC current sensing.",
        usage: "Measures real-time power consumption of the washing machine load and sends data to the ESP32 to calculate billing."
      },
      3: {
        title: "5V 1-Channel Relay Module",
        badge: "Switch Actuator",
        desc: "An optocoupler-isolated electromechanical switch that allows low-voltage DC microcontrollers to control high-voltage AC devices safely.",
        usage: "Acts as the main power switch to turn the 230V AC load (simulated washing machine) ON and OFF based on voice commands."
      },
      4: {
        title: "DFPlayer Mini MP3 Module",
        badge: "Audio Decoder",
        desc: "A compact hardware audio decoder board that reads and plays high-quality .mp3 files directly from a MicroSD card.",
        usage: "Plays pre-recorded voice audio reminders asking the user to clean the tumbler filter once a wash cycle ends."
      },
      5: {
        title: "8Ω 2W Mini Speaker",
        badge: "Acoustic Output",
        desc: "A compact audio output transducer optimized for clear voice speech playback from low-power audio drivers.",
        usage: "Outputs the voice alert prompts triggered by the DFPlayer Mini module."
      },
      6: {
        title: "16x2 Character LCD Display (I2C)",
        badge: "Local Display",
        desc: "An alphanumeric display screen integrated with an I2C backpack adapter to reduce wiring down to just two signal pins.",
        usage: "Displays local live readings of Power (W), Energy (kWh), and calculated Bill (₹) directly on the physical board."
      },
      7: {
        title: "Micro Limit Switch",
        badge: "Safety Sensor",
        desc: "A miniature roller-lever mechanical switch that toggles electrical contact when physical pressure is applied or released.",
        usage: "Detects when the tumbler door flap is opened to automatically clear and reset the voice maintenance alert."
      },
      8: {
        title: "AC 3-Pin Power Cord (5A)",
        badge: "Mains Power",
        desc: "A standard grounded three-wire AC cable designed to safely connect tabletop appliances to domestic wall sockets.",
        usage: "Supplies 230V AC mains power to both the high-voltage load and the 5V power supply safely."
      }
    },

    // Spoken Audio Prompts (Female Voice)
    audioStartWash: "Washing cycle started. 5V Relay energized.",
    audioStopWash: "Washing cycle stopped. 230V AC load disconnected.",
    audioTumblerAlert: "Attention: Wash complete. Please clean the tumbler filter.",
    audioTumblerCleared: "Tumbler filter alert cleared. System ready.",
    audioLangSwitched: "Switched to English language."
  },

  kn: {
    titlePrefix: "ಸ್ಮಾರ್ಟ್ ವಾಷರ್",
    titleYou: "ಐಒಟಿ",
    titleSuffix: "ಪೋರ್ಟಲ್",
    subtitle: "ಧ್ವನಿ-ನಿಯಂತ್ರಿತ ವಾಷಿಂಗ್ ಮೆಷಿನ್ ಶಕ್ತಿ ಮತ್ತು ಬಿಲ್ಲಿಂಗ್ ಮಾನಿಟರ್. ನೈಜ-ಸಮಯದ ಟೆಲಿಮೆಟ್ರಿ, ಸ್ವಯಂಚಾಲಿತ ರಿಲೇ ನಿಯಂತ್ರಣ ಮತ್ತು ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ನಿರ್ವಹಣೆ.",
    nodeStatus: "ESP32 ನೋಡ್ // ಆನ್‌ಲೈನ್",
    tabDashboard: "ಲೈವ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    tabGallery: "ಹಾರ್ಡ್‌ವೇರ್ ಘಟಕಗಳ ಗ್ಯಾಲರಿ",
    tabUnits: "8 ಘಟಕಗಳು",

    // Hero elements
    btnHeroActionText: "ಲೈವ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನೋಡಿ",
    heroTariffText: "ವಿದ್ಯುತ್ ದರ: ₹8.50/kWh",
    headingLiveMetrics: "ನೈಜ-ಸಮಯದ ಟೆಲಿಮೆಟ್ರಿ & ಶಕ್ತಿ",
    subtextLiveMetrics: "ನಿಖರವಾದ PZEM-004T AC ಮಾಪನಗಳು ಮತ್ತು ನಿರಂತರ ವಿದ್ಯುತ್ ಶುಲ್ಕ ಲೆಕ್ಕಾಚಾರ",

    // Meta labels
    relayLabel: "ರಿಲೇ ಲೋಡ್",
    tariffLabel: "ವಿದ್ಯುತ್ ದರ",
    sensorLabel: "PZEM ಸಂವೇದಕ",
    voiceLabel: "ಧ್ವನಿ ಎಂಜಿನ್",
    voiceEngineVal: "ಮಹಿಳಾ ಧ್ವನಿ (ಸಕ್ರಿಯ)",
    offline: "ಆಫ್‌ಲೈನ್",
    energized: "ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    active: "ಸಕ್ರಿಯ",

    // Alert Banner
    alertTitle: "ನಿರ್ಣಾಯಕ ನಿರ್ವಹಣೆ: ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ಎಚ್ಚರಿಕೆ ಸಕ್ರಿಯವಾಗಿದೆ!",
    alertDesc: "ವಾಶ್ ಸೈಕಲ್ ಮುಕ್ತಾಯವಾಗಿದೆ. ಡ್ರಮ್ ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್‌ನಲ್ಲಿ ಧೂಳು ಮತ್ತು ಕಸ ಪತ್ತೆಯಾಗಿದೆ. DFPlayer ಮಹಿಳಾ ಧ್ವನಿ ಎಚ್ಚರಿಕೆಯನ್ನು ನೀಡಲಾಗಿದೆ. ತೆರವುಗೊಳಿಸಲು ಮೈಕ್ರೋ ಲಿಮಿಟ್ ಸ್ವಿಚ್ ಅಥವಾ ಧ್ವನಿ ಆಜ್ಞೆ ಅಗತ್ಯವಿದೆ.",
    clearAlertBtn: "ಎಚ್ಚರಿಕೆಯನ್ನು ತೆರವುಗೊಳಿಸಿ",

    // Metric 1: Power
    catPower: "ನೈಜ-ಸಮಯದ ಬೇಡಿಕೆ",
    titlePower: "ಸಕ್ರಿಯ ಶಕ್ತಿ (ವ್ಯಾಟ್ಸ್)",
    labelMains: "AC ಮೇನ್ಸ್",
    labelCurrent: "ಕರೆಂಟ್",
    labelPF: "ಪವರ್ ಫ್ಯಾಕ್ಟರ್",
    gaugeMaxPower: "ಗರಿಷ್ಠ: 2200 W",

    // Metric 2: Energy
    catEnergy: "ಸಂಚಿತ ಬಳಕೆ",
    titleEnergy: "ಒಟ್ಟು ಶಕ್ತಿ (kWh)",
    labelEeprom: "PZEM ಆಂತರಿಕ ಲಾಗ್",
    labelWashUnits: "ವಾಶ್ ಯೂನಿಟ್‌ಗಳು",
    labelCo2: "ಅಂದಾಜು ಇಂಗಾಲ (CO₂)",
    labelEff: "ದಕ್ಷತೆ",
    valEff: "ಗ್ರೇಡ್ A+",

    // Metric 3: Bill
    catBill: "ನೈಜ-ಸಮಯದ ಸುಂಕ ಸಂಗ್ರಹ",
    titleBill: "ಲೆಕ್ಕಹಾಕಿದ ಬಿಲ್ (₹)",
    labelFormula: "ಸೂತ್ರ: ",
    labelCycleCost: "ಸೈಕಲ್ ವೆಚ್ಚ",
    labelHourlyBurn: "ಗಂಟೆಯ ವೆಚ್ಚ",
    labelBillingCycle: "ಬಿಲ್ಲಿಂಗ್ ಸೈಕಲ್",
    valBillingCycle: "ನೈಜ-ಸಮಯ",

    // Washer Center Stage
    headingDrumTelemetry: "ವಾಷಿಂಗ್ ಡ್ರಮ್ & ಮೋಟಾರ್ ಟೆಲಿಮೆಟ್ರಿ",
    subheadingDrumTelemetry: "5V ಆಪ್ಟೊಕಪ್ಲರ್ ರಿಲೇ ಸ್ಥಿತಿ & ಲೋಡ್ ಡೈನಾಮಿಕ್ಸ್",
    statusIdle: "ಸಿದ್ಧ // ಸ್ಟ್ಯಾಂಡ್‌ಬೈ",
    statusRunning: "ಚಾಲನೆಯಲ್ಲಿದೆ // ವಾಶ್ ಸೈಕಲ್",
    statusAlert: "ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ಎಚ್ಚರಿಕೆ",
    labelFilterCompartment: "ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ವಿಭಾಗ",

    // Timeline Steps
    step1Name: "ಸ್ಟ್ಯಾಂಡ್‌ಬೈ",
    step1Desc: "ರಿಲೇ ನಿಷ್ಕ್ರಿಯಗೊಂಡಿದೆ",
    step2Name: "ವಾಶ್ ಸೈಕಲ್",
    step2Desc: "ರಿಲೇ ಆನ್ (450W - 1200W)",
    step3Name: "ರಿನ್ಸ್ & ಸ್ಪಿನ್",
    step3Desc: "ವೇಗದ ಸ್ಪಿನ್ ಲೋಡ್ (1600W)",
    step4Name: "ಟಂಬ್ಲರ್ ಎಚ್ಚರಿಕೆ",
    step4Desc: "DFPlayer ಧ್ವನಿ ಜ್ಞಾಪನೆ",

    // LCD
    lcdBadgeTitle: "ಭೌತಿಕ 16x2 LCD (I2C: 0x27) ನೇರ ಪ್ರದರ್ಶನ",
    lcdBacklightLabel: "ಬ್ಯಾಕ್‌ಲೈಟ್ ಆನ್",
    lcdCaption: "ಬೋರ್ಡ್‌ನಲ್ಲಿರುವ ನಿಜವಾದ I2C 1602 LCD ಮಾಡ್ಯೂಲ್‌ನಲ್ಲಿ ನೇರ ಟೆಲಿಮೆಟ್ರಿ ಪ್ರದರ್ಶನ.",

    // DFPlayer Audio
    audioBroadcastTitle: "DFPlayer ಮಿನಿ ಆಡಿಯೋ & ಸ್ಪೀಕರ್ ಪ್ರಸಾರ",
    audioWaitingText: "ವಾಶ್ ಪೂರ್ಣಗೊಳ್ಳುವಿಕೆಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ. ಸ್ಪೀಕರ್: 8Ω 2W (ಮಹಿಳಾ ಧ್ವನಿ)",

    // Voice Stream
    streamTitle: "ವೆಬ್ ಸ್ಪೀಚ್ ಲೈವ್ ಪ್ರತಿಲೇಖನ",
    heardLabel: "ಕೇಳಲಾದ ನುಡಿಗಟ್ಟು:",
    transcriptPlaceholder: "ಮೈಕ್ರೊಫೋನ್ ಸಿದ್ಧವಾಗಿದೆ. ಆಜ್ಞೆಗಳನ್ನು ಮಾತನಾಡಿ: \"ತೊಳೆಯಲು ಪ್ರಾರಂಭಿಸಿ\", \"ತೊಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ\", \"ಟಂಬ್ಲರ್ ಸ್ವಚ್ಛಗೊಳಿಸಲಾಗಿದೆ\"...",

    // Controls Deck
    deckMainTitle: "ಕಮಾಂಡ್ ಮತ್ತು ಕಂಟ್ರೋಲ್ ಇಂಟರ್ಫೇಸ್",
    deckSubtitle: "ಮಹಿಳಾ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಅಥವಾ ತ್ವರಿತ ಹಾರ್ಡ್‌ವೇರ್ ಬಟನ್‌ಗಳ ಮೂಲಕ ನಿಯಂತ್ರಿಸಿ",
    chipsHint: "ಧ್ವನಿ ಆಜ್ಞೆಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ:",
    voiceBtnMain: "ಆಜ್ಞೆಯನ್ನು ಮಾತನಾಡಿ",
    voiceBtnSub: "ಮೈಕ್ರೊಫೋನ್ ಆನ್ ಮಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ (ಮಹಿಳಾ ಧ್ವನಿ)",
    voiceBtnListening: "ಆಲಿಸುತ್ತಿದೆ...",
    voiceBtnListeningSub: "ಹೇಳಿ: \"ತೊಳೆಯಲು ಪ್ರಾರಂಭಿಸಿ\", \"ತೊಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ\", \"ಟಂಬ್ಲರ್ ಸ್ವಚ್ಛಗೊಳಿಸಲಾಗಿದೆ\"",

    // Manual Buttons
    btnStartWashTitle: "ತೊಳೆಯಲು ಪ್ರಾರಂಭಿಸಿ",
    btnStartWashDesc: "5V ರಿಲೇ ಮಾಡ್ಯೂಲ್ ಆನ್ ಮಾಡಿ",
    btnStopWashTitle: "ತೊಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
    btnStopWashDesc: "230V AC ಲೋಡ್ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿ",
    btnClearTumblerTitle: "ಟಂಬ್ಲರ್ ಎಚ್ಚರಿಕೆ ತೆರವುಗೊಳಿಸಿ",
    clearTumblerInactive: "ನಿರ್ವಹಣೆ ಎಚ್ಚರಿಕೆ ನಿಷ್ಕ್ರಿಯವಾಗಿದೆ",
    clearTumblerActive: "ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ಸ್ವಚ್ಛಗೊಳಿಸಿ!",

    // Gallery Hero
    hwSectionTag: "ಹಾರ್ಡ್‌ವೇರ್ ಆರ್ಕಿಟೆಕ್ಚರ್",
    hwGalleryHeading: "ಕೋರ್ ಎಂಬೆಡೆಡ್ ಸಿಸ್ಟಮ್ ಘಟಕಗಳು",
    hwGalleryIntro: "ಧ್ವನಿ ನಿಯಂತ್ರಿತ ಮತ್ತು ಶಕ್ತಿ ಮಾನಿಟರಿಂಗ್ ವಾಷಿಂಗ್ ಮೆಷಿನ್ ಯೋಜನೆಯಲ್ಲಿ ಬಳಸಲಾದ 8 ಭೌತಿಕ ಹಾರ್ಡ್‌ವೇರ್ ಘಟಕಗಳ ಸಂಪೂರ್ಣ ವಿವರ.",
    statLabelModules: "ಹಾರ್ಡ್‌ವೇರ್ ಘಟಕಗಳು",
    statLabelVoltage: "ಮೇನ್ಸ್ ರೇಟಿಂಗ್",
    statLabelEsp: "ಡ್ಯುಯಲ್-ಕೋರ್ ESP32",

    // Hardware Cards Descriptions & Usages
    hw: {
      descLabel: "ವಿವರಣೆ",
      usageLabel: "ಯೋಜನೆಯಲ್ಲಿನ ಬಳಕೆ",
      1: {
        title: "ESP32 NodeMCU ಬೋರ್ಡ್",
        badge: "ಕೋರ್ ಕಂಟ್ರೋಲರ್",
        desc: "ಅಂತರ್ನಿರ್ಮಿತ ವೈ-ಫೈ, ಬ್ಲೂಟೂತ್ ಮತ್ತು ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಪಿನ್ ಹೆಡರ್‌ಗಳೊಂದಿಗೆ ಶಕ್ತಿಯುತ 32-ಬಿಟ್ ಮೈಕ್ರೊಕಂಟ್ರೋಲರ್. ಇದು ಡೇಟಾ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಮತ್ತು ವೆಬ್ ಸರ್ವರ್ ಅನ್ನು ಹೋಸ್ಟ್ ಮಾಡಲು ಮುಖ್ಯ ಮೆದುಳಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
        usage: "ವೆಬ್ ಸರ್ವರ್ ಅನ್ನು ರನ್ ಮಾಡುತ್ತದೆ, ಧ್ವನಿ ಆಜ್ಞೆಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ, PZEM-004T ಡೇಟಾವನ್ನು ಓದುತ್ತದೆ ಮತ್ತು ರಿಲೇ ಮತ್ತು ಸ್ಪೀಕರ್ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪ್ರಚೋದಿಸುತ್ತದೆ."
      },
      2: {
        title: "PZEM-004T V3.0 ಎನರ್ಜಿ ಮೀಟರ್ (CT ಕಾಯಿಲ್ ಜೊತೆಗೆ)",
        badge: "ಸಂವೇದಕ ಮಾಡ್ಯೂಲ್",
        desc: "AC ವೋಲ್ಟೇಜ್, ಕರೆಂಟ್, ಸಕ್ರಿಯ ಶಕ್ತಿ ಮತ್ತು ಶಕ್ತಿಯನ್ನು ಅಳೆಯಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಹೆಚ್ಚಿನ ನಿಖರತೆಯ ವಿದ್ಯುತ್ ಸಂವೇದಕ ಮಾಡ್ಯೂಲ್. ಆಕ್ರಮಣಕಾರಿಯಲ್ಲದ AC ಕರೆಂಟ್ ಸೆನ್ಸಿಂಗ್‌ಗಾಗಿ ಸ್ಪ್ಲಿಟ್-ಕೋರ್ ಕರೆಂಟ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್ ಅನ್ನು ಬಳಸುತ್ತದೆ.",
        usage: "ವಾಷಿಂಗ್ ಮೆಷಿನ್ ಲೋಡ್‌ನ ನೈಜ-ಸಮಯದ ವಿದ್ಯುತ್ ಬಳಕೆಯನ್ನು ಅಳೆಯುತ್ತದೆ ಮತ್ತು ಬಿಲ್ಲಿಂಗ್ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ESP32 ಗೆ ಡೇಟಾವನ್ನು ಕಳುಹಿಸುತ್ತದೆ."
      },
      3: {
        title: "5V 1-ಚಾನೆಲ್ ರಿಲೇ ಮಾಡ್ಯೂಲ್",
        badge: "ಸ್ವಿಚ್ ಆಕ್ಟಿವೇಟರ್",
        desc: "ಕಡಿಮೆ-ವೋಲ್ಟೇಜ್ DC ಮೈಕ್ರೊಕಂಟ್ರೋಲರ್‌ಗಳು ಹೆಚ್ಚಿನ-ವೋಲ್ಟೇಜ್ AC ಸಾಧನಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿಯಂತ್ರಿಸಲು ಅನುಮತಿಸುವ ಆಪ್ಟೊಕಪ್ಲರ್-ಐಸೊಲೇಟೆಡ್ ಎಲೆಕ್ಟ್ರೋಮೆಕಾನಿಕಲ್ ಸ್ವಿಚ್.",
        usage: "ಧ್ವನಿ ಆಜ್ಞೆಗಳ ಆಧಾರದ ಮೇಲೆ 230V AC ಲೋಡ್ (ಸಿಮ್ಯುಲೇಟೆಡ್ ವಾಷಿಂಗ್ ಮೆಷಿನ್) ಅನ್ನು ಆನ್ ಮತ್ತು ಆಫ್ ಮಾಡಲು ಮುಖ್ಯ ಪವರ್ ಸ್ವಿಚ್ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."
      },
      4: {
        title: "DFPlayer ಮಿನಿ MP3 ಮಾಡ್ಯೂಲ್",
        badge: "ಆಡಿಯೋ ಡಿಕೋಡರ್",
        desc: "ಮೈಕ್ರೋಎಸ್‌ಡಿ ಕಾರ್ಡ್‌ನಿಂದ ನೇರವಾಗಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದ .mp3 ಫೈಲ್‌ಗಳನ್ನು ಓದುವ ಮತ್ತು ಪ್ಲೇ ಮಾಡುವ ಕಾಂಪ್ಯಾಕ್ಟ್ ಹಾರ್ಡ್‌ವೇರ್ ಆಡಿಯೊ ಡಿಕೋಡರ್ ಬೋರ್ಡ್.",
        usage: "ವಾಶ್ ಸೈಕಲ್ ಮುಗಿದ ನಂತರ ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ಅನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಲು ಬಳಕೆದಾರರನ್ನು ಕೇಳುವ ಪೂರ್ವ-ರೆಕಾರ್ಡ್ ಮಾಡಿದ ಧ್ವನಿ ಆಡಿಯೊ ಜ್ಞಾಪನೆಗಳನ್ನು ಪ್ಲೇ ಮಾಡುತ್ತದೆ."
      },
      5: {
        title: "8Ω 2W ಮಿನಿ ಸ್ಪೀಕರ್",
        badge: "ಅಕೌಸ್ಟಿಕ್ ಔಟ್‌ಪುಟ್",
        desc: "ಕಡಿಮೆ-ಶಕ್ತಿಯ ಆಡಿಯೊ ಡ್ರೈವರ್‌ಗಳಿಂದ ಸ್ಪಷ್ಟ ಧ್ವನಿ ಭಾಷಣ ಪ್ಲೇಬ್ಯಾಕ್‌ಗಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲಾದ ಕಾಂಪ್ಯಾಕ್ಟ್ ಆಡಿಯೊ ಔಟ್‌ಪುಟ್ ಸಂಜ್ಞಾಪಕ.",
        usage: "DFPlayer ಮಿನಿ ಮಾಡ್ಯೂಲ್‌ನಿಂದ ಪ್ರಚೋದಿಸಲ್ಪಟ್ಟ ಧ್ವನಿ ಎಚ್ಚರಿಕೆಯ ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ಔಟ್‌ಪುಟ್ ಮಾಡುತ್ತದೆ."
      },
      6: {
        title: "16x2 ಕ್ಯಾರೆಕ್ಟರ್ LCD ಡಿಸ್ಪ್ಲೇ (I2C)",
        badge: "ಸ್ಥಳೀಯ ಪ್ರದರ್ಶನ",
        desc: "ವೈರಿಂಗ್ ಅನ್ನು ಕೇವಲ ಎರಡು ಸಿಗ್ನಲ್ ಪಿನ್‌ಗಳಿಗೆ ಇಳಿಸಲು I2C ಬ್ಯಾಕ್‌ಪ್ಯಾಕ್ ಅಡಾಪ್ಟರ್‌ನೊಂದಿಗೆ ಸಂಯೋಜಿಸಲ್ಪಟ್ಟ ಆಲ್ಫಾನ್ಯೂಮರಿಕ್ ಡಿಸ್ಪ್ಲೇ ಪರದೆ.",
        usage: "ಸ್ಥಳೀಯ ಲೈವ್ ರೀಡಿಂಗ್‌ಗಳಾದ ಪವರ್ (W), ಎನರ್ಜಿ (kWh), ಮತ್ತು ಲೆಕ್ಕಹಾಕಿದ ಬಿಲ್ (₹) ಅನ್ನು ನೇರವಾಗಿ ಬೋರ್ಡ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ."
      },
      7: {
        title: "ಮೈಕ್ರೋ ಲಿಮಿಟ್ ಸ್ವಿಚ್",
        badge: "ಸುರಕ್ಷತಾ ಸಂವೇದಕ",
        desc: "ಭೌತಿಕ ಒತ್ತಡವನ್ನು ಅನ್ವಯಿಸಿದಾಗ ಅಥವಾ ಬಿಡುಗಡೆ ಮಾಡಿದಾಗ ವಿದ್ಯುತ್ ಸಂಪರ್ಕವನ್ನು ಟಾಗಲ್ ಮಾಡುವ ಒಂದು ಚಿಕಣಿ ರೋಲರ್-ಲೀವರ್ ಯಾಂತ್ರಿಕ ಸ್ವಿಚ್.",
        usage: "ಧ್ವನಿ ನಿರ್ವಹಣೆ ಎಚ್ಚರಿಕೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆರವುಗೊಳಿಸಲು ಮತ್ತು ಮರುಹೊಂದಿಸಲು ಟಂಬ್ಲರ್ ಬಾಗಿಲಿನ ಫ್ಲಾಪ್ ತೆರೆದಾಗ ಪತ್ತೆ ಮಾಡುತ್ತದೆ."
      },
      8: {
        title: "AC 3-ಪಿನ್ ಪವರ್ ಕಾರ್ಡ್ (5A)",
        badge: "ಮೇನ್ಸ್ ಪವರ್",
        desc: "ಟೇಬಲ್‌ಟಾಪ್ ಉಪಕರಣಗಳನ್ನು ದೇಶೀಯ ವಾಲ್ ಸಾಕೆಟ್‌ಗಳಿಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಪರ್ಕಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಪ್ರಮಾಣಿತ ಗ್ರೌಂಡೆಡ್ ಮೂರು-ವೈರ್ AC ಕೇಬಲ್.",
        usage: "230V AC ಮೇನ್ಸ್ ಪವರ್ ಅನ್ನು ಹೈ-ವೋಲ್ಟೇಜ್ ಲೋಡ್ ಮತ್ತು 5V ವಿದ್ಯುತ್ ಸರಬರಾಜು ಎರಡಕ್ಕೂ ಸುರಕ್ಷಿತವಾಗಿ ಪೂರೈಸುತ್ತದೆ."
      }
    },

    // Spoken Audio Prompts (Female Voice in Kannada)
    audioStartWash: "ತೊಳೆಯುವ ಸೈಕಲ್ ಪ್ರಾರಂಭವಾಯಿತು. 5V ರಿಲೇ ಆನ್ ಆಗಿದೆ.",
    audioStopWash: "ತೊಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸಲಾಗಿದೆ. 230V AC ಸಂಪರ್ಕ ಕಡಿತಗೊಂಡಿದೆ.",
    audioTumblerAlert: "ಗಮನಿಸಿ: ವಾಶ್ ಪೂರ್ಣಗೊಂಡಿದೆ. ದಯವಿಟ್ಟು ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ಸ್ವಚ್ಛಗೊಳಿಸಿ.",
    audioTumblerCleared: "ಟಂಬ್ಲರ್ ಫಿಲ್ಟರ್ ಎಚ್ಚರಿಕೆ ತೆರವುಗೊಂಡಿದೆ. ಸಿಸ್ಟಮ್ ಸಿದ್ಧವಾಗಿದೆ.",
    audioLangSwitched: "ಕನ್ನಡ ಭಾಷೆಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ."
  }
};

// ==========================================
// SYSTEM STATE & CONFIGURATION
// ==========================================
const CONFIG = {
  TARIFF_RATE: 8.50, // ₹ per kWh
  MAINS_VOLTAGE_BASE: 230.0,
  STANDBY_POWER: 1.8,
  POWER_FACTOR_NOMINAL: 0.97,
  CYCLE_DURATION_SEC: 120,
  EEPROM_STORAGE_KEY: 'smart_washer_iot_telemetry_v1'
};

const state = {
  currentLang: 'en',
  activeTab: 'live-dashboard-section',
  isRelayOn: false,
  isWashing: false,
  isTumblerAlertActive: false,
  washPhase: 'idle',
  elapsedSeconds: 0,
  
  // Electrical Telemetry
  activePowerW: CONFIG.STANDBY_POWER,
  voltageV: CONFIG.MAINS_VOLTAGE_BASE,
  currentA: 0.01,
  powerFactor: CONFIG.POWER_FACTOR_NOMINAL,
  totalEnergyKWh: 0.0425,
  calculatedBillRs: 0.36,
  
  // Voice Recognition
  isListening: false,
  speechRecognitionAvailable: false,
  speechEngine: null,
  
  // Female Voice Synthesizer
  availableVoices: [],
  selectedFemaleVoice: null
};

// ==========================================
// DOM ELEMENT REFERENCES
// ==========================================
const DOM = {
  // Hero Titles
  titlePrefix: document.getElementById('titlePrefix'),
  titleYou: document.getElementById('titleYou'),
  titleSuffix: document.getElementById('titleSuffix'),
  headerSubtitle: document.getElementById('headerSubtitle'),
  espNodeStatus: document.getElementById('espNodeStatus'),
  btnHeroActionText: document.getElementById('btnHeroActionText'),
  heroTariffText: document.getElementById('heroTariffText'),
  btnScrollToDashboard: document.getElementById('btnScrollToDashboard'),
  btnHeaderCta: document.getElementById('btnHeaderCta'),
  dashboardMainArea: document.getElementById('dashboardMainArea'),

  // Language Switcher
  btnLangEn: document.getElementById('btnLangEn'),
  btnLangKn: document.getElementById('btnLangKn'),

  // Navigation Tabs
  tabLiveDashboard: document.getElementById('tabLiveDashboard'),
  tabHardwareGallery: document.getElementById('tabHardwareGallery'),
  tabLabelLiveDashboard: document.getElementById('tabLabelLiveDashboard'),
  tabLabelHardwareGallery: document.getElementById('tabLabelHardwareGallery'),
  tabChipCount: document.getElementById('tabChipCount'),
  sectionLiveDashboard: document.getElementById('live-dashboard-section'),
  sectionHardwareGallery: document.getElementById('hardware-gallery-section'),

  // Status Tags
  relayStatusTag: document.getElementById('relayStatusTag'),
  metaLabelRelay: document.getElementById('metaLabelRelay'),
  metaLabelTariff: document.getElementById('metaLabelTariff'),
  metaLabelSensor: document.getElementById('metaLabelSensor'),
  metaLabelVoice: document.getElementById('metaLabelVoice'),
  voiceEngineTitle: document.getElementById('voiceEngineTitle'),
  voiceEngineTitle2: document.getElementById('voiceEngineTitle2'),

  // Section Headers
  headingLiveMetrics: document.getElementById('headingLiveMetrics'),
  subtextLiveMetrics: document.getElementById('subtextLiveMetrics'),

  // Telemetry Cards Labels & Values
  catPower: document.getElementById('catPower'),
  titlePower: document.getElementById('titlePower'),
  powerValue: document.getElementById('powerValue'),
  powerGaugeFill: document.getElementById('powerGaugeFill'),
  gaugeMaxPower: document.getElementById('gaugeMaxPower'),
  labelMains: document.getElementById('labelMains'),
  labelCurrent: document.getElementById('labelCurrent'),
  labelPF: document.getElementById('labelPF'),
  voltageValue: document.getElementById('voltageValue'),
  currentValue: document.getElementById('currentValue'),
  pfValue: document.getElementById('pfValue'),

  catEnergy: document.getElementById('catEnergy'),
  titleEnergy: document.getElementById('titleEnergy'),
  energyValue: document.getElementById('energyValue'),
  energyBarFill: document.getElementById('energyBarFill'),
  labelEeprom: document.getElementById('labelEeprom'),
  eepromSync: document.getElementById('eepromSync'),
  labelWashUnits: document.getElementById('labelWashUnits'),
  washUnitsVal: document.getElementById('washUnitsVal'),
  labelCo2: document.getElementById('labelCo2'),
  co2Value: document.getElementById('co2Value'),
  labelEff: document.getElementById('labelEff'),
  valEff: document.getElementById('valEff'),

  catBill: document.getElementById('catBill'),
  titleBill: document.getElementById('titleBill'),
  billValue: document.getElementById('billValue'),
  labelFormula: document.getElementById('labelFormula'),
  labelCycleCost: document.getElementById('labelCycleCost'),
  cycleCostVal: document.getElementById('cycleCostVal'),
  labelHourlyBurn: document.getElementById('labelHourlyBurn'),
  hourlyBurnVal: document.getElementById('hourlyBurnVal'),
  labelBillingCycle: document.getElementById('labelBillingCycle'),
  valBillingCycle: document.getElementById('valBillingCycle'),

  // Tumbler Alert Elements
  tumblerAlertBanner: document.getElementById('tumblerAlertBanner'),
  alertTitleText: document.getElementById('alertTitleText'),
  alertDescText: document.getElementById('alertDescText'),
  btnQuickClearAlert: document.getElementById('btnQuickClearAlert'),
  filterFlapContainer: document.getElementById('filterFlapContainer'),
  labelFilterCompartment: document.getElementById('labelFilterCompartment'),
  btnInspectFlap: document.getElementById('btnInspectFlap'),

  // Washing Machine Model
  washingMachineGraphic: document.getElementById('washingMachineGraphic'),
  headingDrumTelemetry: document.getElementById('headingDrumTelemetry'),
  subheadingDrumTelemetry: document.getElementById('subheadingDrumTelemetry'),
  machineStateBadge: document.getElementById('machineStateBadge'),
  machineStateText: document.getElementById('machineStateText'),
  cycleTimerDisplay: document.getElementById('cycleTimerDisplay'),
  panelRelayLed: document.getElementById('panelRelayLed'),
  panelDfLed: document.getElementById('panelDfLed'),
  drumCylinder: document.getElementById('drumCylinder'),
  drumWater: document.getElementById('drumWater'),
  doorLatch: document.getElementById('doorLatch'),

  // Timeline Steps
  stepIdle: document.getElementById('stepIdle'),
  stepWash: document.getElementById('stepWash'),
  stepRinse: document.getElementById('stepRinse'),
  stepAlert: document.getElementById('stepAlert'),
  stepName1: document.getElementById('stepName1'),
  stepDesc1: document.getElementById('stepDesc1'),
  stepName2: document.getElementById('stepName2'),
  stepDesc2: document.getElementById('stepDesc2'),
  stepName3: document.getElementById('stepName3'),
  stepDesc3: document.getElementById('stepDesc3'),
  stepName4: document.getElementById('stepName4'),
  stepDesc4: document.getElementById('stepDesc4'),

  // Virtual LCD Display
  lcdBadgeTitle: document.getElementById('lcdBadgeTitle'),
  lcdBacklightLabel: document.getElementById('lcdBacklightLabel'),
  lcdCaptionText: document.getElementById('lcdCaptionText'),
  lcdLine1: document.getElementById('lcdLine1'),
  lcdLine2: document.getElementById('lcdLine2'),

  // DFPlayer & Audio Feedback
  audioBroadcastTitle: document.getElementById('audioBroadcastTitle'),
  dfAudioPill: document.getElementById('dfAudioPill'),
  dfAudioText: document.getElementById('dfAudioText'),
  audioWaveform: document.getElementById('audioWaveform'),

  // Web Speech Stream
  streamTitleText: document.getElementById('streamTitleText'),
  streamLangBadge: document.getElementById('streamLangBadge'),
  btnVoiceCommand: document.getElementById('btnVoiceCommand'),
  voiceBtnText: document.getElementById('voiceBtnText'),
  voiceBtnSub: document.getElementById('voiceBtnSub'),
  transcriptPlaceholder: document.getElementById('transcriptPlaceholder'),
  heardPhraseContainer: document.getElementById('heardPhraseContainer'),
  heardLabelTag: document.getElementById('heardLabelTag'),
  heardQuote: document.getElementById('heardQuote'),
  interpretedActionTag: document.getElementById('interpretedActionTag'),

  // Controls Deck
  deckMainTitle: document.getElementById('deckMainTitle'),
  deckSubtitle: document.getElementById('deckSubtitle'),
  chipsHintLabel: document.getElementById('chipsHintLabel'),

  // Manual Controls
  btnStartWash: document.getElementById('btnStartWash'),
  btnTitleStartWash: document.getElementById('btnTitleStartWash'),
  btnDescStartWash: document.getElementById('btnDescStartWash'),
  btnStopWash: document.getElementById('btnStopWash'),
  btnTitleStopWash: document.getElementById('btnTitleStopWash'),
  btnDescStopWash: document.getElementById('btnDescStopWash'),
  btnClearTumbler: document.getElementById('btnClearTumbler'),
  btnTitleClearTumbler: document.getElementById('btnTitleClearTumbler'),
  clearBtnDesc: document.getElementById('clearBtnDesc'),

  // Gallery Hero
  hwSectionTag: document.getElementById('hwSectionTag'),
  hwGalleryHeading: document.getElementById('hwGalleryHeading'),
  hwGalleryIntro: document.getElementById('hwGalleryIntro'),
  statLabelModules: document.getElementById('statLabelModules'),
  statLabelVoltage: document.getElementById('statLabelVoltage'),
  statLabelEsp: document.getElementById('statLabelEsp')
};

// ==========================================
// FEMALE VOICE & AUDIO SYNTHESIZER
// ==========================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.initVoices();
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initVoices() {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        state.availableVoices = window.speechSynthesis.getVoices();
        this.selectFemaleVoice();
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  selectFemaleVoice() {
    if (!state.availableVoices || state.availableVoices.length === 0) return null;

    const langTarget = state.currentLang === 'kn' ? 'kn' : 'en';

    // 1. Look for explicit Kannada voice if in Kannada mode
    if (langTarget === 'kn') {
      const knVoice = state.availableVoices.find(v => 
        v.lang.toLowerCase().includes('kn') || 
        v.name.toLowerCase().includes('kannada')
      );
      if (knVoice) {
        state.selectedFemaleVoice = knVoice;
        return knVoice;
      }
    }

    // 2. Look for Female voices (Zira, Samantha, Victoria, Google Female, Karen, Serena, Sapna, etc.)
    const femaleKeywords = ['female', 'zira', 'samantha', 'victoria', 'karen', 'serena', 'susan', 'veena', 'sapna', 'google uk english female'];
    const matchedFemale = state.availableVoices.find(v => {
      const name = v.name.toLowerCase();
      return femaleKeywords.some(kw => name.includes(kw)) && (v.lang.startsWith(langTarget) || v.lang.startsWith('en'));
    });

    if (matchedFemale) {
      state.selectedFemaleVoice = matchedFemale;
      return matchedFemale;
    }

    // 3. Fallback to any voice matching language
    const fallback = state.availableVoices.find(v => v.lang.startsWith(langTarget)) || state.availableVoices[0];
    state.selectedFemaleVoice = fallback;
    return fallback;
  }

  playRelayClick(isEngaging = true) {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.value = isEngaging ? 850 : 420;

      osc.type = 'square';
      osc.frequency.setValueAtTime(isEngaging ? 190 : 130, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {}
  }

  playBeep(freq = 660, type = 'sine', duration = 0.12) {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  // Female Voice Speech Synthesis (DFPlayer Mini simulation)
  speakDFPlayerPrompt(messageText) {
    DOM.dfAudioPill.textContent = state.currentLang === 'kn' ? 'ಪ್ಲೇ ಆಗುತ್ತಿದೆ (001.MP3)' : 'PLAYING 001.MP3';
    DOM.dfAudioPill.classList.add('playing');
    DOM.dfAudioText.textContent = `8Ω 2W Speaker [Female Voice]: "${messageText}"`;
    DOM.audioWaveform.classList.add('active');
    DOM.panelDfLed.classList.add('active');

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(messageText);

      this.selectFemaleVoice();
      if (state.selectedFemaleVoice) {
        utterance.voice = state.selectedFemaleVoice;
      }

      // Elevated feminine pitch (1.25) & smooth, natural pacing (0.96)
      utterance.pitch = 1.25;
      utterance.rate = 0.96;
      utterance.volume = 1.0;
      utterance.lang = state.currentLang === 'kn' ? 'kn-IN' : 'en-US';

      utterance.onend = () => {
        setTimeout(() => {
          DOM.dfAudioPill.textContent = state.currentLang === 'kn' ? 'ಸಿದ್ಧ' : 'READY';
          DOM.dfAudioPill.classList.remove('playing');
          DOM.audioWaveform.classList.remove('active');
          DOM.panelDfLed.classList.remove('active');
        }, 600);
      };

      utterance.onerror = () => {
        DOM.dfAudioPill.textContent = state.currentLang === 'kn' ? 'ಸಿದ್ಧ' : 'READY';
        DOM.dfAudioPill.classList.remove('playing');
        DOM.audioWaveform.classList.remove('active');
        DOM.panelDfLed.classList.remove('active');
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        DOM.dfAudioPill.textContent = state.currentLang === 'kn' ? 'ಸಿದ್ಧ' : 'READY';
        DOM.dfAudioPill.classList.remove('playing');
        DOM.audioWaveform.classList.remove('active');
        DOM.panelDfLed.classList.remove('active');
      }, 3500);
    }
  }
}

const sounds = new SoundEngine();

// ==========================================
// LANGUAGE SWITCHING LOGIC (English / ಕನ್ನಡ)
// ==========================================
function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'kn') return;
  state.currentLang = lang;

  if (lang === 'en') {
    DOM.btnLangEn.classList.add('active');
    DOM.btnLangKn.classList.remove('active');
    document.body.classList.remove('lang-kn');
    document.body.classList.add('lang-en');
  } else {
    DOM.btnLangKn.classList.add('active');
    DOM.btnLangEn.classList.remove('active');
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-kn');
  }

  applyTranslations();
  updateSpeechRecognitionLanguage();

  sounds.playBeep(784, 'sine', 0.1);
  sounds.speakDFPlayerPrompt(TRANSLATIONS[lang].audioLangSwitched);
}

function applyTranslations() {
  const t = TRANSLATIONS[state.currentLang];

  // Hero Titles
  if (DOM.titlePrefix) DOM.titlePrefix.textContent = t.titlePrefix;
  if (DOM.titleYou) DOM.titleYou.textContent = t.titleYou;
  if (DOM.titleSuffix) DOM.titleSuffix.textContent = t.titleSuffix;
  if (DOM.headerSubtitle) DOM.headerSubtitle.textContent = t.subtitle;
  if (DOM.espNodeStatus) DOM.espNodeStatus.textContent = t.nodeStatus;
  if (DOM.btnHeroActionText) DOM.btnHeroActionText.textContent = t.btnHeroActionText;
  if (DOM.heroTariffText) DOM.heroTariffText.textContent = t.heroTariffText;

  // Section Headings
  if (DOM.headingLiveMetrics) DOM.headingLiveMetrics.textContent = t.headingLiveMetrics;
  if (DOM.subtextLiveMetrics) DOM.subtextLiveMetrics.textContent = t.subtextLiveMetrics;

  // Nav tabs
  if (DOM.tabLabelLiveDashboard) DOM.tabLabelLiveDashboard.textContent = t.tabDashboard;
  if (DOM.tabLabelHardwareGallery) DOM.tabLabelHardwareGallery.textContent = t.tabGallery;
  if (DOM.tabChipCount) DOM.tabChipCount.textContent = t.tabUnits;

  // Status Bar Meta
  if (DOM.metaLabelRelay) DOM.metaLabelRelay.textContent = t.relayLabel;
  if (DOM.metaLabelTariff) DOM.metaLabelTariff.textContent = t.tariffLabel;
  if (DOM.metaLabelSensor) DOM.metaLabelSensor.textContent = t.sensorLabel;
  if (DOM.metaLabelVoice) DOM.metaLabelVoice.textContent = t.voiceLabel;
  if (DOM.voiceEngineTitle) DOM.voiceEngineTitle.textContent = t.voiceEngineVal;
  if (DOM.voiceEngineTitle2) DOM.voiceEngineTitle2.textContent = t.voiceEngineVal;

  if (state.isRelayOn) {
    DOM.relayStatusTag.textContent = t.energized;
  } else {
    DOM.relayStatusTag.textContent = t.offline;
  }

  // Alert Banner
  DOM.alertTitleText.textContent = t.alertTitle;
  DOM.alertDescText.textContent = t.alertDesc;
  DOM.btnQuickClearAlert.textContent = t.clearAlertBtn;

  // Telemetry Metric 1: Power
  DOM.catPower.textContent = t.catPower;
  DOM.titlePower.textContent = t.titlePower;
  DOM.gaugeMaxPower.textContent = t.gaugeMaxPower;
  DOM.labelMains.textContent = t.labelMains;
  DOM.labelCurrent.textContent = t.labelCurrent;
  DOM.labelPF.textContent = t.labelPF;

  // Telemetry Metric 2: Energy
  DOM.catEnergy.textContent = t.catEnergy;
  DOM.titleEnergy.textContent = t.titleEnergy;
  DOM.labelEeprom.textContent = t.labelEeprom;
  DOM.labelWashUnits.textContent = t.labelWashUnits;
  DOM.labelCo2.textContent = t.labelCo2;
  DOM.labelEff.textContent = t.labelEff;
  DOM.valEff.textContent = t.valEff;

  // Telemetry Metric 3: Bill
  DOM.catBill.textContent = t.catBill;
  DOM.titleBill.textContent = t.titleBill;
  DOM.labelFormula.textContent = t.labelFormula;
  DOM.labelCycleCost.textContent = t.labelCycleCost;
  DOM.labelHourlyBurn.textContent = t.labelHourlyBurn;
  DOM.labelBillingCycle.textContent = t.labelBillingCycle;
  DOM.valBillingCycle.textContent = t.valBillingCycle;

  // Washer Section
  DOM.headingDrumTelemetry.textContent = t.headingDrumTelemetry;
  DOM.subheadingDrumTelemetry.textContent = t.subheadingDrumTelemetry;
  DOM.labelFilterCompartment.textContent = t.labelFilterCompartment;

  if (state.isTumblerAlertActive) {
    DOM.machineStateText.textContent = t.statusAlert;
  } else if (state.isWashing) {
    DOM.machineStateText.textContent = t.statusRunning;
  } else {
    DOM.machineStateText.textContent = t.statusIdle;
  }

  // Timeline Steps
  DOM.stepName1.textContent = t.step1Name;
  DOM.stepDesc1.textContent = t.step1Desc;
  DOM.stepName2.textContent = t.step2Name;
  DOM.stepDesc2.textContent = t.step2Desc;
  DOM.stepName3.textContent = t.step3Name;
  DOM.stepDesc3.textContent = t.step3Desc;
  DOM.stepName4.textContent = t.step4Name;
  DOM.stepDesc4.textContent = t.step4Desc;

  // Virtual LCD & Audio
  DOM.lcdBadgeTitle.textContent = t.lcdBadgeTitle;
  DOM.lcdBacklightLabel.textContent = t.lcdBacklightLabel;
  DOM.lcdCaptionText.textContent = t.lcdCaption;
  DOM.audioBroadcastTitle.textContent = t.audioBroadcastTitle;
  if (!DOM.dfAudioPill.classList.contains('playing')) {
    DOM.dfAudioText.textContent = t.audioWaitingText;
  }

  // Speech Box & Controls Deck
  DOM.streamTitleText.textContent = t.streamTitle;
  DOM.heardLabelTag.textContent = t.heardLabel;
  DOM.transcriptPlaceholder.textContent = t.transcriptPlaceholder;
  DOM.deckMainTitle.textContent = t.deckMainTitle;
  DOM.deckSubtitle.textContent = t.deckSubtitle;
  DOM.chipsHintLabel.textContent = t.chipsHint;

  // Voice Button
  if (!state.isListening) {
    DOM.voiceBtnText.textContent = t.voiceBtnMain;
    DOM.voiceBtnSub.textContent = t.voiceBtnSub;
  } else {
    DOM.voiceBtnText.textContent = t.voiceBtnListening;
    DOM.voiceBtnSub.textContent = t.voiceBtnListeningSub;
  }

  // Manual Buttons
  DOM.btnTitleStartWash.textContent = t.btnStartWashTitle;
  DOM.btnDescStartWash.textContent = t.btnDescStartWash;
  DOM.btnTitleStopWash.textContent = t.btnStopWashTitle;
  DOM.btnDescStopWash.textContent = t.btnStopWashDesc;
  DOM.btnTitleClearTumbler.textContent = t.btnClearTumblerTitle;
  DOM.clearBtnDesc.textContent = state.isTumblerAlertActive ? t.clearTumblerActive : t.clearTumblerInactive;

  // Gallery Hero
  DOM.hwSectionTag.textContent = t.hwSectionTag;
  DOM.hwGalleryHeading.textContent = t.hwGalleryHeading;
  DOM.hwGalleryIntro.textContent = t.hwGalleryIntro;
  DOM.statLabelModules.textContent = t.statLabelModules;
  DOM.statLabelVoltage.textContent = t.statLabelVoltage;
  DOM.statLabelEsp.textContent = t.statLabelEsp;

  // Update All 8 Hardware Cards
  for (let i = 1; i <= 8; i++) {
    const cardData = t.hw[i];
    const titleEl = document.getElementById(`hwTitle${i}`);
    const badgeEl = document.getElementById(`hwBadge${i}`);
    const descLabelEl = document.getElementById(`hwLabelDesc${i}`);
    const descEl = document.getElementById(`hwDesc${i}`);
    const usageLabelEl = document.getElementById(`hwLabelUsage${i}`);
    const usageEl = document.getElementById(`hwUsage${i}`);

    if (titleEl) titleEl.textContent = cardData.title;
    if (badgeEl) badgeEl.textContent = cardData.badge;
    if (descLabelEl) descLabelEl.textContent = t.hw.descLabel;
    if (descEl) descEl.textContent = cardData.desc;
    if (usageLabelEl) usageLabelEl.textContent = t.hw.usageLabel;
    if (usageEl) usageEl.textContent = cardData.usage;
  }

  // Voice simulation chips highlighting
  document.querySelectorAll('.phrase-chip').forEach(chip => {
    if (chip.classList.contains(`chip-${state.currentLang}`)) {
      chip.style.borderColor = 'var(--neon-blue)';
    } else {
      chip.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }
  });

  renderVirtualLCD();
}

// ==========================================
// TELEMETRY SIMULATION ENGINE (PZEM-004T)
// ==========================================
let telemetryInterval = null;
let cycleTimerInterval = null;
let cycleProgressSeconds = 0;

function updateTelemetryValues() {
  if (state.isRelayOn && state.isWashing) {
    cycleProgressSeconds++;
    const cyclePhaseTime = cycleProgressSeconds % 60;
    
    if (cyclePhaseTime < 25) {
      state.washPhase = 'wash';
      const baseAgitation = 450 + Math.sin(cycleProgressSeconds * 1.5) * 120;
      state.activePowerW = Math.max(280, baseAgitation + (Math.random() * 40 - 20));
      state.powerFactor = 0.92 + Math.random() * 0.04;
    } else if (cyclePhaseTime < 45) {
      state.washPhase = 'rinse';
      const baseRinse = 750 + Math.sin(cycleProgressSeconds * 2.0) * 150;
      state.activePowerW = Math.max(500, baseRinse + (Math.random() * 50 - 25));
      state.powerFactor = 0.94 + Math.random() * 0.03;
    } else {
      state.washPhase = 'spin';
      const baseSpin = 1450 + Math.sin(cycleProgressSeconds * 3.0) * 180;
      state.activePowerW = Math.min(2100, Math.max(1100, baseSpin + (Math.random() * 60 - 30)));
      state.powerFactor = 0.97 + Math.random() * 0.02;
    }
  } else {
    state.washPhase = 'idle';
    state.activePowerW = CONFIG.STANDBY_POWER + (Math.random() * 0.4 - 0.2);
    state.powerFactor = 0.98;
  }

  state.voltageV = CONFIG.MAINS_VOLTAGE_BASE + (Math.sin(Date.now() / 3000) * 1.8) + (Math.random() * 0.4 - 0.2);
  state.currentA = state.activePowerW / (state.voltageV * state.powerFactor);

  const deltaHours = 0.5 / 3600;
  const deltaKWh = (state.activePowerW * deltaHours) / 1000;
  state.totalEnergyKWh += deltaKWh;
  state.calculatedBillRs = state.totalEnergyKWh * CONFIG.TARIFF_RATE;

  renderTelemetryDOM();
  renderVirtualLCD();
}

function renderTelemetryDOM() {
  DOM.powerValue.textContent = state.activePowerW.toFixed(1);
  const powerPercentage = Math.min(100, (state.activePowerW / 2200) * 100);
  if (DOM.powerGaugeFill) DOM.powerGaugeFill.style.width = `${Math.max(2, powerPercentage)}%`;
  DOM.voltageValue.textContent = `${state.voltageV.toFixed(1)} V`;
  DOM.currentValue.textContent = `${state.currentA.toFixed(2)} A`;
  DOM.pfValue.textContent = state.powerFactor.toFixed(2);

  DOM.energyValue.textContent = state.totalEnergyKWh.toFixed(4);
  const energyMeterPercent = (state.totalEnergyKWh % 5) / 5 * 100;
  if (DOM.energyBarFill) DOM.energyBarFill.style.width = `${Math.max(5, energyMeterPercent)}%`;
  DOM.washUnitsVal.textContent = `${state.totalEnergyKWh.toFixed(3)} kWh`;
  DOM.co2Value.textContent = `${(state.totalEnergyKWh * 0.82).toFixed(2)} kg`;

  DOM.billValue.textContent = state.calculatedBillRs.toFixed(2);
  DOM.cycleCostVal.textContent = `₹${(state.calculatedBillRs).toFixed(2)}`;
  const hourlyRateRs = (state.activePowerW / 1000) * CONFIG.TARIFF_RATE;
  DOM.hourlyBurnVal.textContent = `₹${hourlyRateRs.toFixed(2)}/h`;
}

function renderVirtualLCD() {
  const powerStr = Math.round(state.activePowerW).toString().padStart(4, '0');
  const energyStr = state.totalEnergyKWh.toFixed(2).padStart(4, '0');
  const line1 = `P:${powerStr}W E:${energyStr}k`.slice(0, 16);

  let line2 = '';
  if (state.isTumblerAlertActive) {
    line2 = 'ALERT: CLEAN TUMB';
  } else if (state.isWashing) {
    const billStr = state.calculatedBillRs.toFixed(2);
    line2 = `BILL:Rs.${billStr}`.padEnd(16, ' ');
  } else {
    line2 = `SYS:READY Rs${state.calculatedBillRs.toFixed(2)}`.padEnd(16, ' ');
  }

  DOM.lcdLine1.textContent = line1.padEnd(16, ' ');
  DOM.lcdLine2.textContent = line2.slice(0, 16).padEnd(16, ' ');
}

// ==========================================
// MACHINE CONTROL & CYCLE STATE LOGIC
// ==========================================
function startWash() {
  if (state.isWashing) return;

  state.isWashing = true;
  state.isRelayOn = true;
  sounds.playRelayClick(true);
  sounds.playBeep(880, 'sine', 0.15);

  const t = TRANSLATIONS[state.currentLang];

  DOM.relayStatusTag.textContent = t.energized;
  DOM.relayStatusTag.classList.add('active');

  DOM.panelRelayLed.classList.add('active');
  DOM.washingMachineGraphic.classList.add('running');
  DOM.washingMachineGraphic.classList.remove('has-alert');

  DOM.machineStateBadge.className = 'status-pill washing';
  DOM.machineStateText.textContent = t.statusRunning;

  DOM.drumCylinder.className = 'drum-cylinder agitating';
  DOM.drumWater.classList.add('filled');

  DOM.stepIdle.classList.remove('active');
  DOM.stepWash.classList.add('active');
  DOM.stepRinse.classList.remove('active');
  DOM.stepAlert.classList.remove('active');

  startCycleTimer();

  const phraseRecorded = state.currentLang === 'kn' ? 'ತೊಳೆಯಲು ಪ್ರಾರಂಭಿಸಿ' : 'Start Wash';
  const actionRecorded = state.currentLang === 'kn' ? 'ಕ್ರಿಯೆ: ವಾಶ್ ಪ್ರಾರಂಭವಾಯಿತು' : 'ACTION: WASH STARTED';
  recordVoiceAction(phraseRecorded, actionRecorded);

  sounds.speakDFPlayerPrompt(t.audioStartWash);
}

function stopWash(triggerAlert = true) {
  state.isWashing = false;
  state.isRelayOn = false;
  sounds.playRelayClick(false);
  sounds.playBeep(440, 'triangle', 0.2);

  const t = TRANSLATIONS[state.currentLang];

  DOM.relayStatusTag.textContent = t.offline;
  DOM.relayStatusTag.classList.remove('active');

  DOM.panelRelayLed.classList.remove('active');
  DOM.washingMachineGraphic.classList.remove('running');

  DOM.drumCylinder.className = 'drum-cylinder';
  DOM.drumWater.classList.remove('filled');

  stopCycleTimer();

  if (triggerAlert) {
    activateTumblerAlert();
  } else {
    DOM.machineStateBadge.className = 'status-pill';
    DOM.machineStateText.textContent = t.statusIdle;
    DOM.stepIdle.classList.add('active');
    DOM.stepWash.classList.remove('active');
    DOM.stepRinse.classList.remove('active');
    DOM.stepAlert.classList.remove('active');
  }

  const phraseRecorded = state.currentLang === 'kn' ? 'ತೊಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ' : 'Stop Wash';
  const actionRecorded = state.currentLang === 'kn' ? 'ಕ್ರಿಯೆ: ವಾಶ್ ನಿಲ್ಲಿಸಲಾಗಿದೆ' : 'ACTION: WASH STOPPED';
  recordVoiceAction(phraseRecorded, actionRecorded);
}

function activateTumblerAlert() {
  state.isTumblerAlertActive = true;
  const t = TRANSLATIONS[state.currentLang];

  DOM.tumblerAlertBanner.classList.add('active');
  DOM.washingMachineGraphic.classList.add('has-alert');
  DOM.filterFlapContainer.classList.add('alert-mode');

  DOM.machineStateBadge.className = 'status-pill alerting';
  DOM.machineStateText.textContent = t.statusAlert;

  DOM.stepIdle.classList.remove('active');
  DOM.stepWash.classList.remove('active');
  DOM.stepRinse.classList.remove('active');
  DOM.stepAlert.classList.add('active');

  DOM.btnClearTumbler.disabled = false;
  DOM.btnClearTumbler.classList.add('alert-active');
  DOM.clearBtnDesc.textContent = t.clearTumblerActive;

  sounds.speakDFPlayerPrompt(t.audioTumblerAlert);
}

function clearTumblerAlert() {
  if (!state.isTumblerAlertActive) return;

  state.isTumblerAlertActive = false;
  sounds.playBeep(987, 'sine', 0.12);

  const t = TRANSLATIONS[state.currentLang];

  DOM.tumblerAlertBanner.classList.remove('active');
  DOM.washingMachineGraphic.classList.remove('has-alert');
  DOM.filterFlapContainer.classList.remove('alert-mode');

  DOM.machineStateBadge.className = 'status-pill';
  DOM.machineStateText.textContent = t.statusIdle;

  DOM.stepAlert.classList.remove('active');
  DOM.stepIdle.classList.add('active');

  DOM.btnClearTumbler.disabled = true;
  DOM.btnClearTumbler.classList.remove('alert-active');
  DOM.clearBtnDesc.textContent = t.clearTumblerInactive;

  const phraseRecorded = state.currentLang === 'kn' ? 'ಟಂಬ್ಲರ್ ಸ್ವಚ್ಛಗೊಳಿಸಲಾಗಿದೆ' : 'Tumbler Cleaned';
  const actionRecorded = state.currentLang === 'kn' ? 'ಕ್ರಿಯೆ: ಎಚ್ಚರಿಕೆ ತೆರವುಗೊಂಡಿದೆ' : 'ACTION: TUMBLER ALERT CLEARED';
  recordVoiceAction(phraseRecorded, actionRecorded);

  sounds.speakDFPlayerPrompt(t.audioTumblerCleared);
}

// Cycle Timer
function startCycleTimer() {
  state.elapsedSeconds = 0;
  updateTimerDisplay();
  clearInterval(cycleTimerInterval);
  cycleTimerInterval = setInterval(() => {
    state.elapsedSeconds++;
    updateTimerDisplay();

    if (state.elapsedSeconds === 25) {
      DOM.stepWash.classList.remove('active');
      DOM.stepRinse.classList.add('active');
      DOM.drumCylinder.className = 'drum-cylinder spinning-fast';
      sounds.playBeep(700, 'sine', 0.1);
    } else if (state.elapsedSeconds >= CONFIG.CYCLE_DURATION_SEC) {
      stopWash(true);
    }
  }, 1000);
}

function stopCycleTimer() {
  clearInterval(cycleTimerInterval);
  state.elapsedSeconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(state.elapsedSeconds / 60).toString().padStart(2, '0');
  const secs = (state.elapsedSeconds % 60).toString().padStart(2, '0');
  DOM.cycleTimerDisplay.textContent = `${mins}:${secs}`;
}

// ==========================================
// WEB SPEECH API & VOICE RECOGNITION (EN + KN)
// ==========================================
function initSpeechRecognition() {
  const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognitionClass) {
    state.speechRecognitionAvailable = true;
    const recognition = new SpeechRecognitionClass();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = state.currentLang === 'kn' ? 'kn-IN' : 'en-US';

    recognition.onstart = () => {
      state.isListening = true;
      updateVoiceButtonUI();
    };

    recognition.onresult = (event) => {
      const lastIndex = event.results.length - 1;
      const transcript = event.results[lastIndex][0].transcript.trim();
      processVoiceCommand(transcript);
    };

    recognition.onerror = (err) => {
      console.warn('Speech recognition status:', err.error);
      if (err.error === 'not-allowed') {
        state.isListening = false;
        updateVoiceButtonUI();
        DOM.transcriptPlaceholder.textContent = state.currentLang === 'kn'
          ? 'ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ. ಮೇಲಿನ ಧ್ವನಿ ಚಿಪ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ!'
          : 'Microphone permission blocked. You can still click the voice simulation chips above!';
      }
    };

    recognition.onend = () => {
      if (state.isListening) {
        try { recognition.start(); } catch (e) {}
      } else {
        updateVoiceButtonUI();
      }
    };

    state.speechEngine = recognition;
    DOM.streamLangBadge.textContent = state.currentLang === 'kn' ? 'kn-IN (ಕನ್ನಡ)' : 'en-US (English)';
  } else {
    state.speechRecognitionAvailable = false;
    DOM.voiceBtnSub.textContent = 'Speech API fallback active';
  }
}

function updateSpeechRecognitionLanguage() {
  if (state.speechEngine) {
    const wasListening = state.isListening;
    if (wasListening) {
      state.speechEngine.stop();
    }
    state.speechEngine.lang = state.currentLang === 'kn' ? 'kn-IN' : 'en-US';
    DOM.streamLangBadge.textContent = state.currentLang === 'kn' ? 'kn-IN (ಕನ್ನಡ)' : 'en-US (English)';
    if (wasListening) {
      setTimeout(() => state.speechEngine.start(), 200);
    }
  }
}

function toggleVoiceListening() {
  sounds.init();
  if (state.speechRecognitionAvailable && state.speechEngine) {
    if (!state.isListening) {
      try {
        state.speechEngine.start();
        state.isListening = true;
        sounds.playBeep(523, 'sine', 0.15);
      } catch (e) {
        state.isListening = false;
      }
    } else {
      state.isListening = false;
      state.speechEngine.stop();
      sounds.playBeep(392, 'sine', 0.15);
    }
  } else {
    state.isListening = !state.isListening;
    sounds.playBeep(600, 'sine', 0.15);
  }
  updateVoiceButtonUI();
}

function updateVoiceButtonUI() {
  const t = TRANSLATIONS[state.currentLang];
  if (state.isListening) {
    DOM.btnVoiceCommand.classList.add('listening');
    DOM.voiceBtnText.textContent = t.voiceBtnListening;
    DOM.voiceBtnSub.textContent = t.voiceBtnListeningSub;
    DOM.transcriptPlaceholder.textContent = state.currentLang === 'kn'
      ? 'ಮೈಕ್ರೊಫೋನ್ ಆಲಿಸುತ್ತಿದೆ... ನಿಮ್ಮ ಆಜ್ಞೆಯನ್ನು ಮಾತನಾಡಿ...'
      : 'Microphone active! Speak command now (Female Voice)...';
  } else {
    DOM.btnVoiceCommand.classList.remove('listening');
    DOM.voiceBtnText.textContent = t.voiceBtnMain;
    DOM.voiceBtnSub.textContent = t.voiceBtnSub;
  }
}

function processVoiceCommand(rawPhrase) {
  const phrase = rawPhrase.toLowerCase();
  
  const isStart = phrase.includes('start') || phrase.includes('begin') || phrase.includes('turn on') ||
                  phrase.includes('ಪ್ರಾರಂಭಿಸಿ') || phrase.includes('ಸ್ಟಾರ್ಟ್') || phrase.includes('ತೊಳೆಯಲು') ||
                  phrase.includes('ಚಾಲು');

  const isStop = phrase.includes('stop') || phrase.includes('halt') || phrase.includes('turn off') || phrase.includes('finish') ||
                 phrase.includes('ನಿಲ್ಲಿಸಿ') || phrase.includes('ಸ್ಟಾಪ್') || phrase.includes('ಮುಗಿಸಿ') || phrase.includes('ಆಫ್');

  const isClean = phrase.includes('tumbler') || phrase.includes('clean') || phrase.includes('filter') || phrase.includes('clear') ||
                  phrase.includes('ಸ್ವಚ್ಛ') || phrase.includes('ಟಂಬ್ಲರ್') || phrase.includes('ತೆರವು');

  if (isStart) {
    startWash();
    const actionLabel = state.currentLang === 'kn' ? 'ಕ್ರಿಯೆ: ವಾಶ್ ಪ್ರಾರಂಭವಾಯಿತು' : 'ACTION: WASH STARTED';
    recordVoiceAction(rawPhrase, actionLabel);
  } else if (isStop) {
    stopWash(true);
    const actionLabel = state.currentLang === 'kn' ? 'ಕ್ರಿಯೆ: ವಾಶ್ ನಿಲ್ಲಿಸಲಾಗಿದೆ' : 'ACTION: WASH STOPPED';
    recordVoiceAction(rawPhrase, actionLabel);
  } else if (isClean) {
    clearTumblerAlert();
    const actionLabel = state.currentLang === 'kn' ? 'ಕ್ರಿಯೆ: ಎಚ್ಚರಿಕೆ ತೆರವುಗೊಂಡಿದೆ' : 'ACTION: TUMBLER ALERT CLEARED';
    recordVoiceAction(rawPhrase, actionLabel);
  } else {
    const unknownLabel = state.currentLang === 'kn' ? 'ತಿಳಿಯದ ಆಜ್ಞೆ' : 'UNKNOWN COMMAND';
    recordVoiceAction(rawPhrase, unknownLabel);
    sounds.playBeep(250, 'sawtooth', 0.2);
  }
}

function recordVoiceAction(phrase, actionText) {
  DOM.transcriptPlaceholder.style.display = 'none';
  DOM.heardPhraseContainer.style.display = 'flex';
  DOM.heardQuote.textContent = `"${phrase}"`;
  DOM.interpretedActionTag.textContent = actionText;

  const streamBox = DOM.heardPhraseContainer.parentElement;
  streamBox.style.borderColor = '#00f2fe';
  setTimeout(() => {
    streamBox.style.borderColor = 'rgba(0, 242, 254, 0.2)';
  }, 1200);
}

// ==========================================
// NAVIGATION & TABS LOGIC
// ==========================================
function setupNavigation() {
  DOM.tabLiveDashboard.addEventListener('click', () => switchTab('live-dashboard-section'));
  DOM.tabHardwareGallery.addEventListener('click', () => switchTab('hardware-gallery-section'));

  // Scroll to dashboard buttons
  if (DOM.btnScrollToDashboard) {
    DOM.btnScrollToDashboard.addEventListener('click', () => {
      DOM.dashboardMainArea.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (DOM.btnHeaderCta) {
    DOM.btnHeaderCta.addEventListener('click', () => {
      DOM.dashboardMainArea.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function switchTab(targetSectionId) {
  sounds.playBeep(650, 'sine', 0.08);

  if (targetSectionId === 'live-dashboard-section') {
    DOM.tabLiveDashboard.classList.add('active');
    DOM.tabLiveDashboard.setAttribute('aria-selected', 'true');
    DOM.tabHardwareGallery.classList.remove('active');
    DOM.tabHardwareGallery.setAttribute('aria-selected', 'false');

    DOM.sectionLiveDashboard.style.display = 'block';
    DOM.sectionHardwareGallery.style.display = 'none';
  } else {
    DOM.tabHardwareGallery.classList.add('active');
    DOM.tabHardwareGallery.setAttribute('aria-selected', 'true');
    DOM.tabLiveDashboard.classList.remove('active');
    DOM.tabLiveDashboard.setAttribute('aria-selected', 'false');

    DOM.sectionLiveDashboard.style.display = 'none';
    DOM.sectionHardwareGallery.style.display = 'block';
  }
}

// ==========================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================
function setupEventListeners() {
  DOM.btnLangEn.addEventListener('click', () => switchLanguage('en'));
  DOM.btnLangKn.addEventListener('click', () => switchLanguage('kn'));

  DOM.btnVoiceCommand.addEventListener('click', toggleVoiceListening);

  DOM.btnStartWash.addEventListener('click', () => startWash());
  DOM.btnStopWash.addEventListener('click', () => stopWash(true));
  DOM.btnClearTumbler.addEventListener('click', () => clearTumblerAlert());
  DOM.btnQuickClearAlert.addEventListener('click', () => clearTumblerAlert());

  DOM.btnInspectFlap.addEventListener('click', () => {
    sounds.playBeep(750, 'square', 0.08);
    clearTumblerAlert();
  });

  DOM.doorLatch.addEventListener('click', () => {
    sounds.playBeep(500, 'square', 0.08);
    clearTumblerAlert();
  });

  document.querySelectorAll('.phrase-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const phrase = e.target.getAttribute('data-phrase');
      processVoiceCommand(phrase);
    });
  });
}

/* Ambient Full-Page Tiny Bubbles & Dots Spawner */
function initGlitterParticleSystem() {
  const layer = document.getElementById('glitterParticlesLayer');
  if (!layer) return;

  function spawnTinyDot() {
    const el = document.createElement('div');
    el.className = 'tiny-bubble-dot';

    // Random X position across full width
    const posX = Math.random() * 95;
    // Random Y starting near middle/lower screen
    const posY = Math.random() * 85 + 10;
    // Tiny size between 3px and 7px
    const size = Math.floor(Math.random() * 5) + 3;
    // Random duration
    const duration = Math.random() * 3 + 4.5;

    el.style.left = posX + 'vw';
    el.style.top = posY + 'vh';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.animationDuration = duration + 's';

    layer.appendChild(el);

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, duration * 1000);
  }

  // Initial batch
  for (let i = 0; i < 10; i++) {
    setTimeout(spawnTinyDot, i * 350);
  }

  // Continuous background spawner
  setInterval(spawnTinyDot, 650);
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupEventListeners();
  initSpeechRecognition();
  sounds.initVoices();
  initGlitterParticleSystem();

  telemetryInterval = setInterval(updateTelemetryValues, 500);

  applyTranslations();
  updateTelemetryValues();
});
