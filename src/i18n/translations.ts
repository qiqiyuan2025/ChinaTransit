export type Locale = 'en' | 'ja' | 'ko' | 'fr';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
};

export const locales: Locale[] = ['en', 'ja', 'ko', 'fr'];

export interface Translations {
  nav: { visaCheck: string; payments: string; esim: string; apps: string };
  footer: { disclaimer: string; disclaimerLocal: string };
  meta: {
    siteTagline: string;
    defaultDescription: string;
    checkDescription: string;
    payDescription: string;
    esimDescription: string;
    appsDescription: string;
  };
  home: {
    subtitleLocal: string;
    title: string;
    description: string;
    cta: string;
    visaCheckerEmoji: string;
    visaCheckerTitle: string;
    visaCheckerDesc: string;
    paymentEmoji: string;
    paymentTitle: string;
    paymentDesc: string;
    appsEmoji: string;
    appsTitle: string;
    appsDesc: string;
  };
  visaChecker: {
    subtitleLocal: string;
    title: string;
    passportQuestion: string;
    selectNationality: string;
    eligibleCount: string;
    continue: string;
    passport: string;
    entryQuestion: string;
    selectEntry: string;
    exitQuestion: string;
    exitDescription: string;
    selectExit: string;
    eligible: string;
    eligibleLocal: string;
    duration: string;
    hours: string;
    clockStart: string;
    accessibleProvinces: string;
    importantRules: string;
    arrivalCard: string;
    checkAnother: string;
    notEligibleLocal: string;
    back: string;
    errors: {
      NATIONALITY_INELIGIBLE: { title: string; hint: string };
      PORT_PAIR_INVALID: { title: string; hint: string };
      SAME_COUNTRY_EXIT: { title: string; hint: string };
      default: { title: string };
    };
  };
  paymentWizard: {
    subtitleLocal: string;
    title: string;
    description: string;
    back: string;
    startOver: string;
    step: string;
    startOverDifferent: string;
    tips: string;
    error: string;
    nodes: Record<string, {
      text: string;
      options?: string[];
      actions?: string[];
      troubleshooting?: string[];
    }>;
  };
  esim: {
    subtitleLocal: string;
    title: string;
    subtitle: string;
    esimRecommended: string;
    esimDesc: string;
    airaloTitle: string;
    airaloDesc: string;
    nomadTitle: string;
    nomadDesc: string;
    airportSimTitle: string;
    airportSimDesc: string;
    airportSimPros: string[];
    airportSimCons: string[];
    vpnTitle: string;
    vpnDesc: string;
    comparisonHeaders: { feature: string; esim: string; airportSim: string };
    comparisonRows: { feature: string; esim: string; airportSim: string }[];
  };
  apps: {
    subtitleLocal: string;
    title: string;
    subtitle: string;
    mustHave: string;
    recommended: string;
    niceToHave: string;
    checklistTitle: string;
    tipLabel: string;
    items: {
      name: string;
      nameCn: string;
      category: string;
      description: string;
      tip: string;
    }[];
    checklist: string[];
  };
}

