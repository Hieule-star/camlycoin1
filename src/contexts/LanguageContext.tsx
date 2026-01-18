import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.tokenInfo': 'Token Info',
    'nav.transparency': 'Transparency',
    'nav.purpose': 'Purpose',
    'nav.ecosystem': 'Ecosystem',
    'nav.philosophy': 'Philosophy',
    'nav.whitepaper': 'Whitepaper',
    'nav.funRich': 'Fun Ecosystem',
    'nav.contact': 'Contact',

    // Whitepaper Page
    'whitepaper.title': 'CAMLY COIN (CAMLY)',
    'whitepaper.subtitle': 'Whitepaper v2',
    'whitepaper.toc': 'Table of Contents',
    'whitepaper.footer': 'Whitepaper v2 – Issued: 2025',
    'whitepaper.copyContract': 'Copy Address',
    'whitepaper.contractCopied': 'Copied!',

    // Section 1: Abstract
    'whitepaper.section1.title': '1. Abstract',
    'whitepaper.section1.content': 'Camly Coin (CAMLY) is a blockchain-based utility token designed to support community-oriented Web3 applications through transparent, ethical, and sustainable digital infrastructure.\n\nBuilt on the BNB Chain using the BEP-20 standard, Camly Coin emphasizes long-term usability, openness, and responsible technology development. The project does not pursue speculative objectives and does not position itself as an investment vehicle.\n\nCamly Coin exists to enable participation, contribution, and value exchange within selected digital ecosystems.',

    // Section 2: Introduction
    'whitepaper.section2.title': '2. Introduction',
    'whitepaper.section2.content': 'As blockchain technology evolves, the need for responsible and human-centered digital systems becomes increasingly important. Camly Coin was created with a simple guiding principle:',
    'whitepaper.section2.quote': 'Technology should empower people and communities, not create dependency or speculation.',
    'whitepaper.section2.closing': 'Camly Coin focuses on utility, transparency, and long-term relevance rather than short-term trends.',

    // Section 3: Core Principles
    'whitepaper.section3.title': '3. Core Principles',
    'whitepaper.section3.intro': 'Camly Coin is developed and maintained according to the following principles:',
    'whitepaper.section3.principle1.title': 'Utility First',
    'whitepaper.section3.principle1.desc': 'Designed for functional use within digital platforms and services.',
    'whitepaper.section3.principle2.title': 'Transparency',
    'whitepaper.section3.principle2.desc': 'All token data and transactions are verifiable on-chain.',
    'whitepaper.section3.principle3.title': 'Simplicity',
    'whitepaper.section3.principle3.desc': 'Clear structure, minimal complexity, and ease of understanding.',
    'whitepaper.section3.principle4.title': 'Long-Term Vision',
    'whitepaper.section3.principle4.desc': 'Built to remain relevant across technological cycles.',
    'whitepaper.section3.principle5.title': 'Community Orientation',
    'whitepaper.section3.principle5.desc': 'Value is created through participation and contribution.',

    // Section 4: Token Overview
    'whitepaper.section4.title': '4. Token Overview',
    'whitepaper.section4.tokenName': 'Token Name',
    'whitepaper.section4.tokenNameValue': 'Camly Coin',
    'whitepaper.section4.symbol': 'Symbol',
    'whitepaper.section4.symbolValue': 'CAMLY',
    'whitepaper.section4.blockchain': 'Blockchain',
    'whitepaper.section4.blockchainValue': 'BNB Chain',
    'whitepaper.section4.standard': 'Token Standard',
    'whitepaper.section4.standardValue': 'BEP-20',
    'whitepaper.section4.launchDate': 'Launch Date',
    'whitepaper.section4.launchDateValue': 'September 10, 2022',
    'whitepaper.section4.contractTitle': 'Smart Contract Address',
    'whitepaper.section4.contractNote': 'The contract is publicly accessible and verifiable via standard BNB Chain explorers.',

    // Section 5: Distribution & Launch Structure
    'whitepaper.section5.title': '5. Distribution & Launch Structure',
    'whitepaper.section5.intro': 'Camly Coin was launched without:',
    'whitepaper.section5.item1': 'Initial Coin Offering (ICO)',
    'whitepaper.section5.item2': 'Private or public fundraising rounds',
    'whitepaper.section5.item3': 'Venture capital participation',
    'whitepaper.section5.closing': 'This structure was chosen to avoid conflicts of interest and to maintain alignment with a utility-driven model.\n\nCamly Coin is intended to function as a tool within digital platforms rather than as a financial asset.',

    // Section 6: Utility & Use Cases
    'whitepaper.section6.title': '6. Utility & Use Cases',
    'whitepaper.section6.intro': 'Camly Coin may be used within supported Web3 environments for:',
    'whitepaper.section6.item1': 'Accessing digital services',
    'whitepaper.section6.item2': 'Facilitating platform interactions',
    'whitepaper.section6.item3': 'Supporting community-based participation',
    'whitepaper.section6.item4': 'Enabling value exchange tied to real usage',
    'whitepaper.section6.closing': 'Specific implementations may vary by platform and are defined independently to ensure flexibility and scalability.',

    // Section 7: Ecosystem Relationship
    'whitepaper.section7.title': '7. Ecosystem Relationship',
    'whitepaper.section7.intro': 'Camly Coin is designed to integrate with broader Web3 ecosystems that may include:',
    'whitepaper.section7.item1': 'Digital identity systems',
    'whitepaper.section7.item2': 'Community and social platforms',
    'whitepaper.section7.item3': 'Educational and knowledge-sharing services',
    'whitepaper.section7.item4': 'Contribution-based digital environments',
    'whitepaper.section7.closing': 'Each platform operates independently, with Camly Coin serving as a functional utility where applicable.',

    // Section 8: Governance & Development Philosophy
    'whitepaper.section8.title': '8. Governance & Development Philosophy',
    'whitepaper.section8.intro': 'Camly Coin follows a principle of responsible decentralization:',
    'whitepaper.section8.item1': 'Open blockchain verification',
    'whitepaper.section8.item2': 'No centralized promises or guarantees',
    'whitepaper.section8.item3': 'Continuous improvement based on real-world usage',
    'whitepaper.section8.closing': 'Development decisions prioritize stability, security, and long-term usability.',

    // Section 9: Security & Transparency
    'whitepaper.section9.title': '9. Security & Transparency',
    'whitepaper.section9.item1': 'All transactions are recorded on-chain',
    'whitepaper.section9.item2': 'Smart contract data is immutable',
    'whitepaper.section9.item3': 'Users can independently verify token information',
    'whitepaper.section9.closing': 'No off-chain manipulation or hidden mechanisms are embedded within the token structure.',

    // Section 10: Risk Awareness
    'whitepaper.section10.title': '10. Risk Awareness',
    'whitepaper.section10.content': 'Blockchain technology involves technical and regulatory considerations. Users are responsible for understanding:',
    'whitepaper.section10.item1': 'Local laws and regulations',
    'whitepaper.section10.item2': 'Technical risks related to blockchain usage',
    'whitepaper.section10.item3': 'Proper security practices',
    'whitepaper.section10.closing': 'Camly Coin does not eliminate these risks and does not provide guarantees.',

    // Section 11: Legal Disclaimer
    'whitepaper.section11.title': '11. Legal Disclaimer',
    'whitepaper.section11.content': 'Camly Coin is a utility token intended for informational and functional use only.\n\nThis document does not constitute financial advice, investment solicitation, or an offer of securities. No guarantees of value, returns, or performance are expressed or implied.\n\nUsers should conduct their own research and comply with applicable laws.',

    // Section 12: Conclusion
    'whitepaper.section12.title': '12. Conclusion',
    'whitepaper.section12.content': 'Camly Coin is built with the intention to remain simple, transparent, and useful over time.\n\nRather than following speculative cycles, the project focuses on sustainable utility and responsible digital participation.\n\nCamly Coin represents a commitment to clarity, integrity, and long-term thinking in Web3 development.',

    // Hero Section
    'hero.tagline': 'A Token Born from Love',
    'hero.description': 'Camly Coin is a utility token created to celebrate meaningful connections and support positive initiatives within the blockchain ecosystem.',
    'hero.blockchain': 'BNB Chain',
    'hero.standard': 'BEP-20',
    'hero.contract': 'Contract Address',
    'hero.copied': 'Copied!',
    'hero.launchDate': 'Launched September 10, 2022',

    // About Section
    'about.title': 'About Camly Coin',
    'about.subtitle': 'The Story Behind CAMLY',
    'about.p1': 'Camly Coin was created with a singular vision: to build something meaningful that transcends the typical utility of digital assets. Named with deep personal significance, CAMLY represents a commitment to authenticity, transparency, and long-term value.',
    'about.p2': 'From its inception, Camly Coin was designed not for speculation, but as a symbol of dedication and a foundation for building genuine connections within the blockchain community.',
    'about.quote': '"True value is not measured in price, but in the meaning we create and the connections we build."',

    // Token Information Section
    'tokenInfo.title': 'Token Information',
    'tokenInfo.subtitle': 'Technical Details',
    'tokenInfo.name': 'Token Name',
    'tokenInfo.symbol': 'Symbol',
    'tokenInfo.blockchain': 'Blockchain',
    'tokenInfo.standard': 'Token Standard',
    'tokenInfo.contract': 'Contract Address',
    'tokenInfo.launch': 'Launch Date',
    'tokenInfo.explorer': 'View on BscScan',

    // Transparency Section
    'transparency.title': 'Transparency & Structure',
    'transparency.subtitle': 'Our Commitment to Openness',
    'transparency.noIco': 'No ICO or Public Sale',
    'transparency.noIcoDesc': 'Camly Coin was not launched through any initial coin offering, public sale, or fundraising event.',
    'transparency.noVc': 'No Venture Capital',
    'transparency.noVcDesc': 'No external investors or venture capital firms hold positions in CAMLY. The token remains independent.',
    'transparency.verified': 'Verified Contract',
    'transparency.verifiedDesc': 'The smart contract is verified and publicly auditable on the BNB Chain blockchain explorer.',
    'transparency.distribution': 'Transparent Distribution',
    'transparency.distributionDesc': 'All token movements can be traced on the blockchain, ensuring complete transparency.',

    // Purpose Section
    'purpose.title': 'Purpose & Utility',
    'purpose.subtitle': 'What CAMLY Is Designed For',
    'purpose.intro': 'Camly Coin serves as a utility token within its ecosystem, designed for functional purposes rather than speculative trading.',
    'purpose.use1': 'Community Engagement',
    'purpose.use1Desc': 'CAMLY facilitates participation in community initiatives and governance decisions.',
    'purpose.use2': 'Ecosystem Support',
    'purpose.use2Desc': 'The token supports various platforms and services within the Camly ecosystem.',
    'purpose.use3': 'Value Exchange',
    'purpose.use3Desc': 'CAMLY enables the exchange of value within participating platforms and services.',
    'purpose.use4': 'Recognition System',
    'purpose.use4Desc': 'The token serves as a means of recognition and appreciation within the community.',
    'purpose.note': 'Important: CAMLY is intended for utility purposes only. It is not designed as an investment vehicle or store of value.',

    // Ecosystem Section
    'ecosystem.title': 'Ecosystem',
    'ecosystem.subtitle': 'Where CAMLY Lives',
    'ecosystem.intro': 'Camly Coin operates within a carefully designed ecosystem that prioritizes utility and community value.',
    'ecosystem.platform1': 'Community Platform',
    'ecosystem.platform1Desc': 'A dedicated space for CAMLY holders to connect, share, and participate in community activities.',
    'ecosystem.platform2': 'Recognition System',
    'ecosystem.platform2Desc': 'Integrated systems that use CAMLY for community recognition and appreciation.',
    'ecosystem.platform3': 'Partner Services',
    'ecosystem.platform3Desc': 'Select partner services that accept and integrate CAMLY within their offerings.',
    'ecosystem.funLabel': 'Fun Ecosystem',
    'ecosystem.funDesc': 'Discover platforms spreading the Happy Camly Coin for prosperity and meaningful connections.',
    'ecosystem.funBtn': 'Explore Fun Ecosystem',

    // Philosophy Section
    'philosophy.title': 'Philosophy & Values',
    'philosophy.subtitle': 'What We Stand For',
    'philosophy.principle1': 'Authenticity',
    'philosophy.principle1Desc': 'We believe in building genuine connections and creating real value, not artificial hype.',
    'philosophy.principle2': 'Transparency',
    'philosophy.principle2Desc': 'Every aspect of CAMLY is open and verifiable. We have nothing to hide.',
    'philosophy.principle3': 'Long-term Vision',
    'philosophy.principle3Desc': 'CAMLY is built to last, not for short-term gains but for lasting impact.',
    'philosophy.principle4': 'Community First',
    'philosophy.principle4Desc': 'The community is at the heart of everything we do. Their trust is our greatest asset.',

    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Get In Touch',
    'contact.intro': 'For official inquiries, partnership proposals, or general questions about Camly Coin.',
    'contact.email': 'Email',
    'contact.response': 'We typically respond within 48-72 hours.',

    // Disclaimer
    'disclaimer.title': 'Legal Disclaimer',
    'disclaimer.text': 'Camly Coin (CAMLY) is a utility token intended for informational and functional purposes only. Nothing on this website constitutes financial advice, investment solicitation, or a promise of returns. Cryptocurrency involves risk. Users are responsible for understanding local regulations and using blockchain technology responsibly. Past performance does not guarantee future results. This website is for educational purposes only.',
    'disclaimer.copyright': '© 2022-2025 Camly Coin. All rights reserved.',

    // Install Page
    'install.title': 'Install Camly Coin App',
    'install.subtitle': 'Add Camly Coin to your home screen for quick access anytime',
    'install.alreadyInstalled': 'App Already Installed!',
    'install.alreadyInstalledDesc': 'Camly Coin is already installed on your device. Open it from your home screen.',
    'install.readyToInstall': 'Ready to Install',
    'install.clickToInstall': 'Click the button below to install Camly Coin on your device.',
    'install.installButton': 'Install App',
    'install.iosTitle': 'Install on iPhone/iPad',
    'install.iosStep1': 'Tap the Share button',
    'install.iosStep1Desc': 'At the bottom of Safari browser',
    'install.iosStep2': 'Select "Add to Home Screen"',
    'install.iosStep2Desc': 'Scroll down in the share menu',
    'install.iosStep3': 'Tap "Add"',
    'install.iosStep3Desc': 'Confirm to add the app to your home screen',
    'install.androidTitle': 'Install on Android',
    'install.androidStep1': 'Tap the menu icon (⋮) in your browser',
    'install.androidStep2': 'Select "Install app" or "Add to Home screen"',
    'install.androidStep3': 'Confirm the installation',
    'install.feature1Title': 'Native App Feel',
    'install.feature1Desc': 'Opens like a real app without browser UI',
    'install.feature2Title': 'Offline Access',
    'install.feature2Desc': 'Access cached content even without internet',
    'install.feature3Title': 'Fast Loading',
    'install.feature3Desc': 'Instant access from your home screen',
  },
  vi: {
    // Navigation
    'nav.about': 'Giới thiệu',
    'nav.tokenInfo': 'Thông tin Token',
    'nav.transparency': 'Minh bạch',
    'nav.purpose': 'Mục đích',
    'nav.ecosystem': 'Hệ sinh thái',
    'nav.philosophy': 'Triết lý',
    'nav.whitepaper': 'Whitepaper',
    'nav.funRich': 'Fun Ecosystem',
    'nav.contact': 'Liên hệ',

    // Whitepaper Page
    'whitepaper.title': 'CAMLY COIN (CAMLY)',
    'whitepaper.subtitle': 'Whitepaper v2',
    'whitepaper.toc': 'Mục lục',
    'whitepaper.footer': 'Whitepaper v2 – Phát hành: 2025',
    'whitepaper.copyContract': 'Sao chép địa chỉ',
    'whitepaper.contractCopied': 'Đã sao chép!',

    // Section 1: Abstract
    'whitepaper.section1.title': '1. Tóm tắt',
    'whitepaper.section1.content': 'Camly Coin (CAMLY) là một utility token được xây dựng trên nền tảng blockchain, nhằm hỗ trợ các ứng dụng Web3 hướng tới cộng đồng thông qua hạ tầng số minh bạch, có đạo đức và bền vững.\n\nCamly Coin được phát triển trên BNB Chain, theo tiêu chuẩn BEP-20, với trọng tâm là khả năng sử dụng lâu dài, tính mở và phát triển công nghệ có trách nhiệm.\n\nDự án không được định vị như một công cụ đầu tư và không theo đuổi mục tiêu đầu cơ.',

    // Section 2: Introduction
    'whitepaper.section2.title': '2. Giới thiệu',
    'whitepaper.section2.content': 'Trong bối cảnh công nghệ blockchain ngày càng phát triển, nhu cầu về các hệ thống số có trách nhiệm và lấy con người làm trung tâm trở nên quan trọng hơn bao giờ hết. Camly Coin được tạo ra dựa trên nguyên lý cốt lõi:',
    'whitepaper.section2.quote': 'Công nghệ tồn tại để phục vụ con người và cộng đồng, không phải để thúc đẩy đầu cơ hay phụ thuộc tài chính.',
    'whitepaper.section2.closing': 'Camly Coin hướng tới sự rõ ràng, minh bạch và giá trị bền vững theo thời gian.',

    // Section 3: Core Principles
    'whitepaper.section3.title': '3. Nguyên tắc Cốt lõi',
    'whitepaper.section3.intro': 'Camly Coin được xây dựng và vận hành dựa trên các nguyên tắc sau:',
    'whitepaper.section3.principle1.title': 'Ưu tiên tính tiện ích',
    'whitepaper.section3.principle1.desc': 'Token được thiết kế để phục vụ chức năng sử dụng thực tế.',
    'whitepaper.section3.principle2.title': 'Minh bạch theo thiết kế',
    'whitepaper.section3.principle2.desc': 'Mọi dữ liệu đều có thể kiểm chứng trên blockchain.',
    'whitepaper.section3.principle3.title': 'Đơn giản & rõ ràng',
    'whitepaper.section3.principle3.desc': 'Cấu trúc dễ hiểu, tránh phức tạp không cần thiết.',
    'whitepaper.section3.principle4.title': 'Tầm nhìn dài hạn',
    'whitepaper.section3.principle4.desc': 'Không chạy theo xu hướng ngắn hạn.',
    'whitepaper.section3.principle5.title': 'Hướng tới cộng đồng',
    'whitepaper.section3.principle5.desc': 'Giá trị được tạo ra thông qua sự tham gia và đóng góp.',

    // Section 4: Token Overview
    'whitepaper.section4.title': '4. Tổng quan Token',
    'whitepaper.section4.tokenName': 'Tên Token',
    'whitepaper.section4.tokenNameValue': 'Camly Coin',
    'whitepaper.section4.symbol': 'Ký hiệu',
    'whitepaper.section4.symbolValue': 'CAMLY',
    'whitepaper.section4.blockchain': 'Blockchain',
    'whitepaper.section4.blockchainValue': 'BNB Chain',
    'whitepaper.section4.standard': 'Tiêu chuẩn',
    'whitepaper.section4.standardValue': 'BEP-20',
    'whitepaper.section4.launchDate': 'Ngày ra mắt',
    'whitepaper.section4.launchDateValue': '10/09/2022',
    'whitepaper.section4.contractTitle': 'Địa chỉ Hợp đồng Thông minh',
    'whitepaper.section4.contractNote': 'Hợp đồng thông minh được công khai và có thể kiểm chứng trên các trình khám phá blockchain của BNB Chain.',

    // Section 5: Distribution & Launch Structure
    'whitepaper.section5.title': '5. Cấu trúc Phát hành & Phân phối',
    'whitepaper.section5.intro': 'Camly Coin được phát hành mà không thông qua:',
    'whitepaper.section5.item1': 'ICO (Initial Coin Offering)',
    'whitepaper.section5.item2': 'Không có các vòng gọi vốn riêng tư hoặc công khai',
    'whitepaper.section5.item3': 'Không có sự tham gia của quỹ đầu tư mạo hiểm',
    'whitepaper.section5.closing': 'Cấu trúc này nhằm đảm bảo Camly Coin giữ đúng bản chất là utility token, phục vụ mục đích sử dụng trong hệ sinh thái số.',

    // Section 6: Utility & Use Cases
    'whitepaper.section6.title': '6. Tiện ích & Trường hợp Sử dụng',
    'whitepaper.section6.intro': 'Camly Coin có thể được sử dụng trong các nền tảng Web3 được hỗ trợ để:',
    'whitepaper.section6.item1': 'Truy cập các dịch vụ số',
    'whitepaper.section6.item2': 'Thực hiện tương tác trong hệ thống',
    'whitepaper.section6.item3': 'Hỗ trợ các hoạt động dựa trên sự đóng góp',
    'whitepaper.section6.item4': 'Trao đổi giá trị gắn với việc sử dụng thực tế',
    'whitepaper.section6.closing': 'Các trường hợp sử dụng cụ thể có thể khác nhau tùy từng nền tảng và được triển khai độc lập.',

    // Section 7: Ecosystem Relationship
    'whitepaper.section7.title': '7. Mối quan hệ với Hệ sinh thái',
    'whitepaper.section7.intro': 'Camly Coin được thiết kế để tích hợp với các hệ sinh thái Web3 khác nhau, bao gồm nhưng không giới hạn:',
    'whitepaper.section7.item1': 'Hệ thống định danh số',
    'whitepaper.section7.item2': 'Nền tảng cộng đồng và mạng xã hội',
    'whitepaper.section7.item3': 'Môi trường giáo dục và chia sẻ tri thức',
    'whitepaper.section7.item4': 'Các ứng dụng dịch vụ số',
    'whitepaper.section7.closing': 'Mỗi nền tảng hoạt động độc lập, Camly Coin đóng vai trò là công cụ tiện ích khi phù hợp.',

    // Section 8: Governance & Development Philosophy
    'whitepaper.section8.title': '8. Quản trị & Phát triển',
    'whitepaper.section8.intro': 'Camly Coin tuân theo nguyên tắc phi tập trung có trách nhiệm, bao gồm:',
    'whitepaper.section8.item1': 'Minh bạch dữ liệu trên blockchain',
    'whitepaper.section8.item2': 'Không có cam kết hay bảo đảm tập trung',
    'whitepaper.section8.item3': 'Phát triển và cải tiến dựa trên nhu cầu sử dụng thực tế',
    'whitepaper.section8.closing': 'Mục tiêu là đảm bảo tính ổn định, bảo mật và khả năng sử dụng lâu dài.',

    // Section 9: Security & Transparency
    'whitepaper.section9.title': '9. Bảo mật & Minh bạch',
    'whitepaper.section9.item1': 'Mọi giao dịch được ghi nhận bất biến trên blockchain',
    'whitepaper.section9.item2': 'Người dùng có thể tự kiểm chứng dữ liệu',
    'whitepaper.section9.item3': 'Không tồn tại cơ chế ẩn hoặc điều khiển ngoài chuỗi',
    'whitepaper.section9.closing': '',

    // Section 10: Risk Awareness
    'whitepaper.section10.title': '10. Nhận thức Rủi ro',
    'whitepaper.section10.content': 'Việc sử dụng công nghệ blockchain có thể liên quan đến các rủi ro kỹ thuật, pháp lý và bảo mật. Người dùng tự chịu trách nhiệm trong việc tìm hiểu:',
    'whitepaper.section10.item1': 'Các quy định pháp luật địa phương',
    'whitepaper.section10.item2': 'Rủi ro kỹ thuật liên quan đến blockchain',
    'whitepaper.section10.item3': 'Các thực hành bảo mật phù hợp',
    'whitepaper.section10.closing': 'Camly Coin không loại bỏ các rủi ro này và không cung cấp bảo đảm.',

    // Section 11: Legal Disclaimer
    'whitepaper.section11.title': '11. Tuyên bố Pháp lý',
    'whitepaper.section11.content': 'Camly Coin là utility token, phục vụ mục đích thông tin và chức năng sử dụng.\n\nTài liệu này không cấu thành lời khuyên tài chính, lời mời đầu tư, hoặc chào bán chứng khoán. Không có cam kết hay bảo đảm nào về giá trị hoặc lợi ích tài chính.\n\nNgười dùng nên tự nghiên cứu và tuân thủ các quy định pháp luật hiện hành.',

    // Section 12: Conclusion
    'whitepaper.section12.title': '12. Kết luận',
    'whitepaper.section12.content': 'Camly Coin được xây dựng với mục tiêu: Rõ ràng, Minh bạch, Có trách nhiệm, và Giá trị bền vững theo thời gian.\n\nDự án hướng tới việc đóng góp tích cực cho hệ sinh thái Web3 thông qua tiện ích thực tế và sự tham gia của cộng đồng.\n\nCamly Coin đại diện cho cam kết về sự rõ ràng, chính trực và tư duy dài hạn trong phát triển Web3.',

    // Hero Section
    'hero.tagline': 'Token Sinh Ra Từ Tình Yêu',
    'hero.description': 'Camly Coin là một utility token được tạo ra để tôn vinh những kết nối ý nghĩa và hỗ trợ các sáng kiến tích cực trong hệ sinh thái blockchain.',
    'hero.blockchain': 'BNB Chain',
    'hero.standard': 'BEP-20',
    'hero.contract': 'Địa chỉ Hợp đồng',
    'hero.copied': 'Đã sao chép!',
    'hero.launchDate': 'Ra mắt ngày 10 tháng 9, 2022',

    // About Section
    'about.title': 'Về Camly Coin',
    'about.subtitle': 'Câu Chuyện Đằng Sau CAMLY',
    'about.p1': 'Camly Coin được tạo ra với một tầm nhìn duy nhất: xây dựng điều gì đó có ý nghĩa vượt xa công dụng điển hình của tài sản số. Được đặt tên với ý nghĩa cá nhân sâu sắc, CAMLY đại diện cho cam kết về sự chân thực, minh bạch và giá trị lâu dài.',
    'about.p2': 'Ngay từ đầu, Camly Coin được thiết kế không phải để đầu cơ, mà như một biểu tượng của sự cống hiến và nền tảng để xây dựng những kết nối chân thành trong cộng đồng blockchain.',
    'about.quote': '"Giá trị thực sự không được đo bằng giá cả, mà bằng ý nghĩa chúng ta tạo ra và những kết nối chúng ta xây dựng."',

    // Token Information Section
    'tokenInfo.title': 'Thông tin Token',
    'tokenInfo.subtitle': 'Chi tiết Kỹ thuật',
    'tokenInfo.name': 'Tên Token',
    'tokenInfo.symbol': 'Ký hiệu',
    'tokenInfo.blockchain': 'Blockchain',
    'tokenInfo.standard': 'Chuẩn Token',
    'tokenInfo.contract': 'Địa chỉ Hợp đồng',
    'tokenInfo.launch': 'Ngày ra mắt',
    'tokenInfo.explorer': 'Xem trên BscScan',

    // Transparency Section
    'transparency.title': 'Minh bạch & Cấu trúc',
    'transparency.subtitle': 'Cam kết về Sự Công khai',
    'transparency.noIco': 'Không ICO hay Bán Công khai',
    'transparency.noIcoDesc': 'Camly Coin không được ra mắt thông qua bất kỳ đợt chào bán coin ban đầu, bán công khai hay sự kiện gây quỹ nào.',
    'transparency.noVc': 'Không Có Vốn Đầu tư Mạo hiểm',
    'transparency.noVcDesc': 'Không có nhà đầu tư bên ngoài hay quỹ đầu tư mạo hiểm nào nắm giữ vị thế trong CAMLY. Token vẫn độc lập.',
    'transparency.verified': 'Hợp đồng Đã Xác minh',
    'transparency.verifiedDesc': 'Hợp đồng thông minh đã được xác minh và có thể kiểm tra công khai trên trình khám phá blockchain BNB Chain.',
    'transparency.distribution': 'Phân phối Minh bạch',
    'transparency.distributionDesc': 'Tất cả các giao dịch token có thể được theo dõi trên blockchain, đảm bảo hoàn toàn minh bạch.',

    // Purpose Section
    'purpose.title': 'Mục đích & Tiện ích',
    'purpose.subtitle': 'CAMLY Được Thiết kế Để Làm Gì',
    'purpose.intro': 'Camly Coin đóng vai trò như một utility token trong hệ sinh thái của nó, được thiết kế cho các mục đích chức năng thay vì giao dịch đầu cơ.',
    'purpose.use1': 'Tham gia Cộng đồng',
    'purpose.use1Desc': 'CAMLY tạo điều kiện tham gia vào các sáng kiến cộng đồng và các quyết định quản trị.',
    'purpose.use2': 'Hỗ trợ Hệ sinh thái',
    'purpose.use2Desc': 'Token hỗ trợ các nền tảng và dịch vụ khác nhau trong hệ sinh thái Camly.',
    'purpose.use3': 'Trao đổi Giá trị',
    'purpose.use3Desc': 'CAMLY cho phép trao đổi giá trị trong các nền tảng và dịch vụ tham gia.',
    'purpose.use4': 'Hệ thống Ghi nhận',
    'purpose.use4Desc': 'Token đóng vai trò như một phương tiện ghi nhận và đánh giá cao trong cộng đồng.',
    'purpose.note': 'Quan trọng: CAMLY chỉ dành cho mục đích tiện ích. Nó không được thiết kế như một phương tiện đầu tư hay lưu trữ giá trị.',

    // Ecosystem Section
    'ecosystem.title': 'Hệ sinh thái',
    'ecosystem.subtitle': 'Nơi CAMLY Hoạt động',
    'ecosystem.intro': 'Camly Coin hoạt động trong một hệ sinh thái được thiết kế cẩn thận, ưu tiên tiện ích và giá trị cộng đồng.',
    'ecosystem.platform1': 'Nền tảng Cộng đồng',
    'ecosystem.platform1Desc': 'Không gian dành riêng cho người nắm giữ CAMLY để kết nối, chia sẻ và tham gia các hoạt động cộng đồng.',
    'ecosystem.platform2': 'Hệ thống Ghi nhận',
    'ecosystem.platform2Desc': 'Các hệ thống tích hợp sử dụng CAMLY cho việc ghi nhận và đánh giá cao cộng đồng.',
    'ecosystem.platform3': 'Dịch vụ Đối tác',
    'ecosystem.platform3Desc': 'Các dịch vụ đối tác được chọn lọc chấp nhận và tích hợp CAMLY trong các dịch vụ của họ.',
    'ecosystem.funLabel': 'Fun Ecosystem',
    'ecosystem.funDesc': 'Khám phá các nền tảng lan tỏa đồng tiền hạnh phúc thịnh vượng Happy Camly Coin.',
    'ecosystem.funBtn': 'Khám phá Fun Ecosystem',

    // Philosophy Section
    'philosophy.title': 'Triết lý & Giá trị',
    'philosophy.subtitle': 'Những Gì Chúng Tôi Đại diện',
    'philosophy.principle1': 'Chân thực',
    'philosophy.principle1Desc': 'Chúng tôi tin vào việc xây dựng những kết nối chân thành và tạo ra giá trị thực sự, không phải sự thổi phồng nhân tạo.',
    'philosophy.principle2': 'Minh bạch',
    'philosophy.principle2Desc': 'Mọi khía cạnh của CAMLY đều mở và có thể xác minh. Chúng tôi không có gì để che giấu.',
    'philosophy.principle3': 'Tầm nhìn Dài hạn',
    'philosophy.principle3Desc': 'CAMLY được xây dựng để tồn tại lâu dài, không phải cho lợi ích ngắn hạn mà cho tác động lâu bền.',
    'philosophy.principle4': 'Cộng đồng Là Ưu tiên',
    'philosophy.principle4Desc': 'Cộng đồng là trung tâm của mọi điều chúng tôi làm. Sự tin tưởng của họ là tài sản quý giá nhất.',

    // Contact Section
    'contact.title': 'Liên hệ',
    'contact.subtitle': 'Kết nối với Chúng tôi',
    'contact.intro': 'Để yêu cầu chính thức, đề xuất hợp tác, hoặc câu hỏi chung về Camly Coin.',
    'contact.email': 'Email',
    'contact.response': 'Chúng tôi thường phản hồi trong vòng 48-72 giờ.',

    // Disclaimer
    'disclaimer.title': 'Tuyên bố Pháp lý',
    'disclaimer.text': 'Camly Coin (CAMLY) là một utility token chỉ dành cho mục đích thông tin và chức năng. Không có nội dung nào trên trang web này cấu thành lời khuyên tài chính, lời mời đầu tư, hoặc hứa hẹn về lợi nhuận. Tiền điện tử liên quan đến rủi ro. Người dùng có trách nhiệm hiểu các quy định địa phương và sử dụng công nghệ blockchain một cách có trách nhiệm. Hiệu suất trong quá khứ không đảm bảo kết quả trong tương lai. Trang web này chỉ dành cho mục đích giáo dục.',
    'disclaimer.copyright': '© 2022-2025 Camly Coin. Bảo lưu mọi quyền.',

    // Install Page
    'install.title': 'Cài đặt Ứng dụng Camly Coin',
    'install.subtitle': 'Thêm Camly Coin vào màn hình chính để truy cập nhanh mọi lúc',
    'install.alreadyInstalled': 'Ứng dụng Đã Được Cài đặt!',
    'install.alreadyInstalledDesc': 'Camly Coin đã được cài đặt trên thiết bị của bạn. Mở từ màn hình chính.',
    'install.readyToInstall': 'Sẵn sàng Cài đặt',
    'install.clickToInstall': 'Nhấn nút bên dưới để cài đặt Camly Coin trên thiết bị của bạn.',
    'install.installButton': 'Cài đặt Ứng dụng',
    'install.iosTitle': 'Cài đặt trên iPhone/iPad',
    'install.iosStep1': 'Nhấn nút Chia sẻ',
    'install.iosStep1Desc': 'Ở cuối trình duyệt Safari',
    'install.iosStep2': 'Chọn "Thêm vào Màn hình chính"',
    'install.iosStep2Desc': 'Cuộn xuống trong menu chia sẻ',
    'install.iosStep3': 'Nhấn "Thêm"',
    'install.iosStep3Desc': 'Xác nhận để thêm ứng dụng vào màn hình chính',
    'install.androidTitle': 'Cài đặt trên Android',
    'install.androidStep1': 'Nhấn biểu tượng menu (⋮) trong trình duyệt',
    'install.androidStep2': 'Chọn "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính"',
    'install.androidStep3': 'Xác nhận cài đặt',
    'install.feature1Title': 'Trải nghiệm như App thật',
    'install.feature1Desc': 'Mở như ứng dụng thật không có giao diện trình duyệt',
    'install.feature2Title': 'Truy cập Offline',
    'install.feature2Desc': 'Xem nội dung đã lưu kể cả khi không có mạng',
    'install.feature3Title': 'Tải nhanh',
    'install.feature3Desc': 'Truy cập tức thì từ màn hình chính',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
