import { IAction } from '../../../types/action';
import { QUERY_GRAPH_ERROR, QUERY_GRAPH_RUNNING, QUERY_GRAPH_SUCCESS } from '../redux-constants';

export function isLoadingData(state = {}, action: IAction): any {
  switch (action.type) {
    case QUERY_GRAPH_RUNNING:
      if (action.response) {
        return action.response;
      }
    case QUERY_GRAPH_SUCCESS:
      return false;
    case QUERY_GRAPH_ERROR:
      return false;
    default:
      return state;
  }
}