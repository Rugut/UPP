Ext.define('Обработки.ФормированиеЦен.ФормаВыбораТипаЦен',
	{
	extend: 'Ext.window.Window',
	height: 232,width: 263,
	iconCls: 'bogus',
	title: 'Форма выбора типа цен',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:247px;height:24px;',
			items:
			[
				{
					text:'КнопкаДобавить',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаВыборатьВсе',
				},
				{
					text:'КнопкаСнятьВсе',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:207px;width:263px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:247px;height:145px;',
			height: 145,width: 247,
			columns:
			[
				{
					text:'ТипЦенСкидокСтрока',
				},
			]
		},
	]
});