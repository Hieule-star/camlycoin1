import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

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
    'nav.contact': 'Contact',

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
  },
  vi: {
    // Navigation
    'nav.about': 'Giới thiệu',
    'nav.tokenInfo': 'Thông tin Token',
    'nav.transparency': 'Minh bạch',
    'nav.purpose': 'Mục đích',
    'nav.ecosystem': 'Hệ sinh thái',
    'nav.philosophy': 'Triết lý',
    'nav.contact': 'Liên hệ',

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
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
