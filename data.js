/*
	Data collected from bluehills.org/weatherdata (2018)
*/
var data = [
	/////January/////
	{"Day":"01/1/2018","Temperature":1.9,"Max":10.2,"Min":-4.6},
	{"Day":"01/2/2018","Temperature":6.8,"Max":15.1,"Min":-1.5},
	{"Day":"01/3/2018","Temperature":18.8,"Max":27.1,"Min":10.8},
	{"Day":"01/4/2018","Temperature":23.4,"Max":27.2,"Min":18.7},
	{"Day":"01/5/2018","Temperature":9.4,"Max":19.0,"Min":2.2},
	{"Day":"01/6/2018","Temperature":3.5,"Max":8.5,"Min":-2.7},
	{"Day":"01/7/2018","Temperature":2.7,"Max":13.5,"Min":-7.5},
	{"Day":"01/8/2018","Temperature":25.9,"Max":33.0,"Min":13.5},
	{"Day":"01/9/2018","Temperature":31.2,"Max":35.5,"Min":25.0},
	{"Day":"01/10/2018","Temperature":28.0,"Max":35.1,"Min":20.4},
	{"Day":"01/11/2018","Temperature":42.5,"Max":49.9,"Min":31.7},
	{"Day":"01/12/2018","Temperature":53.7,"Max":60.0,"Min":44.6},
	{"Day":"01/13/2018","Temperature":40.3,"Max":60.0,"Min":16.9},
	{"Day":"01/14/2018","Temperature":14.9,"Max":20.6,"Min":10.6},
	{"Day":"01/15/2018","Temperature":13.6,"Max":17.8,"Min":10.3},
	{"Day":"01/16/2018","Temperature":25.5,"Max":31.6,"Min":17.6},
	{"Day":"01/17/2018","Temperature":30.5,"Max":32.2,"Min":28.5},
	{"Day":"01/18/2018","Temperature":22.5,"Max":28.6,"Min":15.5},
	{"Day":"01/19/2018","Temperature":24.7,"Max":33.0,"Min":16.7},
	{"Day":"01/20/2018","Temperature":37.3,"Max":44.4,"Min":26.6},
	{"Day":"01/21/2018","Temperature":39.0,"Max":46.8,"Min":33.5},
	{"Day":"01/22/2018","Temperature":35.4,"Max":37.1,"Min":34.0},
	{"Day":"01/23/2018","Temperature":41.1,"Max":54.5,"Min":32.5},
	{"Day":"01/24/2018","Temperature":32.9,"Max":37.3,"Min":22.4},
	{"Day":"01/25/2018","Temperature":21.0,"Max":28.1,"Min":16.9},
	{"Day":"01/26/2018","Temperature":22.5,"Max":31.2,"Min":14.5},
	{"Day":"01/27/2018","Temperature":39.9,"Max":51.2,"Min":24.1},
	{"Day":"01/28/2018","Temperature":44.5,"Max":49.7,"Min":38.4},
	{"Day":"01/29/2018","Temperature":32.6,"Max":38.9,"Min":25.2},
	{"Day":"01/30/2018","Temperature":22.2,"Max":27.0,"Min":17.8},
	{"Day":"01/31/2018","Temperature":20.6,"Max":28.4,"Min":11.5},

	/////February/////
	{"Day":"02/1/2018","Temperature":34.8,"Max":44.3,"Min":26.7},
	{"Day":"02/2/2018","Temperature":23.0,"Max":34.2,"Min":7.3},
	{"Day":"02/3/2018","Temperature":15.1,"Max":25.0,"Min":3.8},
	{"Day":"02/4/2018","Temperature":34.5,"Max":44.9,"Min":22.0},
	{"Day":"02/5/2018","Temperature":33.5,"Max":45.8,"Min":19.2},
	{"Day":"02/6/2018","Temperature":23.8,"Max":30.7,"Min":17.3},
	{"Day":"02/7/2018","Temperature":28.4,"Max":42.0,"Min":20.7},
	{"Day":"02/8/2018","Temperature":24.0,"Max":31.0,"Min":19.3},
	{"Day":"02/9/2018","Temperature":24.0,"Max":30.5,"Min":16.2},
	{"Day":"02/10/2018","Temperature":41.9,"Max":51.3,"Min":27.5},
	{"Day":"02/11/2018","Temperature":40.5,"Max":46.4,"Min":36.1},
	{"Day":"02/12/2018","Temperature":38.9,"Max":53.0,"Min":26.8},
	{"Day":"02/13/2018","Temperature":25.8,"Max":30.3,"Min":20.9},
	{"Day":"02/14/2018","Temperature":35.4,"Max":45.7,"Min":24.6},
	{"Day":"02/15/2018","Temperature":42.1,"Max":47.7,"Min":35.5},
	{"Day":"02/16/2018","Temperature":45.0,"Max":50.0,"Min":31.1},
	{"Day":"02/17/2018","Temperature":29.7,"Max":37.0,"Min":23.1},
	{"Day":"02/18/2018","Temperature":33.0,"Max":41.3,"Min":28.8},
	{"Day":"02/19/2018","Temperature":39.5,"Max":49.1,"Min":29.3},
	{"Day":"02/20/2018","Temperature":55.8,"Max":68.4,"Min":48.1},
	{"Day":"02/21/2018","Temperature":59.4,"Max":69.5,"Min":50.2},
	{"Day":"02/22/2018","Temperature":37.3,"Max":52.7,"Min":29.3},
	{"Day":"02/23/2018","Temperature":33.8,"Max":40.4,"Min":28.0},
	{"Day":"02/24/2018","Temperature":43.8,"Max":53.4,"Min":34.6},
	{"Day":"02/25/2018","Temperature":36.8,"Max":39.0,"Min":33.4},
	{"Day":"02/26/2018","Temperature":39.8,"Max":48.1,"Min":34.8},
	{"Day":"02/27/2018","Temperature":40.1,"Max":50.9,"Min":29.2},
	{"Day":"02/28/2018","Temperature":46.0,"Max":58.2,"Min":37.2},

	/////March/////
	{"Day":"03/1/2018","Temperature":45.6,"Max":60.1,"Min":36.9},
	{"Day":"03/2/2018","Temperature":35.6,"Max":39.1,"Min":31.9},
	{"Day":"03/3/2018","Temperature":37.0,"Max":39.9,"Min":33.9},
	{"Day":"03/4/2018","Temperature":35.6,"Max":38.4,"Min":33.5},
	{"Day":"03/5/2018","Temperature":33.5,"Max":40.6,"Min":28.9},
	{"Day":"03/6/2018","Temperature":31.8,"Max":33.1,"Min":29.0},
	{"Day":"03/7/2018","Temperature":32.8,"Max":35.1,"Min":31.1},
	{"Day":"03/8/2018","Temperature":31.0,"Max":34.0,"Min":28.3},
	{"Day":"03/9/2018","Temperature":29.4,"Max":35.9,"Min":24.3},
	{"Day":"03/10/2018","Temperature":31.6,"Max":36.6,"Min":27.8},
	{"Day":"03/11/2018","Temperature":33.4,"Max":42.1,"Min":25.7},
	{"Day":"03/12/2018","Temperature":33.5,"Max":38.4,"Min":26.6},
	{"Day":"03/13/2018","Temperature":28.9,"Max":35.0,"Min":26.1},
	{"Day":"03/14/2018","Temperature":29.7,"Max":36.3,"Min":24.3},
	{"Day":"03/15/2018","Temperature":32.9,"Max":39.2,"Min":28.8},
	{"Day":"03/16/2018","Temperature":28.7,"Max":35.0,"Min":22.5},
	{"Day":"03/17/2018","Temperature":26.2,"Max":38.9,"Min":15.5},
	{"Day":"03/18/2018","Temperature":20.3,"Max":30.9,"Min":10.4},
	{"Day":"03/19/2018","Temperature":24.1,"Max":34.6,"Min":13.3},
	{"Day":"03/20/2018","Temperature":29.3,"Max":39.6,"Min":18.7},
	{"Day":"03/21/2018","Temperature":32.0,"Max":35.3,"Min":30.4},
	{"Day":"03/22/2018","Temperature":33.1,"Max":38.5,"Min":29.9},
	{"Day":"03/23/2018","Temperature":36.5,"Max":44.2,"Min":28.6},
	{"Day":"03/24/2018","Temperature":37.0,"Max":44.3,"Min":32.6},
	{"Day":"03/25/2018","Temperature":31.4,"Max":35.9,"Min":28.3},
	{"Day":"03/26/2018","Temperature":31.9,"Max":38.4,"Min":26.9},
	{"Day":"03/27/2018","Temperature":34.2,"Max":43.8,"Min":25.6},
	{"Day":"03/28/2018","Temperature":42.8,"Max":54.9,"Min":33.5},
	{"Day":"03/29/2018","Temperature":45.8,"Max":54.6,"Min":38.8},
	{"Day":"03/30/2018","Temperature":50.3,"Max":60.8,"Min":41.7},
	{"Day":"03/31/2018","Temperature":42.9,"Max":56.2,"Min":35.0},

	/////April/////
	{"Day":"04/1/2018","Temperature":44.4,"Max":58.0,"Min":32.6},
	{"Day":"04/2/2018","Temperature":32.8,"Max":38.4,"Min":29.0},
	{"Day":"04/3/2018","Temperature":36.1,"Max":46.8,"Min":30.1},
	{"Day":"04/4/2018","Temperature":43.5,"Max":54.4,"Min":35.6},
	{"Day":"04/5/2018","Temperature":32.8,"Max":40.3,"Min":26.4},
	{"Day":"04/6/2018","Temperature":32.8,"Max":40.6,"Min":25.3},
	{"Day":"04/7/2018","Temperature":37.2,"Max":45.4,"Min":30.8},
	{"Day":"04/8/2018","Temperature":33.8,"Max":41.7,"Min":28.5},
	{"Day":"04/9/2018","Temperature":34.5,"Max":44.8,"Min":24.3},
	{"Day":"04/10/2018","Temperature":35.0,"Max":38.8,"Min":30.5},
	{"Day":"04/11/2018","Temperature":36.6,"Max":47.3,"Min":28.9},
	{"Day":"04/12/2018","Temperature":44.8,"Max":60.9,"Min":32.8},
	{"Day":"04/13/2018","Temperature":56.3,"Max":65.0,"Min":46.1},
	{"Day":"04/14/2018","Temperature":43.8,"Max":50.9,"Min":35.4},
	{"Day":"04/15/2018","Temperature":32.1,"Max":35.6,"Min":30.0},
	{"Day":"04/16/2018","Temperature":42.5,"Max":55.0,"Min":32.2},
	{"Day":"04/17/2018","Temperature":42.1,"Max":47.9,"Min":35.2},
	{"Day":"04/18/2018","Temperature":40.9,"Max":52.3,"Min":31.6},
	{"Day":"04/19/2018","Temperature":37.0,"Max":40.4,"Min":33.7},
	{"Day":"04/20/2018","Temperature":40.5,"Max":51.9,"Min":31.1},
	{"Day":"04/21/2018","Temperature":46.1,"Max":59.0,"Min":32.4},
	{"Day":"04/22/2018","Temperature":49.6,"Max":61.4,"Min":35.7},
	{"Day":"04/23/2018","Temperature":50.7,"Max":62.0,"Min":40.5},
	{"Day":"04/24/2018","Temperature":52.5,"Max":66.9,"Min":39.6},
	{"Day":"04/25/2018","Temperature":52.4,"Max":57.4,"Min":47.5},
	{"Day":"04/26/2018","Temperature":56.8,"Max":66.7,"Min":47.5},
	{"Day":"04/27/2018","Temperature":50.0,"Max":60.1,"Min":45.2},
	{"Day":"04/28/2018","Temperature":58.1,"Max":73.4,"Min":45.9},
	{"Day":"04/29/2018","Temperature":49.5,"Max":58.6,"Min":38.2},
	{"Day":"04/30/2018","Temperature":41.4,"Max":45.9,"Min":36.1},

	/////May/////
	{"Day":"05/1/2018","Temperature":53.4,"Max":65.9,"Min":39.5},
	{"Day":"05/2/2018","Temperature":73.8,"Max":88.2,"Min":58.4},
	{"Day":"05/3/2018","Temperature":74.1,"Max":89.7,"Min":67.2},
	{"Day":"05/4/2018","Temperature":72.1,"Max":81.8,"Min":66.4},
	{"Day":"05/5/2018","Temperature":64.5,"Max":73.2,"Min":54.4},
	{"Day":"05/6/2018","Temperature":57.5,"Max":65.2,"Min":48.3},
	{"Day":"05/7/2018","Temperature":55.0,"Max":62.8,"Min":48.7},
	{"Day":"05/8/2018","Temperature":59.4,"Max":73.0,"Min":46.9},
	{"Day":"05/9/2018","Temperature":59.1,"Max":74.6,"Min":48.3},
	{"Day":"05/10/2018","Temperature":56.6,"Max":73.0,"Min":47.8},
	{"Day":"05/11/2018","Temperature":59.7,"Max":69.8,"Min":50.2},
	{"Day":"05/12/2018","Temperature":48.3,"Max":50.6,"Min":47.0},
	{"Day":"05/13/2018","Temperature":49.6,"Max":58.1,"Min":45.8},
	{"Day":"05/14/2018","Temperature":57.5,"Max":73.9,"Min":46.0},
	{"Day":"05/15/2018","Temperature":63.4,"Max":83.4,"Min":54.5},
	{"Day":"05/16/2018","Temperature":52.5,"Max":56.9,"Min":48.6},
	{"Day":"05/17/2018","Temperature":60.5,"Max":72.4,"Min":50.5},
	{"Day":"05/18/2018","Temperature":51.7,"Max":61.2,"Min":43.2},
	{"Day":"05/19/2018","Temperature":50.0,"Max":56.7,"Min":42.9},
	{"Day":"05/20/2018","Temperature":65.4,"Max":76.9,"Min":54.8},
	{"Day":"05/21/2018","Temperature":63.6,"Max":77.5,"Min":51.7},
	{"Day":"05/22/2018","Temperature":59.5,"Max":68.1,"Min":50.8},
	{"Day":"05/23/2018","Temperature":65.4,"Max":82.3,"Min":50.8},
	{"Day":"05/24/2018","Temperature":59.3,"Max":73.8,"Min":50.3},
	{"Day":"05/25/2018","Temperature":70.1,"Max":85.6,"Min":50.0},
	{"Day":"05/26/2018","Temperature":73.6,"Max":87.6,"Min":60.4},
	{"Day":"05/27/2018","Temperature":51.0,"Max":60.5,"Min":47.3},
	{"Day":"05/28/2018","Temperature":53.5,"Max":59.9,"Min":47.8},
	{"Day":"05/29/2018","Temperature":70.7,"Max":85.1,"Min":54.9},
	{"Day":"05/30/2018","Temperature":65.9,"Max":72.1,"Min":58.6},
	{"Day":"05/31/2018","Temperature":66.9,"Max":80.7,"Min":54.1},

	/////June/////
	{"Day":"06/1/2018","Temperature":70.2,"Max":77.9,"Min":62.5},
	{"Day":"06/2/2018","Temperature":69.5,"Max":79.3,"Min":54.1},
	{"Day":"06/3/2018","Temperature":53.1,"Max":59.1,"Min":44.7},
	{"Day":"06/4/2018","Temperature":48.5,"Max":51.6,"Min":45.0},
	{"Day":"06/5/2018","Temperature":53.8,"Max":63.6,"Min":47.0},
	{"Day":"06/6/2018","Temperature":55.5,"Max":65.9,"Min":50.0},
	{"Day":"06/7/2018","Temperature":58.9,"Max":69.4,"Min":50.4},
	{"Day":"06/8/2018","Temperature":66.4,"Max":78.8,"Min":51.5},
	{"Day":"06/9/2018","Temperature":69.1,"Max":78.7,"Min":57.5},
	{"Day":"06/10/2018","Temperature":64.3,"Max":71.9,"Min":56.2},
	{"Day":"06/11/2018","Temperature":59.2,"Max":67.4,"Min":51.2},
	{"Day":"06/12/2018","Temperature":62.9,"Max":76.6,"Min":49.1},
	{"Day":"06/13/2018","Temperature":65.2,"Max":73.1,"Min":55.2},
	{"Day":"06/14/2018","Temperature":68.1,"Max":77.1,"Min":61.6},
	{"Day":"06/15/2018","Temperature":58.5,"Max":68.4,"Min":52.5},
	{"Day":"06/16/2018","Temperature":69.4,"Max":83.2,"Min":52.9},
	{"Day":"06/17/2018","Temperature":73.8,"Max":85.7,"Min":63.1},
	{"Day":"06/18/2018","Temperature":73.5,"Max":86.5,"Min":63.4},
	{"Day":"06/19/2018","Temperature":73.2,"Max":81.1,"Min":63.2},
	{"Day":"06/20/2018","Temperature":69.7,"Max":81.1,"Min":57.9},
	{"Day":"06/21/2018","Temperature":68.8,"Max":80.8,"Min":61.4},
	{"Day":"06/22/2018","Temperature":64.4,"Max":74.9,"Min":55.5},
	{"Day":"06/23/2018","Temperature":58.4,"Max":64.5,"Min":55.8},
	{"Day":"06/24/2018","Temperature":66.0,"Max":78.3,"Min":55.4},
	{"Day":"06/25/2018","Temperature":63.5,"Max":69.4,"Min":55.5},
	{"Day":"06/26/2018","Temperature":65.5,"Max":78.7,"Min":52.9},
	{"Day":"06/27/2018","Temperature":66.4,"Max":77.5,"Min":58.7},
	{"Day":"06/28/2018","Temperature":68.1,"Max":70.3,"Min":63.0},
	{"Day":"06/29/2018","Temperature":76.4,"Max":87.1,"Min":66.3},
	{"Day":"06/30/2018","Temperature":79.4,"Max":90.5,"Min":68.6},

	/////July/////
	{"Day":"07/1/2018","Temperature":80.6,"Max":93.8,"Min":71.5},
	{"Day":"07/2/2018","Temperature":77.9,"Max":87.7,"Min":68.3},
	{"Day":"07/3/2018","Temperature":80.9,"Max":94.8,"Min":69.1},
	{"Day":"07/4/2018","Temperature":82.0,"Max":89.5,"Min":73.0},
	{"Day":"07/5/2018","Temperature":80.4,"Max":90.5,"Min":72.3},
	{"Day":"07/6/2018","Temperature":73.4,"Max":79.4,"Min":59.1},
	{"Day":"07/7/2018","Temperature":65.6,"Max":78.2,"Min":53.2},
	{"Day":"07/8/2018","Temperature":69.7,"Max":83.3,"Min":56.4},
	{"Day":"07/9/2018","Temperature":73.4,"Max":87.7,"Min":59.6},
	{"Day":"07/10/2018","Temperature":77.9,"Max":91.0,"Min":63.2},
	{"Day":"07/11/2018","Temperature":66.9,"Max":73.0,"Min":60.9},
	{"Day":"07/12/2018","Temperature":67.8,"Max":77.1,"Min":57.3},
	{"Day":"07/13/2018","Temperature":70.0,"Max":83.9,"Min":61.1},
	{"Day":"07/14/2018","Temperature":69.8,"Max":80.6,"Min":61.3},
	{"Day":"07/15/2018","Temperature":73.3,"Max":84.1,"Min":65.4},
	{"Day":"07/16/2018","Temperature":75.5,"Max":83.3,"Min":66.7},
	{"Day":"07/17/2018","Temperature":73.8,"Max":88.3,"Min":67.5},
	{"Day":"07/18/2018","Temperature":71.5,"Max":81.2,"Min":61.9},
	{"Day":"07/19/2018","Temperature":68.5,"Max":80.5,"Min":56.2},
	{"Day":"07/20/2018","Temperature":70.9,"Max":82.1,"Min":61.7},
	{"Day":"07/21/2018","Temperature":66.7,"Max":76.9,"Min":58.9},
	{"Day":"07/22/2018","Temperature":69.8,"Max":75.7,"Min":61.6},
	{"Day":"07/23/2018","Temperature":75.1,"Max":82.2,"Min":71.3},
	{"Day":"07/24/2018","Temperature":76.8,"Max":85.0,"Min":71.7},
	{"Day":"07/25/2018","Temperature":74.8,"Max":82.1,"Min":71.2},
	{"Day":"07/26/2018","Temperature":73.2,"Max":83.2,"Min":69.1},
	{"Day":"07/27/2018","Temperature":76.8,"Max":87.3,"Min":69.1},
	{"Day":"07/28/2018","Temperature":76.6,"Max":87.0,"Min":71.1},
	{"Day":"07/29/2018","Temperature":73.5,"Max":81.5,"Min":66.5},
	{"Day":"07/30/2018","Temperature":71.9,"Max":81.7,"Min":63.8},
	{"Day":"07/31/2018","Temperature":74.2,"Max":86.2,"Min":63.4},

	/////August/////
	{"Day":"08/1/2018","Temperature":73.6,"Max":82.2,"Min":65.5},
	{"Day":"08/2/2018","Temperature":80.8,"Max":91.8,"Min":74.0},
	{"Day":"08/3/2018","Temperature":78.9,"Max":88.2,"Min":73.3},
	{"Day":"08/4/2018","Temperature":72.5,"Max":81.5,"Min":67.8},
	{"Day":"08/5/2018","Temperature":77.5,"Max":89.1,"Min":66.1},
	{"Day":"08/6/2018","Temperature":81.0,"Max":91.6,"Min":70.7},
	{"Day":"08/7/2018","Temperature":80.6,"Max":91.3,"Min":72.8},
	{"Day":"08/8/2018","Temperature":76.3,"Max":88.3,"Min":71.3},
	{"Day":"08/9/2018","Temperature":76.5,"Max":86.0,"Min":69.9},
	{"Day":"08/10/2018","Temperature":74.8,"Max":84.9,"Min":66.3},
	{"Day":"08/11/2018","Temperature":67.8,"Max":70.8,"Min":65.5},
	{"Day":"08/12/2018","Temperature":67.9,"Max":72.2,"Min":65.7},
	{"Day":"08/13/2018","Temperature":66.9,"Max":69.3,"Min":64.6},
	{"Day":"08/14/2018","Temperature":74.3,"Max":83.6,"Min":69.2},
	{"Day":"08/15/2018","Temperature":75.3,"Max":85.6,"Min":68.3},
	{"Day":"08/16/2018","Temperature":77.7,"Max":87.2,"Min":69.6},
	{"Day":"08/17/2018","Temperature":75.6,"Max":83.8,"Min":66.9},
	{"Day":"08/18/2018","Temperature":72.6,"Max":83.0,"Min":62.9},
	{"Day":"08/19/2018","Temperature":64.4,"Max":67.5,"Min":62.2},
	{"Day":"08/20/2018","Temperature":65.6,"Max":72.4,"Min":61.4},
	{"Day":"08/21/2018","Temperature":64.0,"Max":69.1,"Min":61.4},
	{"Day":"08/22/2018","Temperature":69.0,"Max":82.0,"Min":62.0},
	{"Day":"08/23/2018","Temperature":66.1,"Max":76.2,"Min":60.3},
	{"Day":"08/24/2018","Temperature":69.5,"Max":82.0,"Min":58.3},
	{"Day":"08/25/2018","Temperature":69.9,"Max":80.6,"Min":61.2},
	{"Day":"08/26/2018","Temperature":69.9,"Max":81.2,"Min":59.4},
	{"Day":"08/27/2018","Temperature":76.6,"Max":86.1,"Min":67.2},
	{"Day":"08/28/2018","Temperature":81.7,"Max":92.3,"Min":71.9},
	{"Day":"08/29/2018","Temperature":83.5,"Max":93.5,"Min":75.3},
	{"Day":"08/30/2018","Temperature":76.6,"Max":88.3,"Min":67.1},
	{"Day":"08/31/2018","Temperature":65.2,"Max":71.6,"Min":58.4},

	/////September/////
	{"Day":"09/1/2018","Temperature":65.7,"Max":74.5,"Min":57.9},
	{"Day":"09/2/2018","Temperature":71.2,"Max":83.3,"Min":61.4},
	{"Day":"09/3/2018","Temperature":79.1,"Max":91.8,"Min":67.6},
	{"Day":"09/4/2018","Temperature":78.1,"Max":87.3,"Min":70.4},
	{"Day":"09/5/2018","Temperature":75.3,"Max":88.9,"Min":67.4},
	{"Day":"09/6/2018","Temperature":76.5,"Max":92.0,"Min":69.6},
	{"Day":"09/7/2018","Temperature":65.2,"Max":69.6,"Min":62.5},
	{"Day":"09/8/2018","Temperature":61.1,"Max":67.6,"Min":53.8},
	{"Day":"09/9/2018","Temperature":56.2,"Max":60.2,"Min":53.4},
	{"Day":"09/10/2018","Temperature":59.2,"Max":62.2,"Min":56.0},
	{"Day":"09/11/2018","Temperature":67.8,"Max":75.7,"Min":60.8},
	{"Day":"09/12/2018","Temperature":64.5,"Max":68.9,"Min":62.5},
	{"Day":"09/13/2018","Temperature":64.2,"Max":68.5,"Min":61.7},
	{"Day":"09/14/2018","Temperature":66.8,"Max":75.3,"Min":61.4},
	{"Day":"09/15/2018","Temperature":65.6,"Max":76.4,"Min":61.9},
	{"Day":"09/16/2018","Temperature":71.8,"Max":84.5,"Min":61.5},
	{"Day":"09/17/2018","Temperature":70.6,"Max":81.6,"Min":64.5},
	{"Day":"09/18/2018","Temperature":69.0,"Max":73.1,"Min":66.5},
	{"Day":"09/19/2018","Temperature":60.3,"Max":66.9,"Min":56.8},
	{"Day":"09/20/2018","Temperature":58.7,"Max":62.6,"Min":56.0},
	{"Day":"09/21/2018","Temperature":62.1,"Max":70.1,"Min":55.3},
	{"Day":"09/22/2018","Temperature":62.9,"Max":70.1,"Min":51.6},
	{"Day":"09/23/2018","Temperature":53.5,"Max":60.1,"Min":47.2},
	{"Day":"09/24/2018","Temperature":52.0,"Max":55.1,"Min":50.1},
	{"Day":"09/25/2018","Temperature":58.7,"Max":68.4,"Min":50.6},
	{"Day":"09/26/2018","Temperature":72.1,"Max":79.2,"Min":66.1},
	{"Day":"09/27/2018","Temperature":60.6,"Max":66.3,"Min":55.8},
	{"Day":"09/28/2018","Temperature":54.6,"Max":57.2,"Min":51.9},
	{"Day":"09/29/2018","Temperature":58.6,"Max":71.2,"Min":49.7},
	{"Day":"09/30/2018","Temperature":57.2,"Max":66.8,"Min":48.0},

	/////October/////
	{"Day":"10/1/2018","Temperature":57.0,"Max":65.2,"Min":53.6},
	{"Day":"10/2/2018","Temperature":57.5,"Max":64.3,"Min":53.4},
	{"Day":"10/3/2018","Temperature":56.1,"Max":61.6,"Min":52.0},
	{"Day":"10/4/2018","Temperature":62.1,"Max":68.9,"Min":55.2},
	{"Day":"10/5/2018","Temperature":53.9,"Max":64.1,"Min":46.8},
	{"Day":"10/6/2018","Temperature":55.1,"Max":64.0,"Min":44.9},
	{"Day":"10/7/2018","Temperature":62.2,"Max":75.4,"Min":55.5},
	{"Day":"10/8/2018","Temperature":53.8,"Max":55.6,"Min":52.6},
	{"Day":"10/9/2018","Temperature":65.9,"Max":75.1,"Min":54.6},
	{"Day":"10/10/2018","Temperature":71.4,"Max":81.5,"Min":65.2},
	{"Day":"10/11/2018","Temperature":62.3,"Max":69.0,"Min":55.7},
	{"Day":"10/12/2018","Temperature":53.3,"Max":59.5,"Min":44.8},
	{"Day":"10/13/2018","Temperature":44.2,"Max":48.4,"Min":40.1},
	{"Day":"10/14/2018","Temperature":45.8,"Max":55.4,"Min":37.4},
	{"Day":"10/15/2018","Temperature":54.5,"Max":66.1,"Min":43.8},
	{"Day":"10/16/2018","Temperature":48.1,"Max":55.6,"Min":41.0},
	{"Day":"10/17/2018","Temperature":46.2,"Max":59.4,"Min":39.1},
	{"Day":"10/18/2018","Temperature":38.0,"Max":44.9,"Min":32.9},
	{"Day":"10/19/2018","Temperature":45.6,"Max":59.3,"Min":31.5},
	{"Day":"10/20/2018","Temperature":53.5,"Max":61.5,"Min":45.1},
	{"Day":"10/21/2018","Temperature":40.4,"Max":48.0,"Min":30.5},
	{"Day":"10/22/2018","Temperature":38.3,"Max":49.5,"Min":27.3},
	{"Day":"10/23/2018","Temperature":45.6,"Max":51.9,"Min":40.6},
	{"Day":"10/24/2018","Temperature":40.5,"Max":44.9,"Min":34.8},
	{"Day":"10/25/2018","Temperature":37.9,"Max":47.4,"Min":31.9},
	{"Day":"10/26/2018","Temperature":36.2,"Max":44.9,"Min":27.3},
	{"Day":"10/27/2018","Temperature":44.8,"Max":48.3,"Min":37.7},
	{"Day":"10/28/2018","Temperature":44.8,"Max":51.0,"Min":39.8},
	{"Day":"10/29/2018","Temperature":46.9,"Max":54.7,"Min":39.7},
	{"Day":"10/30/2018","Temperature":39.2,"Max":45.1,"Min":34.0},
	{"Day":"10/31/2018","Temperature":44.6,"Max":54.5,"Min":32.1},

	/////November/////
	{"Day":"11/1/2018","Temperature":54.4,"Max":65.2,"Min":49.2},
	{"Day":"11/2/2018","Temperature":61.5,"Max":64.8,"Min":50.7},
	{"Day":"11/3/2018","Temperature":52.3,"Max":64.1,"Min":42.2},
	{"Day":"11/4/2018","Temperature":43.7,"Max":52.3,"Min":37.1},
	{"Day":"11/5/2018","Temperature":45.6,"Max":49.4,"Min":39.9},
	{"Day":"11/6/2018","Temperature":50.4,"Max":57.6,"Min":45.4},
	{"Day":"11/7/2018","Temperature":53.7,"Max":60.0,"Min":49.0},
	{"Day":"11/8/2018","Temperature":43.5,"Max":52.5,"Min":36.2},
	{"Day":"11/9/2018","Temperature":41.8,"Max":48.5,"Min":33.8},
	{"Day":"11/10/2018","Temperature":40.3,"Max":46.2,"Min":31.5},
	{"Day":"11/11/2018","Temperature":34.4,"Max":42.4,"Min":29.5},
	{"Day":"11/12/2018","Temperature":37.7,"Max":47.0,"Min":27.4},
	{"Day":"11/13/2018","Temperature":43.6,"Max":51.7,"Min":36.7},
	{"Day":"11/14/2018","Temperature":29.3,"Max":36.7,"Min":20.5},
	{"Day":"11/15/2018","Temperature":24.8,"Max":31.2,"Min":18.8},
	{"Day":"11/16/2018","Temperature":33.9,"Max":40.5,"Min":30.1},
	{"Day":"11/17/2018","Temperature":38.0,"Max":44.2,"Min":33.5},
	{"Day":"11/18/2018","Temperature":35.2,"Max":39.2,"Min":30.3},
	{"Day":"11/19/2018","Temperature":35.2,"Max":36.7,"Min":33.5},
	{"Day":"11/20/2018","Temperature":34.3,"Max":38.2,"Min":29.8},
	{"Day":"11/21/2018","Temperature":30.4,"Max":38.2,"Min":20.4},
	{"Day":"11/22/2018","Temperature":13.5,"Max":20.4,"Min":9.5},
	{"Day":"11/23/2018","Temperature":19.3,"Max":29.0,"Min":9.4},
	{"Day":"11/24/2018","Temperature":34.7,"Max":43.2,"Min":24.2},
	{"Day":"11/25/2018","Temperature":41.5,"Max":44.0,"Min":39.7},
	{"Day":"11/26/2018","Temperature":41.0,"Max":43.1,"Min":38.9},
	{"Day":"11/27/2018","Temperature":38.8,"Max":44.9,"Min":32.9},
	{"Day":"11/28/2018","Temperature":34.7,"Max":39.4,"Min":30.7},
	{"Day":"11/29/2018","Temperature":36.2,"Max":42.0,"Min":30.4},
	{"Day":"11/30/2018","Temperature":32.7,"Max":38.9,"Min":27.4},

	/////December/////
	{"Day":"12/1/2018","Temperature":34.2,"Max":41.0,"Min":28.3},
	{"Day":"12/2/2018","Temperature":43.6,"Max":51.9,"Min":36.1},
	{"Day":"12/3/2018","Temperature":46.8,"Max":53.9,"Min":38.1},
	{"Day":"12/4/2018","Temperature":31.1,"Max":38.6,"Min":22.4},
	{"Day":"12/5/2018","Temperature":25.6,"Max":32.4,"Min":18.8},
	{"Day":"12/6/2018","Temperature":30.3,"Max":37.0,"Min":23.6},
	{"Day":"12/7/2018","Temperature":29.5,"Max":36.1,"Min":20.2},
	{"Day":"12/8/2018","Temperature":20.1,"Max":25.9,"Min":14.6},
	{"Day":"12/9/2018","Temperature":24.3,"Max":32.6,"Min":16.9},
	{"Day":"12/10/2018","Temperature":27.3,"Max":35.4,"Min":21.9},
	{"Day":"12/11/2018","Temperature":26.6,"Max":34.8,"Min":17.3},
	{"Day":"12/12/2018","Temperature":26.9,"Max":34.6,"Min":18.0},
	{"Day":"12/13/2018","Temperature":23.9,"Max":30.5,"Min":15.7},
	{"Day":"12/14/2018","Temperature":36.7,"Max":44.8,"Min":27.4},
	{"Day":"12/15/2018","Temperature":44.0,"Max":48.6,"Min":37.5},
	{"Day":"12/16/2018","Temperature":38.6,"Max":40.2,"Min":37.0},
	{"Day":"12/17/2018","Temperature":34.3,"Max":37.1,"Min":31.7},
	{"Day":"12/18/2018","Temperature":24.6,"Max":34.1,"Min":19.7},
	{"Day":"12/19/2018","Temperature":27.4,"Max":37.5,"Min":16.9},
	{"Day":"12/20/2018","Temperature":38.4,"Max":46.3,"Min":29.7},
	{"Day":"12/21/2018","Temperature":54.8,"Max":61.8,"Min":42.7},
	{"Day":"12/22/2018","Temperature":43.6,"Max":54.8,"Min":31.6},
	{"Day":"12/23/2018","Temperature":30.8,"Max":37.6,"Min":26.9},
	{"Day":"12/24/2018","Temperature":30.3,"Max":34.0,"Min":27.2},
	{"Day":"12/25/2018","Temperature":29.0,"Max":34.7,"Min":21.9},
	{"Day":"12/26/2018","Temperature":27.5,"Max":36.0,"Min":19.6},
	{"Day":"12/27/2018","Temperature":29.3,"Max":33.4,"Min":25.9},
	{"Day":"12/28/2018","Temperature":42.9,"Max":54.1,"Min":28.7},
	{"Day":"12/29/2018","Temperature":44.0,"Max":53.7,"Min":29.7},
	{"Day":"12/30/2018","Temperature":26.8,"Max":32.7,"Min":22.0},
	{"Day":"12/31/2018","Temperature":34.4,"Max":40.8,"Min":28.3},
];
	