const en: Translations = {
  nav: { visaCheck: 'Visa Check', payments: 'Payments', esim: 'eSIM', apps: 'Apps' },
  footer: {
    disclaimer: 'Information is for reference only. Always verify with official sources before travel.',
    disclaimerLocal: '仅供参考 · 出行前请以官方信息为准',
  },
  meta: {
    siteTagline: 'Is China on your way?',
    defaultDescription: "Check your eligibility for China's 240-hour visa-free transit policy. Payment setup, eSIM guide, and essential apps for your trip.",
    checkDescription: "Check if your nationality qualifies for China's 240-hour visa-free transit. Enter your route and get instant eligibility, allowed provinces, and countdown.",
    payDescription: 'Set up WeChat Pay, Alipay, or tap-to-pay before you land in China. A quick decision tree to get you paying like a local.',
    esimDescription: 'Get connected in China from touchdown. Compare eSIM providers, coverage, and setup guides for hassle-free mobile data.',
    appsDescription: 'The 5 apps you actually need for China. Maps, translation, transport, and payments — download before you land.',
  },
  home: {
    subtitleLocal: '中国过境免签 240 小时',
    title: 'Is China on your way?',
    description: "Check if you qualify for China's 240-hour visa-free transit. Get your payments, eSIM, and apps sorted before you land.",
    cta: 'Check My Eligibility',
    visaCheckerEmoji: '🛂',
    visaCheckerTitle: 'Visa Checker',
    visaCheckerDesc: 'Enter your nationality and route. Get instant eligibility, allowed provinces, and your 240-hour countdown.',
    paymentEmoji: '💳',
    paymentTitle: 'Payment Setup',
    paymentDesc: 'WeChat Pay, Alipay, or tap-to-pay? A quick decision tree to get you paying like a local.',
    appsEmoji: '📱',
    appsTitle: 'Essential Apps',
    appsDesc: 'The 5 apps you actually need, plus eSIM setup so you\'re connected from touchdown.',
  },
  visaChecker: {
    subtitleLocal: '过境免签资格查询',
    title: 'Visa-Free Transit Check',
    passportQuestion: 'What passport do you hold?',
    selectNationality: 'Select your nationality...',
    eligibleCount: '55 nationalities are currently eligible for the 240-hour transit visa-free policy.',
    continue: 'Continue →',
    passport: 'Passport',
    entryQuestion: 'Where will you enter China?',
    selectEntry: 'Select entry port...',
    exitQuestion: 'Where are you heading after China?',
    exitDescription: 'Must be a different country/region from your origin. Hong Kong, Macau, and Taiwan count as separate regions.',
    selectExit: 'Select exit destination...',
    eligible: 'Eligible',
    eligibleLocal: '符合过境免签条件',
    duration: 'Duration',
    hours: 'hours',
    clockStart: '',
    accessibleProvinces: 'Accessible Provinces',
    importantRules: 'Important Rules',
    arrivalCard: 'Fill Out Digital Arrival Card →',
    checkAnother: 'Check another route',
    notEligibleLocal: '不符合条件',
    back: 'Back',
    errors: {
      NATIONALITY_INELIGIBLE: {
        title: 'Not Eligible',
        hint: 'Your nationality is not currently covered by the 240-hour transit visa-free policy. You may need a standard visa — check with your nearest Chinese embassy or consulate.',
      },
      PORT_PAIR_INVALID: {
        title: 'Invalid Route',
        hint: 'The entry and exit ports must be within the same regional group. Try selecting a different entry port or check which ports belong to each region.',
      },
      SAME_COUNTRY_EXIT: {
        title: 'Same-Country Exit',
        hint: 'Your exit destination must be a different country from your origin. Try selecting a different destination. Hong Kong, Macau, and Taiwan count as separate regions.',
      },
      default: { title: 'Not Eligible' },
    },
  },
  paymentWizard: {
    subtitleLocal: '支付设置向导',
    title: 'Payment Setup',
    description: 'Find the best way to pay during your China trip.',
    back: '← Back',
    startOver: 'Start over',
    step: 'Step',
    startOverDifferent: 'Start over with different answers',
    tips: 'Tips & Troubleshooting',
    error: 'Something went wrong. Please try again.',
    nodes: {
      start: { text: 'Do you have a Chinese bank account?', options: ['Yes', 'No'] },
      'has-bank': { text: 'Which payment app do you prefer?', options: ['Alipay', 'WeChat Pay', 'Not sure'] },
      'no-bank': { text: 'Do you have an international Visa or Mastercard?', options: ['Yes', 'No'] },
      'has-card': { text: 'How long is your stay in China?', options: ['1-3 days', '4-10 days'] },
      'short-stay': {
        text: 'For a short stay, Alipay Tour Pass is your best bet. Link your international card and get a prepaid balance for QR payments.',
        troubleshooting: [
          "If your card is declined, try a different Visa/Mastercard. Some banks block overseas fintech transactions.",
          "Call your bank before traveling and mention 'Tenpay' and 'Alipay' as expected merchants.",
          "Tap-to-pay at some stores works with Apple Pay / Google Pay on Visa/Mastercard — look for the contactless symbol.",
          "Keep some cash (200-500 RMB) as backup for taxis and small vendors.",
        ],
      },
      'medium-stay': { text: 'Are you willing to verify your identity with your passport in the app?', options: ['Yes', 'No, keep it simple'] },
      'verified-setup': {
        text: 'Set up both Alipay and WeChat Pay with passport verification for higher limits.',
        actions: [
          'Download Alipay from your app store',
          'Register with your phone number (international numbers work)',
          'Go to Me → Settings → Identity Verification → Passport',
          'Link your Visa/Mastercard under Me → Bank Cards',
          'Download WeChat (if you don\'t have it already)',
          'In WeChat, go to Me → Services → Wallet → Cards → Add Bank Card',
          'Verify identity with passport in WeChat Pay settings',
          'Unverified limit: 500 RMB per transaction. Passport-verified: up to 35,000 RMB per transaction.',
          "Call your bank and whitelist 'Tenpay' (WeChat Pay's merchant name) to prevent fraud blocks.",
        ],
      },
      'setup-alipay-bank': {
        text: 'Link your Chinese bank account to Alipay for the full experience.',
        actions: [
          'Open Alipay → Me → Bank Cards → Add Bank Card',
          'Enter your Chinese bank card number',
          'Complete SMS verification from your Chinese phone number',
          "You're set — QR payments work everywhere",
        ],
      },
      'setup-wechat-bank': {
        text: 'Link your Chinese bank account to WeChat Pay.',
        actions: [
          'Open WeChat → Me → Services → Wallet',
          'Tap Cards → Add Bank Card',
          'Enter your Chinese bank card number and verify via SMS',
          "You're set — QR payments work everywhere",
        ],
      },
      'recommend-both': {
        text: 'With a Chinese bank account, set up both. Alipay is better for shopping and transport. WeChat Pay is better for restaurants and person-to-person transfers. Most places accept both.',
        troubleshooting: [
          'If one app is giving trouble, the other usually works.',
          'For DiDi (ride-hailing), Alipay integration tends to be smoother.',
          "For splitting bills with locals, WeChat Pay's red packet feature is the norm.",
        ],
      },
      'cash-only': {
        text: 'Without a card or bank account, cash is your main option. Exchange currency before arriving or at the airport.',
        troubleshooting: [
          'Airport exchange rates are poor. Exchange at your home bank before departure if possible.',
          'ATMs at Chinese airports accept most international cards (UnionPay, Visa, Mastercard). Withdraw RMB directly.',
          'Some tourist areas and hotels accept cash. But many small vendors are QR-only.',
          "Consider asking a travel companion to help you pay via their app — you reimburse them in cash.",
          '7-Eleven and FamilyMart in major cities often accept international contactless cards.',
        ],
      },
    },
  },
  esim: {
    subtitleLocal: '电话卡与上网指南',
    title: 'eSIM & Connectivity',
    subtitle: 'Stay connected from the moment you land.',
    esimRecommended: 'eSIM (Recommended)',
    esimDesc: 'Buy before you fly. Activates instantly when you land. No physical SIM swap needed.',
    airaloTitle: 'Airalo',
    airaloDesc: 'Most popular for travelers. China plans from ~$5/1GB. Buy in the app, scan QR code, activate on arrival. Data-only (no Chinese phone number).',
    nomadTitle: 'Nomad / Holafly',
    nomadDesc: 'Unlimited data plans available. Good if you plan to stream or use maps heavily. Slightly pricier.',
    airportSimTitle: 'Airport SIM Card',
    airportSimDesc: 'Available at China Mobile / China Unicom counters in most international terminals.',
    airportSimPros: [
      'Gives you a Chinese phone number (needed for some app registrations)',
      'Staff will help you set it up',
    ],
    airportSimCons: [
      'Requires passport registration (takes 10-15 minutes)',
      'May not be available late at night',
    ],
    vpnTitle: 'About VPNs',
    vpnDesc: "Google, Instagram, WhatsApp, and many Western apps don't work in China without a VPN. Some eSIM providers include VPN or tunnel through servers outside China. Check your provider's policy. Download and test your VPN before arriving — you can't download most VPN apps from within China.",
    comparisonHeaders: { feature: 'Feature', esim: 'eSIM', airportSim: 'Airport SIM' },
    comparisonRows: [
      { feature: 'Setup time', esim: 'Instant', airportSim: '10-15 min' },
      { feature: 'Chinese phone number', esim: 'No', airportSim: 'Yes' },
      { feature: 'Buy before travel', esim: 'Yes', airportSim: 'No' },
      { feature: 'Cost (7-day)', esim: '$5-15', airportSim: '¥50-100' },
      { feature: 'VPN included', esim: 'Sometimes', airportSim: 'No' },
    ],
  },
  apps: {
    subtitleLocal: '必备应用清单',
    title: 'Essential Apps',
    subtitle: 'Download these before you board your flight.',
    mustHave: 'Must Have',
    recommended: 'Recommended',
    niceToHave: 'Nice to Have',
    checklistTitle: 'Pre-Flight Checklist',
    tipLabel: 'Tip:',
    items: [
      { name: 'WeChat', nameCn: '微信', category: 'Messaging + Payments', description: 'The super-app. Messaging, payments, mini-programs, translation. Register with your international phone number before arriving.', tip: 'Add contacts before you go — some features require being added by a China-based user.' },
      { name: 'Alipay', nameCn: '支付宝', category: 'Payments', description: 'The other payment giant. Link your international Visa/Mastercard for QR payments. Tour Pass mode for tourists.', tip: 'Set up payment method before landing. See our Payment Setup guide.' },
      { name: 'Amap (Gaode)', nameCn: '高德地图', category: 'Navigation', description: 'Best maps app for China. More accurate than Google/Apple Maps for walking directions, transit, and real-time traffic. Has English interface.', tip: 'Download offline maps for your destination city before your flight.' },
      { name: 'DiDi', nameCn: '滴滴出行', category: 'Ride-hailing', description: "China's Uber. Supports international credit cards. English interface available.", tip: 'Link your payment method in advance. In-app translation helps communicate with drivers.' },
      { name: 'Trip.com', nameCn: '携程', category: 'Travel Booking', description: 'Book trains, hotels, and domestic flights. English interface, accepts international cards. Better domestic coverage than Booking.com.', tip: 'Book high-speed rail tickets early for popular routes (Shanghai-Beijing, etc.).' },
      { name: 'Meituan', nameCn: '美团', category: 'Food & Services', description: 'Food delivery, restaurant reservations, attraction tickets. Mostly Chinese but improving English support.', tip: 'Use WeChat Mini Program version if the standalone app is too complex.' },
      { name: 'Pleco', nameCn: '', category: 'Dictionary', description: 'Best Chinese-English dictionary. OCR camera feature translates signs and menus in real-time. Works offline.', tip: 'Download the offline dictionary pack before your flight.' },
    ],
    checklist: [
      'Download all apps on WiFi before boarding',
      'Register WeChat and Alipay with your phone number',
      'Link payment method in Alipay (Visa/Mastercard)',
      'Download offline maps in Amap for your destination',
      'Download offline dictionary in Pleco',
      "Install and test your VPN (can't download in China)",
      'Screenshot important booking confirmations',
    ],
  },
};

