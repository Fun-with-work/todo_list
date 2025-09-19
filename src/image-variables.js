import businessman from './images/businessman.jpg';
import checklistEdited from './images/checklist-edited.jpg';

const businessmanImage = document.createElement('img');
businessmanImage.src = businessman;
businessmanImage.alt = 'Businessman Image';
businessmanImage.id = 'businessman-image';

const checklistEditedImage = document.createElement('img');
checklistEditedImage.src = checklistEdited;
checklistEditedImage.alt = 'Checklist Edited Image';
checklistEditedImage.id = 'checklist-edited-image';

export { businessmanImage, checklistEditedImage };

