/**
 * Fee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  		type: 'string',
  		size: 20
  	},
  	registration: {
  		type: 'number',
  		size: 20
  	},
  	tution: {
  		type: 'number',
  		size: 20
  	},
  	other: {
  		type: 'number',
  		size: 20
  	}
  }
};

