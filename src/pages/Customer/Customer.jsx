import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./Customer.module.css";

export default function Customer() {
  return (
    <Layout>
      <PageHeader
        gnbname="customer"
        title="고객문의"
        destription="엔아이시스템은 고객님의 말씀에 귀를 기울이며."
        destription_add="언제나 편안한 서비스를 제공하기 위하여 최선을 다하겠습니다."
      />
      <main className={`${styles.customer} inner`}>
        <section>
          <p className={styles.description}>
            연락처와 함께 문의를 남겨주세요. 영업일 기준 3일 내에 답변 드리겠습니다.
          </p>
          <form>
            <div className={styles.input_box}>
              <label htmlFor="type">
                <span>*</span>문의유형
              </label>
              <select className={styles.type} name="type" id="type">
                <option value="">문의 유형을 선택해주세요</option>
                <option value="컨설팅">견적요청</option>
                <option value="제품">제품</option>
                <option value="MSP">MSP</option>
                <option value="컨설팅">컨설팅</option>
                <option value="채용">채용</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="company">
                <span>*</span>회사명
              </label>
              <input type="text" name="company" id="company" required placeholder="회사명을 입력하세요"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="pic">
                <span>*</span>담당자명
              </label>
              <input type="text" name="pic" id="pic" required placeholder="예) 홍길동"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="phone">
                <span>*</span>연락처
              </label>
              <input type="tel" name="phone" id="phone" required placeholder="예) 010-0000-0000"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="email">
                <span>*</span>이메일
              </label>
              <input type="email" name="email" id="email" required placeholder="이메일 주소를 입력하세요"/>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="contents">
                <span>*</span>문의 내용
              </label>
              <textarea
                name="contents"
                id="contents"
                cols="30"
                rows="6"
                required
                placeholder="문의내용을 입력하세요"
              ></textarea>
            </div>
            <div className={styles.agree_box}>
              <label>
                <span>*</span>개인정보 수집 및 이용에 동의
              </label>
              <div>
                <dl>
                  <dt>개인정보 수집 항목</dt>
                  <dd>회사명, 담당자명, 연락처, 이메일</dd>
                </dl>
                <dl>
                  <dt>개인정보의 이용 목적</dt>
                  <dd>문의에 따른 원활한 의사소통 및 경로 확보</dd>
                </dl>
                <dl>
                  <dt>개인정보 보유 기간</dt>
                  <dd>신청 후 90일 보관 후 파기</dd>
                </dl>
                <dl>
                  <dt>개인정보 수집 및 이용에 거부할 권리</dt>
                  <dd>
                    정보주체는 개인정보 수집 및 이용에 거부할 권리가 있으나,
                    이는 제안을 위한 최소한의 개인정보 수집으로써 이를 거부하실
                    경우 등록하실 수 없습니다.
                  </dd>
                </dl>
              </div>
              <div className={styles.checkbox_box}>
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">
                  개인정보의 수집 및 이용에 동의합니다.
                </label>
              </div>
            </div>
            <div className={styles.button_box}>
              <input type="submit" value="제출" />
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
}
