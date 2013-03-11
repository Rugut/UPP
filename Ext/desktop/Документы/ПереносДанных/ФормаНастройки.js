Ext.define('Документы.ПереносДанных.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 365,width: 365,
	iconCls: 'bogus',
	title: 'Настройка состава регистров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:340px;width:365px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:324px;',
			height: 324,width: 349,
			items:
			[
				{
					title:'Сведений',
				},
				{
					title:'Накопления',
				},
				{
					title:'Расчета',
				},
			]
		},
	]
});