// import { mod37_36 } from 'cdigit';

const { Mod37_36 } = require( '@konfirm/iso7064' );

const DPid = {
	sanitise: function( inp:string ) {
		let sanitised:string = inp.split( '-' ).join( '' );
		sanitised = sanitised.toUpperCase();

		return sanitised;
	},
	validate: function( inp:string ):boolean {
		inp = this.sanitise( inp );

		if( inp.length !== 18 ) {
			throw new Error( 'Input is incorrect length. Expects 18 characters.' );
		}

		return Mod37_36.validate( inp );
	}
};

export default DPid;
