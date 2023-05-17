import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./Customer.module.css";

export default function Customer() {
  return (
    <Layout>
      <PageHeader
        title="고객문의"
        destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야에서 여러 기업들과 Partnership을 맺고 사업을 진행하고 있습니다."
      />
      <main className={`${styles.customer} inner`}>
        <section>
          <p className={styles.description}>
            아래의 내용을 작성해주시면 3일 내에 전화 또는 이메일로
            답변드리겠습니다.
          </p>
          <form>
            <div className={styles.input_box}>
              <label htmlFor="">문의유형</label>
              <select name="" id="">
                <option value="제품">제품</option>
                <option value="컨설팅">컨설팅</option>
                <option value="MSP">MSP</option>
                <option value="컨설팅">견적서</option>
                <option value="컨설팅">A/S</option>
                <option value="채용">채용</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="company">회사명</label>
              <input type="text" name="company" id="company" required />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="pic">담당자명</label>
              <input type="text" name="pic" id="pic" required />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="phone">연락처</label>
              <input type="tel" name="phone" id="phone" required />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="email">이메일</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="contents">문의 내용</label>
              <textarea
                name="contents"
                id="contents"
                cols="30"
                rows="6"
                required
              ></textarea>
            </div>
            <div className={styles.agree_box}>
              <label>개인정보 수집 및 이용에 동의</label>
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
              <input type="submit" value="문의 등록하기" />
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
}