const ja: Translations = {
  nav: { visaCheck: 'ビザ確認', payments: '決済', esim: 'eSIM', apps: 'アプリ' },
  footer: {
    disclaimer: '本サイトの情報は参考用です。渡航前に必ず公式情報をご確認ください。',
    disclaimerLocal: '仅供参考 · 出行前请以官方信息为准',
  },
  meta: {
    siteTagline: '中国を経由しませんか？',
    defaultDescription: '中国の240時間トランジットビザ免除の資格を確認。決済設定、eSIMガイド、必須アプリ情報。',
    checkDescription: 'あなたの国籍が中国240時間トランジットビザ免除の対象か確認。ルートを入力して即座に資格、許可省、カウントダウンを取得。',
    payDescription: '中国到着前にWeChat Pay、Alipay、タッチ決済を設定。現地のように支払うための簡単ガイド。',
    esimDescription: '中国到着後すぐに接続。eSIMプロバイダーの比較、カバレッジ、セットアップガイド。',
    appsDescription: '中国で本当に必要な5つのアプリ。地図、翻訳、交通、決済 — 到着前にダウンロード。',
  },
  home: {
    subtitleLocal: '中国过境免签 240 小时',
    title: '中国を経由しませんか？',
    description: '中国の240時間トランジットビザ免除の資格を確認。決済、eSIM、アプリを到着前に準備しましょう。',
    cta: '資格を確認する',
    visaCheckerEmoji: '🛂',
    visaCheckerTitle: 'ビザチェッカー',
    visaCheckerDesc: '国籍とルートを入力するだけ。資格、滞在可能な省、240時間のカウントダウンを即座に確認。',
    paymentEmoji: '💳',
    paymentTitle: '決済設定',
    paymentDesc: 'WeChat Pay、Alipay、タッチ決済？簡単な質問に答えて最適な決済方法を見つけましょう。',
    appsEmoji: '📱',
    appsTitle: '必須アプリ',
    appsDesc: '本当に必要な5つのアプリとeSIM設定で、到着直後からネット接続。',
  },
  visaChecker: {
    subtitleLocal: '过境免签资格查询',
    title: 'トランジットビザ免除チェック',
    passportQuestion: 'お持ちのパスポートの国籍は？',
    selectNationality: '国籍を選択...',
    eligibleCount: '現在55カ国の国籍が240時間トランジットビザ免除の対象です。',
    continue: '続ける →',
    passport: 'パスポート',
    entryQuestion: '中国のどこから入国しますか？',
    selectEntry: '入国地を選択...',
    exitQuestion: '中国の後はどこへ向かいますか？',
    exitDescription: '出発国とは異なる国・地域である必要があります。香港、マカオ、台湾は別の地域として扱われます。',
    selectExit: '出国先を選択...',
    eligible: '資格あり',
    eligibleLocal: '符合过境免签条件',
    duration: '滞在可能時間',
    hours: '時間',
    clockStart: '',
    accessibleProvinces: '滞在可能な省',
    importantRules: '重要なルール',
    arrivalCard: 'デジタル入国カードを記入 →',
    checkAnother: '別のルートを確認',
    notEligibleLocal: '不符合条件',
    back: '戻る',
    errors: {
      NATIONALITY_INELIGIBLE: {
        title: '資格なし',
        hint: 'お持ちの国籍は現在240時間トランジットビザ免除の対象外です。通常のビザが必要な場合があります。最寄りの中国大使館・領事館にお問い合わせください。',
      },
      PORT_PAIR_INVALID: {
        title: '無効なルート',
        hint: '入国地と出国地は同じ地域グループ内である必要があります。別の入国地を選択するか、各地域に属する港を確認してください。',
      },
      SAME_COUNTRY_EXIT: {
        title: '同一国出国',
        hint: '出国先は出発国とは異なる国である必要があります。別の目的地を選択してください。香港、マカオ、台湾は別の地域として扱われます。',
      },
      default: { title: '資格なし' },
    },
  },
  paymentWizard: {
    subtitleLocal: '支付设置向导',
    title: '決済設定',
    description: '中国旅行中の最適な支払い方法を見つけましょう。',
    back: '← 戻る',
    startOver: '最初から',
    step: 'ステップ',
    startOverDifferent: '別の回答でやり直す',
    tips: 'ヒントとトラブルシューティング',
    error: 'エラーが発生しました。もう一度お試しください。',
    nodes: {
      start: { text: '中国の銀行口座をお持ちですか？', options: ['はい', 'いいえ'] },
      'has-bank': { text: 'どの決済アプリをご希望ですか？', options: ['Alipay', 'WeChat Pay', 'わからない'] },
      'no-bank': { text: '国際VisaまたはMastercardをお持ちですか？', options: ['はい', 'いいえ'] },
      'has-card': { text: '中国での滞在期間は？', options: ['1〜3日', '4〜10日'] },
      'short-stay': {
        text: '短期滞在なら、Alipay Tour Passがおすすめです。国際カードをリンクして、QR決済用のプリペイド残高を取得できます。',
        troubleshooting: [
          'カードが拒否された場合、別のVisa/Mastercardをお試しください。一部の銀行は海外フィンテック取引をブロックします。',
          "渡航前に銀行に電話し、'Tenpay'と'Alipay'を利用予定の加盟店として伝えてください。",
          '一部の店舗ではApple Pay / Google PayのVisa/Mastercardでタッチ決済が可能です。非接触マークをご確認ください。',
          '現金（200〜500元）をタクシーや小規模店舗のバックアップとして持参しましょう。',
        ],
      },
      'medium-stay': { text: 'アプリ内でパスポートによる本人確認を行いますか？', options: ['はい', 'いいえ、シンプルに'] },
      'verified-setup': {
        text: 'AlipayとWeChat Payの両方をパスポート認証でセットアップし、利用上限を引き上げましょう。',
        actions: [
          'アプリストアからAlipayをダウンロード',
          '電話番号で登録（国際番号も利用可能）',
          'Me → 設定 → 本人確認 → パスポートに進む',
          'Me → 銀行カードでVisa/Mastercardをリンク',
          'WeChat（未インストールの場合）をダウンロード',
          'WeChatで Me → サービス → ウォレット → カード → 銀行カード追加',
          'WeChat Pay設定でパスポートによる本人確認を実行',
          '未認証の上限: 1取引500元。パスポート認証後: 1取引最大35,000元。',
          "銀行に電話して'Tenpay'（WeChat Payの加盟店名）をホワイトリストに追加し、不正検知ブロックを防止。",
        ],
      },
      'setup-alipay-bank': {
        text: '中国の銀行口座をAlipayにリンクして、フル機能を利用しましょう。',
        actions: [
          'Alipay → Me → 銀行カード → 銀行カード追加を開く',
          '中国の銀行カード番号を入力',
          '中国の電話番号でSMS認証を完了',
          '設定完了 — QR決済がどこでも利用可能',
        ],
      },
      'setup-wechat-bank': {
        text: '中国の銀行口座をWeChat Payにリンクしましょう。',
        actions: [
          'WeChat → Me → サービス → ウォレットを開く',
          'カード → 銀行カード追加をタップ',
          '中国の銀行カード番号を入力し、SMSで認証',
          '設定完了 — QR決済がどこでも利用可能',
        ],
      },
      'recommend-both': {
        text: '中国の銀行口座をお持ちなら、両方セットアップしましょう。Alipayはショッピングと交通、WeChat Payはレストランと個人間送金に便利です。ほとんどの場所で両方使えます。',
        troubleshooting: [
          '一方のアプリに問題がある場合、もう一方が通常使えます。',
          'DiDi（配車サービス）はAlipay連携がよりスムーズな傾向があります。',
          '現地の方との割り勘には、WeChat Payの紅包（ホンバオ）機能が一般的です。',
        ],
      },
      'cash-only': {
        text: 'カードや銀行口座がない場合、現金が主な支払い手段です。到着前または空港で両替しましょう。',
        troubleshooting: [
          '空港の為替レートは不利です。可能であれば出発前に自国の銀行で両替してください。',
          '中国の空港ATMはほとんどの国際カード（UnionPay、Visa、Mastercard）に対応。直接人民元を引き出せます。',
          '一部の観光地やホテルは現金を受け付けますが、多くの小規模店舗はQR決済のみです。',
          '同行者のアプリで代わりに支払ってもらい、現金で返金する方法も検討してください。',
          '主要都市のセブンイレブンやファミリーマートでは、国際非接触カードが使える場合があります。',
        ],
      },
    },
  },
  esim: {
    subtitleLocal: '电话卡与上网指南',
    title: 'eSIM & ネット接続',
    subtitle: '到着した瞬間からネットに接続。',
    esimRecommended: 'eSIM（おすすめ）',
    esimDesc: '出発前に購入。到着と同時にアクティベート。物理SIMの入れ替え不要。',
    airaloTitle: 'Airalo',
    airaloDesc: '旅行者に最も人気。中国プランは1GBあたり約5ドルから。アプリで購入、QRコードをスキャン、到着時にアクティベート。データ通信のみ（中国の電話番号なし）。',
    nomadTitle: 'Nomad / Holafly',
    nomadDesc: '無制限データプランあり。動画視聴や地図の頻繁な利用を予定している方に最適。やや割高。',
    airportSimTitle: '空港SIMカード',
    airportSimDesc: 'ほとんどの国際線ターミナルにあるChina Mobile / China Unicomカウンターで購入可能。',
    airportSimPros: [
      '中国の電話番号が取得できる（一部アプリの登録に必要）',
      'スタッフがセットアップを手伝ってくれる',
    ],
    airportSimCons: [
      'パスポート登録が必要（10〜15分かかる）',
      '深夜は利用できない場合がある',
    ],
    vpnTitle: 'VPNについて',
    vpnDesc: 'Google、Instagram、WhatsAppなど多くの海外アプリは、VPNなしでは中国で使えません。一部のeSIMプロバイダーはVPNを含むか、中国外のサーバーを経由します。プロバイダーのポリシーをご確認ください。VPNは到着前にダウンロードしてテストしてください。中国国内からは大半のVPNアプリをダウンロードできません。',
    comparisonHeaders: { feature: '項目', esim: 'eSIM', airportSim: '空港SIM' },
    comparisonRows: [
      { feature: 'セットアップ時間', esim: '即時', airportSim: '10〜15分' },
      { feature: '中国の電話番号', esim: 'なし', airportSim: 'あり' },
      { feature: '渡航前に購入', esim: '可能', airportSim: '不可' },
      { feature: '費用（7日間）', esim: '$5〜15', airportSim: '¥50〜100' },
      { feature: 'VPN付き', esim: '場合による', airportSim: 'なし' },
    ],
  },
  apps: {
    subtitleLocal: '必备应用清单',
    title: '必須アプリ',
    subtitle: '搭乗前にダウンロードしましょう。',
    mustHave: '必須',
    recommended: 'おすすめ',
    niceToHave: 'あると便利',
    checklistTitle: '搭乗前チェックリスト',
    tipLabel: 'ヒント:',
    items: [
      { name: 'WeChat', nameCn: '微信', category: 'メッセージ+決済', description: 'スーパーアプリ。メッセージ、決済、ミニプログラム、翻訳。到着前に国際電話番号で登録。', tip: '出発前に連絡先を追加。一部の機能は中国在住ユーザーに追加してもらう必要があります。' },
      { name: 'Alipay', nameCn: '支付宝', category: '決済', description: 'もう一つの決済大手。国際Visa/MastercardをリンクしてQR決済。観光客向けTour Passモード。', tip: '着陸前に決済方法をセットアップ。決済設定ガイドをご参照ください。' },
      { name: 'Amap (Gaode)', nameCn: '高德地图', category: 'ナビゲーション', description: '中国最高の地図アプリ。徒歩案内、交通情報、リアルタイム渋滞情報がGoogle/Apple Mapsより正確。英語インターフェースあり。', tip: '出発前に目的地のオフラインマップをダウンロード。' },
      { name: 'DiDi', nameCn: '滴滴出行', category: '配車サービス', description: '中国版Uber。国際クレジットカード対応。英語インターフェースあり。', tip: '事前に決済方法をリンク。アプリ内翻訳でドライバーとのコミュニケーションをサポート。' },
      { name: 'Trip.com', nameCn: '携程', category: '旅行予約', description: '鉄道、ホテル、国内航空券の予約。英語対応、国際カード対応。Booking.comより国内カバー率が高い。', tip: '人気路線（上海-北京など）の高速鉄道チケットは早めに予約。' },
      { name: 'Meituan', nameCn: '美团', category: 'フード&サービス', description: 'フードデリバリー、レストラン予約、観光チケット。主に中国語だが英語対応改善中。', tip: 'スタンドアロンアプリが複雑な場合、WeChatミニプログラム版をご利用ください。' },
      { name: 'Pleco', nameCn: '', category: '辞書', description: '最高の中英辞書。OCRカメラ機能で看板やメニューをリアルタイム翻訳。オフライン利用可。', tip: '出発前にオフライン辞書パックをダウンロード。' },
    ],
    checklist: [
      'WiFi環境で全アプリをダウンロード',
      'WeChatとAlipayに電話番号で登録',
      'AlipayにVisa/Mastercardの決済方法をリンク',
      'Amapで目的地のオフラインマップをダウンロード',
      'Plecoのオフライン辞書をダウンロード',
      'VPNをインストールしてテスト（中国ではダウンロードできません）',
      '重要な予約確認画面をスクリーンショット',
    ],
  },
};

