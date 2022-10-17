import { CheckboxProps } from './Checkbox.types';

import styles from './Checkbox.module.scss';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  isShowLabel, label
}) => {

  return (
    <div style={{display: 'flex'}}>
      <input type="checkbox" className={styles.custom_checkbox} id="happy" name="happy" value="yes"/>
      <label htmlFor="happy"></label>
      {isShowLabel && <div>{label}</div>}
    </div>
  );
};

CheckboxComponent.displayName = 'Checkbox';