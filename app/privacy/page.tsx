import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <section className="container mx-auto max-w-4xl px-4 py-20">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">개인정보처리방침</h1>
              <p className="text-lg text-muted-foreground">
                faddit은 여러분의 개인정보를 무엇보다 소중하게 생각합니다.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed">
              <p>
                (주)패딧(이하 '당사')은 「개인정보 보호법」 및 관련 법령을 준수하며, 
                홈페이지(https://www.business.faddit.co.kr)를 통해 수집되는 개인정보의 안전한 보호를 위해 최선을 다하고 있습니다.
                이 개인정보처리방침은 수집하는 항목, 이용 목적, 보유 기간, 처리 방침 등을 안내합니다.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">1. 수집하는 개인정보 항목</h2>
                <p>당사는 아래와 같은 항목의 개인정보를 수집할 수 있습니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>필수 항목:</strong> 성함, 이메일 주소, 휴대전화 번호, 소속(회사/단체명)</li>
                  <li><strong>선택 항목:</strong> 주소, 서비스 이용 목적 및 기타 요청 사항</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">2. 개인정보 수집 방법</h2>
                <p>개인정보는 다음과 같은 방식으로 수집됩니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>홈페이지 내 문의하기 / 의류 제작 상담 신청 / 웨이팅 등록 폼 작성 시</li>
                  <li>이메일 또는 전화 등 비대면/오프라인 커뮤니케이션을 통한 수집</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">3. 개인정보 이용 목적</h2>
                <p>수집된 개인정보는 아래와 같은 목적에 활용됩니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>고객 문의 및 의류 제작 상담 대응</li>
                  <li>세무·회계 등 관련 법령에 따른 행정처리</li>
                  <li>서비스 안내, 업데이트 알림 등 운영 커뮤니케이션</li>
                  <li>통계 분석 및 내부 보고용 데이터 활용 (※ 익명 처리 후 사용)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">4. 개인정보 보유 및 이용 기간</h2>
                <p>원칙적으로 개인정보는 수집 및 이용 목적 달성 후 지체 없이 파기합니다.</p>
                <p>단, 다음의 경우 관련 법령에 따라 일정 기간 보관됩니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>세무 관련 정보:</strong> 5년 (소득세법 등 관련 규정에 따름)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">5. 개인정보 제3자 제공</h2>
                <p>당사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.</p>
                <p>단, 아래의 경우는 예외입니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>사전에 이용자의 동의를 받은 경우</li>
                  <li>법령에 의거하여 제공이 요구되는 경우</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">6. 개인정보 처리 위탁</h2>
                <p>현재 개인정보 처리 위탁 사항은 없습니다.</p>
                <p>위탁이 발생하는 경우, 위탁업체명 및 위탁업무 내용을 본 방침 또는 홈페이지에 고지합니다.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">7. 개인정보의 파기 절차 및 방법</h2>
                <p>수집된 개인정보는 목적 달성 후 관련 법령 및 내부 방침에 따라 안전하게 파기합니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>전자 파일:</strong> 복구 불가능한 방식으로 완전 삭제</li>
                  <li><strong>종이 문서:</strong> 파쇄 또는 소각 처리</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">8. 정보주체의 권리와 행사 방법</h2>
                <p>이용자는 언제든지 본인의 개인정보에 대해 열람, 정정, 삭제, 처리정지 요청을 할 수 있습니다.</p>
                <p>요청은 이메일, 전화 등을 통해 접수 가능하며, 당사는 법적 기한 내 성실히 처리합니다.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">9. 개인정보 보호책임자</h2>
                <ul className="list-none space-y-2">
                  <li><strong>성명:</strong> 김한재</li>
                  <li><strong>연락처:</strong> 010-5662-0796</li>
                  <li><strong>이메일:</strong> jay@faddit.co.kr</li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  본 방침은 홈페이지 내 공지 없이 변경될 수 있으며, 변경 시 [개정일자]를 함께 고지합니다.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>최종 수정일:</strong> 2025년 7월 9일
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

