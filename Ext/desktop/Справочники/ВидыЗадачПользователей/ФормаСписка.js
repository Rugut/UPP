Ext.define('Справочники.ВидыЗадачПользователей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 424,
	iconCls: 'bogus',
	title: 'Виды задач пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:408px;height:259px;',
			height: 259,width: 408,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Использование',
				},
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:424px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель3',
				},
			]
		},
	]
});