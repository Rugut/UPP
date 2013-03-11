Ext.define('Справочники.КодыОКПД.ФормаЗагрузкаИзФайла',
	{
	extend: 'Ext.window.Window',
	height: 146,width: 320,
	iconCls: 'bogus',
	title: 'Загрузка справочника ОКПД из CSV файла',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:121px;width:320px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКФайлу',
			style: 'position:absolute;left:8px;top:33px;width:304px;height:19px;',
		},
	]
});