// https://stackoverflow.com/questions/29655256/proj4js-can-you-convert-a-lat-long-to-utm-without-a-zone
// js: proj4js v2.5.0

const utmzone_from_lon = (lon_deg)=> {
    //get utm-zone from longitude degrees
    return parseInt(((lon_deg+180)/6)%60)+1;
  };

const getZoneDef = (lon_deg)=> {
    //get UTM projection definition from longitude
    const utm_zone = utmzone_from_lon(lon_deg);
    const zdef = `+proj=utm +zone=${utm_zone} +datum=WGS84 +units=m +no_defs`;
    return zdef;
	};

const proj4_Defs = (lon_input)=>{
	proj4.defs([
  [
    "EPSG:4326",
    "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"
  ],
  ["EPSG:AUTO", getZoneDef(lon_input)]]);
  
	};

const lltoUTM = (ll)=>{
	var lat = ll[0], lon = ll[1];
	const en_m = proj4("EPSG:4326", "EPSG:AUTO", [lon, lat]);
  	const e0 = en_m[0].toFixed(0); //easting
  	const n0 = en_m[1].toFixed(0); //northing
	return [e0,n0];
	};

const uTMtoll = (en_m) =>{
	var r = proj4("EPSG:AUTO", "EPSG:4326", en_m); 
	return [r[1],r[0]]; // [lat,lng]
};

// example
proj4_Defs(lng);
var en = lltoUTM([lat,lng]);
var ll = uTMtoll([e,n]);
