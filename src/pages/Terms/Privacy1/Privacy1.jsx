import Layout from "../../../components/Layout/Layout";
import TermsNav from "../TermsNav/TermsNav";
import styles from "./Privacy1.module.css";

export default function Privacy1() {
  return (
    <Layout>
      <main className={`${styles.terms_privacy1} inner`}>
        <TermsNav />
        <p>
          주식회사 엔아이시스템(이하 "회사")는 이용자의 동의를 기반으로
          개인정보를 수집・이용 및 제공하고, 개인정보보호를 위하여
          개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률,
          통신비밀보호법 및 전기통신사업법 등 관련 법령상의 개인정보보호 규정을
          준수하며, 관련 법령에 의거한 개인정보 처리방침을 정하여 이용자 권익
          보호에 최선을 다하고 있습니다.
        </p>
        <p>
          회사는 이용자의 소중한 개인정보를 보호하고 이와 관련한 고충을 신속하고
          원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
          시행합니다.
        </p>
        <dl>
          <dt>1. 수집하는 개인정보 항목</dt>
          <dd>
            회사는 회원 가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를
            수집하고 있습니다.
            <ul>
              <li>
                - 수집항목: 이름, 생년월일, 성별, 로그인ID, 비밀번호, 비밀번호
                질문과 답변, 자택 전화번호, 자택 주소, 휴대전화번호, 이메일,
                직업 , 회사명 , 부서 , 직책 , 회사전화번호 , 취미 , 결혼여부,
                기념일, 법정대리인정보, 주민등록번호, 서비스 이용기록, 접속
                로그, 접속 IP 정보, 결제기록
              </li>
              <li>
                - 개인정보 수집방법: 홈페이지, 서면양식, 팩스, 전화, 상담
                게시판, 이메일
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>2. 개인정보의 수집 및 이용목적</dt>
          <dd>
            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            <ul>
              <li>
                - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
                콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송
              </li>
              <li>
                - 회원 관리: 회원제 서비스 이용에 따른 본인확인 , 개인 식별 ,
                연령확인 , 만 14세 미만 아동 개인정보 수집 시 법정 대리인
                동의여부 확인 , 고지사항 전달
              </li>
              <li>
                - 마케팅 및 광고에 활용: 접속 빈도 파악 또는 회원의 서비스
                이용에 대한 통계
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>3. 개인정보의 보유 및 이용기간</dt>
          <dd>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
            <ul>
              <li>
                - 파기절차: 회원님이 회원 가입 등을 위해 입력하신 정보는 목적이
                달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부
                방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및
                이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로
                옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는
                이외의 다른 목적으로 이용되지 않습니다.
              </li>
              <li>
                - 파기방법: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수
                없는 기술적 방법을 사용하여 삭제합니다.
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>4. 개인정보 제공</dt>
          <dd>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
            <ul>
              <li>- 이용자들이 사전에 동의한 경우</li>
              <li>
                - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                방법에 따라 수사기관의 요구가 있는 경우
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>5. 수집한 개인정보의 위탁</dt>
          <dd>
            회사는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지
            않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무
            내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록
            하겠습니다.
          </dd>
        </dl>
        <dl>
          <dt>6. 이용자 및 법정대리인의 권리와 그 행사방법</dt>
          <dd>
            <ul>
              <li>
                이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만
                14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며
                가입해지를 요청할 수도 있습니다.
              </li>
              <li>
                이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위해서는
                ‘개인정보변 경’(또는 ‘회원 정보수정’ 등)을 가입해지(동의철회)를
                위해서는 “회원탈퇴”를 클릭 하여 본인 확인 절차를 거치신 후 직접
                열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게
                서면, 전화 또는 이메일로 연락하시면 지체없이 조 치하겠습니다.
              </li>
              <li>
                이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
                완료하기 전까 지 당해 개인정보를 이용 또는 제공하지 않습니다.
                또한 잘못된 개인정보를 제3자 에게 이미 제공한 경우에는 정정
                처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록
                하겠습니다.
              </li>
              <li>
                회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된
                개인정보는 “회사가 수집하는 개인정보의 보유 및 이용기간”에
                명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수
                없도록 처리하고 있습니다.
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>7. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</dt>
          <dd>
            회사는 이용자의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을
            운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가
            이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
            하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를
            사용합니다.
            <ul>
              <li>
                - 쿠키 등 사용 목적: 회원과 비회원의 접속 빈도나 방문 시간 등을
                분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트
                참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤
                서비스 제공
              </li>
              <li>
                - 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서,
                귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
                허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
                쿠키의 저장을 거부할 수도 있습니다.
              </li>
              <li>
                - 쿠키 설정 거부 방법 예시: 쿠키 설정을 거부하는 방법으로는
                회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든
                쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든
                쿠키의 저장을 거부할 수 있습니다.
              </li>
              <li>
                - 설정방법 예시(인터넷 익스플로어의 경우): 웹 브라우저 상단의
                도구 > 인터넷 옵션 > 개인정보 (단, 귀하께서 쿠키 설치를
                거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.)
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>8. 개인정보에 관한 민원서비스</dt>
          <dd>
            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
            위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고
            있습니다.
            <ul>
              <li>- 개인정보관리책임자 성명: 이현봉</li>
              <li>- 전화번호: 1666-2869</li>
              <li>- 이메일: sales@nisystem.co.kr</li>
            </ul>
          </dd>
          <dd>
            <br />
            기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에
            문의 가능합니다.
            <ul>
              <li>
                - 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
              </li>
              <li>- 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</li>
              <li>- 경찰청 사이버수사국 (police.go.kr / 국번없이 182)</li>
            </ul>
          </dd>
        </dl>

        <dl>
          <dt>9. 개정 전 고지 의무</dt>
          <dd>
            <ul>
              <li>이 개인정보 처리방침은 2023년 7월 1일부터 적용됩니다.</li>
              <li>
                본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 개정
                최소 7일 전에 ‘공지사항’을 통해 사전 공지를 할 것입니다. 다만,
                수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 이용자
                권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하며, 필요
                시 이용자 동의를 다시 받을 수도 있습니다.
              </li>
            </ul>
          </dd>
        </dl>
      </main>
    </Layout>
  );
}
