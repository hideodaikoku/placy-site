import React from "react";

import contentStyle from "../styles/content.module.scss";
import explanationStyle from "../styles/explanation.module.scss";

const ProfileSection = () => {
  return (
    <div className={explanationStyle.container}>
      <div className={contentStyle.content}>
        <table>
          <tbody>
            <tr>
              <td className={contentStyle.left}>会社名</td>
              <td className={contentStyle.right}>株式会社Placy</td>
            </tr>
            <tr>
              <td className={contentStyle.left}>代表取締役</td>
              <td className={contentStyle.right}>鈴木 綜真</td>
            </tr>
            <tr>
              <td className={contentStyle.left}>事業内容</td>
              <td className={contentStyle.right}>
                コンピューターのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販売、保守、リーズ、賃貸及び輸出入ならびにこれらに関するコンサルティング業務
              </td>
            </tr>
            <tr>
              <td className={contentStyle.left}>設立</td>
              <td className={contentStyle.right}>2019年 5月</td>
            </tr>
            <tr>
              <td className={contentStyle.left}>資本金</td>
              <td className={contentStyle.right}>950万円（資本準備金含む)</td>
            </tr>
            <tr>
              <td className={contentStyle.left}>所在地</td>
              <td className={contentStyle.right}>
              〒153-0041 東京都目黒区駒場１丁目２８−５ Accumn 407
              </td>
            </tr>
            <tr>
              <td className={contentStyle.left}>取引銀行</td>
              <td className={contentStyle.right}>
                三井住友銀行、みずほ銀行、西武信金、きらぼし銀行
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileSection;