const ko: Translations = {
  nav: { visaCheck: '비자 확인', payments: '결제', esim: 'eSIM', apps: '앱' },
  footer: {
    disclaimer: '본 정보는 참고용입니다. 여행 전 반드시 공식 출처를 확인하세요.',
    disclaimerLocal: '仅供参考 · 出行前请以官方信息为准',
  },
  meta: {
    siteTagline: '중국을 경유하시나요?',
    defaultDescription: '중국 240시간 무비자 환승 자격을 확인하세요. 결제 설정, eSIM 가이드, 필수 앱 정보.',
    checkDescription: '귀하의 국적이 중국 240시간 무비자 환승 대상인지 확인하세요. 경로를 입력하면 자격, 허용 지역, 카운트다운을 즉시 확인할 수 있습니다.',
    payDescription: '중국 도착 전에 WeChat Pay, Alipay 또는 탭투페이를 설정하세요. 현지인처럼 결제하는 빠른 가이드.',
    esimDescription: '중국 도착 즉시 연결하세요. eSIM 제공업체 비교, 커버리지, 설정 가이드.',
    appsDescription: '중국에서 실제로 필요한 5가지 앱. 지도, 번역, 교통, 결제 — 도착 전에 다운로드하세요.',
  },
  home: {
    subtitleLocal: '中国过境免签 240 小时',
    title: '중국을 경유하시나요?',
    description: '중국 240시간 무비자 환승 자격을 확인하세요. 도착 전에 결제, eSIM, 앱을 준비하세요.',
    cta: '자격 확인하기',
    visaCheckerEmoji: '🛂',
    visaCheckerTitle: '비자 체커',
    visaCheckerDesc: '국적과 경로를 입력하세요. 자격, 체류 가능 지역, 240시간 카운트다운을 즉시 확인.',
    paymentEmoji: '💳',
    paymentTitle: '결제 설정',
    paymentDesc: 'WeChat Pay, Alipay, 터치결제? 간단한 질문으로 최적의 결제 방법을 찾아보세요.',
    appsEmoji: '📱',
    appsTitle: '필수 앱',
    appsDesc: '꼭 필요한 5개 앱과 eSIM 설정으로 도착 즉시 인터넷 연결.',
  },
  visaChecker: {
    subtitleLocal: '过境免签资格查询',
    title: '무비자 환승 확인',
    passportQuestion: '어느 나라 여권을 소지하고 계신가요?',
    selectNationality: '국적을 선택하세요...',
    eligibleCount: '현재 55개국 국적이 240시간 무비자 환승 대상입니다.',
    continue: '계속 →',
    passport: '여권',
    entryQuestion: '중국 어디로 입국하시나요?',
    selectEntry: '입국 항구를 선택...',
    exitQuestion: '중국 이후 어디로 가시나요?',
    exitDescription: '출발국과 다른 국가/지역이어야 합니다. 홍콩, 마카오, 대만은 별도 지역으로 간주됩니다.',
    selectExit: '출국 목적지를 선택...',
    eligible: '자격 있음',
    eligibleLocal: '符合过境免签条件',
    duration: '체류 가능 시간',
    hours: '시간',
    clockStart: '',
    accessibleProvinces: '체류 가능 지역',
    importantRules: '중요 규정',
    arrivalCard: '디지털 입국카드 작성 →',
    checkAnother: '다른 경로 확인',
    notEligibleLocal: '不符合条件',
    back: '뒤로',
    errors: {
      NATIONALITY_INELIGIBLE: {
        title: '자격 없음',
        hint: '현재 귀하의 국적은 240시간 무비자 환승 대상에 포함되지 않습니다. 일반 비자가 필요할 수 있습니다. 가까운 중국 대사관/영사관에 문의하세요.',
      },
      PORT_PAIR_INVALID: {
        title: '무효 경로',
        hint: '입국 항구와 출국 항구가 같은 지역 그룹 내에 있어야 합니다. 다른 입국 항구를 선택하거나 각 지역에 속한 항구를 확인하세요.',
      },
      SAME_COUNTRY_EXIT: {
        title: '동일국 출국',
        hint: '출국 목적지는 출발국과 다른 국가여야 합니다. 다른 목적지를 선택하세요. 홍콩, 마카오, 대만은 별도 지역으로 간주됩니다.',
      },
      default: { title: '자격 없음' },
    },
  },
  paymentWizard: {
    subtitleLocal: '支付设置向导',
    title: '결제 설정',
    description: '중국 여행 중 최적의 결제 방법을 찾아보세요.',
    back: '← 뒤로',
    startOver: '처음부터',
    step: '단계',
    startOverDifferent: '다른 답변으로 다시 시작',
    tips: '팁 & 문제 해결',
    error: '오류가 발생했습니다. 다시 시도해 주세요.',
    nodes: {
      start: { text: '중국 은행 계좌가 있으신가요?', options: ['예', '아니요'] },
      'has-bank': { text: '어떤 결제 앱을 선호하시나요?', options: ['Alipay', 'WeChat Pay', '잘 모르겠어요'] },
      'no-bank': { text: '해외 Visa 또는 Mastercard를 가지고 계신가요?', options: ['예', '아니요'] },
      'has-card': { text: '중국 체류 기간은 얼마인가요?', options: ['1~3일', '4~10일'] },
      'short-stay': {
        text: '단기 체류라면 Alipay Tour Pass가 최선입니다. 해외 카드를 연결하여 QR 결제용 선불 잔액을 충전하세요.',
        troubleshooting: [
          '카드가 거절되면 다른 Visa/Mastercard를 시도하세요. 일부 은행은 해외 핀테크 거래를 차단합니다.',
          "여행 전 은행에 전화하여 'Tenpay'와 'Alipay'를 예상 가맹점으로 등록하세요.",
          '일부 매장에서 Visa/Mastercard Apple Pay/Google Pay 터치결제가 가능합니다. 비접촉 마크를 확인하세요.',
          '택시와 소규모 상점용 백업으로 현금(200~500위안)을 준비하세요.',
        ],
      },
      'medium-stay': { text: '앱에서 여권으로 본인 인증을 하시겠습니까?', options: ['예', '아니요, 간단하게'] },
      'verified-setup': {
        text: 'Alipay와 WeChat Pay 모두 여권 인증으로 설정하여 한도를 높이세요.',
        actions: [
          '앱스토어에서 Alipay 다운로드',
          '전화번호로 가입 (해외 번호 사용 가능)',
          'Me → 설정 → 본인 인증 → 여권으로 이동',
          'Me → 은행 카드에서 Visa/Mastercard 연결',
          'WeChat 다운로드 (미설치 시)',
          'WeChat에서 Me → 서비스 → 지갑 → 카드 → 은행 카드 추가',
          'WeChat Pay 설정에서 여권 본인 인증 실행',
          '미인증 한도: 1회 500위안. 여권 인증 후: 1회 최대 35,000위안.',
          "은행에 전화하여 'Tenpay'(WeChat Pay 가맹점명)를 화이트리스트에 추가하여 사기 탐지 차단 방지.",
        ],
      },
      'setup-alipay-bank': {
        text: '중국 은행 계좌를 Alipay에 연결하여 전체 기능을 이용하세요.',
        actions: [
          'Alipay → Me → 은행 카드 → 은행 카드 추가 열기',
          '중국 은행 카드 번호 입력',
          '중국 전화번호로 SMS 인증 완료',
          '설정 완료 — QR 결제를 어디서든 사용 가능',
        ],
      },
      'setup-wechat-bank': {
        text: '중국 은행 계좌를 WeChat Pay에 연결하세요.',
        actions: [
          'WeChat → Me → 서비스 → 지갑 열기',
          '카드 → 은행 카드 추가 탭',
          '중국 은행 카드 번호 입력 후 SMS 인증',
          '설정 완료 — QR 결제를 어디서든 사용 가능',
        ],
      },
      'recommend-both': {
        text: '중국 은행 계좌가 있다면 둘 다 설정하세요. Alipay는 쇼핑과 교통에, WeChat Pay는 식당과 개인 간 송금에 좋습니다. 대부분의 장소에서 둘 다 사용 가능합니다.',
        troubleshooting: [
          '한 앱에 문제가 있으면 대체로 다른 앱이 작동합니다.',
          'DiDi(차량 호출)는 Alipay 연동이 더 원활한 편입니다.',
          '현지인과 더치페이할 때 WeChat Pay의 홍바오 기능이 일반적입니다.',
        ],
      },
      'cash-only': {
        text: '카드나 은행 계좌가 없다면 현금이 주요 결제 수단입니다. 도착 전이나 공항에서 환전하세요.',
        troubleshooting: [
          '공항 환율은 불리합니다. 가능하면 출발 전 본국 은행에서 환전하세요.',
          '중국 공항 ATM은 대부분의 해외 카드(UnionPay, Visa, Mastercard)를 지원합니다. 위안화를 직접 인출 가능.',
          '일부 관광지와 호텔은 현금을 받지만, 많은 소규모 상점은 QR 결제만 가능합니다.',
          '동행자에게 앱으로 대신 결제하고 현금으로 상환하는 방법도 고려하세요.',
          '주요 도시의 세븐일레븐과 패밀리마트에서 해외 비접촉 카드를 사용할 수 있는 경우가 있습니다.',
        ],
      },
    },
  },
  esim: {
    subtitleLocal: '电话卡与上网指南',
    title: 'eSIM & 인터넷',
    subtitle: '도착 즉시 인터넷에 연결하세요.',
    esimRecommended: 'eSIM (추천)',
    esimDesc: '출발 전 구매. 도착 시 즉시 활성화. 물리적 SIM 교체 불필요.',
    airaloTitle: 'Airalo',
    airaloDesc: '여행자에게 가장 인기. 중국 요금제 1GB당 약 $5부터. 앱에서 구매, QR코드 스캔, 도착 시 활성화. 데이터 전용 (중국 전화번호 없음).',
    nomadTitle: 'Nomad / Holafly',
    nomadDesc: '무제한 데이터 요금제 제공. 스트리밍이나 지도를 많이 사용할 예정이라면 적합. 약간 비쌈.',
    airportSimTitle: '공항 SIM 카드',
    airportSimDesc: '대부분의 국제선 터미널 China Mobile / China Unicom 카운터에서 구매 가능.',
    airportSimPros: [
      '중국 전화번호 제공 (일부 앱 등록에 필요)',
      '직원이 설정을 도와줌',
    ],
    airportSimCons: [
      '여권 등록 필요 (10~15분 소요)',
      '심야에는 이용 불가할 수 있음',
    ],
    vpnTitle: 'VPN에 대하여',
    vpnDesc: 'Google, Instagram, WhatsApp 등 대부분의 해외 앱은 VPN 없이 중국에서 사용할 수 없습니다. 일부 eSIM 제공업체는 VPN을 포함하거나 중국 외 서버를 경유합니다. 제공업체의 정책을 확인하세요. VPN은 도착 전에 다운로드하고 테스트하세요. 중국 내에서는 대부분의 VPN 앱을 다운로드할 수 없습니다.',
    comparisonHeaders: { feature: '항목', esim: 'eSIM', airportSim: '공항 SIM' },
    comparisonRows: [
      { feature: '설정 시간', esim: '즉시', airportSim: '10~15분' },
      { feature: '중국 전화번호', esim: '없음', airportSim: '있음' },
      { feature: '여행 전 구매', esim: '가능', airportSim: '불가' },
      { feature: '비용 (7일)', esim: '$5~15', airportSim: '¥50~100' },
      { feature: 'VPN 포함', esim: '경우에 따라', airportSim: '없음' },
    ],
  },
  apps: {
    subtitleLocal: '必备应用清单',
    title: '필수 앱',
    subtitle: '탑승 전에 다운로드하세요.',
    mustHave: '필수',
    recommended: '추천',
    niceToHave: '있으면 좋은',
    checklistTitle: '탑승 전 체크리스트',
    tipLabel: '팁:',
    items: [
      { name: 'WeChat', nameCn: '微信', category: '메시지+결제', description: '슈퍼앱. 메시지, 결제, 미니프로그램, 번역. 도착 전에 해외 전화번호로 등록하세요.', tip: '출발 전에 연락처를 추가하세요. 일부 기능은 중국 기반 사용자가 추가해야 합니다.' },
      { name: 'Alipay', nameCn: '支付宝', category: '결제', description: '또 다른 결제 대기업. 해외 Visa/Mastercard를 연결하여 QR 결제. 관광객용 Tour Pass 모드.', tip: '착륙 전에 결제 수단을 설정하세요. 결제 설정 가이드를 참조하세요.' },
      { name: 'Amap (Gaode)', nameCn: '高德地图', category: '내비게이션', description: '중국 최고의 지도 앱. 도보 안내, 대중교통, 실시간 교통정보가 Google/Apple Maps보다 정확. 영어 인터페이스 제공.', tip: '출발 전 목적지 오프라인 지도를 다운로드하세요.' },
      { name: 'DiDi', nameCn: '滴滴出行', category: '차량 호출', description: '중국판 Uber. 해외 신용카드 지원. 영어 인터페이스 제공.', tip: '사전에 결제 수단을 연결하세요. 앱 내 번역으로 기사와 소통 가능.' },
      { name: 'Trip.com', nameCn: '携程', category: '여행 예약', description: '기차, 호텔, 국내 항공편 예약. 영어 지원, 해외 카드 결제 가능. Booking.com보다 국내 커버리지가 좋음.', tip: '인기 노선(상하이-베이징 등) 고속철 표는 일찍 예약하세요.' },
      { name: 'Meituan', nameCn: '美团', category: '음식 & 서비스', description: '음식 배달, 레스토랑 예약, 관광지 티켓. 주로 중국어이지만 영어 지원 개선 중.', tip: '독립형 앱이 복잡하면 WeChat 미니프로그램 버전을 사용하세요.' },
      { name: 'Pleco', nameCn: '', category: '사전', description: '최고의 중영 사전. OCR 카메라 기능으로 간판과 메뉴를 실시간 번역. 오프라인 사용 가능.', tip: '출발 전 오프라인 사전 팩을 다운로드하세요.' },
    ],
    checklist: [
      'WiFi에서 모든 앱 다운로드',
      'WeChat과 Alipay에 전화번호로 등록',
      'Alipay에 Visa/Mastercard 결제 수단 연결',
      'Amap에서 목적지 오프라인 지도 다운로드',
      'Pleco 오프라인 사전 다운로드',
      'VPN 설치 및 테스트 (중국에서는 다운로드 불가)',
      '중요 예약 확인서 스크린샷',
    ],
  },
};

