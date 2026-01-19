import { SlideContent } from './types';

// vCard Data for QR Code
const vCardData = `BEGIN:VCARD
VERSION:3.0
N:채;수훈;;;
FN:채수훈
ORG:국제직업전문학교
TITLE:디자인
TEL;TYPE=CELL:010-6274-6860
END:VCARD`;

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(vCardData)}&bgcolor=ffffff&color=000000&margin=10`;

export const SLIDE_CONTENT: SlideContent[] = [
  {
    id: 1,
    layout: 'finale',
    title: "THE KUKJE CINEMA",
    subtitle: "2026 AI 숏폼 크리에이터 마스터 클래스.\n평범한 관객에서 주인공으로 데뷔하는 순간.",
    mentorComment: "여러분의 위대한 첫 번째 프레임이 지금 여기서 시작됩니다.",
    extraData: { subTitle2: "SCENE #1 : THE BEGINNING" }
  },
  {
    id: 2,
    layout: 'hero',
    title: "THE NEW ERA OF CREATOR",
    subtitle: "전 세계는 지금 숏폼 열풍. 시청을 넘어 제작자로.\n디자인 감각과 AI 기술이 만나면 불가능은 없습니다.",
    highlight: "대한민국 대표 AI 영상 편집 입문 과정",
    mentorComment: "세상은 이제 글보다 영상으로 대화합니다. 여러분은 그 대화의 주역이 될 것입니다."
  },
  {
    id: 3,
    layout: 'center',
    title: "ACT 1: VISUAL DESIGN",
    subtitle: "모든 영상의 뼈대는 디자인입니다.\n화면을 압도하는 미적 감각의 기초를 다집니다.",
    highlight: "영상의 완성도는 디자인 한 장에서 결정됩니다.",
    mentorComment: "편집 기술보다 중요한 것은 무엇이 아름다운지 아는 디자인 눈(Eye)입니다."
  },
  {
    id: 4,
    layout: 'grid',
    title: "ADOBE PHOTOSHOP",
    subtitle: "이미지의 한계를 넘어서는 합성 테크닉",
    items: [
      "디지털 이미지의 구조와 해상도 이해",
      "레이어와 마스크를 활용한 고퀄리티 합성",
      "인물 보정 및 톤 앤 매너(Tone & Manner) 설정",
      "유튜브 썸네일을 사로잡는 보정 기법",
      "생성형 채우기(AI)를 활용한 배경 확장"
    ],
    mentorComment: "포토샵은 모든 비주얼 작업의 심장입니다. 심장이 뛰어야 영상이 살아납니다."
  },
  {
    id: 5,
    layout: 'grid',
    title: "ADOBE ILLUSTRATOR",
    subtitle: "세련된 로고와 벡터 소스 제작",
    items: [
      "펜 툴 마스터: 로고 및 아이콘 드로잉",
      "영상 자막을 위한 타이포그래피 설계",
      "벡터 방식의 무한 확대 그래픽 리소스",
      "퍼스널 브랜딩을 위한 고유 엠블럼 제작",
      "모션 그래픽 활용을 위한 레이어 분리"
    ],
    mentorComment: "깔끔한 자막 하나가 영상의 신뢰도를 결정합니다."
  },
  {
    id: 6,
    layout: 'text-left',
    title: "DESIGN SENSE",
    subtitle: "전문가의 컬러와 구도를 이식합니다.",
    items: [
      "Color Psychology: 심리를 움직이는 배색",
      "Golden Ratio: 시선을 고정시키는 화면 분할",
      "UI/UX Design: 시청자 중심의 자막 배치",
      "Trend Analysis: 2026 글로벌 트렌드 분석"
    ],
    mentorComment: "기술은 배울 수 있지만, 감각은 훈련되어야 합니다. 그 훈련을 저희가 돕습니다."
  },
  {
    id: 7,
    layout: 'center',
    title: "ACT 2: AI REVOLUTION",
    subtitle: "AI는 적이 아닙니다. 당신의 24시간 비서입니다.\n제작 속도를 10배 높이는 혁명적인 워크플로우.",
    highlight: "AI를 지배하는 자가 창작 시장을 선점합니다.",
    mentorComment: "AI를 사용하는 1인 제작자는 과거의 10명 규모 팀보다 강력합니다."
  },
  {
    id: 8,
    layout: 'grid',
    title: "AI IMAGE & ASSET",
    subtitle: "상상을 현실로 만드는 생성형 AI",
    items: [
      "Midjourney: 실사보다 더 실사 같은 아트워크",
      "DALL-E 3: 정교한 프롬프트 엔지니어링",
      "AI 업스케일링: 저해상도 이미지의 고화질화",
      "Adobe Firefly: 저작권 걱정 없는 리소스 생성",
      "Stable Diffusion: 나만의 고유 스타일 학습"
    ],
    mentorComment: "이제 못 그려서 못 만드는 시대는 끝났습니다. 상상력만 가져오세요."
  },
  {
    id: 9,
    layout: 'grid',
    title: "AI VIDEO & SOUND",
    subtitle: "움직임과 소리까지 AI가 책임집니다.",
    items: [
      "Runway Gen-3: 텍스트로 영상 소스 제작",
      "Pika Labs: 애니메이션 효과 및 물리 기반 모션",
      "ElevenLabs: 감정이 담긴 AI 성우 보이스",
      "Suno AI: 영상 분위기에 맞는 BGM 작곡",
      "AI Lip-sync: 언어의 장벽을 넘는 입모양 맞춤"
    ],
    mentorComment: "AI 보이스로 성우 비용을 아끼고, AI BGM으로 저작권 문제를 해결하세요."
  },
  {
    id: 10,
    layout: 'hero',
    title: "DON'T BE AFRAID OF AI",
    subtitle: "AI는 도구일 뿐, 디렉팅은 인간의 영역입니다.\n우리는 AI를 '잘 쓰는' 프로 크리에이터를 만듭니다.",
    highlight: "전 과정 AI 융합 실습 진행",
    mentorComment: "여러분의 창의성에 AI라는 날개를 달아드리는 것이 제 역할입니다."
  },
  {
    id: 11,
    layout: 'center',
    title: "ACT 3: VIDEO PRODUCTION",
    subtitle: "본격적인 영상 제작의 세계로 입장합니다.\n스토리를 연결하고 감동을 편집하는 시간.",
    highlight: "Premiere Pro & After Effects 집중 교육",
    mentorComment: "컷 하나가 바뀌면 감동의 크기가 달라집니다."
  },
  {
    id: 12,
    layout: 'grid',
    title: "PREMIERE PRO MASTER",
    subtitle: "실전 영상 편집의 정석",
    items: [
      "표준 숏폼(9:16) 프로젝트 설정 및 최적화",
      "감각적인 리듬의 비트 편집(Beat Edit)",
      "Vrew: AI 자동 자막 생성 및 빠른 컷 편집",
      "LUMETRI: 시네마틱 컬러 그레이딩",
      "오디오 노이즈 제거 및 고퀄리티 사운드 디자인"
    ],
    mentorComment: "어렵게 느껴지던 컷 편집, AI와 함께라면 순식간에 끝납니다."
  },
  {
    id: 13,
    layout: 'grid',
    title: "AFTER EFFECTS MOTION",
    subtitle: "화면을 압도하는 화려한 모션 그래픽",
    items: [
      "Keyframe Animation: 부드러운 움직임의 원리",
      "Kinetic Typography: 살아있는 텍스트 디자인",
      "3D Camera & Layer: 깊이감 있는 공간 연출",
      "VFX Basic: 파티클 및 특수 효과 합성",
      "Template Customizing: 실무용 템플릿 개조법"
    ],
    mentorComment: "단순한 자막을 넘어 '작품'으로 보이게 만드는 마무리는 모션입니다."
  },
  {
    id: 14,
    layout: 'list',
    title: "SHORTS STRATEGY",
    subtitle: "조회수를 폭발시키는 알고리즘의 비밀",
    items: [
      "Hooking: 3초 안에 시청자를 붙잡는 기법",
      "Storytelling: 지루할 틈 없는 숏폼 내러티브",
      "Viral Trends: 현재 유행하는 챌린지 분석",
      "SEO: 검색에 걸리는 제목과 태그 설정법",
      "Community: 구독자와 소통하는 채널 관리법"
    ],
    mentorComment: "아무리 잘 만든 영상도 봐주는 사람이 없으면 의미가 없습니다."
  },
  {
    id: 15,
    layout: 'hero',
    title: "DREAM IT, DO IT",
    subtitle: "세상의 모든 것은 두 번 창조됩니다.\n첫 번째는 당신의 마음속에서, 두 번째는 편집기 안에서.",
    highlight: "여러분의 상상을 현실로 출력하세요.",
    mentorComment: "가장 개인적인 것이 가장 창의적인 것입니다. 여러분만의 색을 찾으세요."
  },
  {
    id: 16,
    layout: 'center',
    title: "ACT 4: THE PORTFOLIO",
    subtitle: "결과로 증명하는 시간입니다.\n당신의 실력을 한눈에 보여줄 마스터피스 완성.",
    highlight: "취업과 창업의 문을 여는 열쇠, 포트폴리오",
    mentorComment: "이력서 백 줄보다 고퀄리티 영상 한 편이 더 강력합니다."
  },
  {
    id: 17,
    layout: 'grid',
    title: "SHOWREEL STRATEGY",
    subtitle: "나만의 고유한 브랜드 쇼릴 제작",
    items: [
      "Best Cut: 가장 자신 있는 작업물 배치",
      "Style Variety: 광고, 브이로그, 인터뷰 등 다양성",
      "Personal Branding: 나만의 제작 스타일 정립",
      "Platform optimization: 인스타, 유튜브, 틱톡 최적화",
      "Feedback: 전문가의 1:1 디렉팅 및 수정"
    ],
    mentorComment: "수료 후에 남는 것은 수료증이 아니라, 여러분의 포트폴리오입니다."
  },
  {
    id: 18,
    layout: 'list',
    title: "CAREER SUPPORT",
    subtitle: "여러분의 성공적인 데뷔를 지원합니다.",
    items: [
      "1:1 맞춤형 취업 및 창업 진로 상담",
      "실무 디렉터의 자소서 및 이력서 첨삭",
      "우수 수강생 협력사 취업 추천 제도",
      "창업자를 위한 개인 채널 마케팅 가이드",
      "공모전 및 프로젝트 참여 기회 제공"
    ],
    mentorComment: "여러분이 자립할 수 있을 때까지 든든한 버팀목이 되어드리겠습니다."
  },
  {
    id: 19,
    layout: 'center',
    title: "BENEFITS FOR CREW",
    subtitle: "오직 여러분을 위해 준비된 국가 지원 혜택",
    highlight: "국비 지원 100% + 훈련 장려금 지급",
    mentorComment: "재정적 부담은 저희가 지겠습니다. 열정만 가져오세요."
  },
  {
    id: 20,
    layout: 'list',
    title: "SUPPORT DETAILS",
    subtitle: "알면 알수록 놀라운 국제의 지원 시스템",
    items: [
      "국민내일배움카드 훈련비 전액 국비 지원",
      "출석률에 따른 매월 훈련장려금 별도 지급",
      "Adobe All-Apps 실습 라이선스 지원",
      "최신 사양 그래픽 전용 PC 워크스테이션",
      "최신 영상 촬영 장비(카메라, 조명) 대여"
    ],
    mentorComment: "도구가 없어서 못 한다는 핑계는 이곳에서 통하지 않습니다."
  },
  {
    id: 21,
    layout: 'profile',
    title: "DIRECTOR CHAE",
    subtitle: "CHAE SU HOON",
    highlight: "전임 교수 / 미디어 디렉터",
    items: [
      "국제직업전문학교 디자인·미디어 전임 교수",
      "그래픽 디자인 및 영상 제작 실무 10년 이상",
      "생성형 AI 미디어 제작 공정 도입 전문가",
      "Adobe Certified Professional 과정 지도"
    ],
    mentorComment: "여러분의 이름이 엔딩 크레딧에 오를 때까지 멈추지 않겠습니다."
  },
  {
    id: 22,
    layout: 'profile',
    title: "MANAGER LEE",
    subtitle: "LEE SE AH",
    highlight: "행정 매니저 / 교육 케어",
    items: [
      "과정 운영 및 국가 지원 행정 전담 관리",
      "내일배움카드 및 훈련비 정산 케어",
      "수강생 출결 및 취업 지원 사후 관리",
      "쾌적한 학습 환경 조성을 위한 총괄 지원"
    ],
    mentorComment: "여러분이 오직 공부에만 집중할 수 있도록 뒤에서 묵묵히 돕겠습니다."
  },
  {
    id: 23,
    layout: 'text-left',
    title: "THE RULES OF PRO",
    subtitle: "우리는 최고의 아웃풋을 위해 약속합니다.",
    items: [
      "Attendance: 출석 80% 미만 시 제적 주의",
      "Time: 오전 9:10 입실 엄수 (지각은 실력의 적)",
      "Respect: 동료 수강생 간의 예의와 배려",
      "Action: 생각만 하지 말고 일단 편집하세요",
      "Passion: 수료 때까지 꺼지지 않는 창작욕"
    ],
    mentorComment: "성실함은 가장 기본적이면서도 가장 강력한 재능입니다."
  },
  {
    id: 24,
    layout: 'center',
    title: "THE LOCATION",
    subtitle: "광주광역시 북구 설죽로 (LC타워) 3층",
    highlight: "지하 1층 주차장 2시간 무료 정산 지원",
    mentorComment: "최고의 시설과 최고의 교육을 광주의 중심에서 만나보세요."
  },
  {
    id: 25,
    layout: 'hero',
    title: "ARE YOU READY?",
    subtitle: "지금 이 순간에도 수천 개의 영상이 업로드됩니다.\n세상이 당신의 이야기를 기다리고 있습니다.",
    highlight: "여러분의 액션이 세상을 바꿉니다.",
    mentorComment: "두려움은 편집하세요. 확신을 재생하세요."
  },
  {
    id: 26,
    layout: 'finale',
    title: "ACTION & CUT!",
    subtitle: "국제직업전문학교 숏폼 마스터 클래스.\n여러분의 새로운 인생 1장 1절을 시작합니다.",
    highlight: "010-6274-6860",
    mentorComment: "전화 한 통이 여러분의 인생을 바꿀 컷(Cut)이 될 수 있습니다.",
    extraData: {
        qrCode: qrCodeUrl,
        subTitle2: "THE END : AND NEW BEGINNING"
    }
  }
];