import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./Customer.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Customer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState({
    type: "",
    companyName: "",
    personName: "",
    phone: "",
    email: "",
    content: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("서브밋 성공");
    setIsLoading(true);

    let form = new FormData();
    form.append("문의유형", value.type);
    form.append("회사명", value.companyName);
    form.append("담당자명", value.personName);
    form.append("연락처", value.phone);
    form.append("이메일", value.email);
    form.append("문의내용", value.content);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbw7nBnwvHVWh4xwnNceu4rISEcCC-kwnmjF2g3YgjfajQBVLrn3WMcmxe_OHVl1ujRG/exec",
        form
      )
      .then((res) => {
        console.log("성공");
        window.alert("문의 내용이 제출되었습니다. 감사합니다.");
        window.location.reload();
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log("실패");
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout>
      <PageHeader
        gnbname="customer"
        title="고객문의"
        destription="고객님의 말씀에 귀를 기울이며 최선을 다하겠습니다."
      />
      <main className={`${styles.customer} inner`}>
        <section>
          <p className={styles.description}>
            연락처와 함께 문의를 남겨주세요. 영업일 기준 3일 내에 답변
            드리겠습니다.
          </p>
          <form onSubmit={onSubmit}>
            <div className={styles.input_box}>
              <label htmlFor="type">
                <span>*</span>문의유형
              </label>
              <select
                className={styles.type}
                name="type"
                id="type"
                required
                value={value.type}
                onChange={onChange}
              >
                <option
                  value=""
                  disabled
                  defaultValue="문의 유형을 선택해주세요"
                >
                  문의 유형을 선택해주세요
                </option>
                <option value="컨설팅">견적요청</option>
                <option value="제품">제품</option>
                <option value="MSP">MSP</option>
                <option value="컨설팅">컨설팅</option>
                <option value="채용">채용</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className={styles.input_box}>
              <label htmlFor="companyName">
                <span>*</span>회사명
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                required
                placeholder="회사명을 입력하세요"
                value={value.companyName}
                onChange={onChange}
              />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="personName">
                <span>*</span>담당자명
              </label>
              <input
                type="text"
                name="personName"
                id="personName"
                required
                placeholder="예) 홍길동"
                value={value.personName}
                onChange={onChange}
              />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="phone">
                <span>*</span>연락처
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="예) 010-0000-0000"
                value={value.phone}
                onChange={onChange}
              />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="email">
                <span>*</span>이메일
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="이메일 주소를 입력하세요"
                value={value.email}
                onChange={onChange}
              />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="content">
                <span>*</span>문의 내용
              </label>
              <textarea
                name="content"
                id="content"
                cols="30"
                rows="6"
                required
                placeholder="문의내용을 입력하세요"
                value={value.content}
                onChange={onChange}
              ></textarea>
            </div>
            <div className={styles.agree_box}>
              <label>
                <span>*</span>개인정보 수집 및 이용에 동의
              </label>
              <div className={styles.discription}>
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
                  <Link to="/terms/3" className={styles.more_btn} target="_blank"> (자세히 보기)</Link>
                </label>
              </div>
            </div>
            <div className={styles.button_box}>
              {isLoading && <p className={styles.loading_msg}>제출중입니다.</p>}
              {isError && (
                <p className={styles.error_msg}>제출에 실패하였습니다.</p>
              )}
              <input type="submit" value="제출" />
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
}
