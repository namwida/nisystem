import Layout from "../../../components/Layout/Layout";
import TermsNav from "../TermsNav/TermsNav";
import styles from "./Privacy2.module.css";

export default function Privacy2() {
  return (
    <Layout>
      <main className={`${styles.terms_privacy2} inner`}>
        <TermsNav />
        <p>
          주식회사 엔아이시스템은 이용자의 온라인 문의에 대한 답변등의 각 경우에
          대하여 아래와 같이 귀하의 동의를 받아 개인정보를 수집•이용하고자
          합니다.
        </p>
        <dl>
          <dt>1. 개인정보 수집•이용 목적</dt>
          <dd>- 이용자 식별, 문의 응답 및 상담</dd>
        </dl>
        <dl>
          <dt>2. 수집하려는 개인정보 항목</dt>
          <dd>- 이름, 연락처, 이메일, 회사명</dd>
        </dl>
        <dl>
          <dt>3. 개인정보 보유 및 이용기간</dt>
          <dd>- 처리 완료 후 3년</dd>
        </dl>
        <dl>
          <dt>4. 부동의시 불이익</dt>
          <dd>
            - 귀하의 위 개인정보 수집•이용에 동의하지 않을 수 있습니다. 다만
            동의하지 않으실 경우에는 서비스 이용이 제한됩니다.
          </dd>
        </dl>
      </main>
    </Layout>
  );
}
