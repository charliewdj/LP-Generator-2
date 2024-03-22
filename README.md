# LP Generator 2
1. index.html file を開いてください

2. それぞれの箇所にTextや画像(Link を記入する方法)を変更できます
  ![ページの見た目](https://github.com/elith-co-jp/prj-paper-summary-bot/blob/main/arXiv_RSS_Summary/Images/EC2-2.png "sudo su 押した後の表示")

3. スケジューリングを設定するために、crontab -e を実行してください
   ![crontab スケジューリングの設定用ファイル](https://github.com/elith-co-jp/prj-paper-summary-bot/blob/main/arXiv_RSS_Summary/Images/EC2-3.png "crontab スケジューリングの設定用ファイル")

   # Node Cron の解説
    ```
    ┌──────────── minute 0: At 0 minutes past the hour.
    │ ┌────────── hour 1: At 1 AM UTC, which corresponds to 10:00 AM JST.
    │ │ ┌──────── day of month *: On any day of the month.
    │ │ │ ┌────── month *: In any month.
    │ │ │ │ ┌──── day of week 1: On Monday (月曜日は 1 として表現される).
    │ │ │ │ │
    │ │ │ │ │
    * * * * * cd /home/ec2-user && python3 main.py >> /home/ec2-user/cron.log 2>&1
    0 1 * * 1 cd /home/ec2-user && python3 main.py >> /home/ec2-user/cron.log 2>&1
    ```
    上記のように設定したら、毎週月曜日 10:00時日本時間に自動的に実行される。スクリプト実行のログは Root Folder に cat cron.log を実行したら閲覧できる。

4. crontab スケジューリングの設定用ファイルを exit したい場合、esc (長押し) + ":" + "w" + "q" を入力し、enter でファイルを閉じる。
   ![crontab スケジューリングの設定用ファイル](https://github.com/elith-co-jp/prj-paper-summary-bot/blob/main/arXiv_RSS_Summary/Images/EC2-4.png "crontab スケジューリングの設定用ファイル")
   

