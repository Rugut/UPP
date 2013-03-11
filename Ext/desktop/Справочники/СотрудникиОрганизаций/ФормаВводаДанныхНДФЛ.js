Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	height: 389,width: 552,
	iconCls: 'bogus',
	title: 'Стандартные вычеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:552px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаписатьИЗакрыть',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:536px;height:348px;',
			height: 348,width: 536,
			items:
			[
				{
					title:'Вычеты',
				},
				{
					title:'Статус',
				},
				{
					title:'Доходы',
				},
			]
		},
	]
});