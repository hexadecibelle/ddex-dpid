// import { mod37_36 } from 'cdigit';

const { Mod37_36 } = require( '@konfirm/iso7064' );

const DPid = {
	validate: function( inp:string ):boolean {
		return Mod37_36.validate( inp );
	}
};

export default DPid;