const fr: Translations = {
  nav: { visaCheck: 'Visa', payments: 'Paiements', esim: 'eSIM', apps: 'Applis' },
  footer: {
    disclaimer: 'Ces informations sont fournies à titre indicatif. Vérifiez toujours auprès des sources officielles avant de voyager.',
    disclaimerLocal: '仅供参考 · 出行前请以官方信息为准',
  },
  meta: {
    siteTagline: 'La Chine est-elle sur votre route ?',
    defaultDescription: "Vérifiez votre éligibilité au transit sans visa de 240 heures en Chine. Configuration des paiements, guide eSIM et applications essentielles.",
    checkDescription: "Vérifiez si votre nationalité est éligible au transit sans visa de 240 heures en Chine. Entrez votre itinéraire pour connaître votre éligibilité, les provinces autorisées et le décompte.",
    payDescription: 'Configurez WeChat Pay, Alipay ou le paiement sans contact avant votre arrivée en Chine. Guide rapide pour payer comme un local.',
    esimDescription: 'Restez connecté en Chine dès votre atterrissage. Comparatif des fournisseurs eSIM, couverture et guides de configuration.',
    appsDescription: "Les 5 applications indispensables en Chine. Cartes, traduction, transports et paiements — à télécharger avant d'atterrir.",
  },
  home: {
    subtitleLocal: '中国过境免签 240 小时',
    title: 'La Chine est-elle sur votre route ?',
    description: "Vérifiez si vous êtes éligible au transit sans visa de 240 heures en Chine. Préparez vos paiements, eSIM et applications avant d'atterrir.",
    cta: 'Vérifier mon éligibilité',
    visaCheckerEmoji: '🛂',
    visaCheckerTitle: 'Vérificateur de visa',
    visaCheckerDesc: 'Entrez votre nationalité et votre itinéraire. Obtenez instantanément votre éligibilité, les provinces autorisées et votre compte à rebours de 240 heures.',
    paymentEmoji: '💳',
    paymentTitle: 'Configuration des paiements',
    paymentDesc: 'WeChat Pay, Alipay ou sans contact ? Un arbre de décision rapide pour payer comme un local.',
    appsEmoji: '📱',
    appsTitle: 'Applications essentielles',
    appsDesc: "Les 5 applis dont vous avez vraiment besoin, plus la configuration eSIM pour être connecté dès l'atterrissage.",
  },
  visaChecker: {
    subtitleLocal: '过境免签资格查询',
    title: 'Vérification transit sans visa',
    passportQuestion: 'Quel passeport possédez-vous ?',
    selectNationality: 'Sélectionnez votre nationalité...',
    eligibleCount: '55 nationalités sont actuellement éligibles à la politique de transit sans visa de 240 heures.',
    continue: 'Continuer →',
    passport: 'Passeport',
    entryQuestion: 'Par où entrerez-vous en Chine ?',
    selectEntry: "Sélectionnez le port d'entrée...",
    exitQuestion: 'Quelle est votre destination après la Chine ?',
    exitDescription: "Doit être un pays/région différent de votre pays d'origine. Hong Kong, Macao et Taïwan comptent comme des régions distinctes.",
    selectExit: 'Sélectionnez la destination de sortie...',
    eligible: 'Éligible',
    eligibleLocal: '符合过境免签条件',
    duration: 'Durée',
    hours: 'heures',
    clockStart: '',
    accessibleProvinces: 'Provinces accessibles',
    importantRules: 'Règles importantes',
    arrivalCard: "Remplir la carte d'arrivée numérique →",
    checkAnother: 'Vérifier un autre itinéraire',
    notEligibleLocal: '不符合条件',
    back: 'Retour',
    errors: {
      NATIONALITY_INELIGIBLE: {
        title: 'Non éligible',
        hint: "Votre nationalité n'est pas couverte par la politique de transit sans visa de 240 heures. Vous pourriez avoir besoin d'un visa standard. Contactez l'ambassade ou le consulat de Chine le plus proche.",
      },
      PORT_PAIR_INVALID: {
        title: 'Itinéraire invalide',
        hint: "Les ports d'entrée et de sortie doivent être dans le même groupe régional. Essayez un autre port d'entrée ou vérifiez quels ports appartiennent à chaque région.",
      },
      SAME_COUNTRY_EXIT: {
        title: 'Sortie vers le même pays',
        hint: "Votre destination de sortie doit être un pays différent de votre pays d'origine. Essayez une autre destination. Hong Kong, Macao et Taïwan comptent comme des régions distinctes.",
      },
      default: { title: 'Non éligible' },
    },
  },
  paymentWizard: {
    subtitleLocal: '支付设置向导',
    title: 'Configuration des paiements',
    description: 'Trouvez le meilleur moyen de payer pendant votre voyage en Chine.',
    back: '← Retour',
    startOver: 'Recommencer',
    step: 'Étape',
    startOverDifferent: 'Recommencer avec d\'autres réponses',
    tips: 'Conseils et dépannage',
    error: 'Une erreur est survenue. Veuillez réessayer.',
    nodes: {
      start: { text: 'Avez-vous un compte bancaire chinois ?', options: ['Oui', 'Non'] },
      'has-bank': { text: 'Quelle application de paiement préférez-vous ?', options: ['Alipay', 'WeChat Pay', 'Pas sûr'] },
      'no-bank': { text: 'Avez-vous une Visa ou Mastercard internationale ?', options: ['Oui', 'Non'] },
      'has-card': { text: 'Combien de temps restez-vous en Chine ?', options: ['1-3 jours', '4-10 jours'] },
      'short-stay': {
        text: "Pour un court séjour, Alipay Tour Pass est votre meilleure option. Liez votre carte internationale et obtenez un solde prépayé pour les paiements QR.",
        troubleshooting: [
          'Si votre carte est refusée, essayez une autre Visa/Mastercard. Certaines banques bloquent les transactions fintech étrangères.',
          "Appelez votre banque avant de voyager et mentionnez 'Tenpay' et 'Alipay' comme commerçants attendus.",
          "Le paiement sans contact dans certains magasins fonctionne avec Apple Pay / Google Pay sur Visa/Mastercard — cherchez le symbole sans contact.",
          'Gardez de l\'argent liquide (200-500 RMB) en secours pour les taxis et petits commerces.',
        ],
      },
      'medium-stay': { text: "Êtes-vous prêt à vérifier votre identité avec votre passeport dans l'application ?", options: ['Oui', 'Non, restons simple'] },
      'verified-setup': {
        text: 'Configurez Alipay et WeChat Pay avec vérification par passeport pour des limites plus élevées.',
        actions: [
          "Téléchargez Alipay depuis votre app store",
          'Inscrivez-vous avec votre numéro de téléphone (les numéros internationaux fonctionnent)',
          'Allez dans Me → Paramètres → Vérification d\'identité → Passeport',
          'Liez votre Visa/Mastercard sous Me → Cartes bancaires',
          "Téléchargez WeChat (si vous ne l'avez pas déjà)",
          'Dans WeChat, allez dans Me → Services → Portefeuille → Cartes → Ajouter une carte bancaire',
          "Vérifiez votre identité avec passeport dans les paramètres WeChat Pay",
          'Limite non vérifié : 500 RMB par transaction. Vérifié par passeport : jusqu\'à 35 000 RMB par transaction.',
          "Appelez votre banque et ajoutez 'Tenpay' (nom de commerçant de WeChat Pay) à la liste blanche pour éviter les blocages anti-fraude.",
        ],
      },
      'setup-alipay-bank': {
        text: "Liez votre compte bancaire chinois à Alipay pour l'expérience complète.",
        actions: [
          'Ouvrez Alipay → Me → Cartes bancaires → Ajouter une carte',
          'Entrez votre numéro de carte bancaire chinoise',
          'Complétez la vérification SMS depuis votre numéro chinois',
          "C'est fait — les paiements QR fonctionnent partout",
        ],
      },
      'setup-wechat-bank': {
        text: 'Liez votre compte bancaire chinois à WeChat Pay.',
        actions: [
          'Ouvrez WeChat → Me → Services → Portefeuille',
          'Appuyez sur Cartes → Ajouter une carte bancaire',
          'Entrez votre numéro de carte bancaire chinoise et vérifiez par SMS',
          "C'est fait — les paiements QR fonctionnent partout",
        ],
      },
      'recommend-both': {
        text: 'Avec un compte bancaire chinois, configurez les deux. Alipay est meilleur pour le shopping et les transports. WeChat Pay est meilleur pour les restaurants et les transferts entre personnes. La plupart des endroits acceptent les deux.',
        troubleshooting: [
          "Si une application pose problème, l'autre fonctionne généralement.",
          "Pour DiDi (VTC), l'intégration Alipay est généralement plus fluide.",
          'Pour partager l\'addition avec des locaux, la fonction enveloppe rouge de WeChat Pay est la norme.',
        ],
      },
      'cash-only': {
        text: "Sans carte ni compte bancaire, l'argent liquide est votre principale option. Changez des devises avant d'arriver ou à l'aéroport.",
        troubleshooting: [
          "Les taux de change à l'aéroport sont défavorables. Si possible, changez dans votre banque avant le départ.",
          "Les DAB dans les aéroports chinois acceptent la plupart des cartes internationales (UnionPay, Visa, Mastercard). Retirez directement des RMB.",
          'Certaines zones touristiques et hôtels acceptent les espèces. Mais de nombreux petits commerces sont QR uniquement.',
          "Envisagez de demander à un compagnon de voyage de payer via son appli — vous le remboursez en espèces.",
          'Les 7-Eleven et FamilyMart dans les grandes villes acceptent souvent les cartes internationales sans contact.',
        ],
      },
    },
  },
  esim: {
    subtitleLocal: '电话卡与上网指南',
    title: 'eSIM & Connectivité',
    subtitle: "Restez connecté dès l'atterrissage.",
    esimRecommended: 'eSIM (Recommandé)',
    esimDesc: "Achetez avant de partir. S'active instantanément à l'arrivée. Pas besoin de changer de SIM physique.",
    airaloTitle: 'Airalo',
    airaloDesc: 'Le plus populaire pour les voyageurs. Forfaits Chine à partir de ~5$/1Go. Achat dans l\'appli, scan du QR code, activation à l\'arrivée. Données uniquement (pas de numéro chinois).',
    nomadTitle: 'Nomad / Holafly',
    nomadDesc: 'Forfaits data illimités disponibles. Idéal si vous prévoyez de streamer ou utiliser beaucoup les cartes. Un peu plus cher.',
    airportSimTitle: "Carte SIM à l'aéroport",
    airportSimDesc: 'Disponible aux comptoirs China Mobile / China Unicom dans la plupart des terminaux internationaux.',
    airportSimPros: [
      "Vous donne un numéro de téléphone chinois (nécessaire pour certaines inscriptions d'applis)",
      "Le personnel vous aidera à l'installer",
    ],
    airportSimCons: [
      "Nécessite l'enregistrement du passeport (10-15 minutes)",
      'Peut ne pas être disponible tard le soir',
    ],
    vpnTitle: 'À propos des VPN',
    vpnDesc: "Google, Instagram, WhatsApp et de nombreuses applications occidentales ne fonctionnent pas en Chine sans VPN. Certains fournisseurs d'eSIM incluent un VPN ou passent par des serveurs hors de Chine. Vérifiez la politique de votre fournisseur. Téléchargez et testez votre VPN avant d'arriver — vous ne pouvez pas télécharger la plupart des applis VPN depuis la Chine.",
    comparisonHeaders: { feature: 'Caractéristique', esim: 'eSIM', airportSim: 'SIM Aéroport' },
    comparisonRows: [
      { feature: 'Temps de configuration', esim: 'Instantané', airportSim: '10-15 min' },
      { feature: 'Numéro chinois', esim: 'Non', airportSim: 'Oui' },
      { feature: 'Achat avant voyage', esim: 'Oui', airportSim: 'Non' },
      { feature: 'Coût (7 jours)', esim: '5-15$', airportSim: '50-100¥' },
      { feature: 'VPN inclus', esim: 'Parfois', airportSim: 'Non' },
    ],
  },
  apps: {
    subtitleLocal: '必备应用清单',
    title: 'Applications essentielles',
    subtitle: "Téléchargez-les avant d'embarquer.",
    mustHave: 'Indispensables',
    recommended: 'Recommandées',
    niceToHave: 'Utiles',
    checklistTitle: 'Checklist pré-vol',
    tipLabel: 'Conseil :',
    items: [
      { name: 'WeChat', nameCn: '微信', category: 'Messages + Paiements', description: "La super-appli. Messagerie, paiements, mini-programmes, traduction. Inscrivez-vous avec votre numéro international avant d'arriver.", tip: "Ajoutez des contacts avant de partir — certaines fonctions nécessitent d'être ajouté par un utilisateur basé en Chine." },
      { name: 'Alipay', nameCn: '支付宝', category: 'Paiements', description: "L'autre géant du paiement. Liez votre Visa/Mastercard internationale pour les paiements QR. Mode Tour Pass pour les touristes.", tip: "Configurez le mode de paiement avant l'atterrissage. Voir notre guide de configuration des paiements." },
      { name: 'Amap (Gaode)', nameCn: '高德地图', category: 'Navigation', description: "La meilleure appli de cartes pour la Chine. Plus précise que Google/Apple Maps pour les itinéraires piétons, transports et trafic en temps réel. Interface en anglais disponible.", tip: 'Téléchargez les cartes hors ligne de votre ville de destination avant le vol.' },
      { name: 'DiDi', nameCn: '滴滴出行', category: 'VTC', description: "Le Uber chinois. Accepte les cartes de crédit internationales. Interface en anglais disponible.", tip: "Liez votre moyen de paiement à l'avance. La traduction intégrée aide à communiquer avec les chauffeurs." },
      { name: 'Trip.com', nameCn: '携程', category: 'Réservation voyage', description: 'Réservez trains, hôtels et vols intérieurs. Interface en anglais, cartes internationales acceptées. Meilleure couverture nationale que Booking.com.', tip: 'Réservez tôt les billets de train à grande vitesse pour les lignes populaires (Shanghai-Pékin, etc.).' },
      { name: 'Meituan', nameCn: '美团', category: 'Restauration & Services', description: 'Livraison de repas, réservations de restaurants, billets d\'attractions. Principalement en chinois mais le support anglais s\'améliore.', tip: "Utilisez la version Mini Programme WeChat si l'appli autonome est trop complexe." },
      { name: 'Pleco', nameCn: '', category: 'Dictionnaire', description: "Le meilleur dictionnaire chinois-anglais. La fonction caméra OCR traduit les panneaux et menus en temps réel. Fonctionne hors ligne.", tip: 'Téléchargez le pack dictionnaire hors ligne avant votre vol.' },
    ],
    checklist: [
      "Télécharger toutes les applis en WiFi avant l'embarquement",
      'Créer un compte WeChat et Alipay avec votre numéro de téléphone',
      'Lier un moyen de paiement dans Alipay (Visa/Mastercard)',
      'Télécharger les cartes hors ligne dans Amap pour votre destination',
      'Télécharger le dictionnaire hors ligne dans Pleco',
      'Installer et tester votre VPN (impossible à télécharger en Chine)',
      'Faire des captures d\'écran des confirmations de réservation importantes',
    ],
  },
};

export const translations: Record<Locale, Translations> = { en, ja, ko, fr };
