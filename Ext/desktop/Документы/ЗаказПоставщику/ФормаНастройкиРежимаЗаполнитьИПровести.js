Ext.define('Документы.ЗаказПоставщику.ФормаНастройкиРежимаЗаполнитьИПровести',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:304px;height:148px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите документы и настройте их порядок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:123px;width:304px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Заполнить и провести',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:30px;width:288px;height:85px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});