Ext.define('Справочники.КодыОКПД.ФормаЗагрузкаИзФайла',
	{
	extend: 'Ext.window.Window',
	height: 146,width: 320,
	iconCls: 'bogus',
	title: 'Загрузка справочника ОКПД из CSV файла',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКФайлу',
			style: 'position:absolute;left:8px;top:33px;width:304px;height:19px;',
		},
	]
});