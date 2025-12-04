import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <section className="container mx-auto max-w-4xl px-4 py-20">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">이용약관</h1>
            </div>

            <div className="space-y-6 text-base leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제1조 (목적)</h2>
                <p>
                  본 약관은 (주)패딧(이하 "당사")가 운영하는 홈페이지(이하 "사이트")의 이용과 관련하여, 이용자와 당사 간의 권리, 의무 및 책임사항을 정함을 목적으로 합니다.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제2조 (정의)</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>"이용자"란 본 사이트에 접속하여 본 약관에 따라 당사가 제공하는 서비스를 이용하는 모든 개인 또는 단체를 말합니다.</li>
                  <li>"서비스"란 당사가 제공하는 회사 및 제품 관련 정보 열람, 문의 접수, 공지사항 게시 등의 콘텐츠를 의미합니다.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제3조 (약관의 효력 및 변경)</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>본 약관은 사이트에 게시함으로써 효력을 발생합니다.</li>
                  <li>당사는 관련 법령을 위반하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 개정 시 사이트를 통해 사전 또는 사후 공지합니다.</li>
                  <li>이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있으며, 계속 이용 시 변경에 동의한 것으로 간주됩니다.</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제4조 (서비스의 제공 및 변경)</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    당사는 이용자에게 아래와 같은 서비스를 제공합니다.
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>회사 및 서비스 관련 정보 제공</li>
                      <li>온라인 문의 접수 및 응대</li>
                      <li>공지사항, 뉴스 등의 게시 콘텐츠 열람</li>
                    </ul>
                  </li>
                  <li>서비스 내용은 회사의 운영상 필요에 따라 변경될 수 있으며, 중요한 변경 사항은 사전에 공지합니다. 단, 긴급하거나 부득이한 경우 사후 공지할 수 있습니다.</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제5조 (개인정보 보호)</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>당사는 이용자의 개인정보를 중요하게 생각하며, 관련 법령 및 개인정보처리방침을 준수합니다.</li>
                  <li>개인정보의 수집, 이용, 보관, 파기 등의 세부사항은 개인정보처리방침에 따릅니다.</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제6조 (이용자의 의무)</h2>
                <p>이용자는 사이트 이용 시 다음 각 호의 행위를 해서는 안 됩니다.</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>허위 정보의 등록 또는 타인의 정보 도용</li>
                  <li>당사 및 제3자의 저작권, 상표권 등 권리를 침해하는 행위</li>
                  <li>사이트의 운영을 방해하거나 해킹·악성코드 유포 등의 비정상적 행위</li>
                  <li>공공질서 및 미풍양속에 반하는 행위</li>
                  <li>기타 관련 법령을 위반하는 일체의 행위</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제7조 (저작권 및 콘텐츠 이용 제한)</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>본 사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 영상, 자료 등)의 저작권은 당사 또는 정당한 제공자에게 귀속됩니다.</li>
                  <li>이용자는 당사의 사전 서면 동의 없이 해당 콘텐츠를 복제, 배포, 전송, 변형할 수 없습니다.</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제8조 (면책 조항)</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>당사는 천재지변, 시스템 장애, 정전 등 불가항력적 사유로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
                  <li>이용자가 자발적으로 제공한 정보의 정확성 및 신뢰성에 대해서는 당사가 책임지지 않습니다.</li>
                  <li>본 사이트에서 링크된 외부 웹사이트의 정보에 대해서는 당사가 보증하거나 책임지지 않습니다.</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">제9조 (준거법 및 관할법원)</h2>
                <p>본 약관은 대한민국 법률에 따라 해석되며, 서비스 이용과 관련하여 발생한 분쟁에 대해서는 서울중앙지방법원을 전속 관할 법원으로 합니다.</p>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  ※ 본 약관은 2025년 7월 9일부터 적용됩니다.
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

