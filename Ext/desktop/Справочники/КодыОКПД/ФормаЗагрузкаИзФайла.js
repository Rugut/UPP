Ext.define('Справочники.КодыОКПД.ФормаЗагрузкаИзФайла',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:320px;height:146px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка справочника ОКПД из CSV файла',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:121px;width:320px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ТекстПутьКФайлу',
			text: 'Путь к файлу :',
			style: 'position:absolute;left:8px;top:9px;width:304px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКФайлу',
			style: 'position:absolute;left:8px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'СтрокаИнфо',
			text: '',
			style: 'position:absolute;left:8px;top:57px;width:304px;height:19px;',
		},
	]
});