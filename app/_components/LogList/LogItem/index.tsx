"use client";

import LogDetail from "@/app/healthlog/_components/LogDetail";
import starIconSrc from "@/public/icons/important-star-icon.svg?url";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as styles from "./style.css";

export type TasksType = {
  logId: number;
  isComplete: boolean;
  isImportant: boolean;
  taskName: string;
  time: string;
  manager: {
    id: string;
    nickname: string;
    isCurrentUser: boolean;
  };
};

interface LogItemProps {
  taskItem: TasksType;
  onDelete: () => void;
}

const SWIPE_BUTTON_WIDTH = 132;

const LogItem: React.FC<LogItemProps> = ({ taskItem, onDelete }: LogItemProps) => {
  const [isChecked, setIsChecked] = useState(taskItem.isComplete);
  const [showDetails, setShowDetails] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const checkboxId = `checkbox-${taskItem.logId}`;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setIsChecked(event.target.checked);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isSwiping) {
      const currentX = event.touches[0].clientX;
      const swipingDistance = startX - currentX;

      if (swipingDistance > 0) {
        setCurrentTranslate(Math.max(-SWIPE_BUTTON_WIDTH, -swipingDistance));
      } else if (swipingDistance < 0 && currentTranslate !== 0) {
        setCurrentTranslate(Math.min(0, -swipingDistance + currentTranslate));
      }
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsSwiping(false);
    const endX = event.changedTouches[0].clientX;
    const swipedDistance = startX - endX;
    if (swipedDistance > 0) {
      setCurrentTranslate(-SWIPE_BUTTON_WIDTH);
    } else {
      setCurrentTranslate(0);
    }
  };

  const toggleDetails = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    if (target.id !== checkboxId && !target.closest(`label[for="${checkboxId}"]`)) {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div className={styles.swipeArea}>
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className={styles.container}>
        <li className={styles.listContainer} onClick={toggleDetails}>
          <div className={styles.leftPart}>
            <label htmlFor={checkboxId} className={styles.checkBox}>
              <input type="checkbox" id={checkboxId} checked={isChecked} onChange={handleCheckboxChange} className={styles.inputCheckbox} />
              <span className={styles.checkBoxOn}></span>
            </label>

            <div className={styles.taskAndTimeBox}>
              <div className={styles.checkStar}>
                {taskItem.isImportant && <Image src={starIconSrc} width={17} height={17} alt="중요 표시" />}
                <span className={styles.taskName}>{taskItem.taskName}</span>
              </div>
              <span className={styles.time}>{taskItem.time}</span>
            </div>
          </div>
          <div className={styles.manager}>
            <span>{taskItem.manager.nickname}</span>
          </div>
        </li>
        {currentTranslate === -SWIPE_BUTTON_WIDTH && (
          <div className={styles.swipeButtons}>
            <Link href="/healthlog/edit">
              <button
                className={styles.editButton}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                수정
              </button>
            </Link>
            <button
              className={styles.deleteButton}
              onTouchEnd={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              삭제
            </button>
          </div>
        )}
      </div>

      {showDetails && (
        <div className={styles.logDetailContainer}>
          <LogDetail />
        </div>
      )}
    </div>
  );
};

export default LogItem;
