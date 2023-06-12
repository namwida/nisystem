import { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Location.module.css";

const { kakao } = window;

export default function AboutLocation() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="찾아오시는 길"
        destription="엔아이시스템의 주소와 연락처 정보를 안내해 드립니다."
      />
      <main className={styles.about_location}>
        <section className="inner">
          <div className={styles.text_box}>
            <dl>
              <dt>주소</dt>
              <dd>
                경기도 의왕시 성고개로 53, A동 805호 (포일동, 에이스청계타워)
              </dd>
            </dl>
            <dl>
              <dt>전화</dt>
              <dd>1666-2869</dd>
            </dl>
            <dl>
              <dt>팩스</dt>
              <dd>050-7088-2588</dd>
            </dl>
            <dl>
              <dt>이메일</dt>
              <dd>sales@nisystem.co.kr</dd>
            </dl>
          </div>
          <KakaoMap />
        </section>
      </main>
    </Layout>
  );
}

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.39775114524815, 126.98731730903314), //지도의 중심좌표.
      level: 4, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    map.setZoomable(false);
    // 우측 상단 컨트롤바 생성
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // 클릭한 위치의 위도는 37.39775114524815 이고, 경도는 126.98731730903314 입니다

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      37.39775114524815,
      126.98731730903314
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return <div id="map" className={styles.map_image}></div>;
}
