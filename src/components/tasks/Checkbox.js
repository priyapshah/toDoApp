import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase';

export const Checkbox = ({ id, taskDesc }) => {
  const deleteTask = () => {
    firebase.firestore().collection('tasks').doc(id).delete();
  };

  return (
    <div
      className="checkbox-holder"
      onClick={() => deleteTask()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') deleteTask();
      }}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};
