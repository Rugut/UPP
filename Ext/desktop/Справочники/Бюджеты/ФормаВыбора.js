Ext.define('Справочники.Бюджеты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 594,
	iconCls: 'bogus',
	title: 'Бюджеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:412px;height:279px;',
			height: 279,width: 412,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидБюджета',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:279px;',
			height: 279,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});